/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Dentro de IdeasPro, Me tocó desarrollar una Api Rest y colaborar junto con el equipo de frontend para la actualización del sistema dental, Participando en el diseño y toma de requerimientos, y levantando todo lo relacionado con el backend.</p>\n<p>La api, trabaja con bases de datos, colas de trabajos para envios de correos, conexión con lioren para generación de boletas y cobros, automatiazión de carga de datos y todo esto siguiento los estandares comunes para el desarrollo de una Api Rest.</p>\n<p>Este proyecto permitió sentar las bases y repensar los procesos de la empresa, para que luego permitir el desarrollo de sistemas multiplataformas e integración con sistemas externos que utilice la empresa.</p>";

				const frontmatter = {"title":"Api - Ris Tuimagen","url":"https://api.tuimagenrx.app/swagger/","tags":["Djando Rest Framework","MySql","Digital Ocean","Redis","Celery","Docker"],"date":2024};
				const file = "C:/Users/asus/Documents/Proyectos/astro-cv-esquelete/src/pages/projects/02-api-ris-tuimagen.md";
				const url = "/projects/02-api-ris-tuimagen";
				function rawContent() {
					return "\r\nDentro de IdeasPro, Me tocó desarrollar una Api Rest y colaborar junto con el equipo de frontend para la actualización del sistema dental, Participando en el diseño y toma de requerimientos, y levantando todo lo relacionado con el backend.\r\n\r\nLa api, trabaja con bases de datos, colas de trabajos para envios de correos, conexión con lioren para generación de boletas y cobros, automatiazión de carga de datos y todo esto siguiento los estandares comunes para el desarrollo de una Api Rest.\r\n\r\nEste proyecto permitió sentar las bases y repensar los procesos de la empresa, para que luego permitir el desarrollo de sistemas multiplataformas e integración con sistemas externos que utilice la empresa.\r\n";
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
