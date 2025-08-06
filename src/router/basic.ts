import type { AppRouteRecordRaw, AppRouteModule } from '@/router/types';

import { PageEnum } from '@/enums/pageEnum';

import {
  REDIRECT_NAME,
  LAYOUT,
  EXCEPTION_COMPONENT,
  PAGE_NOT_FOUND_NAME,
} from '@/router/constant';

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

// 404 on a page
export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: '/:path(.*)*',
  name: PAGE_NOT_FOUND_NAME,
  component: LAYOUT,
  meta: {
    title: 'ErrorPage',
    hideBreadcrumb: true,
    hideMenu: true,
  },
  children: [
    {
      path: '/:path(.*)*',
      name: "404",
      component: EXCEPTION_COMPONENT,
      meta: {
        title: '',
        hideBreadcrumb: true,
        hideMenu: true,
      },
    },
  ],
};

export const REDIRECT_ROUTE: AppRouteRecordRaw = {
  path: '/redirect',
  component: LAYOUT,
  name: 'RedirectTo',
  meta: {
    title: REDIRECT_NAME,
    hideBreadcrumb: true,
    hideMenu: true,
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      name: REDIRECT_NAME,
      component: () => import('@/views/redirect/index.vue'),
      meta: {
        title: '',
        hideBreadcrumb: true,
      },
    },
  ],
};

export const PAGES: AppRouteRecordRaw = {
  path: '/',
  component: LAYOUT,
  name: 'Index',
  redirect: '/index.html',
  children: [
    {
      path: '/index.html',
      name: 'Home',
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: 'Home',
        affix: true,
      },
    },
    {
      path: '/vehicles',
      name: 'Vehicles',
      component: () => import('@/views/vehicles/index.vue'),
      meta: {
        title: 'Vehicles',
        affix: true,
      },
    },
  ],
};

// Basic routing without permission
export const basicRoutes = [
  RootRoute,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
  PAGES,
];
