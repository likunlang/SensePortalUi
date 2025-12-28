<template>
  <div class="more_article_wrapper" v-if="randomNews?.length">
    <div class="article__divider"></div>
    <section class="latest-blog">
      <div class="latest-blog__container">
        <div class="latest-blog__header">
          <div class="latest-blog__title">
          MORE FROM SENSEMOTOR
          </div>
        </div>
        <div class="row row-cols-1 lg:row-cols-3 gx-5 max-lg:gap-y-15px">
          <div class="col col-item" v-for="(item, index) in randomNews" :key="index">
            <div class="latest-blog__item">
              <div class="latest-blog__item-image" :style="'background-image: url(' + item.image +')'"></div>
              <div class="latest-blog__item-title">{{ item.title }}</div>
              <div class="latest-blog__item-gradient-line"></div>
              <a href="javascript:;" @click="newsDetail(item)" class="latest-blog__item-link"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import router from "@/router";
import { useI18n } from '@/locales/useI18n';
import type { PropType } from 'vue';
import newstListData from '@/store/newsListData';
// import { getRandomListData } from '@/api/news';
import { getRandomItems } from '@/utils';

const { t } = useI18n();

const randomNews = ref([]);

const props = defineProps({
  currentNews: { type: Object as PropType<Recordable>, default: () => {} },
})
watch(
  () => props.currentNews,
  (r) => {
    r?.id && getNewsListData();
  },
  { immediate: true, deep: true }
);
async function getNewsListData() {
  try {
    const excludeId = props.currentNews.id;
    randomNews.value = getRandomItems(newstListData, excludeId);
  } catch (e) {
    console.log(e);
  }
}
function newsDetail(item: any) {
  item?.id && router.push({ path: '/newsDetail', query: { id: item.id } });
}
</script>
<style lang="less" scoped>
.row {
	--bs-gutter-x: 40px;
	--bs-gutter-y: 0;
	display: flex;
	flex-wrap: wrap;
	margin-top: calc(var(--bs-gutter-y) * -1);
	margin-right: calc(var(--bs-gutter-x) / -2);
	margin-left: calc(var(--bs-gutter-x) / -2); 
}

.row > * {
	box-sizing: border-box;
	flex-shrink: 0;
	width: 100%;
	max-width: 100%;
	padding-right: calc(var(--bs-gutter-x) / 2);
	padding-left: calc(var(--bs-gutter-x) / 2); 
	margin-top: var(--bs-gutter-y);
}

.col { flex: 1 0 0%; }

.row-cols-1 > * { 
	flex: 0 0 auto; 
	width: 100%; 
}

.col-item {
  margin-bottom: 40px;
}
.article__divider {
  height: 3px;
  width: 100%;
  margin: 60px auto 0;
  background-image: linear-gradient(90deg, #ffc85c 0, #ff6432);
}
.latest-blog {
  margin-top: 35px;
  margin-bottom: 35px;
}
.latest-blog__container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  // padding-right: var(--bs-gutter-x, 20px);
  // padding-left: var(--bs-gutter-x, 20px);
  display: grid;
  grid-template-rows: repeat(3, auto);
}

.latest-blog__title {
  font-family: var(--font-space-grotesk);
  font-size: 24px;
  text-transform: uppercase;
  line-height: 30px;
}

.latest-blog__description {
  font-size: 18px;
  line-height: 28px;
  line-height: 26px;
}

.latest-blog__link {
  display: flex;
  flex-shrink: 0;
  column-gap: 5px;
  font-weight: 700;
  text-transform: uppercase;
}

.latest-blog__link-text {
  position: relative;
}

.latest-blog__link:hover .latest-blog__link-text:before {
  position: absolute;
  bottom: -4px;
  left: 0;
  height: 4px;
  width: 100%;
  --tw-content: "";
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(104 120 106/var(--tw-bg-opacity,1));
}

.latest-blog__header {
  margin-bottom: 30px;
  column-gap: 16px;
}

.latest-blog__item {
  position: relative;
  height: 100%;
  padding-bottom: 15px;
}

.latest-blog__item-image {
  margin-bottom: 20px;
  width: 100%;
  height: 36vw;
  max-height: 280px;
  object-fit: cover;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
}

.latest-blog__item-title {
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
}

.latest-blog__item-badge {
  --tw-bg-opacity: 1;
  background-color: rgb(104 120 106/var(--tw-bg-opacity,1));
  padding: 5px 16px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  --tw-text-opacity: 1;
  color: rgb(255 255 255/var(--tw-text-opacity,1));
  position: absolute;
  top: 16px;
  left: 16px;
  display: inline-block;
}

.latest-blog__item-gradient-line {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 20;
  height: 5px;
  width: 0;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4,0,0.2,1);
  transition-duration: 0.5s;
  background-image: linear-gradient(90deg,#ffc85c 0,#ff6432);
}

.latest-blog__item-link:after {
  position: absolute;
  inset: 0;
  --tw-content: "";
  content: var(--tw-content);
}

.latest-blog__item:hover .latest-blog__item-gradient-line {
  width: 100%;
}

/* 合并后的 @media 查询 */
@media (min-width: 576px) {
  .latest-blog__container {
    max-width: 100%;
  }
  .latest-blog__title {
    font-size: 24px;
  }
  .latest-blog__item-title {
    font-size: 18px;
  }
}

@media (min-width: 768px) {
  .latest-blog__container {
    max-width: 100%;
  }
  .latest-blog__title {
    font-size: 30px;
  }
  .latest-blog__item-title {
    font-size: 20px;
  }
}

@media (min-width: 992px) {
  .latest-blog {
    margin-top: 60px;
    margin-bottom: 60px;
  }
  .latest-blog__item-image {
    height: 21vw;
  }
  
  .lg\:row-cols-3>* {
    flex: 0 0 auto;
    width: 33.333333333333336%
  }
  .max-lg:gap-y-15px {
    row-gap: 15px;
  }
  .col-item {
    // margin-top: 60px;
    margin-bottom: 60px;
  }
  .latest-blog__container {
    max-width: 100%;
  }
  .latest-blog__title {
    font-size: 44px;
    line-height: 48px;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .latest-blog__description {
    font-size: 20px;
    line-height: 32px;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  .latest-blog__link {
    grid-column-start: 2;
    grid-column-end: 3;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
  }
  .latest-blog__header {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
  }
  .latest-blog__item {
    padding-bottom: 30px;
  }
  
  .latest-blog__item-image {
    margin-bottom: 30px;
  }
}

@media (min-width: 1200px) {
  .latest-blog__container {
    max-width: 1384px;
  }
}

@media (min-width: 1536px) {

  .latest-blog__container {
    max-width: 1400px;
  }
}

@media (min-width: 1600px) {
  .latest-blog__container {
      max-width: 1400px;
  }
}

@media not all and (min-width: 992px) {
  .latest-blog__description {
    margin-bottom: 30px;
  }
  .latest-blog__link {
    margin-top: 10px;
    grid-row-start: 4;
    grid-row-end: 5;
  }
}

</style>
