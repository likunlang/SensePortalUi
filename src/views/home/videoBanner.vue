<template>
  <div class="video-banner-container">
    <div class="video-banner-wrapper">
      <div class="fullBannerContainer">
        <div class="videoContainer">
          <img 
            :src="`${CDN_URL}/resource/images/video_poster.webp`"
            class="videoPoster"
            fetchpriority="high"
          >
          <video 
            id="banner_video"
            loop
            autoplay
            playsinline
            :poster="`${CDN_URL}/resource/images/video_poster.webp`"
            class="lazy index-module__video entered loaded"
            :src="`${CDN_URL}/resource/video/banner.mp4`"
            muted
            @play="onPlay"
          >
          </video>
        </div>
      </div>
      <div class="module__center homeBgTitle">
        <div class="text-display title_font">
          <div :class="['uppercase text-display-title', played ? 'fade-box' : '']">
            <div class="big-text">Sense</div>
            <div class="big-text-diver"></div>
            <div class="big-text">Motor</div> 
          </div>
          <div class="text-display-sub-title-container">
            <div :class="['index-module__subTitle uppercase', played ? 'fade-box fade-box-2' : '']">
              Leading Electric Commercial Vehicle Solutions
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from '@/locales/useI18n';
import { getAppEnvConfig } from '@/utils/env';
import { reactive, ref, nextTick } from 'vue';
import { Input, Form, Row, Col, Select, Button, Result, Spin, message } from 'ant-design-vue';
import { GoogleFormSubmitter } from '@/utils';

const TextArea = Input.TextArea;

const { t } = useI18n();
const { CDN_URL } = getAppEnvConfig();

const played = ref(false);

function onPlay() {
  played.value = true;
}
</script>
<style lang="less" scoped>
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
  }
  .fade-box {
    opacity: 0; /* 初始状态 */
    animation-name: fadeIn; /* 应用动画 */
    animation-duration: 0.1s; /* 动画时长1.5秒 */
    animation-fill-mode: forwards; /* 动画结束后保持最后一帧 */
    animation-delay: 1s; /* 延时1秒执行 */
  }
  .fade-box-2 {
    animation-delay: 1.6s; /* 延时1秒执行 */
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      // transform: translateX(-10vw);
    }
    100% {
      opacity: 1;
      // transform: translateX(0);
    }
  }
  .uppercase {
    text-transform: uppercase;
  }
  .title_font {
    font-family: 'Avenir', 'Avenir Next', -apple-system, BlinkMacSystemFont,'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  }
  .fullBannerContainer {
      height:100vh;
  }
  .videoContainer {
      position: relative;
      width: 100%;
      height: 100%
  }
  .videoPoster {
      z-index: -1
  }
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

  .homeBgTitle {
      position: absolute;
      top: 15.3125rem;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 2;
      display: flex;
      justify-content: center;
      text-align: center;
  }
  .homeBgTitle .text-display {
    color: rgba(255, 255, 255, .7);
    width: auto
  }
  .homeBgTitle .text-display .text-display-title {
    line-height: 2.70833333rem;
    font-weight: 700;
    font-size: 4rem;
    line-height: 120px;
    transform: scaleY(1.5);
    position: relative;
    top: -40px;
    text-shadow: 8px 2px 4px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-between;
  }

  .big-text-diver {
    flex:1;
  }
  .big-text {
    letter-spacing: 2.6vw;
  }

  .index-module__subTitle {
    white-space: pre-line;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    font-size: 1.6rem;
    letter-spacing: 4px;
  }
  @media screen and (max-width: 960px) {
    .homeBgTitle {
        position: absolute;
        top: 19.6875rem;
        width: 100%
    }

    .homeBgTitle .text-display {
        padding: 0 5.33vw
    }
    .homeBgTitle .text-display .text-display-title {
      overflow-wrap: normal;
      line-height: 3.75rem;
      // width: -moz-fit-content;
      // width: fit-content;
      margin: 0 auto;
      max-width: 90vw;
      font-size: 3rem;
      font-weight: 700;
      line-height: 3.75rem;
    }
    .big-text {
      letter-spacing: 4vw;
    }
    .index-module__subTitle {
      white-space: pre-line;
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 768px) {
    .homeBgTitle .text-display .text-display-title {
      font-size: 2.8rem;
    }
    .big-text {
      letter-spacing: 3vw;
    }
    .big-text-diver {
      display: none;
    }
    .index-module__subTitle {
      white-space: pre-line;
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 480px) {
    .homeBgTitle .text-display .text-display-title {
      font-size: 2.3rem;
    }
    .big-text {
      letter-spacing: 2vw;
    }
  }
  @media screen and (max-width: 375px) {
    .homeBgTitle .text-display .text-display-title {
      font-size: 2rem;
    }
    .index-module__subTitle {
      white-space: pre-line;
      font-size: 0.8rem;
    }
  }
</style>
