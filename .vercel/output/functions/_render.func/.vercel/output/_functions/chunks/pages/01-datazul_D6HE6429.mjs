/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Como freelance, desarrollé un sistema web para la centralización de datos de las distintas áreas y departamentos del primer equipo y formativos del Club Universidad de Chile, desarrollando tanto el backend, como el frontend, administración de la base de datos, investigación y utilización de distintos recursos de Azure.</p>\n<p>El sistema se encarga del ingreso de datos mediante formularios para luego integrar power bi, con el cual se visualizan los datos ingresados.</p>\n<p>Antes de esta plataforma, los departamentos tenían los datos en distintos formularios de excel, causando falta de sincronización y lentitud en la toma de decisiones basados en esos datos, con este proyecto, se pudo centralizar y agilizar el proceso para que los distintos entrenadores puedan acceder de manera rápida a los datos.</p>\n<p>Este proyecto actualmente es privado, teniendo limitaciones para ver el codigo fuente o ingresar a la plataforma para el público.</p>";

				const frontmatter = {"title":"Datazul","url":"https://www.datazul.cl/","tags":["django","javaScript","HTML","CSS","Boostrap","Docker","Caprover"],"date":2024};
				const file = "C:/Users/asus/Documents/Proyectos/astro-cv-esquelete/src/pages/projects/01-datazul.md";
				const url = "/projects/01-datazul";
				function rawContent() {
					return "\r\nComo freelance, desarrollé un sistema web para la centralización de datos de las distintas áreas y departamentos del primer equipo y formativos del Club Universidad de Chile, desarrollando tanto el backend, como el frontend, administración de la base de datos, investigación y utilización de distintos recursos de Azure. \r\n\r\nEl sistema se encarga del ingreso de datos mediante formularios para luego integrar power bi, con el cual se visualizan los datos ingresados.\r\n\r\nAntes de esta plataforma, los departamentos tenían los datos en distintos formularios de excel, causando falta de sincronización y lentitud en la toma de decisiones basados en esos datos, con este proyecto, se pudo centralizar y agilizar el proceso para que los distintos entrenadores puedan acceder de manera rápida a los datos.\r\n\r\nEste proyecto actualmente es privado, teniendo limitaciones para ver el codigo fuente o ingresar a la plataforma para el público.\r\n";
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
