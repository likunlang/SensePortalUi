<template>
  <div class="index_products_wrapper">
    <Collapse v-if="isMobile" v-model:activeKey="collapseActivekeys" expandIconPosition="end" :bordered="false">
      <Collapse.Panel :key="item.id" v-for="item in productListData">
        <template #header>
          <div class="Collapse-header">{{ item.name }}</div>
        </template>
        <ProductItem :listData="item.children" />
      </Collapse.Panel>
    </Collapse>
    <Tabs v-else :tabBarGutter="50" size="large" v-model:activeKey="tabActiveKey" centered>
      <Tabs.TabPane :key="item.id" v-for="item in productListData">
        <template #tab>
          <div>{{ item.name }}</div>
        </template>
        <ProductItem :listData="item.children" />
      </Tabs.TabPane>
    </Tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, watch } from "vue";
import router from "@/router";
import { mockPaginationFetch } from '@/utils';
import { useI18n } from '@/locales/useI18n';
import { Tabs, Collapse } from 'ant-design-vue';
import ProductItem from './productItem.vue';
import productListData from '@/store/productListData';
import { useScreenWidth } from '@/utils/useBreakpoints';

const { t } = useI18n();

const { isMobile } = useScreenWidth();

const tabActiveKey = ref(productListData[0]?.id);
const collapseActivekeys = ref(productListData.map(i => i.id));
</script>
<style lang="less" scoped>
  .index_products_wrapper {
    padding: 3vw 20px 3.5vw;
  }
  .Collapse-header {
    font-size: 16px;
    font-weight: bold;
  }
  :deep(.ant-tabs-large >.ant-tabs-nav .ant-tabs-tab) {
    font-size: 26px;
    font-weight: bold;
  }
  :deep(.ant-collapse-borderless >.ant-collapse-item>.ant-collapse-content) {
    background-color: #fff;
  }
  :deep(.ant-collapse-borderless >.ant-collapse-item:last-child) {
    // border-bottom: 1px solid #d9d9d9;
  }
  @media screen and (max-width: 960px) {
    :deep(.ant-tabs-large >.ant-tabs-nav .ant-tabs-tab) {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    :deep(.ant-tabs-large >.ant-tabs-nav .ant-tabs-tab) {
      font-size: 18px;
    }
  }
</style>
