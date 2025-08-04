import { defHttp } from "@/utils/http";
import { getAppEnvConfig } from '@/utils/env';

const { adminPath } = getAppEnvConfig();

// export const listDataApi = (params: any) =>
//   defHttp.get("/gwdg/a/recruit/recruitInfo/listData", params });

export const saveDataApi = (data: any) =>
  defHttp.post({ url: adminPath + "/recruit/recruitInfo/save", data });

export const deleteDataApi = (params: any) =>
  defHttp.post({ url: adminPath + "/recruit/recruitInfo/delete", params });

export const importDataApi = (params: any) =>
  defHttp.post({ url: adminPath + "/recruit/recruitInfo/importData", params });

export const importTemplateDataApi = (params: any) =>
  defHttp.get({ url: adminPath + "/recruit/recruitInfo/importTemplate", params });
  
// export const enumsDataApi = (params: any) =>
//   defHttp.get({ url: adminPath + "/recruit/recruitInfo/enums?findAll=true", params });

export const listDataApi = () => resListData;
export const enumsDataApi = () => enumsDataApi;