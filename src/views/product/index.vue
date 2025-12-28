<template>
  <div class="product-wrapper">
    <div class="video-banner-container">
      <div class="video-banner-wrapper">
        <div class="fullBannerContainer">
          <div class="videoContainer">
            <img 
              v-lazy="productDetail.bannerImg"
              class="videoPoster"
              fetchpriority="high"
            >
            <div class="video_mask">
              <img :src="icon_paly"  @click="play"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="info-container flex items-center">
      <div v-if="productDetail.outlightImg" class="flex justify-center outlight-box">
        <img v-lazy="productDetail.outlightImg" />
      </div>
      <img v-lazy="productDetail.infoTable" />
    </div>
    <ContactForm :bg="productDetail.formImg" />
    <div v-if="showVideo" class="fixed top-[0px] left-[0px] bottom-[0px] right-[0px] bg-[#000] bg-opacity-90 flex items-center justify-center z-[10002]">
      <div @click="closeVideo" class="pop-up__close-button-wrapper absolute top-4 right-4 p-3 cursor-pointer bg-light-400 rounded-full z-10 hover:bg-light-430">
        <button class="w-5 h-5" :style="'display: block; background: url('+ closeIcon +') center center / cover;'"></button>
      </div>
      <div class="w-full h-auto relative">
        <div>
          <div class="w-full h-auto flex items-center justify-center">
            <video
              id="slide_video"
              style="width: 90vw"
              class="h-auto"
              controls="" 
              playsinline=""
              disablepictureinpicture=""
              autoplay
              muted
              :poster="productDetail.bannerImg"
            >
              <source :src="productDetail.videoSrc" type="video/mp4">
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, watch, nextTick } from "vue";
import router from "@/router";
import { useI18n } from '@/locales/useI18n';
import productListData from '@/store/productListData';
import ContactForm from "@/views/home/components/contact.vue";
import { findNode } from "@/utils/treeHelper";
import { getAppEnvConfig } from '@/utils/env';
const { t } = useI18n();
import closeIcon from '@/assets/images/popup_close_button.png';
import icon_paly from '@/assets/images/icon_paly.png';

const { CDN_URL } = getAppEnvConfig();

const productDetail = ref({});

const productVideoRef = ref(null);
const showVideo = ref( false);

watch(
  () => router.currentRoute.value,
  (r) => {
    const { id } = r?.query;
    id && getProductDetail(id);
  },
  { immediate: true, deep: true }
);

function getProductDetail(id) {
  productDetail.value = findNode(productListData, (node) => node.id === id);
}
async function play() {
  showVideo.value = true;
  await nextTick();
  productVideoRef.value?.play?.().catch(() => {});
}
function closeVideo() {
  showVideo.value = false;
}

</script>
<style lang="less" scoped>
  // :deep(.img-preview-mask) {
  //   background: transparent;
  //   &:hover {
  //     opacity: 0;
  //     cursor: url('data:image/svg+xml;utf8,<svg focusable="false" data-icon="zoom-in" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"></path></svg>') 12 12, zoom-in;
  //   }
  // }
  .product-wrapper {
    // padding-top: 65px;
    .info-container {
      background-color: #f6f7f6;
      flex-direction: column;
      .outlight-box {
        height:8vw;
        max-height: 140px;
        min-height: 50px;
      }
      :deep(.ant-image .ant-image-img),
      img {
        max-width: 1280px;
      }
    }
  }
  .video-banner-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1
  }
  .video-banner-wrapper {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
    background-color: #000;
  }

  .fullBannerContainer {
      height:100vh;
  }
  .videoContainer {
    position: relative;
    width: 100%;
    height: 100%;
    .video_mask {
      width: 100%;
      height: 100%;
      position: absolute;
      justify-content: center;
      align-items: center;
      display: flex;
      transition: transform 0.5s ease-in-out;
      img {
        display: block;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        &:hover {
          box-shadow: 0 4px 9px 1px rgba(0, 0, 0, 0.11);
        }
      }
    }
  }
  // .videoPoster:hover {
  //   background-color: pink;
  // }
  .index-module__video,.videoPoster {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      transition: opacity .3s ease
  }
  .paly_mask {
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 4px;
    background: pink;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
</style>
