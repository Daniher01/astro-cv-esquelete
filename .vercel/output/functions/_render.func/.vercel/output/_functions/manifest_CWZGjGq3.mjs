import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_BWF5RzfA.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/about/about","isIndex":false,"type":"page","pattern":"^\\/about\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}],[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/about.md","pathname":"/about/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/blogs/home-mmouzo","isIndex":false,"type":"page","pattern":"^\\/blogs\\/home-mmouzo\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}],[{"content":"home-mmouzo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blogs/home-mmouzo.md","pathname":"/blogs/home-mmouzo","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/certificates/01-big-data","isIndex":false,"type":"page","pattern":"^\\/certificates\\/01-big-data\\/?$","segments":[[{"content":"certificates","dynamic":false,"spread":false}],[{"content":"01-big-data","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificates/01-big-data.md","pathname":"/certificates/01-big-data","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/certificates/02-visualizacion-2d","isIndex":false,"type":"page","pattern":"^\\/certificates\\/02-visualizacion-2d\\/?$","segments":[[{"content":"certificates","dynamic":false,"spread":false}],[{"content":"02-visualizacion-2d","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificates/02-visualizacion-2d.md","pathname":"/certificates/02-visualizacion-2d","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/certificates/03-django","isIndex":false,"type":"page","pattern":"^\\/certificates\\/03-django\\/?$","segments":[[{"content":"certificates","dynamic":false,"spread":false}],[{"content":"03-django","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificates/03-django.md","pathname":"/certificates/03-django","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/certificates/04-git","isIndex":false,"type":"page","pattern":"^\\/certificates\\/04-git\\/?$","segments":[[{"content":"certificates","dynamic":false,"spread":false}],[{"content":"04-git","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificates/04-git.md","pathname":"/certificates/04-git","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/certificates/05-api-rest","isIndex":false,"type":"page","pattern":"^\\/certificates\\/05-api-rest\\/?$","segments":[[{"content":"certificates","dynamic":false,"spread":false}],[{"content":"05-api-rest","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificates/05-api-rest.md","pathname":"/certificates/05-api-rest","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/contact/email","isIndex":false,"type":"page","pattern":"^\\/contact\\/email\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}],[{"content":"email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/email.md","pathname":"/contact/email","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/contact/github","isIndex":false,"type":"page","pattern":"^\\/contact\\/github\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}],[{"content":"github","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/github.md","pathname":"/contact/github","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/contact/linkedin","isIndex":false,"type":"page","pattern":"^\\/contact\\/linkedin\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}],[{"content":"linkedin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/linkedin.md","pathname":"/contact/linkedin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/projects/01-datazul","isIndex":false,"type":"page","pattern":"^\\/projects\\/01-datazul\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"01-datazul","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/01-datazul.md","pathname":"/projects/01-datazul","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/projects/02-api-ris-tuimagen","isIndex":false,"type":"page","pattern":"^\\/projects\\/02-api-ris-tuimagen\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"02-api-ris-tuimagen","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/02-api-ris-tuimagen.md","pathname":"/projects/02-api-ris-tuimagen","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/projects/03-cec-maule","isIndex":false,"type":"page","pattern":"^\\/projects\\/03-cec-maule\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"03-cec-maule","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/03-cec-maule.md","pathname":"/projects/03-cec-maule","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/projects/04-chat-websocket","isIndex":false,"type":"page","pattern":"^\\/projects\\/04-chat-websocket\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"04-chat-websocket","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/04-chat-websocket.md","pathname":"/projects/04-chat-websocket","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/projects/05-tuimagenlab","isIndex":false,"type":"page","pattern":"^\\/projects\\/05-tuimagenlab\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"05-tuimagenlab","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/05-tuimagenlab.md","pathname":"/projects/05-tuimagenlab","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/projects/06-resumen-estadistico","isIndex":false,"type":"page","pattern":"^\\/projects\\/06-resumen-estadistico\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"06-resumen-estadistico","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/06-resumen-estadistico.md","pathname":"/projects/06-resumen-estadistico","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/projects/07-scouting-jugadores","isIndex":false,"type":"page","pattern":"^\\/projects\\/07-scouting-jugadores\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"07-scouting-jugadores","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/07-scouting-jugadores.md","pathname":"/projects/07-scouting-jugadores","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/projects/08-analisis-equipos","isIndex":false,"type":"page","pattern":"^\\/projects\\/08-analisis-equipos\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"08-analisis-equipos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/08-analisis-equipos.md","pathname":"/projects/08-analisis-equipos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/projects/09-gestionfilas","isIndex":false,"type":"page","pattern":"^\\/projects\\/09-gestionfilas\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"09-gestionfilas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/09-gestionfilas.md","pathname":"/projects/09-gestionfilas","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/projects/10-modelo-recomendacion-jugadores","isIndex":false,"type":"page","pattern":"^\\/projects\\/10-modelo-recomendacion-jugadores\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"10-modelo-recomendacion-jugadores","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/10-modelo-recomendacion-jugadores.md","pathname":"/projects/10-modelo-recomendacion-jugadores","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/projects/11-sistematuimagen","isIndex":false,"type":"page","pattern":"^\\/projects\\/11-sistematuimagen\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"11-sistematuimagen","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/11-sistematuimagen.md","pathname":"/projects/11-sistematuimagen","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/projects/12-serviciospostales","isIndex":false,"type":"page","pattern":"^\\/projects\\/12-serviciospostales\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"12-serviciospostales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/12-serviciospostales.md","pathname":"/projects/12-serviciospostales","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/studies/studie1","isIndex":false,"type":"page","pattern":"^\\/studies\\/studie1\\/?$","segments":[[{"content":"studies","dynamic":false,"spread":false}],[{"content":"studie1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/studies/studie1.md","pathname":"/studies/studie1","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/works/work1","isIndex":false,"type":"page","pattern":"^\\/works\\/work1\\/?$","segments":[[{"content":"works","dynamic":false,"spread":false}],[{"content":"work1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/works/work1.md","pathname":"/works/work1","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/works/work2","isIndex":false,"type":"page","pattern":"^\\/works\\/work2\\/?$","segments":[[{"content":"works","dynamic":false,"spread":false}],[{"content":"work2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/works/work2.md","pathname":"/works/work2","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/works/work3","isIndex":false,"type":"page","pattern":"^\\/works\\/work3\\/?$","segments":[[{"content":"works","dynamic":false,"spread":false}],[{"content":"work3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/works/work3.md","pathname":"/works/work3","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"var u={exports:{}};(function(r,g){function l(){var c=document.querySelector(\"[data-toggle-theme]\"),t=c?c.getAttribute(\"data-key\"):null;(function(e=localStorage.getItem(t||\"theme\")){localStorage.getItem(t||\"theme\")&&(document.documentElement.setAttribute(\"data-theme\",e),c&&[...document.querySelectorAll(\"[data-toggle-theme]\")].forEach(a=>{a.classList.add(c.getAttribute(\"data-act-class\"))}))})(),c&&[...document.querySelectorAll(\"[data-toggle-theme]\")].forEach(e=>{e.addEventListener(\"click\",function(){var a=e.getAttribute(\"data-toggle-theme\");if(a){var o=a.split(\",\");document.documentElement.getAttribute(\"data-theme\")==o[0]?o.length==1?(document.documentElement.removeAttribute(\"data-theme\"),localStorage.removeItem(t||\"theme\")):(document.documentElement.setAttribute(\"data-theme\",o[1]),localStorage.setItem(t||\"theme\",o[1])):(document.documentElement.setAttribute(\"data-theme\",o[0]),localStorage.setItem(t||\"theme\",o[0]))}[...document.querySelectorAll(\"[data-toggle-theme]\")].forEach(s=>{s.classList.toggle(this.getAttribute(\"data-act-class\"))})})})}function m(){var c=document.querySelector(\"[data-set-theme='']\"),t=c?c.getAttribute(\"data-key\"):null;(function(e=localStorage.getItem(t||\"theme\")){if(e!=null&&e!=\"\")if(localStorage.getItem(t||\"theme\")&&localStorage.getItem(t||\"theme\")!=\"\"){document.documentElement.setAttribute(\"data-theme\",e);var a=document.querySelector(\"[data-set-theme='\"+e.toString()+\"']\");a&&([...document.querySelectorAll(\"[data-set-theme]\")].forEach(o=>{o.classList.remove(o.getAttribute(\"data-act-class\"))}),a.getAttribute(\"data-act-class\")&&a.classList.add(a.getAttribute(\"data-act-class\")))}else{var a=document.querySelector(\"[data-set-theme='']\");a.getAttribute(\"data-act-class\")&&a.classList.add(a.getAttribute(\"data-act-class\"))}})(),[...document.querySelectorAll(\"[data-set-theme]\")].forEach(e=>{e.addEventListener(\"click\",function(){document.documentElement.setAttribute(\"data-theme\",this.getAttribute(\"data-set-theme\")),localStorage.setItem(t||\"theme\",document.documentElement.getAttribute(\"data-theme\")),[...document.querySelectorAll(\"[data-set-theme]\")].forEach(a=>{a.classList.remove(a.getAttribute(\"data-act-class\"))}),e.getAttribute(\"data-act-class\")&&e.classList.add(e.getAttribute(\"data-act-class\"))})})}function d(){var c=document.querySelector(\"select[data-choose-theme]\"),t=c?c.getAttribute(\"data-key\"):null;(function(e=localStorage.getItem(t||\"theme\")){if(localStorage.getItem(t||\"theme\")){document.documentElement.setAttribute(\"data-theme\",e);var a=document.querySelector(\"select[data-choose-theme] [value='\"+e.toString()+\"']\");a&&[...document.querySelectorAll(\"select[data-choose-theme] [value='\"+e.toString()+\"']\")].forEach(o=>{o.selected=!0})}})(),c&&[...document.querySelectorAll(\"select[data-choose-theme]\")].forEach(e=>{e.addEventListener(\"change\",function(){document.documentElement.setAttribute(\"data-theme\",this.value),localStorage.setItem(t||\"theme\",document.documentElement.getAttribute(\"data-theme\")),[...document.querySelectorAll(\"select[data-choose-theme] [value='\"+localStorage.getItem(t||\"theme\")+\"']\")].forEach(a=>{a.selected=!0})})})}function n(c=!0){c===!0?document.addEventListener(\"DOMContentLoaded\",function(t){l(),d(),m()}):(l(),d(),m())}r.exports={themeChange:n}})(u);var i=u.exports;i.themeChange();\n"}],"styles":[{"type":"inline","content":"@font-face{font-family:DM Sans Variable;font-style:normal;font-display:swap;font-weight:100 1000;src:url(/_astro/dm-sans-latin-ext-wght-normal.D1bw2c55.woff2) format(\"woff2-variations\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:DM Sans Variable;font-style:normal;font-display:swap;font-weight:100 1000;src:url(/_astro/dm-sans-latin-wght-normal.DeBecvsH.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@media (max-width: 768px){.flex-col[data-astro-cid-3ef6ksr2].justify-end{display:flex;flex-direction:column;justify-content:center;align-items:center}}body{font-family:DM Sans Variable,sans-serif}@media only screen and (max-width: 480px){*{font-size:12px}}.overflow-y-scroll::-webkit-scrollbar{width:3px}.overflow-y-scroll::-webkit-scrollbar-thumb{background-color:oklch(var(--s))}.overflow-y-scroll{scrollbar-width:1px}@media (max-width: 768px){.container{flex-direction:column}}@media (min-width: 768px){.container{display:flex;flex-wrap:wrap}}\n"},{"type":"external","src":"/_astro/about.DuDXvEv5.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/asus/Documents/Proyectos/astro-cv-esquelete/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/certificates/01-big-data.md":"chunks/pages/01-big-data_Cvn7TQO7.mjs","/src/pages/projects/01-datazul.md":"chunks/pages/01-datazul_D6HE6429.mjs","/src/pages/projects/02-api-ris-tuimagen.md":"chunks/pages/02-api-ris-tuimagen_gXUrCvWE.mjs","/src/pages/certificates/02-visualizacion-2d.md":"chunks/pages/02-visualizacion-2d_DIq-Bk79.mjs","/src/pages/projects/03-cec-maule.md":"chunks/pages/03-cec-maule_CfvrNZqG.mjs","/src/pages/certificates/03-django.md":"chunks/pages/03-django_xIdar4QX.mjs","/src/pages/projects/04-chat-websocket.md":"chunks/pages/04-chat-websocket_CxR0zWjM.mjs","/src/pages/certificates/04-git.md":"chunks/pages/04-git_D_5pvlKU.mjs","/src/pages/certificates/05-api-rest.md":"chunks/pages/05-api-rest_Ba0urJse.mjs","/src/pages/projects/05-tuimagenlab.md":"chunks/pages/05-tuimagenlab_CS9XBWeT.mjs","/src/pages/projects/06-resumen-estadistico.md":"chunks/pages/06-resumen-estadistico_B7mbQOgy.mjs","/src/pages/projects/07-scouting-jugadores.md":"chunks/pages/07-scouting-jugadores_BJk5zZR6.mjs","/src/pages/projects/08-analisis-equipos.md":"chunks/pages/08-analisis-equipos_LblHNc_8.mjs","/src/pages/projects/09-gestionfilas.md":"chunks/pages/09-gestionfilas_0Bafv_FY.mjs","/src/pages/projects/10-modelo-recomendacion-jugadores.md":"chunks/pages/10-modelo-recomendacion-jugadores_C8Sqa40C.mjs","/src/pages/projects/11-sistematuimagen.md":"chunks/pages/11-sistematuimagen_BHg6SgB4.mjs","/src/pages/projects/12-serviciospostales.md":"chunks/pages/12-serviciospostales_zMciYBZA.mjs","/src/pages/about/about.md":"chunks/pages/about_DbPsgx5E.mjs","/src/pages/contact/email.md":"chunks/pages/email_Boqw5k0o.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_DW7j1XLd.mjs","/src/pages/contact/github.md":"chunks/pages/github_BAz8I4vV.mjs","/src/pages/blogs/home-mmouzo.md":"chunks/pages/home-mmouzo_DuWkqJyF.mjs","/src/pages/index.astro":"chunks/pages/index_Dpr071qn.mjs","/src/pages/contact/linkedin.md":"chunks/pages/linkedin_6u6TaL0I.mjs","/src/pages/studies/studie1.md":"chunks/pages/studie1_CRTUsDLl.mjs","/src/pages/works/work1.md":"chunks/pages/work1_B9B8zG1q.mjs","/src/pages/works/work2.md":"chunks/pages/work2_Cm406oUr.mjs","/src/pages/works/work3.md":"chunks/pages/work3_C8OH10Rz.mjs","\u0000@astrojs-manifest":"manifest_CWZGjGq3.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_BTUdbYPQ.mjs","\u0000@astro-page:src/pages/about/about@_@md":"chunks/about_Dty2CaTc.mjs","\u0000@astro-page:src/pages/blogs/home-mmouzo@_@md":"chunks/home-mmouzo_CgkLaSGH.mjs","\u0000@astro-page:src/pages/certificates/01-big-data@_@md":"chunks/01-big-data_Bent6CMa.mjs","\u0000@astro-page:src/pages/certificates/02-visualizacion-2d@_@md":"chunks/02-visualizacion-2d_CtR1-kLq.mjs","\u0000@astro-page:src/pages/certificates/03-django@_@md":"chunks/03-django_D8sCDORM.mjs","\u0000@astro-page:src/pages/certificates/04-git@_@md":"chunks/04-git_Cwp-V8jM.mjs","\u0000@astro-page:src/pages/certificates/05-api-rest@_@md":"chunks/05-api-rest_DLwSjQAY.mjs","\u0000@astro-page:src/pages/contact/email@_@md":"chunks/email_Ov5gVI2g.mjs","\u0000@astro-page:src/pages/contact/github@_@md":"chunks/github_3XXMhIlt.mjs","\u0000@astro-page:src/pages/contact/linkedin@_@md":"chunks/linkedin_rIk4fg3w.mjs","\u0000@astro-page:src/pages/projects/01-datazul@_@md":"chunks/01-datazul_cPtVZP9v.mjs","\u0000@astro-page:src/pages/projects/02-api-ris-tuimagen@_@md":"chunks/02-api-ris-tuimagen_CSZqCmVf.mjs","\u0000@astro-page:src/pages/projects/03-cec-maule@_@md":"chunks/03-cec-maule_BqSI7MAQ.mjs","\u0000@astro-page:src/pages/projects/04-chat-websocket@_@md":"chunks/04-chat-websocket_DhryGkC4.mjs","\u0000@astro-page:src/pages/projects/05-tuimagenlab@_@md":"chunks/05-tuimagenlab_DuAXrJC6.mjs","\u0000@astro-page:src/pages/projects/06-resumen-estadistico@_@md":"chunks/06-resumen-estadistico_BzATQJZR.mjs","\u0000@astro-page:src/pages/projects/07-scouting-jugadores@_@md":"chunks/07-scouting-jugadores_C1_9SwBk.mjs","\u0000@astro-page:src/pages/projects/08-analisis-equipos@_@md":"chunks/08-analisis-equipos_byaoBVy_.mjs","\u0000@astro-page:src/pages/projects/09-gestionfilas@_@md":"chunks/09-gestionfilas_D98BgKNv.mjs","\u0000@astro-page:src/pages/projects/10-modelo-recomendacion-jugadores@_@md":"chunks/10-modelo-recomendacion-jugadores__Z_-jd-d.mjs","\u0000@astro-page:src/pages/projects/11-sistematuimagen@_@md":"chunks/11-sistematuimagen_BjTPx3On.mjs","\u0000@astro-page:src/pages/projects/12-serviciospostales@_@md":"chunks/12-serviciospostales_ByH2Vj1M.mjs","\u0000@astro-page:src/pages/studies/studie1@_@md":"chunks/studie1_CX_6Q_Rm.mjs","\u0000@astro-page:src/pages/works/work1@_@md":"chunks/work1_MJuxApq2.mjs","\u0000@astro-page:src/pages/works/work2@_@md":"chunks/work2_Bqbf-H5L.mjs","\u0000@astro-page:src/pages/works/work3@_@md":"chunks/work3_jr0oC_ld.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_CJeKWaf-.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.yzwUO3MD.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/dm-sans-latin-wght-normal.DeBecvsH.woff2","/_astro/dm-sans-latin-ext-wght-normal.D1bw2c55.woff2","/_astro/about.DuDXvEv5.css","/cv-20240219.pdf","/Daniel Hernandez CV.pdf","/favicon.ico","/favicon.webp","/gl_flag_128x.png","/profile-dh.jpg","/profile-dh.webp","/profile.webp","/snap-items.png","/snap-md.png","/snap_laptop.webp","/snap_mobile.webp","/snap_project.webp"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
