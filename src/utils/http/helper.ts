import { isObject, isString } from '@/utils/is';
import { isDevMode } from '@/utils/env';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm';

export function joinTimestamp<T extends boolean>(
  join: boolean,
  restful: T,
): T extends true ? string : object;

const isDev = isDevMode();
export function joinTimestamp(join: boolean, restful = false): string | object {
  if (!join) {
    return restful ? '' : {};
  }
  const now = new Date().getTime();
  if (restful) {
    return isDev ? `?_t=${now}&mode=dev` : `?_t=${now}`;
  }
  return isDev ? { _t: now, mode: 'dev' } : { _t: now };
}

/**
 * @description: Format request parameter time
 */
export function formatRequestDate(params: Recordable) {
  if (Object.prototype.toString.call(params) !== '[object Object]') {
    return;
  }

  for (const key in params) {
    if (params[key] && params[key]._isAMomentObject) {
      params[key] = params[key].format(DATE_TIME_FORMAT);
    }
    const value = params[key];
    if (value) {
      if (isString(key)) {
        try {
          params[key] = isString(value) ? value.trim() : value;
        } catch (error: any) {
          throw new Error(error);
        }
      } else if (isObject(value)) {
        formatRequestDate(params[key]);
      }
    }
  }
}

export const getQueryString = (key: string) => {
  const theRequest = {};
  const str = window.location.href.split('?')[1];
  if (str) {
    const strs = str.split('&');
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
    }
  }
  return theRequest[key];
};
