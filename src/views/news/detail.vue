<template>
  <div class="childpage_wrapper news_detail_wrapper news_wrapper">
    <div class="content_block clearfix">
      <div class="second_page news_detail_content news_content fadeInUpSmall">
        <div class="news_container clearfix">
          <div style="margin-bottom: 20px">
            <Button type="primary" @click="back">&lt;&nbsp;&nbsp;{{ t('index.common.back')}}</Button>
          </div>
          <Skeleton class="" active :paragraph="{ rows: 8 }" v-if="loading" />
          <div class="news_detail clearfix" v-else>
            <h4>{{ newsDetail?.title }}</h4>
            <div class="handle clearfix">
            <ul class="clearfix">
              <li>{{ t('index.common.date')}}：{{ newsDetail?.createDate }}</li>
            </ul>
            <!-- <ul class="clearfix author">
              <li>作者：{{ newsDetail?.authorName || newsDetail?.createBy }}</li>
            </ul> -->
            </div>
            <div class="text_cont">
              <div id="articleContent_canvas_div">
                <div v-html="newsDetail?.content"></div>
                <MoreArticle :currentNews="newsDetail" />
              </div>
            </div>
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
import listDataDetail from '@/store/newsDetail';
import { getAppEnvConfig } from '@/utils/env';

const { CDN_URL } = getAppEnvConfig();

const { t } = useI18n();

const newsDetail = ref<any>({});
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
    const detail = listDataDetail.find(i => i.id === id) || {};
    newsDetail.value = detail;
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
.flex-box {
  margin: auto;
  max-width: 1300px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.buttons {
  align-self: stretch;
  margin-top: 5px;
}
.article-title {
  margin-top: 30px;
  font-weight: 600;
  color: rgba(1, 33, 58, 100);
  font-size: 28px;
  font-family: var(--font-open-sans);
}
.article-title-sub {
  /* color: rgba(176, 199, 217, 100); */
  color: #000;
  line-height: 14px;
  font-size: 16px;
  text-align: center;
  font-family: var(--font-open-sans);
}
.dividing-line {
  width: calc(100% - 80px);
  border-top: 1px solid rgba(176, 199, 217, 100);
}
.article-content {
  padding: 10px;
  /* color: rgba(1, 33, 58, 100);
  font-size: 20px;
  text-align: left;
  font-family: SourceHanSansSC-regular; */
}
.article-file {
  padding: 10px;
  /* height: 20px; */
  color: rgba(1, 33, 58, 100);
  font-size: 16px;
  text-align: left;
  font-family: var(--font-open-sans);
}
.toggle-article {
  cursor: pointer;
  /* color: rgba(176, 199, 217, 100); */
  color: #000;
  font-size: 16px;
  text-align: left;
  font-family: var(--font-open-sans);
}
.toggle-article:hover {
  color: rgba(0, 131, 232, 100);
  font-size: 16px;
  text-align: left;
  font-family: var(--font-open-sans);
}
.news-content {
  min-height: 100%;
  line-height: 20px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 100);
  box-shadow: rgb(1 33 58 / 35%) 0px 2px 6px 0px;
  .ant-btn {
    display: inline-flex;
    align-items: center;
    margin-top: 1px;
    padding: 4px 14px;
    font-size: 14px;
    border-radius: 4px;
  }
}
.ant-card-bordered :deep {
  border: 0px;
}
.h-calc {
  height: calc(100% - 60px);
}
// .ant-pagination {
//   font-size: 16px;
//   line-height: 16px;
// }
</style>
