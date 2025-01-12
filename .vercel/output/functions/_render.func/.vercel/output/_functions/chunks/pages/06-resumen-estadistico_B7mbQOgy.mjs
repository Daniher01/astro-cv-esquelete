/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Como “Side Project” automaticé el proceso de obtener el resumen estadístico de partidos de fútbol, utilizando la librería ScraperFC obteniendo la data de Sofascore. Este proyecto me permitió entender tecnologías como pandas para procesar datos masivos y matpotlib para la visualización de datos.</p>";

				const frontmatter = {"title":"Resumenes Estadísticos","url":"https://github.com/Daniher01/resumenes_estadisticos","tags":["python","pandas","matplotlib","webscraping","sofascore","analisis de datos"],"date":2024};
				const file = "C:/Users/asus/Documents/Proyectos/astro-cv-esquelete/src/pages/projects/06-resumen-estadistico.md";
				const url = "/projects/06-resumen-estadistico";
				function rawContent() {
					return "\r\nComo \"Side Project\" automaticé el proceso de obtener el resumen estadístico de partidos de fútbol, utilizando la librería ScraperFC obteniendo la data de Sofascore. Este proyecto me permitió entender tecnologías como pandas para procesar datos masivos y matpotlib para la visualización de datos.\r\n";
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
