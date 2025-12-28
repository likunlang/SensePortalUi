<template>
  <div :class="['all_header', 'scroll_header', blackHeader ? 'newsPage' : '']">
    <div class="sense_container header-container clearfix">
      <div class="logo" style="cursor: pointer;" @click="goHome">
        <img :src="`${CDN_URL}/resource/images/logo_header.webp`" alt="logo">
      </div>
      <div class="navigation">
        <Menu v-model:selectedKeys="menuActiveKeys" @click="go" mode="horizontal" :items="menuTree" theme="dark" />
      </div>
      <div class="search">
        <div class="search-pc">
          <a class="search-pc-item" href="javascript:;" @click='go({ item: { "id": "A2009", "path": "/#contact_us" }})'>
            <svg class="sense-icon" aria-hidden="true">
              <use xlink:href="#sense-email"></use>
            </svg>
            <div class="search-pc-item-text">
              {{ t('index.common.contact')}}
            </div>
          </a>
        </div>
        <a href="javascript:;" @click="showMobileNav = !showMobileNav" id="mobile_key" class="search-mobile mobile_key fr">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect v-bind="showMobileNav ? svg_item_1[1] : svg_item_1[0]"></rect>
            <rect v-bind="showMobileNav ? svg_item_2[1] : svg_item_2[0]"></rect>
            <rect v-bind="showMobileNav ? svg_item_3[1] : svg_item_3[0]"></rect>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <!-- 移动端 -->
  <Drawer
    rootClassName="menu-drawer"
    placement="left"
    :closable="false"
    v-model:open="showMobileNav"
    width="50%"
    :zIndex="1001"
  >
    <Menu v-model:selectedKeys="menuActiveKeys" @click="go" mode="inline" :items="menuTree" theme="dark" />
  </Drawer>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick, computed, watch, unref, useEffect, h } from "vue";
import { useStore } from "@/store/user";
import closeIcon from '@/assets/images/close_icon.png';
import searchIcon from '@/assets/images/search_icon.png';
import router from '@/router';
import { PAGE_NOT_FOUND_NAME, } from '@/router/constant';
import { openPath, scrollToHash } from '@/utils';
import { menuTree } from '@/store/config';
import { getAppEnvConfig } from '@/utils/env';
import { useI18n } from '@/locales/useI18n';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { Menu } from 'ant-design-vue';
import { MenuProps, Drawer } from 'ant-design-vue';
import productListData from "@/store/productListData";
import { treeMap, findNode } from '@/utils/treeHelper';
const { t } = useI18n();

const { CDN_URL } = getAppEnvConfig();

const scrollTop = ref(true);
const showMobileNav = ref(false);

const pathName: any = ref('');

const svg_item_1 = [
  {
    x: 2,
    y: 3.5,
    width: 16,
    height: 1,
    fill: '#ffffff',
    'fill-opacity': 0.9,
    transform: 'rotate(0 0 0)',
  },
  {
    x: 3.98975,
    y: 3.28247,
    width: 18,
    height: 1,
    fill: '#ffffff',
    'fill-opacity': 0.9,
    transform: 'rotate(45 3.98975 3.28247)',
  }
];
const svg_item_2 = [
  {
    x: 2,
    y: 9.5,
    width: 16,
    height: 1,
    fill: '#ffffff',
    'fill-opacity': 0.9,
    transform: 'rotate(0 0 0)',
  },
  {
    x: 3.28271,
    y: 16.0104,
    width: 18,
    height: 1,
    fill: '#ffffff',
    'fill-opacity': 0.9,
    transform: 'rotate(-45 3.28271 16.0104)',
  }
];
const svg_item_3 = [
  {
    x: 2,
    y: 15.5,
    width: 16,
    height: 1,
    fill: '#ffffff',
    'fill-opacity': 0.9,
  },
  {
    x: 2,
    y: 22,
    width: 16,
    height: 1,
    fill: '#ffffff',
    'fill-opacity': 0,
  }
]

const currentFullPath = ref('/');
const menuActiveKeys = ref<string[]>(['home']);

const productChildrenMenu = treeMap(productListData, {
  conversion: node => {
    const { name, id, path, children, menuType } = node;
    const item = {
      key: id,
      label: name,
      title: name,
      path: `/product?id=${id}`,
      ...(children ? { children } : {}),
      ...(menuType ? { type: menuType } : {}),
    }
    return item;
  }
})
const menuTree = [
  {
    key: "home",
    title: t('index.routes.home'),
    label: t('index.routes.home'),
    path: "/",
  },
  {
    key: "why_electric",
    title: t('index.routes.why'),
    label: t('index.routes.why'),
    path: "/why_electric",
  },
  {
    key: "products",
    title: t('index.routes.products'),
    label: t('index.routes.products'),
    children: productChildrenMenu,
  },
  {
    key: "aboutus",
    title: t('index.routes.about'),
    label: t('index.routes.about'),
    path: "/aboutus",
  },
];
watch(
  () => router.currentRoute.value,
  (r) => {
    const { name } = r;
    pathName.value = name;

    if (name === PAGE_NOT_FOUND_NAME) {
      scrollTop.value = false;
    } else {
      scrollTop.value = true;
    }
    currentFullPath.value = r?.fullPath;
    setActiveMenu();
  },
   { immediate: true, deep: true },
)
const blackHeader = computed(() => {
  const flag = false;
  const blackArr = ['why_electric', 'aboutus']
  const key = menuActiveKeys.value[0];
  return blackArr.includes(key);
})
onMounted(async () => {
  scrollListener();
})
function setActiveMenu() {
  const path = currentFullPath.value;
  if (path.indexOf('newsDetail') > -1) {
    menuActiveKeys.value = ['why_electric'];
    return;
  }
  const temp = findNode(menuTree, (node) => node.path === path);
  menuActiveKeys.value = [temp ? temp.key : 'home'];
}
function scrollListener() {
  window.addEventListener('scroll', function(e) {
    // 当发生滚动时触发该函数
    const h = document.documentElement.scrollTop || this.document.body.scrollTop;
    if (h === 0) {
      scrollTop.value = true;
    } else {
      scrollTop.value = false;
    }
  });
}

function goHome() {
  router.push('/');
}
function go({ item }) {
  const { path } = item;
  const arr = path.split('#');
  const pathName = arr[0];
  const id = arr[1];
  if (pathName == window.location.pathname && id) {
    // 当前页面hash跳转
    scrollToHash('#' + id);
  } 
  if (showMobileNav.value) {
    showMobileNav.value = false;
  }
  openPath(path);
}
</script>
<style lang="less">
@import "@/assets/css/var.less";
.menu-drawer {
  .ant-drawer-content {
    background: #333;
  }
  .ant-drawer-body {
    padding: 0;
  }
}
.ant-menu-submenu-popup.ant-menu-dark.ant-menu-submenu {
  background: transparent;
  & > .ant-menu {
    background-color: rgba(0, 0, 0, 0.75);
  }
}

.ant-menu-dark {
  color: rgba(255, 255, 255, 1);
  background: transparent;
  height: 100%;
}
.header-container {
  display: flex;
  align-items: center;
  position: relative;
  .ant-menu-dark.ant-menu-horizontal >.ant-menu-item-selected, 
  .ant-menu-dark.ant-menu-horizontal >.ant-menu-submenu-selected {
    background-color: transparent;
  }
  .ant-menu-horizontal .ant-menu-item,
  .ant-menu-horizontal .ant-menu-submenu-title,
  .ant-menu-horizontal .ant-menu-submenu-title:hover {
    height: 100%;
  }
  .ant-menu-horizontal .ant-menu-item {
    padding-inline: 1.6vw;
  }
  .ant-menu .ant-menu-title-content {
    font-weight: bold;
    font-size: 20px;
    display: inline-block;
    height: 100%;
    overflow: hidden;
    position: relative;
    text-align: center;
    transition: all .5s;
    line-height: 65px;
  }
  .ant-menu-dark.ant-menu-horizontal >.ant-menu-item:before, 
  .ant-menu-dark.ant-menu-horizontal >.ant-menu-submenu:before {
    content: " ";
    position: absolute;
    width: 80%;
    height: .13rem;
    left: 50%;
    z-index: 999999;
    bottom: 0;
    background-color: #fff;
    transform-origin: left;
    transform: scaleX(0) translate(-50%);
    transition: all .5s;
    background: #f2d0b0;
    bottom: 0;
  }

  .ant-menu-dark.ant-menu-horizontal >.ant-menu-submenu-selected:before,
  .ant-menu-dark.ant-menu-horizontal >.ant-menu-item-selected:before,
  .ant-menu-dark.ant-menu-horizontal >.ant-menu-item:hover:before, 
  .ant-menu-dark.ant-menu-horizontal >.ant-menu-submenu:hover:before {
    transform: scaleX(1) translate(-50%)
  }
  .search {
    .search-pc {
      display: flex;
      align-items: center;
      .search-pc-item {
        display: flex;
        align-items: center;
        color: @white-color;
        &-icon {

        } 
        &-text {
          margin-left: 5px
        }
      }
      .search-pc-item:nth-child(2) {
        margin-left: 20px;
      }
    }
  }
  @media screen and (max-width: 1080px) {
    .search {
      .search-pc {
        display: none;
      }
    }
    .navigation > .ant-menu {
      display: none;
    }
  }
}
</style>