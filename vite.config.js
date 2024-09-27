import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

import { VantResolver } from '@vant/auto-import-resolver';
import vue from '@vitejs/plugin-vue';

export default {

  base: '/vite_app2/',

  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver(), ElementPlusResolver()],
    }),
    Components({
      resolvers: [VantResolver(), ElementPlusResolver()],
    }),
  ],
  server: {
    proxy: {
      // 匹配所有以 '/v3pz' 开头的请求
      '/v3pz': {
        target: 'https://v3pz.itndedu.com/', // 目标服务器
        changeOrigin: true, // 推荐开启
        rewrite: (path) => path.replace(/^\/v3pz/, '/v3pz'), // 重写路径
      },

    },
  },

};
