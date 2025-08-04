//二次封装axios
import type { AxiosResponse } from 'axios';
import { ElMessage } from "element-plus";
import { isString } from '@/utils/is';
import { joinTimestamp, formatRequestDate } from './helper';
import { RequestEnum, ContentTypeEnum } from '@/enums/httpEnum';
import { setObjToUrlParams, deepMerge } from '@/utils';
import { getAppEnvConfig } from "@/utils/env";
import { VAxios } from './Axios';

const { apiUrl, urlPrefix } = getAppEnvConfig();

/**
 * @description: 数据处理，方便区分多种处理方式
 */
const transform = {
  /**
   * @description: 处理请求数据。如果数据不是预期格式，可直接抛出错误
   */
  transformRequestHook: (res: AxiosResponse, options: any) => {
    const { isTransformResponse, isReturnNativeResponse } = options;
    // 是否返回原生响应头 比如：需要获取响应头时使用该属性
    if (isReturnNativeResponse) {
      return res;
    }
    // 不进行任何处理，直接返回
    // 用于页面代码可能需要直接获取code，data，message这些信息时开启
    if (!isTransformResponse) {
      return res.data;
    }
    // 错误的时候返回

    const { data } = res;

    // 非对象类型的直接返回数据
    if (typeof data !== 'object') return data;

    return data;
  },

  // 请求之前处理config
  beforeRequestHook: (config: any, options: any) => {
    const { apiUrl, joinPrefix, joinParamsToUrl, formatDate, joinTime = true, urlPrefix } = options;

    if (joinPrefix) {
      config.url = `${urlPrefix}${config.url}`;
    }

    if (apiUrl && isString(apiUrl)) {
      config.url = `${apiUrl}${config.url}`;
    }
    const params = config.params || {};
    const data = config.data || false;
    formatDate && data && !isString(data) && formatRequestDate(data);
    if (config.method?.toUpperCase() === RequestEnum.GET) {
      if (!isString(params)) {
        // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
        config.params = Object.assign(params || {}, joinTimestamp(joinTime, false));
      } else {
        // 兼容restful风格
        config.url = config.url + params + `${joinTimestamp(joinTime, true)}`;
        config.params = undefined;
      }
    } else {
      if (!isString(params)) {
        formatDate && formatRequestDate(params);
        if (Reflect.has(config, 'data') && config.data && Object.keys(config.data).length > 0) {
          config.data = data;
          config.params = params;
        } else {
          // 非GET请求如果没有提供data，则将params视为data
          config.data = params;
          config.params = undefined;
        }
        if (joinParamsToUrl) {
          config.url = setObjToUrlParams(
            config.url as string,
            Object.assign({}, config.params, config.data),
          );
        }
      } else {
        // 兼容restful风格
        config.url = config.url + params;
        config.params = undefined;
      }
    }
    return config;
  },

  /**
   * @description: 请求拦截器处理
   */
  requestInterceptors: (config: any, options: any) => {
    // 请求之前处理config
    return config;
  },

  /**
   * @description: 响应拦截器处理
   */
  responseInterceptors: (res: AxiosResponse<any>) => {
    return res;
  },

  /**
   * @description: 响应错误处理
   */
  responseInterceptorsCatch: (error: any) => {
    const { response, code, message, config } = error || {};
    const errorMessageMode = config?.requestOptions?.errorMessageMode || 'none';
    const msg: string = response?.data?.message ?? '';
    const err: string = error?.toString?.() ?? '';
    let errMessage = '';

    try {
      if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
        errMessage = '超时';
      }
      if (err?.includes('Network Error')) {
        errMessage = '网络错误';
      }

      if (errMessage) {
        ElMessage({
          message: errMessage,
          type: "error",
        });
        return Promise.reject(error);
      }
    } catch (error: any) {
      throw new Error(error);
    }

    checkStatus(error?.response?.status, msg);
    return Promise.reject(error);
  },
};

function checkStatus(
  status: number,
  msg: string,
): void {
  let errMessage = '';

  switch (status) {
    case 400:
      errMessage = `${msg}`;
      break;
    // 401: Not logged in
    // Jump to the login page if not logged in, and carry the path of the current page
    // Return to the current page after successful login. This step needs to be operated on the login page.
    case 401:
      errMessage = msg || '很抱歉，您没有权限（令牌、用户名、密码错误）!';
      break;
    case 403:
      errMessage = msg || '很抱歉，您没有权限访问此页面，若有疑问请联系管理员。';
      break;
    // 404请求不存在
    case 404:
      errMessage = msg || '网络请求错误,未找到该资源!';
      break;
    case 405:
      errMessage = msg || '网络请求错误,请求方法未允许!';
      break;
    case 408:
      errMessage = msg || '网络请求超时!';
      break;
    case 423:
      errMessage = msg || '您的账号已在其他地方登录，如非本人操作请及时修改密码！';
      break;
    case 500:
      errMessage = msg || '服务器错误,请联系管理员!';
      break;
    case 501:
      errMessage = msg || '网络未实现!';
      break;
    case 502:
      errMessage = msg || '网络错误!';
      break;
    case 503:
      errMessage = msg || '服务不可用，服务器暂时过载或维护!';
      break;
    case 504:
      errMessage = msg || '网络超时!';
      break;
    case 505:
      errMessage = msg || 'http版本不支持该请求!';
      break;
    default:
  }

  if (errMessage) {
      ElMessage({
        message: errMessage,
        type: "error",
      });
  }
}
function createAxios(opt?: Partial<any>) {
  return new VAxios(
    deepMerge(
      {
        // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#authentication_schemes
        // authentication schemes，e.g: Bearer
        // authenticationScheme: 'Bearer',
        authenticationScheme: '',
        // 请求超时时间，默认3分钟
        timeout: 3 * 60 * 1000,
        // 基础接口地址
        // baseURL: globSetting.apiUrl,
        // 默认请求头设置
        // headers: { 'Content-Type': ContentTypeEnum.JSON },
        // 如果是form-data格式
        headers: {
          'content-type': ContentTypeEnum.FORM_URLENCODED,
          'x-requested-with': 'XMLHttpRequest',
          'x-ajax': 'json',
        },
        // 数据处理方式
        transform,
        // 配置项，下面的选项都可以在独立的接口请求中覆盖
        requestOptions: {
          // 默认将prefix 添加到url
          joinPrefix: true,
          // 是否返回原生响应头 比如：需要获取响应头时使用该属性
          isReturnNativeResponse: false,
          // 需要对返回数据进行处理
          isTransformResponse: true,
          // post请求的时候添加参数到url
          joinParamsToUrl: false,
          // 格式化提交参数时间
          formatDate: false,
          // 消息提示类型
          errorMessageMode: 'modal',
          // 接口地址
          apiUrl,
          // 接口拼接地址
          urlPrefix,
          //  是否加入时间戳
          joinTime: true,
          // 忽略重复请求
          ignoreCancelToken: true,
          // 是否携带token
          withToken: true,
        },
      },
      opt || {},
    ),
  );
}
export const defHttp = createAxios();