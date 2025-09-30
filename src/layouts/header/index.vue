<template>
  <div :class="['all_header', 'scroll_header']">
    <div class="sense_container header-container clearfix">
      <div class="logo" style="cursor: pointer;" @click="goHome">
        <img :src="`${CDN_URL}/resource/images/logo_header.png`" alt="logo">
      </div>
      <div class="navigation">
        <ul class="first_nav clearfix" ref="navListRef" id="nav-list">
          <li :class="['li_nav', isActiveMenu(item) ? 'active' : '']" v-for="(item, index) in menuTree" :key="index" >
            <a class="header-title" href="javascript:;" @click="go(item)" target="_self">
              {{ item.title }}
            </a>
            <div class="second_nav" v-if="item.children?.length"  :style="{'padding-left': leftList[index+1]}">
              <div class="item" v-for="(i,j) in item.children" :key="j">
                <template v-if="i.children?.length">
                  <h4>
                    {{ i.title }}
                  </h4>
                  <ul class="clearfix">
                    <li v-for="(_i,_j) in i.children" :key="_j">
                      <a  href="javascript:;" :class="[ isActiveMenu(_i) ? 'active' : '']"  @click="go(_i)">
                        {{ _i.title }}
                      </a>
                    </li>
                  </ul>
                </template>
                <template v-else>
                  <h4>
                    <a href="javascript:;" :class="[ isActiveMenu(i) ? 'active' : '']" @click="go(i)">{{ i.title }}</a>
                  </h4>
                </template>
              </div>
            </div>
          </li>
        </ul>
      </div>
      
      <!-- 移动端 -->
      <div :class="['phone_navigation', showMobileNav ? 'show' : '']">
        <nav id="mobile-nav">
          <ul :class="['fix_nav', showMobileNav ? 'mm-opend' : '', showMobileSubNav ? 'mm-sopend' : '']" id="mm-m0-p0">
            <li v-for="(item, index) in menuTree" :key="index" @click="mobileMenuClick(item, index)">
              <a :class="[isActiveMenu(item) ? 'active': '' ]">
                {{ item.title }}
                <span :class="[item.children?.length ? 'mm-subopen' : '']"></span>
              </a>
            </li>
          </ul>
          <template v-for="(item, index) in menuTree" :key="index">
            <!-- <ul :class="['sub_nav', mobileActiveMenu === index ? 'mm-opend' : '']"> -->
            <ul class="sub_nav">
              <!-- <li @click="resetMenu">
                <a class="mm-subclose">{{item.title}}</a>
              </li> -->
              <li @click="mobileMenuClick(_item, index)" v-if='item.children?.length' v-for="(_item, _index) in item.children" :key="_index">
                <a :class="[isActiveMenu(_item) ? 'active': '' ]">{{_item.title}}</a>
                <ul class="thrid_nav" v-if="_item.children?.length">
                  <li @click="mobileMenuClick(_ite, index)" v-for="(_ite, _ind) in _item.children" :key="_ind">
                    <a :class="[isActiveMenu(_ite) ? 'active': '' ]">{{_ite.title}}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </template>
        </nav>
      </div>
      <div class="search">
        <div class="search-pc">
          <a class="search-pc-item" href="javascript:;" @click="scrollBottom">
            <el-icon class="search-pc-item-icon" size="20"><Message /></el-icon>
            <div class="search-pc-item-text">
              Contact us
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
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick, computed, watch, unref, useEffect } from "vue";
import { useStore } from "@/store/user";
import closeIcon from '@/assets/images/close_icon.png';
import searchIcon from '@/assets/images/search_icon.png';
import router from '@/router';
import { PAGE_NOT_FOUND_NAME, } from '@/router/constant';
import { openPath, scrollToHash } from '@/utils';
import { menuTree } from '@/store/config';
import { getAppEnvConfig } from '@/utils/env';

const { CDN_URL } = getAppEnvConfig();
// import logoImg from '@/assets/newImages/logo_header.png';

const scrollTop = ref(true);
const showSearch = ref(true);
const showMobileNav = ref(false);
const showMobileSubNav = ref(false);
const mobileActiveMenu = ref(-1);

const searchKey = ref('');
const leftList: any = ref([]);

const pathName: any = ref('');

const navListRef = ref();


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
  },
   { immediate: true, deep: true },
)

function isActiveMenu(item = {}) {
  const { path } = item;
  const arr = path.split('#');
  const pathName = arr[0];
  if (pathName === '/') {
    return currentFullPath.value === path;
  } else {
    return pathName == window.location.pathname;
  }
}
function scrollBottom() {
  // 计算滚动到底部的垂直距离
  const scrollHeight = document.documentElement.scrollHeight; // 页面总高度
  const clientHeight = document.documentElement.clientHeight; // 视口高度
  const scrollToBottom = scrollHeight - clientHeight;

  // 滚动到底部（瞬间跳转）
  window.scrollTo(0, scrollToBottom);
}
function toggoleSearch() {
  showSearch.value = !showSearch.value; 
}
onMounted(async () => {
  scrollListener();
  // clickListener();
  mobileClickListener();
  setTimeout(() => {
    getOffsetLeft();
  }, 600)
  // keyListener();
})
async function keyListener() {
  await nextTick();
  document.onkeypress = function(e) {
    if (searchKey.value && showSearch.value && e.keyCode == 13) {
      searchJump();
    }
  }
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
    setTimeout(() => {
      getOffsetLeft();
    }, 500)
  });
}
function clickListener() {
  window.addEventListener('click', function(e) {
    const id = e.target?.id;
    if (showSearch.value) {
      if (id !== 'search-nav-key' && id.indexOf('header_icon') === -1) {
        // 点击输入框以外的区域
        searchKey.value = '';
        showSearch.value = false;
      }
    }
  });
}
function mobileMenuClick(item: any, index: any) {
  mobileActiveMenu.value = index;
  if (item.children?.length && !showMobileSubNav.value) {
    // 有子菜单 && 当前显示一级菜单
    showMobileSubNav.value = true;
  } else {
    go(item);
    showMobileNav.value = false;
  }
}
function resetMenu() {
  showMobileSubNav.value = false;
  mobileActiveMenu.value = -1;
}
function mobileClickListener() {
  window.addEventListener('click', function(e) {
    const target = e.target || e.srcElement;
    const pId = findParentElement(target, 'mobile-nav');
    const id = pId || target?.id;
    
    if (showMobileNav.value) {
      if (id !== 'mobile-nav' && id.indexOf('mobile_key') === -1) {
        showMobileNav.value = false;
      }
    }
  });
}

function findParentElement(node: any, id: string) {
  if (!node.parentNode) {
    return null; // 到达根元素仍未找到指定父元素
  }
 
  if (node.parentNode.id === id) {
    return id; // 找到指定父元素
  }
 
  return findParentElement(node.parentNode, id); // 继续向上查找父元素
}
function searchJump(){
  if (searchKey.value && showSearch.value) {
    if (pathName.value === 'Search') {
      router.replace({ path: '/search', query: { keyword: searchKey.value.trim() }});
    } else {
      router.push({ path: '/search', query: { keyword: searchKey.value.trim() }});
    }
    searchKey.value = '';
    showSearch.value = false;
  }
}
async function getOffsetLeft() {
  await nextTick();
  const navEl = unref(navListRef);
  
  const defLeft = document.documentElement.clientWidth / 3;
  const lis = navEl?.getElementsByClassName('li_nav');
  
  for (let i = 0; i < lis?.length; i++) {
    const element: any = lis[i];
    const left = element.getBoundingClientRect()?.left || element.offsetLeft;
    if (element && left) {
      leftList.value[i] = left + 'px';
    } else {
      leftList.value[i] = defLeft;
    }
  }
  
}
function goHome() {
  router.push('/');
}
function go(item: any) {
  const { path } = item;
  const arr = path.split('#');
  const pathName = arr[0];
  const id = arr[1];
  if (pathName == window.location.pathname && id) {
    // 当前页面hash跳转
    scrollToHash('#' + id);
  } 
    openPath(path);
}
function contactUs() {
  // console.log(1)
}
</script>
<style lang="less" scoped>
@import "@/assets/css/var.less";

.all_header .first_nav li a.header-title {
  // color: #000;
  font-weight: bold;
  font-size: 20px;
}
.all_header .sense_container.header-container {
  display: flex;
  align-items: center;
  position: relative;
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
}
</style>