/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>De manera freelance, estuve aproximadamente 6 meses, desarrollando un sistema para un departamente de la universidad de talca en chile, para el registro de envíos de correos de manera interna entre departamento, realizando totalmente el backend, frontend y base de datos, permitiendo tambien la comunicación para implementación de una aplicacion móvil.</p>\n<p>El sistema se encarga de la gestión de los roles de usuarios, ingreso de pedidos, manejo de los distintos estados de los pedidos, y la generación de tickets de manera individual y masiva.</p>\n<p>Este proyecto permitió la comunicación de los distintos de partamentos de la universidad, agilizando procesos y permitiendo llevar registros de manera organizada de los pedidos que estos realizan.</p>";

				const frontmatter = {"title":"Servicios Postales","url":"https://github.com/Daniher01/serviciospostales","tags":["PHP","javaScript","JQuery","HTML","CSS","MySQL","Git"],"date":2021};
				const file = "C:/Users/asus/Documents/Proyectos/astro-cv-esquelete/src/pages/projects/12-serviciospostales.md";
				const url = "/projects/12-serviciospostales";
				function rawContent() {
					return "\r\nDe manera freelance, estuve aproximadamente 6 meses, desarrollando un sistema para un departamente de la universidad de talca en chile, para el registro de envíos de correos de manera interna entre departamento, realizando totalmente el backend, frontend y base de datos, permitiendo tambien la comunicación para implementación de una aplicacion móvil.\r\n\r\nEl sistema se encarga de la gestión de los roles de usuarios, ingreso de pedidos, manejo de los distintos estados de los pedidos, y la generación de tickets de manera individual y masiva.\r\n\r\nEste proyecto permitió la comunicación de los distintos de partamentos de la universidad, agilizando procesos y permitiendo llevar registros de manera organizada de los pedidos que estos realizan.\r\n\r\n";
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
