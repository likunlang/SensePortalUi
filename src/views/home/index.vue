<template>
  <div class="home_wrapper">
    <VideoBanner />
    <ProductsSwiper />
    <div class="home_add_bg">
      <div class="mask" v-lazy:background-image="`${CDN_URL}/resource/images/brand_bg.webp`"></div>
      <div class="home_strategy">
        <div class="brand_container bde-section-11-118 bde-section">
          <div class="title">
            <p>
              <a href="javasctipt:;">
                Our Brands
              </a>
            </p>
          </div>
          <Flex class="home_add" gap="large">
            <div class="item item1" v-for="item in brandsListData" :key="item.name">
              <img v-lazy="item.cover_sm" alt="" class="bg">
              <div class="text_block">
                <div class="flex justify-center items-center flex-col">
                  <img class="mt-2 h-10" v-lazy="item.logo" />
                  <button class="
                      inline-block
                      mt-12
                      outline-0
                      h-8 rounded-full text-base font-medium box-border
                      transition-[background]
                      duration-300
                      bg-transparent border border-white text-white hover:bg-white md:hover:b hover:text-black
                      mr-0 ml-0 
                      px-4
                      cursor-pointer
                      items-center
                      download-btn
                    "
                    style="width: fit-content;"
                    @click="openPath(`/brand?id=${item.id}`)"
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </div>
  </div>
  <Contact />
</template>
<script lang="ts">
  export default defineComponent({
    name: 'HOME_PAGE',
  });
</script>
<script lang="ts" setup>
import { defineComponent, ref, onMounted, reactive, nextTick } from "vue";
import router from "@/router";
import scrollReveal from 'scrollreveal';
import { useStore } from "@/store/user";
import { cmsArticleListData } from '@/api/cms';
import { listToTree, findNode } from "@/utils/treeHelper";
import { Flex } from "ant-design-vue";
import { CaretRightFilled, DownloadOutlined } from '@ant-design/icons-vue';
import { scrollToHash, openPath } from '@/utils';
import Contact from './components/contact.vue';
import VideoBanner from './components/videoBanner.vue';
import ProductsSwiper from './components/productsSwiper.vue';
import { brandsListData } from '@/store/productListData';

import { getAppEnvConfig } from '@/utils/env';

import { useI18n } from '@/locales/useI18n';
const { t } = useI18n();

const { CDN_URL } = getAppEnvConfig();

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
.home_wrapper .home_add_bg {
  position: relative;
  .mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: 0 100%;
    background-repeat: no-repeat;
    background-size: cover;
    transform: scaleX(-1);
  }
}
.brand_container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
}
@media screen and (max-width: 1600px) {
  .brand_container {
    padding-left: 3vw;
    padding-right: 3vw;
  }
}
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
