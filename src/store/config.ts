// import banner_G105 from '@/assets/newImages/banner_G105.png';
// import banner_V5 from '@/assets/newImages/banner_V5.png';
// import banner_G050 from '@/assets/newImages/banner_G050.png';
// import banner_T from '@/assets/newImages/banner_T.png';
// import banner_V9 from '@/assets/newImages/banner_V9.png';

// import vehicle1_1 from '@/assets/newImages/vehicle1_1.jpg';
// import vehicle1_2 from '@/assets/newImages/vehicle1_2.jpg';
// import vehicle1_3 from '@/assets/newImages/vehicle1_3.jpg';
// import vehicle1_4 from '@/assets/newImages/vehicle1_4.jpg';

import { getEnv } from '@/utils/env';

export const CDNUrl = getEnv() === 'development' ? "https://pub-ef972d7a1bcc47888d714e9a2dd3c88b.r2.dev" : "https://assets.senseautos.com";
// dev时  CDNUrl也可以用/resource

export const menuTree = [
  // {
  //   "title": "Vehicles",
  //   "name": "Vehicles",
  //   "description": "",
  //   "pId": "0",
  //   "id": "A2000",
  //   "inMenu": "1",
  //   "path": "/vehicles?id=A2000001",
  //   "children": [
  //     {
  //       "title": "WuLing D5",
  //       "name": "WuLing D5",
  //       "description": "",
  //       "pId": "A2000",
  //       "id": "A2000001",
  //       "inMenu": "1",
  //       "path": "/vehicles?id=A2000001",
  //       "active": false,
  //       "banners": [],
  //     },
  //     {
  //       "title": "WuLing A7",
  //       "name": "WuLing A7",
  //       "description": "",
  //       "pId": "A2000",
  //       "id": "A2000002",
  //       "inMenu": "1",
  //       "path": "/vehicles?id=A2000002",
  //       "active": false,
  //       "banners": [],
  //     },
  //     {
  //       "title": "DongFengQ8",
  //       "name": "DongFengQ8",
  //       "description": "",
  //       "pId": "A2000",
  //       "id": "A2000003",
  //       "inMenu": "1",
  //       "path": "/vehicles?id=A2000003",
  //       "active": false,
  //       "banners": [],
  //     },
  //     {
  //       "title": "DongFengR5",
  //       "name": "DongFengR5",
  //       "description": "",
  //       "pId": "A2000",
  //       "id": "A2000003",
  //       "inMenu": "1",
  //       "path": "/vehicles?id=A2000003",
  //       "active": false,
  //       "banners": [],
  //     },
  //   ],
  // },
  // {
  //   "title": "services",
  //   "name": "services",
  //   "description": "",
  //   "pId": "0",
  //   "id": "A2001",
  //   "inMenu": "1",
  //   "path": "/services",
  //   "children": [
  //     {
  //       "title": "服务特色",
  //       "name": "服务特色",
  //       "description": "",
  //       "pId": "A2001",
  //       "id": "A2001001",
  //       "inMenu": "1",
  //       "path": "/services",
  //       "active": false,
  //       "banners": [],
  //     },
  //     {
  //       "title": "几大服务市场",
  //       "name": "几大服务市场",
  //       "description": "",
  //       "pId": "A2001",
  //       "id": "A2001002",
  //       "inMenu": "1",
  //       "path": "/services",
  //       "active": false,
  //       "banners": [],
  //     },
  //     {
  //       "title": "合作站点",
  //       "name": "合作站点",
  //       "description": "",
  //       "pId": "A2001",
  //       "id": "A2001003",
  //       "inMenu": "1",
  //       "path": "/services",
  //       "active": false,
  //       "banners": [],
  //     },
  //   ],
  // },
  // {
  //   "title": "News",
  //   "name": "News",
  //   "description": "",
  //   "pId": "0",
  //   "id": "A2002",
  //   "inMenu": "1",
  //   "path": "/news",
  // },
  {
    "title": "About Us",
    "name": "About Us",
    "description": "",
    "pId": "0",
    "id": "A2003",
    "inMenu": "1",
    "path": "#about_us",
    "children": [
      // {
      //   "title": "History",
      //   "name": "History",
      //   "description": "",
      //   "pId": "A2003",
      //   "id": "A2003001",
      //   "inMenu": "1",
      //   "path": "/aboutus#history",
      //   "active": false,
      //   "banners": [],
      // },
      // {
      //   "title": "Menbers",
      //   "name": "Menbers",
      //   "description": "",
      //   "pId": "A2003",
      //   "id": "A2003002",
      //   "inMenu": "1",
      //   "path": "/aboutus#members",
      //   "active": false,
      //   "banners": [],
      // },
      // {
      //   "title": "Contact",
      //   "name": "Contact",
      //   "description": "",
      //   "pId": "A2003",
      //   "id": "A2003003",
      //   "inMenu": "1",
      //   "path": "/aboutus",
      //   "active": false,
      //   "banners": [],
      // },
    ],
  },
];
export const bannerListData = [
  {
    title: '轮播图5',
    img: CDNUrl + '/images/banner_V9.png',
    docUrl: CDNUrl + '/doc/V9.png',
    videoUrl: CDNUrl + '/video/V9.mp4',
    content: '',
  },
  {
    title: '轮播图4',
    img: CDNUrl + '/images/banner_T.png',
    docUrl: CDNUrl + '/doc/T.png',
    videoUrl: CDNUrl + '/video/T.mp4',
    content: '',
  },
  {
    title: '轮播图2',
    img: CDNUrl + '/images/banner_V5.png',
    docUrl: CDNUrl + '/doc/V5.png',
    videoUrl: CDNUrl + '/video/V5.mp4',
    content: '',
  },
  {
    title: '轮播图3',
    img: CDNUrl + '/images/banner_G050.png',
    docUrl: CDNUrl + '/doc/G050.pdf',
    videoUrl: CDNUrl + '/video/G050.mp4?v=1.0',
    content: '',
  },
  {
    title: '轮播图1',
    img: CDNUrl + '/images/banner_G105.png',
    docUrl: CDNUrl + '/doc/G105.pdf',
    videoUrl: CDNUrl + '/video/G105.mp4',
    content: '',
  },
];
export const vehiclesBanner = [
  {
    title: 'Van',
    // img: vehicle1_1,
    content: '',
  },
  {
    title: 'Cab',
    // img: vehicle1_2,
    content: '',
  },
  {
    title: '4X4',
    // img: vehicle1_3,
    content: '',
  },
  {
    title: 'CNG',
    // img: vehicle1_4,
    content: '',
  }
];