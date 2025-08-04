import { openWindow } from '../index';
import { dataURLtoBlob, urlToBase64 } from './base64Conver';
import JSZip from 'jszip';
import FileSaver from 'file-saver';
import { FileUpload } from '@/api/upload';
import { getAppEnvConfig } from '@/utils/env';

const { apiUrl } = getAppEnvConfig();

/**
 * Download online pictures
 * @param url
 * @param filename
 * @param mime
 * @param bom
 */
export function downloadByOnlineUrl(url: string, filename: string, mime?: string, bom?: BlobPart) {
  urlToBase64(url).then((base64) => {
    downloadByBase64(base64, filename, mime, bom);
  });
}

/**
 * Download pictures based on base64
 * @param buf
 * @param filename
 * @param mime
 * @param bom
 */
export function downloadByBase64(buf: string, filename: string, mime?: string, bom?: BlobPart) {
  const base64Buf = dataURLtoBlob(buf);
  downloadByData(base64Buf, filename, mime, bom);
}

/**
 * Download according to the background interface file stream
 * @param {*} data
 * @param {*} filename
 * @param {*} mime
 * @param {*} bom
 */
export function downloadByData(data: BlobPart, filename: string, mime?: string, bom?: BlobPart) {
  const blobData = typeof bom !== 'undefined' ? [bom, data] : [data];
  const blob = new Blob(blobData, { type: mime || 'application/octet-stream' });
  if (typeof window.navigator.msSaveBlob !== 'undefined') {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    const blobURL = window.URL.createObjectURL(blob);
    const tempLink = document.createElement('a');
    tempLink.style.display = 'none';
    tempLink.href = blobURL;
    tempLink.setAttribute('download', filename);
    if (typeof tempLink.download === 'undefined') {
      tempLink.setAttribute('target', '_blank');
    }
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    window.URL.revokeObjectURL(blobURL);
  }
}

/**
 * Download file according to file address
 * @param {*} sUrl
 */
export function downloadByUrl({
  url,
  target = '_blank',
  fileName,
  isDownload = true,
  isXhr = false, //通过接口请求下载
}: {
  url: string;
  target?: TargetContext;
  fileName?: string;
  isDownload?: boolean;
  isXhr?: boolean;
}): boolean {
  // 新方法，解决文件名无法命名问题
  const link = document.createElement('a');
  link.href = url;
  link.target = target;
  link.download = fileName || url.substring(url.lastIndexOf('/') + 1, url.length);

  if (isXhr) {
    //通过接口请求下载  使用旧下载方法
    if (isDownload && document.createEvent) {
      const e = document.createEvent('MouseEvents');
      e.initEvent('click', true, true);
      link.dispatchEvent(e);
      return true;
    }
  }

  // 下载
  if (isDownload && URL.createObjectURL) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';

    xhr.onload = function () {
      link.href = URL.createObjectURL(xhr.response);

      document.body.appendChild(link);
      link.click();
      link.remove();
    };

    xhr.open('GET', link.pathname);
    xhr.send();

    return true;
  }

  // 预览
  if (url.indexOf('?') === -1) {
    url += '?download';
  }

  openWindow(url, { target });
  return true;

  //旧方法
  // const isChrome = window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  // const isSafari = window.navigator.userAgent.toLowerCase().indexOf('safari') > -1;

  // if (/(iP)/g.test(window.navigator.userAgent)) {
  //   console.error('Your browser does not support download!');
  //   return false;
  // }
  // if (isChrome || isSafari) {
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.target = target;

  //   if (link.download !== undefined) {
  //     link.download = fileName || url.substring(url.lastIndexOf('/') + 1, url.length);
  //   }

  //   if (isDownload && document.createEvent) {
  //     const e = document.createEvent('MouseEvents');
  //     e.initEvent('click', true, true);
  //     link.dispatchEvent(e);
  //     return true;
  //   }
  // }
  // if (url.indexOf('?') === -1) {
  //   url += '?download';
  // }

  // openWindow(url, { target });
  // return true;
}

function getBlob(url: string): Promise<Blob> {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      }
    };
    xhr.send();
  });
}
function handleDownload(record: FileUpload) {
  const { fileUrl } = record;
  let url = fileUrl || '';
  if (url.indexOf('://') == -1) {
    url = apiUrl + url;
  }
  downloadByUrl({ url, fileName: record?.fileName });
}

export function downAll(data: any) {
  if (!!data && data.length == 1) {
    handleDownload(data[0]);
  } else {
    const zip = new JSZip(); //初始化 JSZip
    for (let i = 0; i < data.length; i++) {
      const obj = data[i];
      zip.file(obj.fileName, getBlob(apiUrl + obj.fileUrl));
    }
    zip.generateAsync({ type: 'blob' }).then(function (content: Blob) {
      let fileName = '相关附件';
      if (!!data && !!data[0]) {
        fileName = data[0].fileName + '等文件';
      }
      //使用blob下载zip
      FileSaver.saveAs(content, fileName + '.zip');
    });
  }
}
