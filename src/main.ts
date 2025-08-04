import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import '@/assets/css/index.less';

import { setupStore } from '@/store';

const app = createApp(App);
// 实例化 Pinia

app.use(router);
setupStore(app);

app.mount("#app");

