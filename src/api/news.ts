import { defHttp } from "@/utils/http";
import { getAppEnvConfig } from '@/utils/env';

export const getListData = (params: any) =>
  defHttp.get({ url: "/news/listData", params });

export const getRandomListData = (params: any) =>
  defHttp.get({ url: "/news/randomListData", params });

export const getNewsDetail = (params: any) =>
  defHttp.get({ url: "/news/detail", params });
