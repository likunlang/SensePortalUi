<template>
  <div class="home_wrapper">
    <VideoBanner />
    <el-carousel arrow="always" trigger="click" height="100vh" :autoplay="true">
      <el-carousel-item v-for="(item, index) in bannerListData" :key="index">
        <div class="banner-img-box" v-lazy:background-image="`${item.img}`">
            <div class=" absolute bottom-[8%] sm:bottom-[10%] left-0 right-0 text-center md:px-8 sm:px-6 xs:px-4 ">
              <div>
                <div class="flex justify-center">
                  <template v-if="item.title== 'G050'">
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
                      "
                      style="margin-left: 0"
                      @click="download({ ...item, docUrl: item.docUrl })"
                    >
                      <span>G050L</span>
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
                      @click="download({ ...item, docUrl: item.docUrl1 })"
                    >
                      <span>G050P-L(Pick up version)</span>
                      <svg class="sense-icon" aria-hidden="true">
                        <use xlink:href="#sense-download"></use>
                      </svg>
                    </button>
                  </template>
                  <template v-else>
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
                      "
                      style="margin-left: 0"
                      @click="download(item)"
                    >
                      <svg class="sense-icon" aria-hidden="true">
                        <use xlink:href="#sense-download"></use>
                      </svg>
                    </button>
                  </template>
                  
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
    <div class="home_add_bg" v-lazy:background-image="`${CDN_URL}/resource/images/add_bg.webp`">
      <div class="home_strategy">
        <div class="sense_container bde-section-11-118 bde-section">
          <div class="title">
            <p>
              <a href="javasctipt:;">
                {{ t('index.home.h1')}}
                <!-- <span>
                  development strategy
                </span> -->
              </a>
            </p>
          </div>
          <Flex class="home_add" gap="large">
            <div class="item item1">
              <img v-lazy="`${CDN_URL}/resource/images/str_img1.webp`" alt="" class="bg">
              <div class="text_block">
                <h4>
                  {{ t('index.home.h2')}}
                </h4>
                <p>
                  {{ t('index.home.h2_sub')}}
                </p>
              </div>
            </div>
            <div class="item item2">
              <img v-lazy="`${CDN_URL}/resource/images/str_img2.webp`" alt="" class="bg">
              <div class="text_block">
                <h4>
                  {{ t('index.home.h3')}}
                </h4>
                <p>
                  {{ t('index.home.h3_sub')}}
                </p>
              </div>
            </div>
            <div class="item item3">
              <img v-lazy="`${CDN_URL}/resource/images/str_img3.webp`" alt="" class="bg">
              <div class="text_block">
                <h4>
                  {{ t('index.home.h4')}}
                </h4>
                <p>
                  {{ t('index.home.h4_sub')}}
                </p>
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </div>
    <div class="home_center" v-lazy:background-image="`${CDN_URL}/resource/images/center_bg.webp`">
      <div class="mask">
      </div>
      <div class="sense_container" id="about_us" style="position: relative;z-index: 999;">
        <div class="title">
          <p>
            <a href="javasctipt:;">
              {{ t('index.home.h5')}}
              <span class="text-white/80 pt-4">{{ t('index.home.h5_sub')}}</span>
            </a>
          </p>
        </div>
        <p class="text-white">
          {{ t('index.home.h5_content_1')}}
        </p>
        <br />
        <p class="text-white">
          {{ t('index.home.h5_content_2')}}
        </p>
        <br />
        <p class="text-white">
          {{ t('index.home.h5_content_3')}}
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
          <video id="slide_video" style="width: 90vw" class="h-auto" controls="" playsinline=""
          disablepictureinpicture="" autoplay muted :poster="poster">
            <source :src="videoSrc" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
  </div>
  <Contact />
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
import { listToTree, findNode } from "@/utils/treeHelper";
import { newsDetail } from '@/utils';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { bannerListData } from "@/store/config";
import { Flex } from "ant-design-vue";
import { CaretRightFilled, DownloadOutlined } from '@ant-design/icons-vue';
import { scrollToHash } from '@/utils';
import Contact from './contact.vue';
import VideoBanner from './videoBanner.vue';

import closeIcon from '@/assets/images/popup_close_button.png';
import { getAppEnvConfig } from '@/utils/env';

import { useI18n } from '@/locales/useI18n';
const { t } = useI18n();

const { CDN_URL } = getAppEnvConfig();

const modules = [Pagination];
const showVideo = ref(false);
const poster = ref('');
const videoSrc = ref('');

onMounted(async () => {
  await nextTick();
  setTimeout(() => {
    setSr();
  }, 200);
  const hash = window.location.hash;
  if (hash) {
    scrollToHash(hash);
  }
})

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
  const video = document.getElementById('slide_video');
  video.play().catch(() => {});
}
function closeVideo() {
  poster.value = "";
  videoSrc.value = "";
  showVideo.value = false;
}
function setSr() {
  const sr = scrollReveal();

  sr.reveal('.home_add', {
    reset: false,
    distance: '40px',
    duration: 500,
    origin: 'bottom',
    easing: 'ease',
    scale: 1,
    opacity: 0,
    delay: 100
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
    > span {
      font-size: 1rem;
      margin-right: 5px;
    }
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
