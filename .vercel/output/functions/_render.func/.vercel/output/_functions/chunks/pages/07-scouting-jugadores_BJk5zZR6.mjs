/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Como “Side Project” para entender y mejorar mis habilitades como analista de datos, realicé una plataforma con datos y métricas avanzadas de statsbomb, donde permite buscar jugadores y ver similitudes entre ellos, facilitandolo con la visualización de sus métricas, siendo similira a los métodos que utilizan equipos profesionales de fútbol para la búsqueda de jugadores. Esto me permitió aprender a desarrollar plataformas y manejar datos masivos con R.</p>";

				const frontmatter = {"title":"Scouting Jugadores","url":"https://github.com/Daniher01/scouting_top_5_ligas","tags":["R","Shiny App","Análisis de datos","Scouting","StatsBomb"],"date":2023};
				const file = "C:/Users/asus/Documents/Proyectos/astro-cv-esquelete/src/pages/projects/07-scouting-jugadores.md";
				const url = "/projects/07-scouting-jugadores";
				function rawContent() {
					return "\r\nComo \"Side Project\" para entender y mejorar mis habilitades como analista de datos, realicé una plataforma con datos y métricas avanzadas de statsbomb, donde permite buscar jugadores y ver similitudes entre ellos, facilitandolo con la visualización de sus métricas, siendo similira a los métodos que utilizan equipos profesionales de fútbol para la búsqueda de jugadores. Esto me permitió aprender a desarrollar plataformas y manejar datos masivos con R.\r\n";
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
