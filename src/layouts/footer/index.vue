<template>
  <div class="relative flex flex-row items-center text-lg font-regular bg-dark-500 md:flex-col">
    <div class="w-full  px-10 py-20 sm:p-4 md:px-8 md:py-10 footer_wrapper">
      <div class="md:mb-6 mb-8 flex justify-around footer-box text-white/80">
        <div class="section shrink-0 font-demibold text-left">
          <div class="text-xl cursor-pointer text-white/80 hover:text-white transition-[color] duration-300 link" @click="go('/aboutus')">About&nbsp;&nbsp;SENSE</div>
          <div></div>
          <div class="text-xl cursor-pointer mt-6 text-white/80 hover:text-white transition-[color] duration-300 link" @click="go('/why_electric')">About&nbsp;&nbsp;Electric</div>
          <div class="text-xl cursor-pointer mt-6 text-white/80">Products</div>
          <div class="mt-2 ml-2">
            <template v-for="(item, index) in productListData" :key="item.id">
              <Popover placement="right" :class='[index == 0 ? "" : "mt-2", "inline-block transition-[color] duration-300"]' color="#000">
                <template #content>
                  <div class="text-base font-medium bg-transparent text-white/80 hover:text-white transition-[color] duration-300" v-for="(subitem, subIndex) in item.children" :key="subitem.id" @click="productDetail(subitem)">
                    <p :class='[subIndex == 0 ? "" : "mt-2", "cursor-pointer"]'>{{ subitem.name }}</p>
                  </div>
                </template>
                <div class="cursor-pointer hover:text-white">{{ item.name }}</div>
              </Popover>
              <div></div>
            </template>
          </div>
        </div>
        <div class="section shrink-0 flex text-left flex-col">
          <div class="text-xl font-demibold text-white/80">Contact&nbsp;&nbsp;us</div>
          <div class="mt-3">
            <div>
              <svg class="sense-icon" aria-hidden="true">
                <use xlink:href="#sense-email"></use>
              </svg>
              {{ t('index.common.email')}}: info@sensemotor.com
            </div>
            <div>
              <svg class="sense-icon" aria-hidden="true">
                <use xlink:href="#sense-whatsapp"></use>
              </svg>
              {{ t('index.common.whatsapp')}}: +40 762075103
            </div>
            <div class="country mt-3">
              <div class="flex items-top">
                <svg class="sense-icon mt-1" aria-hidden="true">
                  <use xlink:href="#sense-Romania"></use>
                </svg>
                <span class="address-detail ml-1">Romania：Bloc 452, Aleea Dealul Măcinului 1a, București</span> 
              </div>
              <div class="flex items-top">
                <svg class="sense-icon mt-1" aria-hidden="true">
                  <use xlink:href="#sense-Hungary"></use>
                </svg>
                <span class="address-detail ml-1">Hungary：1107 Budapest, Száva utca 4B</span> 
              </div>
              <div class="flex items-top">
                <svg class="sense-icon mt-1" aria-hidden="true">
                  <use xlink:href="#sense-Greece"></use>
                </svg>
                <span class="address-detail ml-1">Greece：113 ORFEOS STREET Athens</span> 
              </div>
              <div class="flex items-top">
                <svg class="sense-icon mt-1" aria-hidden="true">
                  <use xlink:href="#sense-China"></use>
                </svg>
                <span class="address-detail ml-1">HongKong China：Kai Yu Commercial Building, No. 2C Argyle Street, Mong Kok, Kowloon</span> 
              </div>
            </div>
          </div>
        </div>
        <div class="section shrink-0 text-white/80 text-left">
          <div class="text-xl font-demibold text-white/80">Discover&nbsp;&nbsp;more&nbsp;&nbsp;here</div>
          <div class="mt-3">
            <svg class="sense-icon mt-1 mr-3 cursor-pointer hover:text-white transition-[color] duration-300" aria-hidden="true" @click="open('https://www.linkedin.com/company/sensemotor/posts/?feedView=all')">
              <use xlink:href="#sense-linkin"></use>
            </svg>
            <svg class="sense-icon mt-1 mr-3 cursor-pointer hover:text-white transition-[color] duration-300" aria-hidden="true" @click="open('https://www.facebook.com/profile.php?id=61571453008326')">
              <use xlink:href="#sense-facebook"></use>
            </svg>
            <svg class="sense-icon mt-1 mr-3 cursor-pointer hover:text-white transition-[color] duration-300" aria-hidden="true" @click="open('https://www.instagram.com/sensemotor?igsh=dW1lM3JwY2d0Ym5l')">
              <use xlink:href="#sense-insgram"></use>
            </svg>
          </div>
          <div id="contact_us" class="flex lg:flex-col text-light-300 mt-12">
            <p>
              Copyright © {{new Date().getFullYear()}} Sense Co.,Ltd
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from '@/locales/useI18n';
import { Popover } from 'ant-design-vue';
import productListData from '@/store/productListData';
import router from "@/router";

const { t } = useI18n();

function productDetail(item: any) {
  item?.id && router.push({ path: '/product', query: { id: item.id } });
}
function go(path) {
  path && router.push({ path });
}
function open(path) {
  path && window.open(path);
}
</script>
<style lang="less" scoped>
.footer_wrapper {
  max-width: 1440px;    /* 内容最大宽度 1440px */
  width: 100%;          /* 实际宽度 100% */
  margin: 0 auto;       /* 自动居中，剩余空间平均分布到两侧 */
}
.footer-box {
  gap: 2vw;
  .section {
    flex: 2;
  }
  .section:nth-child(2) {
    flex: 3;
  }
}
.address-detail {
  flex: 1; 
}
.link {
  position: relative;
  display: inline-block;
  // &::before {
  //   content: " ";
  //   position: absolute;
  //   width: 100%;
  //   height: 1px;
  //   left: 50%;
  //   z-index: 999999;
  //   background-color: #fff;
  //   transform-origin: left;
  //   transform: scaleX(0) translate(-50%);
  //   transition: all 0.5s;
  //   background: #fff;
  //   bottom: 0;
  // }
  // &:hover::before {
  //   transform: scaleX(1) translate(-50%);
  // }
}
@media screen and (min-width: 2060px) {
  .footer-box {
    .section {
      // flex: 1;
    }
  }
}
@media screen and (max-width: 992px) {
  .footer-box {
    flex-direction: column !important;
    margin-bottom: 0;
    .section {
      margin-bottom: 30px;
    }
    .address-detail {
      // max-width: 70vw; 
    }
  }
}
</style>
