/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Dentro de IdeasPro, estuve en el equipo desarrollando un sistema para una empresa de radiografías dentales, involucrado desde la toma de requerimientos, el diseño, elección de tecnologías y administración del sistema una vez puesta en marcha, trabajando tanto del lado del backend principalmente, como en el frontend, base de datos y administración en servidores propios.</p>\n<p>El sistema se encarga de la gestión de pacientes, generación de ordenes, generación de boletas, notificaciones mediante Email, asignación de radiologos y reportes de ventas.</p>\n<p>Este proyecto permitió centralizar la gestión de las ordenes de la empresa, unificar procesos y agilizar la toma de radiografías para los pacientes, siendo actualmente un pilar fundamental en los procesos de la empresa.</p>";

				const frontmatter = {"title":"Sistema Tu Imagen","url":"https://sic.tuimagenrx.cl/","tags":["PHP","javaScript","jquery","HTML","CSS","PostgreSQL","Git"],"date":2022};
				const file = "C:/Users/asus/Documents/Proyectos/astro-cv-esquelete/src/pages/projects/11-sistematuimagen.md";
				const url = "/projects/11-sistematuimagen";
				function rawContent() {
					return "\r\nDentro de IdeasPro, estuve en el equipo desarrollando un sistema para una empresa de radiografías dentales, involucrado desde la toma de requerimientos, el diseño, elección de tecnologías y administración del sistema una vez puesta en marcha, trabajando tanto del lado del backend principalmente, como en el frontend, base de datos y administración en servidores propios.\r\n\r\nEl sistema se encarga de la gestión de pacientes, generación de ordenes, generación de boletas, notificaciones mediante Email, asignación de radiologos y reportes de ventas.\r\n\r\nEste proyecto permitió centralizar la gestión de las ordenes de la empresa, unificar procesos y agilizar la toma de radiografías para los pacientes, siendo actualmente un pilar fundamental en los procesos de la empresa.\r\n";
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
