<template>
  <div class="home_wrapper">
    <el-carousel arrow="always" trigger="click" height="100vh" :autoplay="true">
      <el-carousel-item v-for="(item, index) in bannerListData" :key="index">
        <div class="banner-img-box" :style="`background-image: url(${item.img});`">
            <div class=" absolute bottom-[8%] sm:bottom-[10%] left-0 right-0 text-center md:px-8 sm:px-6 xs:px-4 ">
              <div>
                <div class="flex justify-center">
                  <button class="
                    outline-0
                    h-8 rounded-[8px] text-base font-medium box-border
                    transition-[background]
                    duration-300
                    bg-transparent border-[1px] border-white text-white hover:bg-white md:hover:b hover:text-black
                    mr-0 ml-0 
                    px-2
                    cursor-pointer
                    flex items-center
                    download-btn
                    " style="margin-left: 0"
                    @click="download(item)"
                  >
                    <svg class="sense-icon" aria-hidden="true">
                      <use xlink:href="#sense-download"></use>
                    </svg>
                  </button>
                  
                  <button class="
                    outline-0
                    h-8 rounded-[8px] text-base font-medium box-border
                    transition-[background]
                    duration-300
                    bg-transparent border-[1px] border-white text-white hover:bg-white md:hover:b hover:text-black
                    mr-0 ml-6 
                    px-2
                    cursor-pointer
                    flex items-center
                    download-btn
                    "
                    v-if="item.videoUrl"
                    @click="viewVideo(item)"
                  >
                    <svg class="sense-icon" aria-hidden="true">
                      <use xlink:href="#sense-caret-right"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <!-- <div class="home_news">
      <div class="sense_container">
        <div class="title">
          <p>
            <a href="javasctipt:;">
              Green logistics, Drive Citylife Better
              <span class="pt-4">
                Lower costs,Less maintenance,Quieter operation,Smoother passage
              </span>
            </a>
          </p>
        </div>
        <div class="contrast-box flex mt-10 w-full px-10">
          <div class="contrast-l mt-8">
            <div class="sample-box flex justify-end items-center">
              <div class="sample-img">
                <img class="inline-block " :src="SampleEv" />
              </div>
              <div class="sample-name">EV</div>
            </div>
            <div class="contrast-container flex flex-col items-end">
              <div class="contrast-item text-right relative  flex items-center justify-end py-2 mb-8 mt-8 pr-4 w-20">
                <span class="contrast-item-tips">€&nbsp;0.04</span>
              </div>
              <div class="contrast-item text-right relative  flex items-center justify-end py-2 mb-8 pr-4 w-80">
                <span class="contrast-item-tips">Up to €&nbsp;8,&nbsp;000</span>
              </div>
              <div class="contrast-item text-right relative  flex items-center justify-end py-2 mb-8 pr-4 w-40">
                <span class="contrast-item-tips">€&nbsp;250 per time</span>
              </div>
              <div class="contrast-item text-right relative  flex items-center justify-end py-2 mb-8 pr-4 w-60">
                <span class="contrast-item-tips">64&nbsp;db</span>
              </div>
              <div class="contrast-item text-right relative  flex items-center justify-end py-2 mb-8 pr-4 w-95">
                <span class="contrast-item-tips">Green Zone Access</span>
              </div>
            </div>
          </div>
          <div class="contrast-c mt-8 flex justify-start flex-col">
            <div class="contrast-key flex items-center">VS</div>
            <div class="contrast-item-container text-center px-4">
              <div class="contrast-item-name flex items-center justify-center py-2 mb-8 mt-8">COST/KM</div>
              <div class="contrast-item-name flex items-center justify-center py-2 mb-8">Car purchase subsidy</div>
              <div class="contrast-item-name flex items-center justify-center py-2 mb-8">Maintenance cost</div>
              <div class="contrast-item-name flex items-center justify-center py-2 mb-8">Noise intensity</div>
              <div class="contrast-item-name flex items-center justify-center py-2 mb-8">City passage authority</div>
            </div>
          </div>
          <div class="contrast-r mt-8">
            <div class="sample-box flex justify-start items-center">
              <div class="sample-name">DIESEL VEHICLE</div>
              <div class="sample-img">
                <img :src="SampleOil" />
              </div>
            </div>
            <div class="contrast-container">
              <div class="contrast-item text-left flex items-center justify-start relative py-2 mb-8 mt-8 pl-4  w-45">
                <span class="contrast-item-tips">€&nbsp;0.35</span>
              </div>
              <div class="contrast-item text-left flex items-center justify-start relative py-2 mb-8 pl-4  w-25">
                <span class="contrast-item-tips absolute overfllow-tips">Little to none</span>
              </div>
              <div class="contrast-item text-left flex items-center justify-start relative py-2 mb-8 pl-4 w-80">
                <span class="contrast-item-tips">€&nbsp;400 per time</span>
              </div>
              <div class="contrast-item text-left flex items-center justify-start relative py-2 mb-8 pl-4 w-85">
                <span class="contrast-item-tips">85&nbsp;db</span>
              </div>
              <div class="contrast-item text-left flex items-center justify-start relative py-2 mb-8 pl-4 w-45">
                <span class="contrast-item-tips">Restricted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="home_add_bg" :style="`background-image: url(${CDNUrl}/images/add_bg.png)`">
      <div class="home_strategy">
        <div class="sense_container bde-section-11-118 bde-section">
          <div class="title">
            <p>
              <a href="javasctipt:;">
                The New Era of New Energy Logistics is Here
                <!-- <span>
                  development strategy
                </span> -->
              </a>
            </p>
          </div>
          <!-- <div class="section-container">
            <h2 class="bde-heading-11-119 bde-heading">
              Services
            </h2>
            <div class="bde-button-11-157 bde-button">
              <a class="breakdance-link button-atom button-atom--custom bde-button__button" href="#" target="_self" data-type="url">
                <span class="button-atom__text">
                  All services
                </span>
              </a>
            </div>
          </div> -->
          <!-- <div class="flex flex-row lg:flex-col flex-wrap mt-10 items-end">
            <div data-y="+=60" class="__gsap_viewport_trigger section3_item relative flex-1 min-w-[30%]  ml-6 mr-6 md:min-w-full lg:mb-6 md:mb-4 active"
            style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1; visibility: inherit;">
              <picture class="flex justify-center aspect-[5/4]">
                <source media="(max-width: 760px)" :srcset="subBanner1">
                  <source media="(max-width: 1280px)" :srcset="subBanner1">
                    <img class="w-full h-full object-cover" loading="lazy" :src="subBanner1" alt="cars">
              </picture>
              <div class="absolute top-[10%] left-0 right-0 flex flex-col items-center">
                <p class="section3_item_title text-2xl md:text-lg text-white font-regular mb-8 md:mb-6 sm:mb-4">
                  Economical
                </p>
                <button class="
                outline-0
                h-10 rounded-[8px] text-base font-medium box-border
                transition-[background]
                duration-300
                hover:border-0
                bg-transparent border-[1.5px] border-white text-white w-[256px] hover:bg-white md:hover:b hover:text-black
                ">
                  了解更多
                </button>
              </div>
            </div>
            <div data-y="+=60" class="__gsap_viewport_trigger section3_item relative flex-1 min-w-[30%] ml-6 mr-6 md:min-w-full lg:mb-6 md:mb-4 active"
            style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1; visibility: inherit;">
              <picture class="flex justify-center aspect-[5/4]">
                <source media="(max-width: 760px)" :srcset="subBanner2">
                  <source media="(max-width: 1280px)" :srcset="subBanner2">
                    <img class="w-full h-full object-cover" loading="lazy" :src="subBanner2" alt="cars">
              </picture>
              <div class="absolute top-[10%] left-0 right-0 flex flex-col items-center">
                <p class="section3_item_title text-2xl md:text-lg text-white font-regular mb-8 md:mb-6 sm:mb-4">
                  Efficient
                </p>
                <button class="
                outline-0
                h-10 rounded-[8px] text-base font-medium box-border
                transition-[background]
                duration-300
                hover:border-0
                bg-transparent border-[1.5px] border-white text-white w-[256px] hover:bg-white md:hover:b hover:text-black
                ">
                  了解更多
                </button>
              </div>
            </div>
            <div data-y="+=60" class="__gsap_viewport_trigger section3_item relative flex-1 min-w-[30%] ml-6 mr-6 md:min-w-full mt-6 lg:mt-0 lg:mb-6 md:mb-4"
            style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1; visibility: inherit;">
              <picture class="flex justify-center aspect-[5/4]">
                <source media="(max-width: 760px)" :srcset="subBanner3">
                  <source media="(max-width: 1280px)" :srcset="subBanner3">
                    <img class="w-full h-full object-cover" loading="lazy" :src="subBanner3" alt="cars">
              </picture>
              <div class="absolute top-[10%] left-0 right-0 flex flex-col items-center">
                <p class="section3_item_title text-2xl md:text-lg text-white font-regular mb-8 md:mb-6 sm:mb-4">
                  Environmental Friendly
                </p>
                <button class="
                outline-0
                h-10 rounded-[8px] text-base font-medium box-border
                transition-[background]
                duration-300
                hover:border-0
                bg-transparent border-[1.5px] border-white text-white w-[256px] hover:bg-white md:hover:b hover:text-black
                ">
                  了解更多
                </button>
              </div>
            </div>
          </div> -->
          <Flex class="home_add" gap="large">
            <div class="item item1">
              <img :src="`${CDNUrl}/images/str_img1.png`" alt="" class="bg">
              <!-- <h4 class="tit">
                Economical
              </h4> -->
              <div class="text_block">
                <h4>
                  Economical
                </h4>
                <p>
                  Lower power and maintenance costs cut logistics fleet expenses
                </p>
                <!-- <a href="javascript:;">
                  查看详情
                  <img src="@/assets/images/more_icon2.png" alt="">
                </a> -->
              </div>
            </div>
            <div class="item item2">
              <img :src="`${CDNUrl}/images/str_img2.png`" alt="" class="bg">
              <!-- <h4 class="tit">
                Efficient
              </h4> -->
              <div class="text_block">
                <h4>
                  Efficient
                </h4>
                <p>
                  Improve operational efficiency Build a high-quality and efficient logistics system
                </p>
                <!-- <a href="javascript:;">
                  查看详情
                  <img src="@/assets/images/more_icon2.png" alt="">
                </a> -->
              </div>
            </div>
            <div class="item item3">
              <img :src="`${CDNUrl}/images/str_img3.png`" alt="" class="bg">
              <!-- <h4 class="tit">
                Environmental Friendly
              </h4> -->
              <div class="text_block">
                <h4>
                  Environmental Friendly
                </h4>
                <p>
                  Reduce emissions of carbon, nitrogen oxide, and particulate matter from vehicles to help achieve carbon neutrality
                </p>
                <!-- <a href="javascript:;">
                  查看详情
                  <img src="@/assets/images/more_icon2.png" alt="">
                </a> -->
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </div>
    <div class="home_center" :style="`background-image: url(${CDNUrl}/images/center_bg.png)`">
      <div class="mask">
      </div>
      <div class="sense_container" id="about_us" style="position: relative;z-index: 999;">
        <div class="title">
          <p>
            <a href="javasctipt:;">
              SenseMotor
              <span class="text-white/80 pt-4">Pioneer in Electric Commercial Vehicle Solutions</span>
            </a>
          </p>
        </div>
        <p class="text-white/70">
          As the Exclusive Regional Official Representative for Dongfeng and Wuling New Energy Vehicles, SenseMotor delivers cutting -edge electric commercial vehicles and innovative logistics solutions throughout Central and Eastern Europe.
        </p>
        <br />
        <p class="text-white/70">
          Our comprehensive ecosystem integrates extensive distribution networks, dedicated technical support, seamless project delivery, and a reliable service station network for electric light trucks and vans.
        </p>
        <br />
        <p class="text-white/70">
          Operating in Poland, Hungary, Greece, and Romania, we empower sustainable logistics and optimize fleet efficiency, driving the future of clean transportation in the region.
        </p>
      </div>
    </div>
  </div>
  
  <div v-if="showVideo" class="fixed top-[0px] left-[0px] bottom-[0px] right-[0px] bg-[#000] bg-opacity-90 flex items-center justify-center z-[10002]">
    <div @click="closeVideo" class="pop-up__close-button-wrapper absolute top-4 right-4 p-3 cursor-pointer bg-light-400 rounded-full z-10 hover:bg-light-430">
      <button class="w-5 h-5" :style="'display: block; background: url('+ closeIcon +') center center / cover;'">
      </button>
    </div>
    <div class="w-full h-auto relative">
      <div>
        <div class="w-full h-auto flex items-center justify-center">
          <video id="banner_video" style="width: 90vw" class="h-auto" controls="" playsinline=""
          disablepictureinpicture="" autoplay muted :poster="poster">
            <source :src="videoSrc" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  export default defineComponent({
    name: 'HOME_PAGE',
    components: {
      Swiper,
      SwiperSlide,
    },
  });
</script>
<script lang="ts" setup>
import { defineComponent, ref, onMounted, reactive, nextTick } from "vue";
import { ElMessage } from "element-plus";
import router from "@/router";
import scrollReveal from 'scrollreveal';
import { useStore } from "@/store/user";
import { cmsArticleListData } from '@/api/cms';
import moment from 'moment';
import { listToTree, findNode } from "@/utils/treeHelper";
import { newsDetail } from '@/utils';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { bannerListData, newsListData, CDNUrl } from "@/store/config";
import { Flex } from "ant-design-vue";
import { CaretRightFilled, DownloadOutlined } from '@ant-design/icons-vue';

// import GroupBanner from '@/assets/images/group-banner.jpg';
// import IVECO from '@/assets/newImages/IVECO-Drivers-Club.png';
// import subBanner1 from '@/assets/newImages/str_img1.png';
// import subBanner2 from '@/assets/newImages/str_img2.png';
// import subBanner3 from '@/assets/newImages/str_img3.png';
// import SampleEv from '@/assets/newImages/sampleEv.png';
// import SampleOil from '@/assets/newImages/sampleOil.png';
import closeIcon from '@/assets/newImages/popup_close_button.png';

const modules = [Pagination];
const showVideo = ref(false);
const poster = ref('');
const videoSrc = ref('');

onMounted(async () => {
  await nextTick();
  await initPage();
  setTimeout(() => {
    setSr();
  }, 200);
})

async function initPage() {
}

function download(item) {
  const { docUrl } = item;
  docUrl && window.open(docUrl);
}
function viewVideo(item) {
  const { img, videoUrl } = item;
  if (img && videoUrl) {
    poster.value = img;
    videoSrc.value = videoUrl;
    showVideo.value = true;
    setTimeout(() => {
      play();
    }, 1500);
  } 
}
async function play() {
  await nextTick();
  const video = document.getElementById('banner_video');
  video.play().catch(() => {});
}
function closeVideo() {
  poster.value = "";
  videoSrc.value = "";
  showVideo.value = false;
}
function go(path: string) {
  // path && router.push(path);
}
function renderList(list = []) {
  const str = '../../../js';
  return list.map(i => ({
    ...i,
    image: i.image.includes(str) ? i.image : str + i.image,
  }))
}
function setSr() {
  const sr = scrollReveal();
  sr.reveal('.new_center', {
    reset: true,
    distance: '60px',
    duration: 1000,
    origin: 'bottom',
    easing: 'ease',
    scale: 1,
    opacity: 0,
    delay: 100
  });


  // sr.reveal('.home_center .li2', {
  //   reset: true,
  //   distance: '60px',
  //   duration: 1000,
  //   origin: 'bottom',
  //   easing: 'ease',
  //   scale: 1,
  //   opacity: 0,
  //   delay: 200
  // });
  // sr.reveal('.home_center .li3', {
  //   reset: true,
  //   distance: '60px',
  //   duration: 1000,
  //   origin: 'bottom',
  //   easing: 'ease',
  //   scale: 1,
  //   opacity: 0,
  //   delay: 300
  // });
  // sr.reveal('.home_center .li4', {
  //   reset: true,
  //   distance: '60px',
  //   duration: 1000,
  //   origin: 'bottom',
  //   easing: 'ease',
  //   scale: 1,
  //   opacity: 0,
  //   delay: 400
  // });
  sr.reveal('.new_center', {
    reset: true,
    distance: '60px',
    duration: 1000,
    origin: 'bottom',
    easing: 'ease',
    scale: 1,
    opacity: 0,
    delay: 100
  });

  // sr.reveal('.home_future .li1', {
  //   reset: true,
  //   distance: '60px',
  //   duration: 1000,
  //   origin: 'bottom',
  //   easing: 'ease',
  //   scale: 1,
  //   opacity: 0,
  //   delay: 100
  // });
  // sr.reveal('.home_future .li2', {
  //   reset: true,
  //   distance: '60px',
  //   duration: 1000,
  //   origin: 'bottom',
  //   easing: 'ease',
  //   scale: 1,
  //   opacity: 0,
  //   delay: 200
  // });
  // sr.reveal('.home_future .li3', {
  //   reset: true,
  //   distance: '60px',
  //   duration: 1000,
  //   origin: 'bottom',
  //   easing: 'ease',
  //   scale: 1,
  //   opacity: 0,
  //   delay: 300
  // });
  // sr.reveal('.home_future .li4', {
  //   reset: true,
  //   distance: '60px',
  //   duration: 1000,
  //   origin: 'bottom',
  //   easing: 'ease',
  //   scale: 1,
  //   opacity: 0,
  //   delay: 400
  // });
  // sr.reveal('.home_future .li5', {
  //   reset: true,
  //   distance: '60px',
  //   duration: 1000,
  //   origin: 'bottom',
  //   easing: 'ease',
  //   scale: 1,
  //   opacity: 0,
  //   delay: 400
  // });
  sr.reveal('.home_add', {
    reset: true,
    distance: '40px',
    duration: 500,
    origin: 'bottom',
    easing: 'ease',
    scale: 1,
    opacity: 0,
    delay: 100
  });
  sr.reveal('.home_center .title', {
    reset: true,
    distance: '40px',
    duration: 300,
    origin: 'bottom',
    easing: 'ease',
    scale: 1,
    opacity: 0,
    delay: 100
  });
  sr.reveal('.home_center p', {
    reset: true,
    distance: '20px',
    duration: 400,
    origin: 'bottom',
    easing: 'ease',
    scale: 1,
    opacity: 0,
    delay: 200
  });
}
</script>

<style lang="less" scoped>
.banner-img-box {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #000;
  .download_icon {
    font-size: 1.2rem;
    color: #fff;
    margin: 0;
  }
  .download-btn {
    box-shadow: 
      0 0 20px rgba(0, 0, 0, 0.2),
      0 0 40px rgba(0, 0, 0, 0.1),
      0 0 60px rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
    font-size: 1.3rem;
  }
  .download-btn:hover{
    // transform: scale(1.05);
    box-shadow: 
        0 0 30px rgba(0, 0, 0, 0.3),
        0 0 50px rgba(0, 0, 0, 0.15),
        0 0 70px rgba(0, 0, 0, 0.1);
    .download_icon {
      color: #000;
    }
  }
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}
.sense_container {
  .group-banner-box {
    width: 100%;
    height: 150px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    .group-banner {
      display: block;
      width: 100%;
      height: auto;
      cursor: pointer;
    }
  }
}
.section-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .bde-button-11-157.bde-button {
    margin: 0;
  }
}
@media screen and (max-width: 1080px) {

}
@media screen and (max-width: 992px) {
  .home_strategy .home_add {
    // flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
  }
  .home_strategy .home_add .item {
    width: 100%;
  }
}
.contrast-box {
  .contrast-l,
  .contrast-r {
    flex: 1;
    .sample-box {
      .sample-img {
        margin: 0;
        img {
          height: 8rem;
          width: auto;
        }
      }
      .sample-name {
        margin: 0 2rem;
      }
    }
    .contrast-container {
      .contrast-item {
        margin-left: 0;
        margin-right: 0;
        box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.2);
        height: 4rem;
        transition: all 0.15s;
        cursor: pointer;
        .contrast-item-tips {
          margin: 0;
        }
      }
    }
  }
  .contrast-c {
    width: 18%;
    max-width: 200px;
     box-shadow: -15px 0 15px -15px rgba(0, 0, 0, 0.2),15px 0 15px -15px rgba(0, 0, 0, 0.2);
    .contrast-key {
      height: 8rem;
      font-size: 7rem;
      font-weight: 100;
      color: #d42322;
    }
    .contrast-item-container {
      font-weight: bold;
      .contrast-item-name {
        height: 4rem;
      }
    }
  }
  .contrast-l {
    background: linear-gradient(to right, transparent, #bccaf0);
    .sample-name {
      color: #57b7a7;
      font-size: 3rem;
    }
    .contrast-container {
      font-size: 1.1rem;
      font-weight: bold;
    }
    .contrast-item {
      color: #fff;
      border-radius: 4px 0 0 4px; 
      background-color: #57b7a7;
    }
    .contrast-item:hover {
      transform: scale(1.2) translate(-5px, -15px);
      transform-origin: 100%;
      box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
    }
  }
  .contrast-r {
    background: linear-gradient(to right, #b6bccd, transparent);
    .sample-name {
      color: #999;
      font-size: 2rem;
      max-width: 8rem;
    }
    .contrast-item {
      border-radius: 0 4px 4px 0; 
      background-color: #dfdfdf;
      color: #333;
    }
    .contrast-item:hover {
      transform: scale(1.1) translate(2px, -5px);
      transform-origin: 0;
      box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.2);
    }
    .overfllow-tips {
      left: 1rem;
      // display: inline-block;
      // width: 10rem;
    }
  }
  .w-5 {
    width: 5%;
  }
  .w-10 {
    width: 10%;
  }
  .w-15 {
    width: 15%;
  }
  .w-20 {
    width: 20%;
  }
  .w-25 {
    width: 25%;
  }
  .w-30 {
    width: 30%;
  }
  .w-35 {
    width: 35%;
  }
  .w-40 {
    width: 40%;
  }
  .w-45 {
    width: 45%;
  }
  .w-50 {
    width: 50%;
  }
  .w-55 {
    width: 55%;
  }
  .w-60 {
    width: 60%;
  }
  .w-65 {
    width: 65%;
  }
  .w-70 {
    width: 70%;
  }
  .w-75 {
    width: 75%;
  }
  .w-80 {
    width: 80%;
  }
  .w-85 {
    width: 85%;
  }
  .w-90 {
    width: 90%;
  }
  .w-95 {
    width: 95%;
  }
  .w-100 {
    width: 100%;
  }
}
</style>
