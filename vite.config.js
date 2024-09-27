import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

import { VantResolver } from '@vant/auto-import-resolver';
import vue from '@vitejs/plugin-vue';

export default {
  server: { port: 4500 },
  base:'/vite_app2/',
  
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver(),ElementPlusResolver()],
    }),
    Components({
      resolvers: [VantResolver(),ElementPlusResolver()],
    }),
  ],
};
