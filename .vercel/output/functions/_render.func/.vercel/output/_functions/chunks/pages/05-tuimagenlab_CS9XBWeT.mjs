/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Dentro de IdeasPro desarrolle un sistema web para la gestión de pedidos de una empresa dental enfocada en impresiones 3d, desarrollando tanto el backend, frontend, base de datos y despliegue.</p>\n<p>El sistema se encarga de resgistrar los pedidos que va teniendo la empresa, organizandolos por distintos estados y generando reportes para los dentistas solicitantes.</p>\n<p>Este proyecto permitió la organización y registro de pedidos, ayudando a crear un proceso claro que la empresa, al ser nueva, no tenía definido.</p>";

				const frontmatter = {"title":"Tu Imagen Lab","url":"https://github.com/Daniher01/tuimagen_lab","tags":["django","javaScript","axios","HTML","CSS","Boostrap","Docker","Caprover"],"date":2024};
				const file = "C:/Users/asus/Documents/Proyectos/astro-cv-esquelete/src/pages/projects/05-tuimagenlab.md";
				const url = "/projects/05-tuimagenlab";
				function rawContent() {
					return "\r\nDentro de IdeasPro desarrolle un sistema web para la gestión de pedidos de una empresa dental enfocada en impresiones 3d, desarrollando tanto el backend, frontend, base de datos y despliegue.\r\n\r\nEl sistema se encarga de resgistrar los pedidos que va teniendo la empresa, organizandolos por distintos estados y generando reportes para los dentistas solicitantes.\r\n\r\nEste proyecto permitió la organización y registro de pedidos, ayudando a crear un proceso claro que la empresa, al ser nueva, no tenía definido.\r\n";
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
