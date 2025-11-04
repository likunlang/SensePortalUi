// import banner_G105 from '@/assets/newImages/banner_G105.png';
// import banner_V5 from '@/assets/newImages/banner_V5.png';
// import banner_G050 from '@/assets/newImages/banner_G050.png';
// import banner_T from '@/assets/newImages/banner_T.png';
// import banner_V9 from '@/assets/newImages/banner_V9.png';

// import vehicle1_1 from '@/assets/newImages/vehicle1_1.jpg';
// import vehicle1_2 from '@/assets/newImages/vehicle1_2.jpg';
// import vehicle1_3 from '@/assets/newImages/vehicle1_3.jpg';
// import vehicle1_4 from '@/assets/newImages/vehicle1_4.jpg';

import { getAppEnvConfig } from '@/utils/env';

const { CDN_URL } = getAppEnvConfig();

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
  {
    "title": "Home",
    "name": "Home",
    "description": "",
    "pId": "0",
    "id": "A2001",
    "inMenu": "1",
    "path": "/",
  },
  {
    "title": "News",
    "name": "News",
    "description": "",
    "pId": "0",
    "id": "A2002",
    "inMenu": "1",
    "path": "/news",
  },
  {
    "title": "About Us",
    "name": "About Us",
    "description": "",
    "pId": "0",
    "id": "A2003",
    "inMenu": "1",
    "path": "/#about_us",
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
    img: CDN_URL + '/resource/images/banner_V9.png',
    docUrl: CDN_URL + '/resource/doc/V9.png',
    videoUrl: CDN_URL + '/resource/video/V9.mp4',
    content: '',
  },
  {
    title: '轮播图4',
    img: CDN_URL + '/resource/images/banner_T.png',
    docUrl: CDN_URL + '/resource/doc/T.png',
    videoUrl: CDN_URL + '/resource/video/T.mp4',
    content: '',
  },
  {
    title: '轮播图2',
    img: CDN_URL + '/resource/images/banner_V5.png',
    docUrl: CDN_URL + '/resource/doc/V5.png',
    videoUrl: CDN_URL + '/resource/video/V5.mp4',
    content: '',
  },
  {
    title: '轮播图3',
    img: CDN_URL + '/resource/images/banner_G050.png',
    docUrl: CDN_URL + '/resource/doc/G050-L.pdf',
    videoUrl: CDN_URL + '/resource/video/G050.mp4?v=1.0',
    content: '',
  },
  {
    title: '轮播图1',
    img: CDN_URL + '/resource/images/banner_G105.png',
    docUrl: CDN_URL + '/resource/doc/G105-3.pdf',
    videoUrl: CDN_URL + '/resource/video/G105.mp4',
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
export const newsListData = [
  {
    id: '001',
    title: 'SENSE eLCV Shines at Greek Logistics Expo, Star Products Attract Widespread Attention',
    description: 'Athens, October 18–20, 2025– The 10th edition of the “Supply Chain & Logistics” exhibition, alongside the 5th “Cargo Truck & Van Expo,” successfully convened in Athens, Greece, bringing together over 300 exhibitors from around the globe. A clear highlight of the event was new energy commercial vehicles, underscoring the growing industry shift toward clean-energy logistics solutions.',
    createDate: "2025-11-03 20:02",
    image: CDN_URL + '/resource/news/GreekLogisticsExpo_img_5.png',
    content: '<p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-size: 14pt;"><em><span style="font-family: -apple-system; color: #000000; font-style: italic; background: #ffffff;">Athens, October 18&ndash;20, 2025</span></em><span style="font-family: -apple-system; color: #000000; background: #ffffff;"><span style="font-family: -apple-system;">&ndash; The 10th edition of the &ldquo;Supply Chain &amp; Logistics&rdquo; exhibition, alongside the 5th &ldquo;Cargo Truck &amp; Van Expo,&rdquo; successfully convened in Athens, Greece, bringing together over 300 exhibitors from around the globe. A clear highlight of the event was new energy commercial vehicles, underscoring the growing industry shift toward clean-energy logistics solutions.</span></span></span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><img src="'+ CDN_URL + '/resource/news/GreekLogisticsExpo_img_1.png" /></span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;">SENSEMOTOR showcased three leading new energy commercial vehicles: the medium-to-large van DONGFENG eSTAR V9, the compact van Wuling-Linxys G050-L, and its pickup derivative, the G050P-L. Compared to conventional fuel-powered models, these electric vehicles can achieve operational savings of &euro;8&ndash;12 per 100 kilometers&mdash;a compelling economic advantage that captured the attention of numerous trade visitors.</span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-size: 14pt;"><span style="font-family: -apple-system; color: #000000; background: #ffffff;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><img style="width: 60%" src="' + CDN_URL + '/resource/news/GreekLogisticsExpo_img_2.png" /></span></span></span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-size: 14pt;"><span style="font-family: -apple-system; color: #000000; background: #ffffff;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><img style="width: 60%" src="' + CDN_URL + '/resource/news/GreekLogisticsExpo_img_3.png" /></span></span></span></span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;">The DONGFENG eSTAR V9 attracted strong interest from major logistics firms and retail chains across Greece and neighboring markets, thanks to its robust construction, high-capacity 100 kWh CATL battery, and generous cargo volume of 11.9 m&sup3;.</span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-size: 14pt;"><span style="font-family: -apple-system; color: #000000; background: #ffffff;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><img style="width: 100%" src="' + CDN_URL + '/resource/news/GreekLogisticsExpo_img_4.png" /></span></span></span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-size: 14pt;"><span style="font-family: -apple-system; color: #000000; background: #ffffff;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><img style="width: 100%" src="' + CDN_URL + '/resource/news/GreekLogisticsExpo_img_5.png" /></span></span></span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-size: 14pt;"><span style="font-family: -apple-system; color: #000000; background: #ffffff;">Meanwhile, the Wuling-Linxys G050-L and G050P-L emerged as standout products of the exhibition. Designed specifically for the unique demands of the Greek market, the compact van combines a narrow 1.47-meter body with an exceptionally tight turning radius of just 4.4 meters. Equipped with practical features such as front and rear </span><span style="font-family: -apple-system; color: #000000; background: #ffffff;"><span style="font-family: -apple-system;">radars</span></span><span style="font-family: -apple-system; color: #000000; background: #ffffff;">&nbsp;and a rearview camera, it is ideally suited for navigating the narrow, winding streets of Greek historic centers and island villages, making it a reliable partner for urban and last-mile delivery operations.</span></span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><span style="font-size: 14pt;"><span style="font-family: -apple-system; color: #000000; background: #ffffff;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><img style="width: 100%" src="' + CDN_URL + '/resource/news/GreekLogisticsExpo_img_6.png" /></span></span></span></span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><span style="font-size: 14pt;"><span style="font-family: -apple-system; color: #000000; background: #ffffff;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><img style="width: 100%" src="' + CDN_URL + '/resource/news/GreekLogisticsExpo_img_7.png" /></span></span></span></span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><span style="font-size: 14pt;"><span style="font-family: -apple-system; color: #000000; background: #ffffff;"><span style="font-family: -apple-system; color: #000000; background: #ffffff;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><img style="width: 100%" src="' + CDN_URL + '/resource/news/GreekLogisticsExpo_img_8.png" /></span></span></span></span></span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-size: 14pt;"><span style="font-family: -apple-system; color: #000000; background: #ffffff;">SENSEMOTOR has further strengthened its local presence by entering a strategic partnership with PJ Condellis S.A., a company with over a century of industry experience in Greece. This collaboration will facilitate the introduction of advanced Chinese electric commercial vehicles to the region, backed by comprehensive, responsive pre- and after-sales support. Guided by the vision that &ldquo;quality enhances life and technology protects nature,&rdquo; SENSEMOTOR is committed to driving the evolution of smarter, cleaner, and safer logistics&mdash;helping businesses transition efficiently into the new energy era.</span><span style="font-family: Arial; color: #333333;">&nbsp;</span></span></p><p style="margin-bottom: 50px"></p>',
    weight: 0,
  },
]