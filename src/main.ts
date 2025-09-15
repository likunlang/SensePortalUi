import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import '@/assets/css/index.less';
import '@/assets/css/tailwind.css';
import { setupStore } from '@/store';

import ElementPlus from "element-plus";
import en from 'element-plus/dist/locale/en.mjs'
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
// 实例化 Pinia

app.use(router);
setupStore(app);

app.use(ElementPlus,{
  locale: en,
}).mount("#app");

//全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}