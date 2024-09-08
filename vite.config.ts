import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // Add Vue plugin
import monkey from 'vite-plugin-monkey';

export default defineConfig({
  plugins: [
    vue(), // Ensure you add the Vue plugin here
    monkey({
      entry: 'src/App.vue', // Corrected entry to point to App.vue
      userscript: {
        name: 'Dynamic Userscript',
        namespace: 'https://my.namespace.com/',
        match: ['https://example.com/*'],
        grant: ['GM_xmlhttpRequest'],
      },
    }),
  ],
});