/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Conocimientos obtenidos: La capacidad de diseñar, documentar y desarrollar un Api Rest con las mejores prácticas en Express</p>";

				const frontmatter = {"title":"Curso de Backend con Node.js - API REST en Express.js","org":"Platzi","tags":["Api Rest","Express","Backend"],"url":"https://platzi.com/p/daniher01/curso/2485-course/diploma/detalle/","date":2022};
				const file = "C:/Users/asus/Documents/Proyectos/astro-cv-esquelete/src/pages/certificates/05-api-rest.md";
				const url = "/certificates/05-api-rest";
				function rawContent() {
					return "\r\nConocimientos obtenidos: La capacidad de diseñar, documentar y desarrollar un Api Rest con las mejores prácticas en Express\r\n";
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
