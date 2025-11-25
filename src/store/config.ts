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
    id: '202511032002',
    title: 'SENSE eLCV Shines at Greek Logistics Expo, Star Products Attract Widespread Attention',
    description: 'Athens, October 18–20, 2025– The 10th edition of the “Supply Chain & Logistics” exhibition, alongside the 5th “Cargo Truck & Van Expo,” successfully convened in Athens, Greece, bringing together over 300 exhibitors from around the globe. A clear highlight of the event was new energy commercial vehicles, underscoring the growing industry shift toward clean-energy logistics solutions.',
    createDate: "2025-11-03 20:02",
    image: CDN_URL + '/resource/news/GreekLogisticsExpo_img_5.png',
    content: '<p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-size: 14pt;"><em><span style="font-family: -apple-system; color: #000000; font-style: italic; background: #ffffff;">Athens, October 18&ndash;20, 2025</span></em><span style="font-family: -apple-system; color: #000000; background: #ffffff;"><span style="font-family: -apple-system;">&ndash; The 10th edition of the &ldquo;Supply Chain &amp; Logistics&rdquo; exhibition, alongside the 5th &ldquo;Cargo Truck &amp; Van Expo,&rdquo; successfully convened in Athens, Greece, bringing together over 300 exhibitors from around the globe. A clear highlight of the event was new energy commercial vehicles, underscoring the growing industry shift toward clean-energy logistics solutions.</span></span></span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><img src="'+ CDN_URL + '/resource/news/GreekLogisticsExpo_img_1.png" /></span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;">SENSEMOTOR showcased three leading new energy commercial vehicles: the medium-to-large van DONGFENG eSTAR V9, the compact van Wuling-Linxys G050-L, and its pickup derivative, the G050P-L. Compared to conventional fuel-powered models, these electric vehicles can achieve operational savings of &euro;8&ndash;12 per 100 kilometers&mdash;a compelling economic advantage that captured the attention of numerous trade visitors.</span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-size: 14pt;"><span style="font-family: -apple-system; color: #000000; background: #ffffff;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><img style="width: 60%" src="' + CDN_URL + '/resource/news/GreekLogisticsExpo_img_2.png" /></span></span></span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-size: 14pt;"><span style="font-family: -apple-system; color: #000000; background: #ffffff;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><img style="width: 60%" src="' + CDN_URL + '/resource/news/GreekLogisticsExpo_img_3.png" /></span></span></span></span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;">The DONGFENG eSTAR V9 attracted strong interest from major logistics firms and retail chains across Greece and neighboring markets, thanks to its robust construction, high-capacity 100 kWh CATL battery, and generous cargo volume of 11.9 m&sup3;.</span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-size: 14pt;"><span style="font-family: -apple-system; color: #000000; background: #ffffff;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><img style="width: 100%" src="' + CDN_URL + '/resource/news/GreekLogisticsExpo_img_4.png" /></span></span></span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-size: 14pt;"><span style="font-family: -apple-system; color: #000000; background: #ffffff;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><img style="width: 100%" src="' + CDN_URL + '/resource/news/GreekLogisticsExpo_img_5.png" /></span></span></span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-size: 14pt;"><span style="font-family: -apple-system; color: #000000; background: #ffffff;">Meanwhile, the Wuling-Linxys G050-L and G050P-L emerged as standout products of the exhibition. Designed specifically for the unique demands of the Greek market, the compact van combines a narrow 1.47-meter body with an exceptionally tight turning radius of just 4.4 meters. Equipped with practical features such as front and rear </span><span style="font-family: -apple-system; color: #000000; background: #ffffff;"><span style="font-family: -apple-system;">radars</span></span><span style="font-family: -apple-system; color: #000000; background: #ffffff;">&nbsp;and a rearview camera, it is ideally suited for navigating the narrow, winding streets of Greek historic centers and island villages, making it a reliable partner for urban and last-mile delivery operations.</span></span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><span style="font-size: 14pt;"><span style="font-family: -apple-system; color: #000000; background: #ffffff;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><img style="width: 100%" src="' + CDN_URL + '/resource/news/GreekLogisticsExpo_img_6.png" /></span></span></span></span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><span style="font-size: 14pt;"><span style="font-family: -apple-system; color: #000000; background: #ffffff;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><img style="width: 100%" src="' + CDN_URL + '/resource/news/GreekLogisticsExpo_img_7.png" /></span></span></span></span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><span style="font-size: 14pt;"><span style="font-family: -apple-system; color: #000000; background: #ffffff;"><span style="font-family: -apple-system; color: #000000; background: #ffffff;"><span style="font-family: -apple-system; color: #000000; font-size: 14pt; background: #ffffff;"><img style="width: 100%" src="' + CDN_URL + '/resource/news/GreekLogisticsExpo_img_8.png" /></span></span></span></span></span></p><p style="text-align: left; margin-top: 3pt; margin-bottom: 3pt; font-family: Arial; color: #333333; font-size: 11pt;"><span style="font-size: 14pt;"><span style="font-family: -apple-system; color: #000000; background: #ffffff;">SENSEMOTOR has further strengthened its local presence by entering a strategic partnership with PJ Condellis S.A., a company with over a century of industry experience in Greece. This collaboration will facilitate the introduction of advanced Chinese electric commercial vehicles to the region, backed by comprehensive, responsive pre- and after-sales support. Guided by the vision that &ldquo;quality enhances life and technology protects nature,&rdquo; SENSEMOTOR is committed to driving the evolution of smarter, cleaner, and safer logistics&mdash;helping businesses transition efficiently into the new energy era.</span><span style="font-family: Arial; color: #333333;">&nbsp;</span></span></p><p style="margin-bottom: 50px"></p>',
    weight: 0,
  },
  {
    id: '202511250918',
    title: "Commercial Electric Vans Really Are Less Expensive in Europe in 2025: Here's Why",
    description: "Switching to electric vans (EVs) might seem pricey upfront, but in 2025, they're often cheaper long-term than diesel vans across Europe. With lower fuel, maintenance costs, and generous incentives, EVs can save up to 25% per km in total cost of ownership (TCO), potentially €13.1 billion for businesses by 2030.",
    createDate: "2025-11-25 09:18",
    image: CDN_URL + '/resource/news/news_G050.png',
    content: `<div class="document"><div class="section"><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 0pt;"><span style="font-size: 11pt; color: #000000; vertical-align: baseline;" data-font-family="sans-serif">Switching to electric vans (EVs) might seem pricey upfront, but in 2025, they're often cheaper long-term than diesel vans across Europe. With lower fuel, maintenance costs, and generous incentives, EVs can save up to 25% per km in total cost of ownership (TCO), potentially &euro;13.1 billion for businesses by 2030. </span></p><p class="paragraph text-align-type-justify" style="text-align: center; margin: 0pt;"><span class="image-wrapper" style="display: inline-block; overflow: hidden; transform: rotate(0deg); width: 554.133px; height: 279.953px;"><img id="7356fef4" style="margin: 10px auto; width: 554.133px; height: 279.953px;" src="${CDN_URL}/resource/news/news_G050.png" width="554.133" height="279.953" /></span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 0pt;"><span style="font-size: 11pt; color: #000000; vertical-align: baseline;" data-font-family="sans-serif">This shift is driven by falling battery prices, stricter emissions regulations, and expanding charging infrastructure, making EVs not just eco-friendly but a smart financial choice for fleets in delivery, logistics, and trades.Cost BreakdownTo understand why, let's dive into the key components of TCO, which covers purchase, operation, and ownership over a van's life. Data from European studies shows EVs are increasingly competitive, especially in high-mileage scenarios.</span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 0pt;"><span style="font-family: Wingdings;"> <span style="font-size: 11pt; color: #333333; vertical-align: baseline;">●<span style="font-family: 'Times New Roman';">&nbsp;</span></span></span><span style="font-size: 11pt; color: #000000; vertical-align: baseline;" data-font-family="sans-serif">Upfront CostsVehicle Purchase: </span><span style="font-size: 11pt; color: #000000; vertical-align: baseline;" data-font-family="sans-serif">Big </span><span style="font-size: 11pt; color: #000000; vertical-align: baseline;" data-font-family="sans-serif">EVs typically start at around &euro;50,000 in Europe, compared to &euro;45,000 for diesel equivalents.</span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 8pt 0pt 0pt;"><span style="font-family: Wingdings;"> <span style="font-size: 11pt; color: #333333; vertical-align: baseline;">●<span style="font-family: 'Times New Roman';">&nbsp;</span></span></span><span style="font-size: 11pt; color: #000000; vertical-align: baseline;" data-font-family="sans-serif"> Add VAT (e.g., 24% in Greece), and the gap narrows further with incentives.Charging Infrastructure: Installing a Level 2 charger costs &euro;2,000-&euro;3,000, but rebates from EU programs or national schemes can cut this by half or more, making it a one-time investment that pays off quickly. </span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 8pt 0pt 0pt;"><span style="font-family: Wingdings;"> <span style="font-size: 11pt; color: #333333; vertical-align: baseline;">●<span style="font-family: 'Times New Roman';">&nbsp;</span></span></span><span style="font-size: 11pt; color: #000000; vertical-align: baseline;" data-font-family="sans-serif">Incentives: Europe's patchwork of subsidies is a game-changer. In Greece, for instance, businesses get 30% off (up to &euro;8,000) for the first 20 vehicles, or 20% (up to &euro;6,000) for more, with an extra &euro;4,000 for island-based fleets. </span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 8pt 0pt 0pt;"><span style="font-size: 11pt; color: #000000; vertical-align: baseline;" data-font-family="sans-serif"> Other perks include tax exemptions on registration and lower CO2-based taxes, reducing upfront costs by &euro;5,000-&euro;10,000 or more. </span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 8pt 0pt 0pt;"><span style="font-size: 11pt; color: #000000; vertical-align: baseline;" data-font-family="sans-serif"> Similar programs exist in Germany (&euro;4,500 BAFA bonus) and France (&euro;5,000 ecological bonus), but these may phase down post-2025&mdash;timing is key. </span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 0pt;"><span style="font-family: Wingdings;"> <span style="font-size: 11pt; color: #333333; vertical-align: baseline;">●<span style="font-family: 'Times New Roman';">&nbsp;</span></span></span><span style="font-size: 11pt; color: #000000; vertical-align: baseline;" data-font-family="sans-serif">Operating CostsEnergy: Electricity beats diesel hands down. In Greece, diesel averages &euro;1.56/liter in November 2025, while business electricity is around &euro;0.10-&euro;0.12/kWh. </span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 0pt;"><span style="font-size: 11pt; color: #000000; vertical-align: baseline;" data-font-family="sans-serif"> For 20,000 km annually, EVs might cost &euro;600-&euro;800 in energy versus &euro;2,000+ for diesel&mdash;saving over &euro;1,400/year.</span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 8pt 0pt 0pt;"><span style="font-family: Wingdings;"> <span style="font-size: 11pt; color: #333333; vertical-align: baseline;">●<span style="font-family: 'Times New Roman';">&nbsp;</span></span></span><span style="font-size: 11pt; color: #000000; vertical-align: baseline;" data-font-family="sans-serif"> Across Europe, EV energy runs &euro;3-&euro;5/100km vs. &euro;18-&euro;20 for diesel.Maintenance: With no oil changes, fewer brakes (thanks to regenerative braking), and simpler mechanics, EVs slash maintenance by 20-40%, saving &euro;11,000-&euro;14,000 over a van's life in markets like Greece. </span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 8pt 0pt 0pt;"><span style="font-family: Wingdings;"> <span style="font-size: 11pt; color: #333333; vertical-align: baseline;">●<span style="font-family: 'Times New Roman';">&nbsp;</span></span></span><span style="font-size: 11pt; color: #000000; vertical-align: baseline;" data-font-family="sans-serif"> Charger upkeep adds minimal costs, around &euro;300/year.Other Factors: Insurance may be slightly higher initially, but resale values for EVs are rising, and reduced downtime boosts productivity. Overall, studies indicate 20-30% lower TCO over five years, with Greece among the most favorable due to low electricity prices and strong incentives. </span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 0pt;"><span style="font-family: Wingdings;"> <span style="font-size: 11pt; color: #333333; vertical-align: baseline;">●<span style="font-family: 'Times New Roman';">&nbsp;</span></span></span><span style="font-size: 11pt; color: #000000; vertical-align: baseline;" data-font-family="sans-serif">These savings amplify for urban fleets with stop-start driving, where EVs excel in efficiency.Let&rsquo;s Look at an Example in GreeceTake a delivery service in Athens, Greece, driving 100 km daily, five days a week (about 26,000 km/year). Over seven years, compare a 2025 Ford E-Transit (electric) to a diesel Transit, using local data.Assumptions (Greece-Specific for 2025):Prices: Diesel: &euro;45,000; E-Transit: &euro;50,000 (before incentives). </span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 0pt;"><span style="font-size: 11pt; font-weight: bold; color: #000000; vertical-align: baseline;">&nbsp;</span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 8pt 0pt 0pt;"><span style="font-family: Wingdings;"> <span style="font-size: 11pt; color: #333333; vertical-align: baseline;">●<span style="font-family: 'Times New Roman';">&nbsp;</span></span></span><span style="font-size: 11pt; font-weight: bold; color: #000000; vertical-align: baseline;" data-font-family="sans-serif">Incentives: &euro;8,000 subsidy for EV (30% for small fleets). </span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 8pt 0pt 0pt;"><span style="font-family: Wingdings;"> <span style="font-size: 11pt; color: #333333; vertical-align: baseline;">●<span style="font-family: 'Times New Roman';">&nbsp;</span></span></span><span style="font-size: 11pt; font-weight: bold; color: #000000; vertical-align: baseline;" data-font-family="sans-serif">VAT: 24% in Greece.</span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 8pt 0pt 0pt;"><span style="font-family: Wingdings;"> <span style="font-size: 11pt; color: #333333; vertical-align: baseline;">●<span style="font-family: 'Times New Roman';">&nbsp;</span></span></span><span style="font-size: 11pt; font-weight: bold; color: #000000; vertical-align: baseline;" data-font-family="sans-serif">Charger: &euro;2,800 installed, minus &euro;1,000 rebate = &euro;1,800 net.</span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 8pt 0pt 0pt;"><span style="font-family: Wingdings;"> <span style="font-size: 11pt; color: #333333; vertical-align: baseline;">●<span style="font-family: 'Times New Roman';">&nbsp;</span></span></span><span style="font-size: 11pt; font-weight: bold; color: #000000; vertical-align: baseline;" data-font-family="sans-serif">Efficiency: Diesel: 8 l/100km; EV: 25 kWh/100km.</span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 8pt 0pt 0pt;"><span style="font-family: Wingdings;"> <span style="font-size: 11pt; color: #333333; vertical-align: baseline;">●<span style="font-family: 'Times New Roman';">&nbsp;</span></span></span><span style="font-size: 11pt; font-weight: bold; color: #000000; vertical-align: baseline;" data-font-family="sans-serif">Costs: Diesel: &euro;1.56/liter; Electricity: &euro;0.11/kWh (business rate). </span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 8pt 0pt 0pt;"><span style="font-family: Wingdings;"> <span style="font-size: 11pt; color: #333333; vertical-align: baseline;">●<span style="font-family: 'Times New Roman';">&nbsp;</span></span></span><span style="font-size: 11pt; font-weight: bold; color: #000000; vertical-align: baseline;" data-font-family="sans-serif">Maintenance: Diesel: &euro;1,200/year; EV: &euro;900/year (25% less).</span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 8pt 0pt 0pt;"><span style="font-family: Wingdings;"> <span style="font-size: 11pt; color: #333333; vertical-align: baseline;">●<span style="font-family: 'Times New Roman';">&nbsp;</span></span></span><span style="font-size: 11pt; font-weight: bold; color: #000000; vertical-align: baseline;" data-font-family="sans-serif">Inflation: Diesel 3.5%; Electricity 2.5%; Maintenance 3%. 5% discount rate.</span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 0pt;"><span style="font-family: Wingdings;"> <span style="font-size: 11pt; color: #333333; vertical-align: baseline;">●<span style="font-family: 'Times New Roman';">&nbsp;</span></span></span><span style="font-size: 11pt; font-weight: bold; color: #000000; vertical-align: baseline;" data-font-family="sans-serif">The NumbersUpfront, the EV is &euro;5,000 higher, but subsidies make it &euro;3,000 cheaper net. Over seven years:Energy Savings: EV ~&euro;1,500/year lower.</span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 8pt 0pt 0pt;"><span style="font-family: Wingdings;"> <span style="font-size: 11pt; color: #333333; vertical-align: baseline;">●<span style="font-family: 'Times New Roman';">&nbsp;</span></span></span><span style="font-size: 11pt; font-weight: bold; color: #000000; vertical-align: baseline;" data-font-family="sans-serif">Maintenance Savings: ~&euro;300/year.</span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 8pt 0pt 0pt;"><span style="font-family: Wingdings;"> <span style="font-size: 11pt; color: #333333; vertical-align: baseline;">●<span style="font-family: 'Times New Roman';">&nbsp;</span></span></span><span style="font-size: 11pt; font-weight: bold; color: #000000; vertical-align: baseline;" data-font-family="sans-serif">Break-Even: 2-3 years, faster with high mileage.</span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 8pt 0pt 0pt;"><span style="font-family: Wingdings;"> <span style="font-size: 11pt; color: #333333; vertical-align: baseline;">●<span style="font-family: 'Times New Roman';">&nbsp;</span></span></span><span style="font-size: 11pt; font-weight: bold; color: #000000; vertical-align: baseline;" data-font-family="sans-serif">Lifetime Savings: &euro;14,000-&euro;16,000 net, aligning with European averages but boosted by Greece's subsidies and energy prices. </span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 8pt 0pt 0pt;"><span style="font-size: 11pt; font-weight: bold; color: #000000; vertical-align: baseline;">&nbsp;</span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 0pt;"><span style="font-size: 11pt; color: #000000; vertical-align: baseline;" data-font-family="sans-serif">In short, for Greek businesses, EVs flatten costs quickly while diesel expenses rise with fuel volatility.The market is thriving, with BEV vans at 9.5% share in H1 2025 and projections for 3.9 million sales by 2030. Results vary by mileage, location, and patterns&mdash;use TCO tools like the EU Alternative Fuels Observatory for personalization.</span></p><p class="paragraph text-align-type-justify" style="text-align: justify; margin: 0pt;"><span style="font-size: 11pt; color: #000000; vertical-align: baseline;" data-font-family="sans-serif"> Challenges like charging access exist, but infrastructure is growing rapidly.Ready to Get Started?2025 is prime for European fleets, especially in subsidy-rich spots like Greece&mdash;before incentives taper. Electric vans: greener, quieter, and cheaper overall. Contact dealers or run your numbers today!</span></p></div></div><div data-version="3.0.0" data-hash="212a7336f174363e33d42d8784d5c120">&nbsp;</div>`,
    weight: 1,
  },
]