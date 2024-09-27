// vite.config.js
import AutoImport from "file:///D:/pzziliao/vite_app/node_modules/unplugin-auto-import/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/pzziliao/vite_app/node_modules/unplugin-vue-components/dist/resolvers.js";
import Components from "file:///D:/pzziliao/vite_app/node_modules/unplugin-vue-components/dist/vite.js";
import { VantResolver } from "file:///D:/pzziliao/vite_app/node_modules/@vant/auto-import-resolver/dist/index.esm.mjs";
import vue from "file:///D:/pzziliao/vite_app/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var vite_config_default = {
  base: "/vite_app2/",
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver(), ElementPlusResolver()]
    }),
    Components({
      resolvers: [VantResolver(), ElementPlusResolver()]
    })
  ],
  server: {
    proxy: {
      // 匹配所有以 '/v3pz' 开头的请求
      "/v3pz": {
        target: "https://v3pz.itndedu.com/",
        // 目标服务器
        changeOrigin: true,
        // 推荐开启
        rewrite: (path) => path.replace(/^\/woaijly.github.io\/v3pz/, "/v3pz")
        // 重写路径
      }
    }
  }
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwenppbGlhb1xcXFx2aXRlX2FwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHp6aWxpYW9cXFxcdml0ZV9hcHBcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3B6emlsaWFvL3ZpdGVfYXBwL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSc7XHJcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnO1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcclxuXHJcbmltcG9ydCB7IFZhbnRSZXNvbHZlciB9IGZyb20gJ0B2YW50L2F1dG8taW1wb3J0LXJlc29sdmVyJztcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIFxyXG4gIGJhc2U6Jy92aXRlX2FwcDIvJyxcclxuXHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgcmVzb2x2ZXJzOiBbVmFudFJlc29sdmVyKCksRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcclxuICAgIH0pLFxyXG4gICAgQ29tcG9uZW50cyh7XHJcbiAgICAgIHJlc29sdmVyczogW1ZhbnRSZXNvbHZlcigpLEVsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHNlcnZlcjoge1xyXG4gICAgcHJveHk6IHtcclxuICAgICAgLy8gXHU1MzM5XHU5MTREXHU2MjQwXHU2NzA5XHU0RUU1ICcvdjNweicgXHU1RjAwXHU1OTM0XHU3Njg0XHU4QkY3XHU2QzQyXHJcbiAgICAgICcvdjNweic6IHtcclxuICAgICAgICB0YXJnZXQ6ICdodHRwczovL3YzcHouaXRuZGVkdS5jb20vJywgLy8gXHU3NkVFXHU2ODA3XHU2NzBEXHU1MkExXHU1NjY4XHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLCAvLyBcdTYzQThcdTgzNTBcdTVGMDBcdTU0MkZcclxuICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvd29haWpseS5naXRodWIuaW9cXC92M3B6LywgJy92M3B6JyksIC8vIFx1OTFDRFx1NTE5OVx1OERFRlx1NUY4NFxyXG4gICAgICB9LFxyXG5cclxuICAgIH0sXHJcbiAgfSxcclxuICBcclxufTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvUCxPQUFPLGdCQUFnQjtBQUMzUSxTQUFTLDJCQUEyQjtBQUNwQyxPQUFPLGdCQUFnQjtBQUV2QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFFaEIsSUFBTyxzQkFBUTtBQUFBLEVBRWIsTUFBSztBQUFBLEVBRUwsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLGFBQWEsR0FBRSxvQkFBb0IsQ0FBQztBQUFBLElBQ2xELENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxhQUFhLEdBQUUsb0JBQW9CLENBQUM7QUFBQSxJQUNsRCxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBO0FBQUEsTUFFTCxTQUFTO0FBQUEsUUFDUCxRQUFRO0FBQUE7QUFBQSxRQUNSLGNBQWM7QUFBQTtBQUFBLFFBQ2QsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLDhCQUE4QixPQUFPO0FBQUE7QUFBQSxNQUN2RTtBQUFBLElBRUY7QUFBQSxFQUNGO0FBRUY7IiwKICAibmFtZXMiOiBbXQp9Cg==
