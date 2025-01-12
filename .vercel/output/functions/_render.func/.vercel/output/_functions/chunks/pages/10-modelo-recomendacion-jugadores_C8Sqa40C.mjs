/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Como proyecto final de el curso de big data básico de <a href=\"https://www.lapizarradeldt.com/\">LPDT</a>, realicé una simulación de un club de fútbol que necesitaba buscar jugadores para su equipo, que se adaptaran al modelo del juego del club, manejando datos masivos, utilizando y creando métricas avanzadas, y realizando calculos estadísticos para generar un modelo estadístico que permitiera al club buscar jugadores según sus necesidades.</p>\n<p>Este proyecto, luego me permitió colaborar con el departamento de desarrollo e innovación del club universidad de chile, de donde me basé para el proyecto <a href=\"https://repositorio.uchile.cl/handle/2250/176550\">Datazul</a></p>";

				const frontmatter = {"title":"Modelo de recomendacion de jugadores","url":"https://github.com/Daniher01/ejercicios_bigdata_futbol/tree/main/ejercicios/score_players","tags":["R","Analisis de datos","Scouting","Métricas Avanzadas"],"date":2023};
				const file = "C:/Users/asus/Documents/Proyectos/astro-cv-esquelete/src/pages/projects/10-modelo-recomendacion-jugadores.md";
				const url = "/projects/10-modelo-recomendacion-jugadores";
				function rawContent() {
					return "\r\nComo proyecto final de el curso de big data básico de [LPDT](https://www.lapizarradeldt.com/), realicé una simulación de un club de fútbol que necesitaba buscar jugadores para su equipo, que se adaptaran al modelo del juego del club, manejando datos masivos, utilizando y creando métricas avanzadas, y realizando calculos estadísticos para generar un modelo estadístico que permitiera al club buscar jugadores según sus necesidades.\r\n\r\nEste proyecto, luego me permitió colaborar con el departamento de desarrollo e innovación del club universidad de chile, de donde me basé para el proyecto [Datazul](https://repositorio.uchile.cl/handle/2250/176550)\r\n";
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
