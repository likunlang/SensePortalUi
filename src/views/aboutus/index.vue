<template>
  <div class="childpage_wrapper news_detail_wrapper news_wrapper aboutus_wrapper">
    <div class="content_block clearfix" >
      <div class="second_page news_detail_content news_content fadeInUpSmall">
        <div class="news_container clearfix">
          <div class="aboutus_content clearfix">
            <div class="flex top-container">
              <div>
                <img class="mobile-logo" v-lazy="`${CDN_URL}/resource/images/SENSE2.webp`" />
                <div class="aboutus_title">SenseMotor</div>
                <div class="aboutus_sub-title mt-3">Pioneer in Electric Commercial Vehicle Solutions</div>
              </div>
              <div class="logo-container">
                <img class="logo" v-lazy="`${CDN_URL}/resource/images/SENSE2.webp`" />
              </div>
            </div>
            <div class="mt-10">
              <p class="content-p">As the Exclusive Regional Official Representative for Dongfeng and Wuling New Energy Vehicles, SenseMotor delivers cutting -edge electric commercial vehicles and innovative logistics solutions throughout Central and Eastern Europe.</p>
              <br />
              <p class="content-p">Our comprehensive ecosystem integrates extensive distribution networks, dedicated technical support, seamless project delivery, and a reliable service station network for electric light trucks and vans.</p>
              <br />
              <p class="content-p">Operating in Poland, Hungary, Greece, and Romania, we empower sustainable logistics and optimize fleet efficiency, driving the future of clean transportation in the region.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getAppEnvConfig } from '@/utils/env';

const { CDN_URL } = getAppEnvConfig();

</script>
<style lang="less" scoped>
  .aboutus_content {
    width: 100%;
    padding: 3vw 3vw 30vh;
    background-color: #fff;
    .top-container {
      // justify-content: space-around;
      align-items: center;
    }
    .logo-container {
      margin-left: 8vw;
    }
    .aboutus_title {
      color: #12151a;
      line-height: 60px;
      font-size: 28px;
      font-weight: bold;
    }
    .aboutus_sub-title {
      color: rgba(18,21,26,.6);
      line-height: 1.5;
      font-size: 14px;
      font-weight: 340;
    }
    .content-p {
      color: #000;
      font-size: 14px;
      font-weight: 340;
    }
    .logo {
      height: 80px;
    }
  }
  .mobile-logo {
    display: none;
  }
  @media screen and (max-width: 992px) {
    .aboutus_content {
      .aboutus_title {
        line-height: 40px;
        font-size: 22px;
      }
      .logo-container {
        display: none;
      }
      .mobile-logo {
        display: block;
        height: 50px;
        margin-bottom: 25px;
      }
    }
  }
</style>
