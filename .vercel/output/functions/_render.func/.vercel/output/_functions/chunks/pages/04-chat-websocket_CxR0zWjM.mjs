/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Este “Side Project” es un chat web que permite la participación de distintos usuarios, creado con tecnologías web.</p>\n<p>Este proyecto fue realizado para conocer el funcionamiento de websocket para permitir la comunicación a tiempo real.</p>";

				const frontmatter = {"title":"Chat web","url":"https://github.com/Daniher01/chat-websocket","tags":["NodeJs","WebSocket","Javascript","HTML","CSS"],"date":2024};
				const file = "C:/Users/asus/Documents/Proyectos/astro-cv-esquelete/src/pages/projects/04-chat-websocket.md";
				const url = "/projects/04-chat-websocket";
				function rawContent() {
					return "\r\nEste \"Side Project\" es un chat web que permite la participación de distintos usuarios, creado con tecnologías web.\r\n\r\nEste proyecto fue realizado para conocer el funcionamiento de websocket para permitir la comunicación a tiempo real.\r\n";
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
