<template>
  <div class="childpage_wrapper news_detail_wrapper news_wrapper">
    <div class="content_block clearfix">
      <div class="second_page news_detail_content news_content fadeInUpSmall">
        <div class="news_container clearfix">
          <div class="introduce text-xl pb-6 md:pb-0 text-center mt-12">
            <img class="intro_logo" v-lazy="brandDetail.logo_color">
          </div>
          <div class="mt-12 md:mt-8 flex clearfix content-box">
            <div class="mr-6 text-lg content-inner">
              <p class="mb-4" v-for="(item, index) in brandDetail?.content" :key="index">
                {{ item }}
              </p>
            </div>
            <div class="img-box md:mb-6 md:w-full w-2/5">
              <img class="new_pic" v-lazy="{
                src: brandDetail.cover_lg,
                loading: loadingImg,
              }"> 
            </div>
          </div>
          <div class="brand_video_conatiner cursor-pointer" style="">
            <video
              loop
              controls="controls"
              preload="auto"
              webkit-playsinline="true"
              playsinline="true"
              x5-video-player-type="h5"
              x5-video-player-fullscreen="true"
              x-webkit-airplay="allow"
              x5-video-orientation="portraint"
              :poster="brandDetail.poster"
              :src="brandDetail.video"
              muted
              style="object-fit:fill;">
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router';
import { watch, ref, nextTick } from 'vue';
import { useI18n } from '@/locales/useI18n';
import { Button } from 'ant-design-vue';
import MoreArticle from './moreArticle.vue';
// import { getNewsDetail } from '@/api/news';
import { message, Skeleton } from 'ant-design-vue';
import { getAppEnvConfig } from '@/utils/env';
import { brandsListData } from '@/store/productListData';
import loadingImg from '@/store/loadingImg';

const { CDN_URL } = getAppEnvConfig();

const { t } = useI18n();

const brandDetail = ref<any>({});
const loading = ref(false);
watch(
  () => router.currentRoute.value,
  (r) => {
    const id: any = r?.query?.id;
    id && fetchDetail(id);
  },
  { immediate: true, deep: true }
);

async function fetchDetail(id) {
  try {
    loading.value = true;
    const detail = brandsListData.find(i => i.id === id) || {};
    brandDetail.value = detail;
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
}

function back(path: any) {
  router.push({ path: 'why_electric' });
}
</script>

<style lang="less" scoped>
.introduce {
  border-bottom: 1px solid #d6d5d5;
}
.intro_logo {
  display: inline-block;
  height: 40px;
}
.img-box {
  // aspect-ratio: 16 / 9;
  width: 45%;
  img {
    display: inline-block;
    width: 100%;
    // object-fit: cover;
  }
}
.content-inner {
  line-height: 2;
  flex: 1;
}
.brand_video_conatiner {
  margin: 120px auto;
}
  @media screen and (max-width: 768px) {
    .content-box {
      flex-direction: column-reverse;
    }
    .introduce {
      border-bottom: none;
    }
    .img-box {
      width: 100%;
    }
    .brand_video_conatiner {
      margin: 70px auto;
    }
  }
</style>
