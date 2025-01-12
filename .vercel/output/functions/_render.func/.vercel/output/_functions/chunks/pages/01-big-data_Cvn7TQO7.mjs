/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Conocimientos obtenidos: Extraer, procesar y analizar grandes volúmenes de datos con R</p>";

				const frontmatter = {"title":"Curso Big Data en el Fútbol","org":"La Pizarra del DT","tags":["Big Data","Fútbol","R"],"date":2023};
				const file = "C:/Users/asus/Documents/Proyectos/astro-cv-esquelete/src/pages/certificates/01-big-data.md";
				const url = "/certificates/01-big-data";
				function rawContent() {
					return "\r\nConocimientos obtenidos: Extraer, procesar y analizar grandes volúmenes de datos con R\r\n";
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
