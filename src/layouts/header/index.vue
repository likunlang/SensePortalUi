<template>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick, computed, watch, unref } from "vue";
import { useStore } from "@/store/user";
import router from '@/router';
import { PAGE_NOT_FOUND_NAME, } from '@/router/constant';
import { openPath } from '@/utils';
import { menuTree } from '@/store/config';

import logoImg from '@/assets/images/logo_header.png';

const scrollTop = ref(true);
const showSearch = ref(true);
const showMobileNav = ref(false);
const showMobileSubNav = ref(false);
const mobileActiveMenu = ref(-1);

const searchKey = ref('');
const leftList: any = ref([]);

const pathName: any = ref('');

const navListRef = ref();

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
  },
   { immediate: true, deep: true },
)
function toggoleSearch() {
  showSearch.value = !showSearch.value; 
}
onMounted(async () => {
  scrollListener();
  mobileClickListener();
  setTimeout(() => {
    getOffsetLeft();
  }, 600)
})
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
  openPath(path);
}
</script>
<style lang="less" scoped>
</style>