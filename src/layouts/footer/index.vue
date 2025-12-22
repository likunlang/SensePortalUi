<template>
  <div class="relative flex flex-row items-center text-lg font-regular bg-dark-500 md:flex-col px-10 py-20 sm:p-6 md:px-8 md:py-10">
    <div class="w-full text-center">
      <div class="md:mb-6 mb-8 flex justify-between items-center footer-box">
        <a class="hover:no-underline shrink-0 text-white/80 cursor-pointer">
          <svg class="sense-icon" aria-hidden="true">
            <use xlink:href="#sense-email"></use>
          </svg>
          {{ t('index.common.email')}}: info@sensemotor.com
        </a>
        <a class="hover:no-underline shrink-0 text-white/80 cursor-pointer">
          <svg class="sense-icon" aria-hidden="true">
            <use xlink:href="#sense-whatsapp"></use>
          </svg>
          {{ t('index.common.whatsapp')}}: +40 762075103
        </a>
        <a class="hover:no-underline shrink-0 text-white/80 cursor-pointer flex text-left">
          <!-- <div>
            <svg class="sense-icon" aria-hidden="true">
              <use xlink:href="#sense-location"></use>
            </svg>
          </div> -->
          <div class="country">
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
        </a>
      </div>
      <div class="flex lg:flex-col text-l text-light-300 md:flex md:flex-col md:items-center">
        <p>
          Copyright © {{new Date().getFullYear()}} Sense Co.,Ltd
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from '@/locales/useI18n';
const { t } = useI18n();

</script>
<style lang="less" scoped>
.footer-box {
  > a:nth-child(1),
  > a:nth-child(2),
  {
    flex: 1;
  }
}
@media screen and (min-width: 2060px) {
  .footer-box {
    > a {
      flex: 1;
    }
  }
}
@media screen and (max-width: 1080px) {
  .footer-box {
    flex-direction: column !important;
    margin-bottom: 0;
    a {
      margin-bottom:16px;
      .footer-icon {
        position: relative;
        top: 2px;
      }
    }
    .country {
      transform: translateX(10vw);
    }
    .address-detail {
      max-width: 70vw; 
    }
  }
}
@media screen and (max-width: 768px) {
  .footer-box {
    .country {
      transform: translateX(5vw);
    }
  }
}
@media screen and (max-width: 768px) {
  .footer-box {
    .country {
      transform: translateX(0);
    }
  }
}
</style>
