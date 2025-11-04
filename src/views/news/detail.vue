<template>
  <div class="childpage_wrapper news_detail_wrapper news_wrapper">
    <div class="content_block clearfix">
      <div class="second_page news_detail_content news_content fadeInUpSmall">
        <div class="news_container clearfix">
          <div style="margin-bottom: 20px">
            <el-button type="primary" @click="back" :icon="ArrowLeft">Back</el-button>
          </div>
          <div class="news_detail clearfix">
            <h4>{{ newsDetail?.title }}</h4>
            <div class="handle clearfix">
            <ul class="clearfix">
              <li>Date：{{ newsDetail?.createDate }}</li>
            </ul>
            <!-- <ul class="clearfix author">
              <li>作者：{{ newsDetail?.authorName || newsDetail?.createBy }}</li>
            </ul> -->
            </div>
            <div class="text_cont">
              <div id="articleContent_canvas_div">
                <div v-html="newsDetail?.content"></div>
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
import { ArrowLeft } from '@element-plus/icons-vue';
import { watch, ref, nextTick } from 'vue';
import { newsListData } from '@/store/config';


const newsDetail = ref<any>({});

watch(
  () => router.currentRoute.value,
  (r) => {
    const id: any = r?.query?.id;
    id && getNewsDetail(id);
  },
  { immediate: true, deep: true }
);

async function getNewsDetail(id = '') {
  newsDetail.value = newsListData.find(i => i.id === id) || {};
}

function back(path: any) {
  router.push({ path: '/news' });
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
  font-family: SourceHanSansSC-bold;
}
.article-title-sub {
  /* color: rgba(176, 199, 217, 100); */
  color: #000;
  line-height: 14px;
  font-size: 16px;
  text-align: center;
  font-family: SourceHanSansSC-regular;
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
  font-family: SourceHanSansSC-regular;
}
.toggle-article {
  cursor: pointer;
  /* color: rgba(176, 199, 217, 100); */
  color: #000;
  font-size: 16px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
.toggle-article:hover {
  color: rgba(0, 131, 232, 100);
  font-size: 16px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
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
.ant-pagination {
  font-size: 16px;
  line-height: 16px;
}
</style>
