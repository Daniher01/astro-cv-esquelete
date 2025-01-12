/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Trabajé durante 6 meses de manera freelance en un sistema web para un departamento de la universidad de talca, en chile.</li>\n<li>El sistema permitió la gestión de envíos de paquetes de manera interna entre departamentos de la universidad, optimizando la organización en la gestión de paquetes.</li>\n<li>Desarrollé tanto el backend como el frontend de la aplicación, permitiendo la conexión del backend con aplicaciones móviles.</li>\n<li>Entre las funcionalidades el sistema están la gestión de distintos paquetes mediantes estados, la carga masiva de registro de paquetes, la generación de tickets para la entrega de los paquetes, además de temás básicos como la autenticación y autorización con los distintos roles de usuarios.</li>\n</ul>";

				const frontmatter = {"title":"Freelance - Servicios Postales","date":2022,"url":["https://serviciospostales.cl/"],"location":"Talca, Chile","org":["Servicios Postales"],"tags":["Universidad de talca","Gestión de Envío de paquetes","Freelancce"]};
				const file = "C:/Users/asus/Documents/Proyectos/astro-cv-esquelete/src/pages/works/work3.md";
				const url = "/works/work3";
				function rawContent() {
					return "\r\n- Trabajé durante 6 meses de manera freelance en un sistema web para un departamento de la universidad de talca, en chile. \r\n- El sistema permitió la gestión de envíos de paquetes de manera interna entre departamentos de la universidad, optimizando la organización en la gestión de paquetes.\r\n- Desarrollé tanto el backend como el frontend de la aplicación, permitiendo la conexión del backend con aplicaciones móviles.\r\n- Entre las funcionalidades el sistema están la gestión de distintos paquetes mediantes estados, la carga masiva de registro de paquetes, la generación de tickets para la entrega de los paquetes, además de temás básicos como la autenticación y autorización con los distintos roles de usuarios.\r\n";
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
