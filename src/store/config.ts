import { getAppEnvConfig } from '@/utils/env';
import { useI18n } from '@/locales/useI18n';

const { t } = useI18n();

const { CDN_URL } = getAppEnvConfig();

export const menuTree = [
  {
    "title": 'index.routes.home',
    "name": t('index.routes.home'),
    "description": "",
    "pId": "0",
    "id": "A2001",
    "inMenu": "1",
    "path": "/",
  },
  {
    "title": 'index.routes.why',
    "name": t('index.routes.why'),
    "description": "",
    "pId": "0",
    "id": "A2002",
    "inMenu": "1",
    "path": "/why_electric",
  },
  {
    "title": 'index.routes.about',
    "name": t('index.routes.about'),
    "description": "",
    "pId": "0",
    "id": "A2003",
    "inMenu": "1",
    "path": "/#about_us",
  },
];
export const bannerListData = [
  {
    title: 'V9',
    img: CDN_URL + '/resource/images/banner_V9.png',
    docUrl: CDN_URL + '/resource/doc/E_STAR_V9.pdf?v=1.1',
    videoUrl: CDN_URL + '/resource/video/V9.mp4',
    content: '',
  },
  {
    title: 'T',
    img: CDN_URL + '/resource/images/banner_T.png',
    docUrl: CDN_URL + '/resource/doc/E_STAR_T.pdf?v=1.1',
    videoUrl: CDN_URL + '/resource/video/T.mp4',
    content: '',
  },
  {
    title: 'V5',
    img: CDN_URL + '/resource/images/banner_V5.png',
    docUrl: CDN_URL + '/resource/doc/E_STAR_V5.pdf?v=1.1',
    videoUrl: CDN_URL + '/resource/video/V5.mp4',
    content: '',
  },
  {
    title: 'G050',
    img: CDN_URL + '/resource/images/banner_G050.png',
    docUrl: CDN_URL + '/resource/doc/G050-L.pdf?v=1.1',
    docUrl1: CDN_URL + '/resource/doc/G050P-L.pdf?v=1.1',
    videoUrl: CDN_URL + '/resource/video/G050.mp4?v=1.0',
    content: '',
  },
  {
    title: 'G105',
    img: CDN_URL + '/resource/images/banner_G105.png',
    docUrl: CDN_URL + '/resource/doc/G105-3.pdf?v=1.1',
    videoUrl: CDN_URL + '/resource/video/G105.mp4',
    content: '',
  },
];
// export const vehiclesBanner = [
//   {
//     title: 'Van',
//     // img: vehicle1_1,
//     content: '',
//   },
//   {
//     title: 'Cab',
//     // img: vehicle1_2,
//     content: '',
//   },
//   {
//     title: '4X4',
//     // img: vehicle1_3,
//     content: '',
//   },
//   {
//     title: 'CNG',
//     // img: vehicle1_4,
//     content: '',
//   }
// ];
