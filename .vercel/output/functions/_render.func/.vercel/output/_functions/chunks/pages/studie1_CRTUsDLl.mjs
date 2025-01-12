/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Analista Programador","location":"Talca, Chile","url":"https://www.cftsanagustin.cl/","institute":"CFT San Agustín","date":"2020 - 2022","tags":["Analista Programador","Desarrollo de Software"]};
				const file = "C:/Users/asus/Documents/Proyectos/astro-cv-esquelete/src/pages/studies/studie1.md";
				const url = "/studies/studie1";
				function rawContent() {
					return "";
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
