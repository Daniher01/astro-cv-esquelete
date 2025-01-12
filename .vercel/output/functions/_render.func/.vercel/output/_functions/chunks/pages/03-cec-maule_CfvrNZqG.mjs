/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Dentro de IdeasPro, desasrrollé una página web para el Cec del maule encargada de dictar cursos para la formación empresarial, partiendo del diseño, encargandome de elegir las tecnologías, el desarrollo y despliegue.</p>\n<p>Este proyecto le permitió a la empresa mostrar la información de sus distintos cursos, un acceso directo a su plataforma y un contacto directo entre los insteresados y la empresa.</p>";

				const frontmatter = {"title":"Página web - Cec del Maule","url":"https://cecdelmaule.cl/","tags":["astro","javaScript","axios","HTML","CSS"],"date":2024};
				const file = "C:/Users/asus/Documents/Proyectos/astro-cv-esquelete/src/pages/projects/03-cec-maule.md";
				const url = "/projects/03-cec-maule";
				function rawContent() {
					return "\r\nDentro de IdeasPro, desasrrollé una página web para el Cec del maule encargada de dictar cursos para la formación empresarial, partiendo del diseño, encargandome de elegir las tecnologías, el desarrollo y despliegue.\r\n\r\nEste proyecto le permitió a la empresa mostrar la información de sus distintos cursos, un acceso directo a su plataforma y un contacto directo entre los insteresados y la empresa.\r\n";
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
