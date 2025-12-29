import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import '@/assets/css/index.less';
import '@/assets/css/tailwind.css';
import { setupStore } from '@/store';

import { setupI18n } from '@/locales/setupI18n';

import VueLazyload from 'vue-lazyload'
const app = createApp(App);
// 实例化 Pinia

app.use(router);
app.use(VueLazyload, {
  preLoad: 1.11,
});

setupStore(app);
setupI18n(app);

app.mount("#app");
