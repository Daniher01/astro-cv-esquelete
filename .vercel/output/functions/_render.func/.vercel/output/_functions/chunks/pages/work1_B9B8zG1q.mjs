/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>He trabajado de manera freelance para el Departamento de Desarrollo e Innovación del Club Universidad de chile de la primera división del fútbol profesional chileno.</li>\n<li>Este proyecto ha permitidos centralizar los datos de los distintos departamentos y las distintas categorías del club, optimizando los tiempos y mejorando la comunicación entre ellos, mediante una plataforma web, que permite el ingreso y visualización de los datos.</li>\n<li>Además de la plataforma, me ha tocado gestionar la infraestructura de la plataforma mediante Azure, administrar SSL y base de datos, además de la conversión automática de los datos desde csv a sql de manera recurrente.</li>\n</ul>";

				const frontmatter = {"title":"Freelance - Club Universidad de Chile","date":"2024 - Actualmente","url":["https://www.udechile.cl/"],"location":"Santiago, Chile","org":["Club Universidad de Chile"],"tags":["Club de Fútbol","Desarrollo e Innovación","Análisis de datos"]};
				const file = "C:/Users/asus/Documents/Proyectos/astro-cv-esquelete/src/pages/works/work1.md";
				const url = "/works/work1";
				function rawContent() {
					return "\r\n- He trabajado de manera freelance para el Departamento de Desarrollo e Innovación del Club Universidad de chile de la primera división del fútbol profesional chileno.\r\n- Este proyecto ha permitidos centralizar los datos de los distintos departamentos y las distintas categorías del club, optimizando los tiempos y mejorando la comunicación entre ellos, mediante una plataforma web, que permite el ingreso y visualización de los datos.\r\n- Además de la plataforma, me ha tocado gestionar la infraestructura de la plataforma mediante Azure, administrar SSL y base de datos, además de la conversión automática de los datos desde csv a sql de manera recurrente.\r\n";
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
