/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Soy desarrollador web con 3 años de experiencia, capaz de llevar un proyecto desde cero, abarcando todas sus etapas: toma de requerimientos, diseño, desarrollo y puesta en producción, tanto en backend como en frontend.</p>\n<p>Recientemente me he mudado a Málaga, donde, con 23 años, estoy enfocado en seguir creciendo como profesional en el mundo de la tecnología. Mi objetivo es ofrecer soluciones tecnológicas que no solo resuelvan problemas, sino que generen valor tangible.</p>\n<p>Además, tengo conocimientos en análisis de datos, lo que me permite interpretar la información de manera clara y contribuir a una toma de decisiones más efectiva.</p>";

				const frontmatter = {"title":"Sobre Mí","name":"Daniel Hernández","designation":"Desarrollador Web","location":"Málaga, España","website":"https://dhernandez.dev"};
				const file = "C:/Users/asus/Documents/Proyectos/astro-cv-esquelete/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "\r\nSoy desarrollador web con 3 años de experiencia, capaz de llevar un proyecto desde cero, abarcando todas sus etapas: toma de requerimientos, diseño, desarrollo y puesta en producción, tanto en backend como en frontend.\r\n\r\nRecientemente me he mudado a Málaga, donde, con 23 años, estoy enfocado en seguir creciendo como profesional en el mundo de la tecnología. Mi objetivo es ofrecer soluciones tecnológicas que no solo resuelvan problemas, sino que generen valor tangible.\r\n\r\nAdemás, tengo conocimientos en análisis de datos, lo que me permite interpretar la información de manera clara y contribuir a una toma de decisiones más efectiva.\r\n";
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
