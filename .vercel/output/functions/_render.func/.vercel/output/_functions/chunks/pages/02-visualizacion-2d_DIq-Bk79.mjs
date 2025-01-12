/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Conocimientos obtenidos: Analizar y visualizar métricas avanzadas en el fútbol con R</p>";

				const frontmatter = {"title":"Curso Visualización 2D en el Fútbol","org":"La Pizarra del DT","tags":["Análisis de datos","Fútbol","R"],"url":"https://drive.google.com/file/d/1ZGYIDfT1BgkNovnK2Y-m4cwXQmaSHWmF/view?usp=sharing","date":2023};
				const file = "C:/Users/asus/Documents/Proyectos/astro-cv-esquelete/src/pages/certificates/02-visualizacion-2d.md";
				const url = "/certificates/02-visualizacion-2d";
				function rawContent() {
					return "\r\nConocimientos obtenidos: Analizar y visualizar métricas avanzadas en el fútbol con R\r\n";
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
