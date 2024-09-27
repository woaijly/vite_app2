import { createApp } from 'vue';

import api from './api';
// import './style.css'
import App from './App.vue';
import router from './router';

const app=createApp(App)
// 再实例上绑定属性
app.config.globalProperties.$api=api;
router.beforeEach((to,form)=>{
  if(to.path!=='/login'){
    if(!localStorage.getItem('h5_token')){
      return '/login'
    }
  }
})
app.use(router)
app.mount('#app')
