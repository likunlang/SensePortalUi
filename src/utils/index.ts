import type { App, Plugin } from 'vue';
import { isObject, isUrl } from '@/utils/is';
import router from "@/router";

let dynamicViewsModules: Record<string, () => Promise<Recordable>>;

const loadModule = /mobile/i.test(navigator.userAgent) ? 'mobile' : 'pc';

export const isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

export function dynamicImport(component: string) {
  if (!dynamicViewsModules) {
    dynamicViewsModules = import.meta.glob('../views/**/*.{vue,tsx}');
  }
  const keys = Object.keys(dynamicViewsModules);
  const matchKeys = keys.filter((key) => {
    let k = key.replace('../views', '');
    const lastIndex = k.lastIndexOf('.');
    k = k.substring(0, lastIndex);
    return k === component;
  });
  if (matchKeys?.length === 1) {
    const matchKey = matchKeys[0];
    return dynamicViewsModules[matchKey];
  }
  if (matchKeys?.length > 1) {
    console.warn(
      'Please do not create `.vue` and `.TSX` files with the same file name in the same hierarchical directory under the views folder. This will cause dynamic introduction failure',
    );
    return;
  }
}

export function openWindow(
  url: string,
  opt?: { target?: TargetContext | string; noopener?: boolean; noreferrer?: boolean },
) {
  const { target = '__blank', noopener = true, noreferrer = true } = opt || {};
  const feature: string[] = [];
  noopener && feature.push('noopener=yes');
  noreferrer && feature.push('noreferrer=yes');
  // t h i n k g e m / j e e s i t e
  if (url && (url.endsWith('?___blank') || url.endsWith('&___blank'))) {
    url = url.substring(0, url.length - 9);
  }
  window.open(url, target, feature.join(','));
}

export const withInstall = <T>(component: T, alias?: string) => {
  const comp = component as any;
  comp.install = (app: App) => {
    app.component(comp.name || comp.displayName, component);
    if (alias) {
      app.config.globalProperties[alias] = component;
    }
  };
  return component as T & Plugin;
};
export const uniqueArr = (arr: [], key?) => {
  if (!key) {
    key = 'id';
  }
  const newObj: any = {};
  arr = arr.reduce((preVal: any, curVal: any) => {
    newObj[curVal[key]] ? '' : (newObj[curVal[key]] = preVal.push(curVal));
    return preVal;
  }, []);
  arr.filter((i: any) => i);
  return arr;
};

/**
 * Add the object as a parameter to the URL
 * @param baseUrl url
 * @param obj
 * @returns {string}
 * eg:
 *  let obj = {a: '3', b: '4'}
 *  setObjToUrlParams('www.baidu.com', obj)
 *  ==>www.baidu.com?a=3&b=4
 */
export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = '';
  for (const key in obj) {
    parameters += key + '=' + encodeURIComponent(obj[key]) + '&';
  }
  parameters = parameters.replace(/&$/, '');
  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters;
}

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
  }
  return src;
}
export function newsDetail(item: any) {
  const { fullPath } = router.currentRoute.value;
  item?.id && router.push({ path: '/newsDetail', query: { id: item.id, category: item.category.id, categoryName: item.category.categoryName } });
}
export const getQueryString = (key: string, url?: any) => {
  const theRequest = {};
  const str = url ? url.split('?')[1] : window.location.href.split('?')[1];
  if (str) {
    const strs = str.split('&');
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
    }
  }
  return theRequest[key];
};

export function openPath(path: string) {
  if (path) {
    if (isUrl(path)) {
      window.open(path, '_blank');
    } else {
      // useStore().setMenuTree(menuTree);
      router.push(path)
    }
  }
}