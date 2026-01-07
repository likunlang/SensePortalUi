<template>
  <div class="childpage_wrapper why_wrapper news_wrapper">
    <section class="featured-area">
      <div class="why_container">
        <div class="row">
          <div class="col-12 lg:col-6">
            <div class="featured-area__title">
              Why electric makes sense?
            </div>
          </div>
          <div class="col-12 lg:col-6">
            <div class="featured-area__content">
              2026 marks the pivotal year for Europe's commercial electric vehicle transformation—the ultimate window for logistics fleets to strategically deploy and lead the shift. With CO2 regulations enforcing compliance, charging infrastructure maturing rapidly, and total ownership costs dropping below diesel thanks to ultra-low maintenance and energy savings, electric vans and trucks deliver unmatched efficiency for urban and regional delivery.&nbsp;
            </div>
            <div class="featured-area__buttons"></div>
          </div>
        </div>
      </div>
    </section>
    <div class="img-with-text image-left">
      <div class="why_container">
      <div class="img-with-text__inner" v-if="headerItem">
        <div class="left-column order-2 lg:order-1">
        <div class="img-with-text__content">
          <div class="img-with-text__icon">
            <img alt="Icon" width="70" height="70" decoding="async" style="color:transparent" v-lazy="featured_img" />
          </div>
          <div class="img-with-text__title">{{ headerItem.title }}</div>
          <div class="img-with-text__description">{{ headerItem.description }}</div>
          <div class="img-with-text__buttons">
            <a class="btn btn-success" href="javascript:;" @click="newsDetail(headerItem)">2-min read</a>
          </div>
        </div>
        </div>
        <div class="right-column order-1 lg:order-2 mb-[30px] lg:mb-0">
          <img
            alt="Vehicles"
            width="784"
            height="500"
            decoding="async"
            class="w-full"
            style="color:transparent"
            :src="headerItem.image" 
            v-lazy="{
              src: headerItem.image,
              loading: loadingImg,
              error: loadingImg
            }"
          />
        </div>
      </div>
      </div>
    </div>
    <section class="latest-blog">
      <div class="latest-blog__container">
        <div class="latest-blog__header">
          <div class="latest-blog__title">
          Got 2 Minutes? Understand New Energy
          </div>
          <div class="latest-blog__description">
          Here is Your Fast-Charging Station for New Energy Vehicle Knowledge.&nbsp;
          </div>
        </div>
        <Skeleton active :paragraph="{ rows: 8 }" v-if="loading" />
        <div v-else class="row row-cols-1 lg:row-cols-3 gx-5 max-lg:gap-y-15px">
          <div class="col col-item" v-for="(item, index) in listData" :key="index">
            <div class="latest-blog__item">
              <div
                class="latest-blog__item-image"
                v-lazy:background-image="{
                  src: item.image,
                  loading: loadingImg,
                  error: loadingImg
                }"
              ></div>
              <!-- <img :alt="item.title" loading="lazy" width="440" height="475" decoding="async" class="latest-blog__item-image" style="color:transparent" :src="item.image" /> -->
              <!-- <div class="latest-blog__item-badge"></div> -->
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
import { ref, onMounted, computed, watch } from "vue";
import router from "@/router";
import { useI18n } from '@/locales/useI18n';
import featured_img from '@/assets/images/featured_img.png';
import { Skeleton } from 'ant-design-vue';
import newsListData from '@/store/newsListData';
import { mockPaginationFetch } from '@/utils';
import loadingImg from '@/store/loadingImg';

const { t } = useI18n();

const total = ref(0);
const pageNo = ref(1);
const pageSize = ref(10);

const loading = ref(false);
const listData = ref([]);

const headerItem = ref(null);

watch(
  () => router.currentRoute.value,
  (r) => {
    getNewsListData();
  },
  { immediate: true, deep: true }
);
async function getNewsListData() {
  try {
    loading.value = true;
    // 降序排序，权重越高越排前面
    const res: any = await mockPaginationFetch({
      pageNo: pageNo.value,
      pageSize: pageSize.value,
      listData: newsListData,
    })
    if (res.code == 200) {
      const list = res?.data?.list || [];
      const arr = [];
      const temp = list.find(i => i.id === '202511250918');
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (item.id === '202511250918') {
          headerItem.value = item;
        } else {
          arr.push(item);
        }
      }
      // 降序排序，权重越高越排前面
      listData.value = arr.sort((a, b) => b.weight - a.weight);
      total.value = res?.data?.total || 0;
    }
    loading.value = false;
  } catch (err) {
    console.log(err);
    loading.value = false;
  }
}
function handleImgError(e: any) {
  e.target.style.display = 'none';
}
function newsDetail(item: any) {
  item?.id && router.push({ path: '/newsDetail', query: { id: item.id } });
}
</script>
<style lang="less" scoped>
 
.why_container {
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	padding-right: var(--bs-gutter-x, 20px);
	padding-left: var(--bs-gutter-x, 20px); 
}

.btn {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-weight: 700;
	text-transform: uppercase;
	padding: 11px 28px;
	border-radius: 40px;
	border-width: 2px;
	transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
	transition-timing-function: cubic-bezier(.4,0,.2,1);
	transition-duration: 0.2s;
	transition-timing-function: cubic-bezier(0,0,.2,1);
}

.btn-success {
	background-color: #1677ff;
	color: #fff;
}

.btn-success:hover {
	background-color: #4096ff;
}

.order-1 { order: 1; }
.order-2 { order: 2; }
.order-3 { order: 3; }
.order-4 { order: 4; }

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

.col-6 { 
	flex: 0 0 auto; 
	width: 50%; 
}

.col-12 { 
	flex: 0 0 auto; 
	width: 100%; 
}
.featured-area {
  padding-top: 100px;
  margin-bottom: 35px;
}

.featured-area__title {
  margin-bottom: 14px;
  font-family: var(--font-space-grotesk);
  font-size: 28px;
  line-height: 32px;
}

.featured-area__caveats {
  display: block;
}

.featured-area__content {
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 26px;
}

.featured-area__content p {
  margin-bottom: 20px;
}

.featured-area__buttons {
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex-wrap: wrap;
}

.col-item {
  margin-bottom: 35px;
}

.latest-blog__container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--bs-gutter-x, 20px);
  padding-left: var(--bs-gutter-x, 20px);
  display: grid;
  grid-template-rows: repeat(3, auto);
}

.latest-blog__title {
  font-family: var(--font-space-grotesk);
  font-size: 26px;
  text-transform: uppercase;
  line-height: 30px;
  margin-bottom: 14px;
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
  height: 50vw;
  max-height: 340px;
  object-fit: cover;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
}

.latest-blog__item-title {
  font-size: 20px;
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

.img-with-text {
  margin-top: 35px;
  margin-bottom: 35px;
}

.img-with-text__icon {
  margin-bottom: 20px;
}

.img-with-text__title {
  margin-bottom: 14px;
  font-family: var(--font-space-grotesk);
  font-size: 26px;
  text-transform: uppercase;
  line-height: 30px;
}

.img-with-text__description {
  margin-bottom: 20px;
}

.img-with-text__buttons {
  display: inline-block;
  text-align: center;
}

.img-with-text__buttons a {
  display: flex;
  min-width: max-content;
}

.img-with-text__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: -12px;
  margin-right: -12px;
}

.img-with-text.image-left .img-with-text__inner .left-column,
.img-with-text.image-right .img-with-text__inner .left-column {
  padding-left: 12px;
  padding-right: 12px;
}

.img-with-text.image-left .img-with-text__inner .right-column,
.img-with-text.image-right .img-with-text__inner .right-column {
  padding-left: 12px;
  padding-right: 12px;
}

.img-with-text.equal-column .img-with-text__inner .left-column {
  padding-left: 12px;
  padding-right: 12px;
}

.img-with-text.equal-column .img-with-text__inner .right-column {
  padding-left: 12px;
  padding-right: 12px;
}

/* 合并后的 @media 查询 */
@media (min-width: 576px) {
	.why_container { max-width: 100%; }
  .featured-area__buttons {
    flex-direction: row;
  }
  .latest-blog__container {
    max-width: 100%;
  }
}

@media (min-width: 768px) {
	.why_container { max-width: 100%; }
  .latest-blog__container {
    max-width: 100%;
  }
}

@media (min-width: 992px) {
	.why_container { max-width: 100%; }

  .latest-blog__item-image {
    height: 21vw;
  }
  
  .lg\:col-6 {
      flex: 0 0 auto;
      width: 50%
  }
  .lg\:order-1 {
    order: 1
  }
  .lg\:order-2 {
    order: 2
  }
  .lg\:row-cols-3>* {
    flex: 0 0 auto;
    width: 33.333333333333336%
  }
  .max-lg:gap-y-15px {
    row-gap: 15px;
  }

  .featured-area {
    padding-top: 120px;
    margin-bottom: 120px;
  }
  .featured-area__title {
    font-size: 60px;
    line-height: 64px;
  }
  .featured-area__caveats {
    font-size: 14px;
    line-height: 20px;
  }
  .featured-area__content {
    font-size: 20px;
    line-height: 32px;
  }
  .col-item {
    // margin-top: 60px;
    margin-bottom: 70px;
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
    margin-bottom: 40px;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
  }
  .latest-blog__item {
    padding-bottom: 30px;
  }
  
  .latest-blog__item-image {
    margin-bottom: 30px;
  }
  .latest-blog__item-title {
    font-size: 24px;
    line-height: 32px;
  }
  .img-with-text {
    margin-top: 120px;
    margin-bottom: 120px;
  }
  .img-with-text__icon {
    margin-bottom: 30px;
  }
  
  .img-with-text__title {
    font-size: 44px;
    line-height: 48px;
  }
  .img-with-text__description {
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 28px;
  }
  .img-with-text__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }
  
  .img-with-text.image-left .img-with-text__inner .left-column,
  .img-with-text.image-right .img-with-text__inner .left-column {
    width: 41.666667%;
  }
  .img-with-text.image-left .img-with-text__inner .right-column,
  .img-with-text.image-right .img-with-text__inner .right-column {
    width: 58.333333%;
  }
  .img-with-text.equal-column .img-with-text__inner .left-column {
    width: 50%;
  }
  .img-with-text.equal-column .img-with-text__inner .right-column {
    width: 50%;
  }
  .img-with-text.image-right .img-with-text__content {
    padding-right: 16px;
  }
  .img-with-text.equal-column .img-with-text__inner,
  .img-with-text.image-left .img-with-text__inner {
    flex-direction: row-reverse;
  }
  .img-with-text.equal-column .img-with-text__content,
  .img-with-text.image-left .img-with-text__content {
    padding-left: 16px;
  }
}

@media (min-width: 1200px) {
	.why_container { max-width: 1384px; } 
  .latest-blog__container {
    max-width: 1384px;
  }
}

@media (min-width: 1536px) {
	.why_container { max-width: 1200px; } 

  .latest-blog__container {
    max-width: 1200px;
  }
}

@media (min-width: 1600px) {
	.why_container { max-width: 1200px; } 
  .latest-blog__container {
      max-width: 1200px;
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
  .latest-blog__header {
    display: contents;
  }
  .img-with-text__buttons a:first-child {
    margin-bottom: 14px;
  }
}

</style>
