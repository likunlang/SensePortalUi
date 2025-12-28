<template>
  <swiper
    :centeredSlides="props.listData.length < 2"
    :spaceBetween="20"
    :style="{
      '--swiper-navigation-size': '18px',
      '--swiper-navigation-color': '#333',
    }"
    :navigation="true"
    :pagination="paginationCustom"
    :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      '1620': {
        slidesPerView: 4,
        spaceBetween:80,
      },
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="item in props.listData">
      <div class="item cycle-slide">
        <div class="inset">
          <a href="javascript:;" @click="productDetail(item)">
            <span class="thumb">
              <img class="responsive-image" v-lazy="{
                  src: `${item.slideImg}`,
                  loading: loadingImg,
                  error: loadingImg
                }"
              />
            </span>
            <span class="strapline">
              <span>
                {{ item.name }}
              </span>
            </span>
          </a>
          <section class="price">
            <div class="label" style="padding-top: 10px;">
              {{ item.type }}
            </div>
          </section>
          <span class="content">
            <span>
              <div class="details">
                <template v-if="item.id== 'E-STAR_T'">
                  <span class="weight has-icon">
                    <span class="label">Size(with BOX)：{{ item.size_with_box }}</span>
                  </span>
                  <span class="weight has-icon">
                    <span class="label">Size(Chassis)：{{ item.size_chassis }}</span>
                  </span>
                </template>
                <span class="weight has-icon" v-else>
                  <span class="label">Size：{{ item.size }}</span>
                </span>
                <span class="weight has-icon" v-if="item.GVW">
                  <span class="label"> GVW：{{ item.GVW }} </span>
                </span>
                <span class="volume has-icon">
                  <span class="label">
                    Battery：{{ item.Battery }}
                  </span>
                </span>
                <span class="horsepower has-icon">
                  <span class="label">Range：{{ item.Range }}</span>
                </span>
              </div>
              <section class="buttons">
                <Button @click="productDetail(item)" type="primary" size="large">Learn More</Button>
              </section>
            </span>
          </span>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, watch } from "vue";
import router from "@/router";
import { useI18n } from '@/locales/useI18n';
import { Swiper, SwiperSlide } from 'swiper/vue';

import { Pagination, Navigation } from 'swiper/modules';
import { Button } from 'ant-design-vue';
import loadingImg from '@/store/loadingImg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const { t } = useI18n();

const props = defineProps({
  listData: { type: Array, default: () => [] },
})

const modules = [Pagination, Navigation];

const paginationCustom = {
  clickable: true,
  renderBullet: (index, className) => `<span class="custom_dot_img ${className}"></span>`,
}
function productDetail(item: any) {
  item?.id && router.push({ path: '/product', query: { id: item.id } });
}
</script>
<style lang="less" scoped>
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  align-items: center;
  background: #fff;
  border: 0;
  border-radius: 50%;
  box-shadow: 0 4px 9px 1px rgba(0, 0, 0, .11);
  color: #333;
  height: 48px;
  width: 48px;
  // opacity: 1;
}
:deep(.swiper-pagination) {
  .custom_dot_img {
    width: 40px;
    height: 4px;
    border-radius: 2px;
    opacity: 1;
    background: #999;
    &.swiper-pagination-bullet.swiper-pagination-bullet-active {
      background: #1890FF;
    }
  }
}
.inset {
  margin-inline: 10px;
  margin-bottom: 50px;
  width: auto;
  border-radius: 10px;
  padding: 10px;
  height: 100%;
  text-align: center;
  white-space: normal;
}

.thumb {
  overflow: hidden;
  position: relative;
  width: 100%;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  display: flex;
  justify-content: center;
  height: 18vw;
  img {
    display: block;
    // height: 18vw;
    // min-height: 180px;
    // max-width: 135%;
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}

.strapline {
  min-height: unset;
  padding-top: 0;
  font-size: 28px;
  line-height: 1.2;
  font-weight: 400;
  letter-spacing: 0.01em;
  margin-bottom: 0;
}

.price {
  font-family: corpo-s, Arial, Verdana, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.4;
  padding-top: 5px;
  color: #767676;
}

a.highlight {
  color: #0078d6 !important;
}

.content {
  color: #000;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.01em;
  padding-top: 13px;
  display: block;
  span {
    display: block;
  }
  
  & > span {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  
  .details {
    line-height: 25px;
    text-align: left;
    min-height: 149px;
    > span + span {
      padding-top: 6px;
    }
  }
  
  .buttons {
    padding-top: 12px;
  }
}

.has-icon {
  position: relative;
  
  .icon {
    inset: 0;
    position: absolute;
    top: 5px;
  }
  
  &.weight .icon {
    top: -2px;
  }
  
  .label {
    padding-left: 33px;
  }
}
@media screen and (max-width: 768px) {
  .content {
    // font-size: 14px;
  }
  .has-icon .label {
    padding: 5px;
  }
}
</style>
