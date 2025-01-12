/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Conocimientos obtenidos: Las mejores prácticas para el control de versiones en un proyecto de software</p>";

				const frontmatter = {"title":"Curso Profesionarl de Git y GitHub","org":"Platzi","tags":["Git","Github","Control de versiones"],"url":"https://platzi.com/p/daniher01/curso/1557-git-github/diploma/detalle/","date":2022};
				const file = "C:/Users/asus/Documents/Proyectos/astro-cv-esquelete/src/pages/certificates/04-git.md";
				const url = "/certificates/04-git";
				function rawContent() {
					return "\r\nConocimientos obtenidos: Las mejores prácticas para el control de versiones en un proyecto de software\r\n";
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
