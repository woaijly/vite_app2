import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

import { VantResolver } from '@vant/auto-import-resolver';
import vue from '@vitejs/plugin-vue';

export default {
  
  base:'/',

  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver(),ElementPlusResolver()],
    }),
    Components({
      resolvers: [VantResolver(),ElementPlusResolver()],
    }),
  ],
  server: {
    proxy: {
      '/v3pz': {
        target: 'https://v3pz.itndedu.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v3pz/, '/v3pz'),
      },
    },
  },
  
};
