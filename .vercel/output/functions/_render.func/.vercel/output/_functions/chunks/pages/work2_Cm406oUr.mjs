/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>He trabajado de manera fulltime durante 3 años en el área de desarrollo de software de una agencia de marketing digital, realizando proyectos para distintos clientes.</li>\n<li>Para la misma empresa, he logrado automatizar procesos de respaldo de información, páginas web, armado de cableado de redes y reuniones con distintos clientes.</li>\n<li>Entre los distintos proyectos han estado: un sistema ris para empresa de radiografías dentales, gestión de filas para empresa de radiografías dentales, páginas web para doctores, dentistas y empresas de capaticiones empresariales, además de creación de scripts para la automtización de respaldo de datos de las distintas empresas los cuales están más a detalle en la sección de “proyectos”</li>\n</ul>";

				const frontmatter = {"title":"Agencia de Marketing Digital IdeasPro","date":"2022 - 2025","url":"https://agenciaideaspro.cl/","location":"Talca, Chile","org":"Agencia IdeasPro","tags":["Marketing Digital","Páginas web","Gestión de filas","Sistema RIS dental","Automatización de procesos"]};
				const file = "C:/Users/asus/Documents/Proyectos/astro-cv-esquelete/src/pages/works/work2.md";
				const url = "/works/work2";
				function rawContent() {
					return "\r\n- He trabajado de manera fulltime durante 3 años en el área de desarrollo de software de una agencia de marketing digital, realizando proyectos para distintos clientes.\r\n- Para la misma empresa, he logrado automatizar procesos de respaldo de información, páginas web, armado de cableado de redes y reuniones con distintos clientes.\r\n- Entre los distintos proyectos han estado: un sistema ris para empresa de radiografías dentales, gestión de filas para empresa de radiografías dentales, páginas web para doctores, dentistas y empresas de capaticiones empresariales, además de creación de scripts para la automtización de respaldo de datos de las distintas empresas los cuales están más a detalle en la sección de \"proyectos\"\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
