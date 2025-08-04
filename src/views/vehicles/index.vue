<template>
</template>
<script lang="ts">
  export default defineComponent({
    name: 'VEHICLES_PAGE',
    components: {
      Swiper,
      SwiperSlide,
    },
  });
</script>
<script lang="ts" setup>
import { ref, onMounted, computed, watch, defineComponent } from "vue";
import router from "@/router";
import { vehiclesBanner } from "@/store/config";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Pagination];

const names = {
  '0': 'Van',
  '1': 'Cab',
  '2': '4X4',
  '3': 'CNG',
}
const pagination = {
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="bde-button-68-637 bde-button ' + className + '">' + names[index] + '</span>';
          },
        }
</script>
<style lang="less">
.vehciles-box {
  .swiper {
    width: 100%;
    height: 500px;
    background: #fff;
    .swiper-pagination-clickable .swiper-pagination-bullet {
      cursor: pointer;
      width: 50px;
      color: #000;
      border-radius: 20px;
      line-height: 20px;
      height: 20px;
      background: transparent;
      opacity: 1;
      margin-bottom: 20px;
    }
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background: transparent;
      border: 2px solid #1554FF;
      color: #1554FF;
    }
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #444;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .banner-img-box {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: contain;
    background-color: #fff;
  }
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
  }
  .bde-heading-68-690.bde-h4 {
    margin: 20px auto;
  } 
  .vehciles-slide-container {
    // margin-bottom: 20px;
  }
  .breakdance .bde-advancedslide .advanced-slider__slide {
    background: #000;
  }
}

</style>
