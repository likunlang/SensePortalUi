import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from 'vue-router';

import { basicRoutes } from './basic';

const router = createRouter({
  history: createWebHistory(),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

router.beforeEach((to, from, next) => {
  // const title = to?.meta?.title
  // if (title) {
  //   document.title = title as string
  // }
  next()
})

export default router;
