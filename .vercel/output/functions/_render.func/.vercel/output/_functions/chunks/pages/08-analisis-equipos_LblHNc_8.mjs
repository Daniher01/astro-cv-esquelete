/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Como “Side Project”, me enfoqué en contar la hazaña de un club de fútbol siendo campeon de un torneo, basandome en los datos para saber si esa hazaña fue suerte o está respaldada con datos.</p>\n<p>Este proyecto me permitió mejorar mi storytelling y utilizar métricas de visualización comúnes en los análisis de rendimientos de equipos de fútbol.</p>";

				const frontmatter = {"title":"Análisis de equipos","url":"https://github.com/Daniher01/ejercicios_bigdata_futbol/tree/main/ejercicios/leicester_campeon","tags":["python","pandas","analisis de datos","statsbomb"],"date":2023};
				const file = "C:/Users/asus/Documents/Proyectos/astro-cv-esquelete/src/pages/projects/08-analisis-equipos.md";
				const url = "/projects/08-analisis-equipos";
				function rawContent() {
					return "\r\nComo \"Side Project\", me enfoqué en contar la hazaña de un club de fútbol siendo campeon de un torneo, basandome en los datos para saber si esa hazaña fue suerte o está respaldada con datos.\r\n\r\nEste proyecto me permitió mejorar mi storytelling y utilizar métricas de visualización comúnes en los análisis de rendimientos de equipos de fútbol.\r\n";
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
