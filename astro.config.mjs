import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), compress()],
  output: "server",
  adapter: vercel()
});

// import tailwind from "@astrojs/tailwind";
// import { defineConfig } from "astro/config";
// import vercel from "@astrojs/vercel/serverless";
// import icon from "astro-icon";

// export default defineConfig({
//   integrations: [tailwind(), icon()],
//   output: "server",
//   adapter: vercel(),
// });


// import { defineConfig } from 'astro/config';
// import node from '@astrojs/node';
// import icon from "astro-icon";
// import tailwind from "@astrojs/tailwind";

// export default defineConfig({
//   integrations: [tailwind(), icon()],
//   output: 'static',  // Puedes usar "server" o "hybrid" dependiendo de tus necesidades
//   adapter: node({
//     mode: 'standalone',
//   }),
// });