<template>
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
import IVECO from '@/assets/images/IVECO-Drivers-Club.png';
import { bannerListData, newsListData } from "@/store/config";
const modules = [Pagination];

onMounted(async () => {
  await nextTick();
  await initPage();
  setTimeout(() => {
    setSr();
  }, 200);
})

async function initPage() {
}
function go(path: string) {
  // path && router.push(path);
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

  sr.reveal('.home_add', {
    reset: true,
    distance: '40px',
    duration: 1000,
    origin: 'bottom',
    easing: 'ease',
    scale: 1,
    opacity: 0,
    delay: 100
  });
}
</script>

<style lang="less" scoped>
</style>
