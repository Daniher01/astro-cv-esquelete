/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Conocimientos obtenidos: Desarrollar una aplicación web con django</p>";

				const frontmatter = {"title":"Curso Básico de Django","org":"Platzi","tags":["Django","Backend","Python"],"url":"https://platzi.com/p/daniher01/curso/2694-django/diploma/detalle/","date":2022};
				const file = "C:/Users/asus/Documents/Proyectos/astro-cv-esquelete/src/pages/certificates/03-django.md";
				const url = "/certificates/03-django";
				function rawContent() {
					return "\r\nConocimientos obtenidos: Desarrollar una aplicación web con django\r\n";
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
