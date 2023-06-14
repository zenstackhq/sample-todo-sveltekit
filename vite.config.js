import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    resolve: {
        alias: {
          ".prisma/client/index-browser": "./node_modules/.prisma/client/index-browser.js"
        }
      }
};

export default config;
