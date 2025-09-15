<template>
  <div class="childpage_wrapper news_detail_wrapper news_wrapper">
    <div class="content_block clearfix">
      <div class="second_page news_detail_content news_content fadeInUpSmall">
        <div class="news_container clearfix">
          <div class="tab_content1 tab_content clearfix animated fadeInUpSmall" v-loading="loading">
            <div class="fl new_list ">
              <ul class="new_ul">
                <li class="clearfix" v-for="(item, index) in listData" :key="item.id" @click="newsDetail(item)">
                  <div class="text">
                    <div class="news-title-container">
                      <h4 style="font-weight: bold;">{{ item.title }}</h4>
                      <p class="date">
                        {{ item.createDate }}
                      </p>
                    </div>
                    <p class="cont">{{ item.description }}</p>
                  </div>
                  <!-- <div class="img" :style="'background-image: url(' + item.image +')'"></div> -->
                  <img v-if="item.image" class="img" :src="item.image.trim()" :onError="handleImgError" />
                </li>
              </ul>
              <Exception title="暂无数据" v-if="!loading && !listData?.length"/>
              <!-- <Pagination @success="getListData" @loading="(l) => loading = l" /> -->
              <!-- 分页 -->
              <div class="pagination">
                <el-pagination
                  background
                  v-model:current-age="pageNo"
                  v-model:page-size="pageSize"
                  layout="total, prev, pager, next"
                  :total="total"
                  @current-change="handlePageChange"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, watch } from "vue";
import router from "@/router";
import { newsListData } from '@/store/config';
import { mockPaginationApi } from '@/utils';

const total = ref(0);
const pageNo = ref(1);
const pageSize = ref(10);

const loading = ref(false);
const listData = ref([]);

watch(
  () => router.currentRoute.value,
  (r) => {
    getNewsListData();
  },
  { immediate: true, deep: true }
);

function handlePageChange(val: number){
  pageNo.value = val;
  getNewsListData();
};
async function getNewsListData() {
  // 降序排序
  const _newsListData = newsListData.sort((a, b) => b.weight - a.weight);
  try {
    loading.value = true;
    const res: any = await mockPaginationApi({
      pageNo: pageNo.value,
      pageSize: pageSize.value,
      listData: _newsListData,
    })
    if (res.code == 200) {
      listData.value = res?.data?.list || [];
      total.value = res?.data?.total || 0;
    }
    loading.value = false;
  } catch (err) {
    // console.log(err);
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
