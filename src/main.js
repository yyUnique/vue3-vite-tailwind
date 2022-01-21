import 'tailwindcss/tailwind.css'
//main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from './utils/axios';

const app = createApp(App)
app.use(ElementPlus)
//全局配置
app.config.globalProperties.$http=axios;
app.use(router)
app.mount('#app')
