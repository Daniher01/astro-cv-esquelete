/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Dentro de IdeasPro, desarrolle un sistema web para la gestión de filas de pacientes para una empresa de radiografías dentales, realizando de manera completa tanto el backend, el frontend, diseño de base de datos, puesta en producción y administración del proyecto.</p>\n<p>El sistema de encarga de la gestión de llegada de pacientes y notificación a asistentes dentales mediante comunicación a tiempo real (Websocket), organizandolos por timepo de llegada e informando los tiempos de espera de cada paciente.</p>\n<p>Este proyecto facilitó y agilizó el flujo de pacientes que fue incrementando generando un atraso en la atención de estos.</p>";

				const frontmatter = {"title":"Gestión de Filas","url":"https://github.com/Daniher01/gestion_filas","tags":["django","javaScript","HTML","CSS","Boostrap","Docker","PostgreSQL","Caprover","WebSockets"],"date":2023};
				const file = "C:/Users/asus/Documents/Proyectos/astro-cv-esquelete/src/pages/projects/09-gestionfilas.md";
				const url = "/projects/09-gestionfilas";
				function rawContent() {
					return "\r\nDentro de IdeasPro, desarrolle un sistema web para la gestión de filas de pacientes para una empresa de radiografías dentales, realizando de manera completa tanto el backend, el frontend, diseño de base de datos, puesta en producción y administración del proyecto.\r\n\r\nEl sistema de encarga de la gestión de llegada de pacientes y notificación a asistentes dentales mediante comunicación a tiempo real (Websocket), organizandolos por timepo de llegada e informando los tiempos de espera de cada paciente.\r\n\r\nEste proyecto facilitó y agilizó el flujo de pacientes que fue incrementando generando un atraso en la atención de estos.";
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
