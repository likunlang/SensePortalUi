<template>
  <div class="childpage_wrapper news_detail_wrapper news_wrapper">
    <div class="content_block clearfix" >
      <div class="second_page news_detail_content news_content fadeInUpSmall aboutus_container">
        <div class="aboutus_content clearfix">
          <div class="flex top-container">
            <div class="container-l">
              <img class="logo-img" v-lazy="{
                src: `${CDN_URL}/resource/images/aboutsense.webp`,
                loading: loadingImg,
              }" />
            </div>
            <div class="container-r">
              <div class="aboutus_title">
                about&nbsp;
                <img class="text-logo" v-lazy="`${CDN_URL}/resource/images/SENSE2.webp`" alt="SENSE" title="SENSE" />
                MOTORS
              </div>
              <div class="aboutus_sub-title">Pioneer in Electric Commercial Vehicle Solutions</div>
              <div class="mt-3">
                <p class="content-p">As the Exclusive Regional Official Representative for Dongfeng and Wuling New Energy Vehicles, SenseMotor delivers cutting -edge electric commercial vehicles and innovative logistics solutions throughout Central and Eastern Europe.</p>
                <p class="content-p">Our comprehensive ecosystem integrates extensive distribution networks, dedicated technical support, seamless project delivery, and a reliable service station network for electric light trucks and vans.</p>
                <p class="content-p">Operating in Poland, Hungary, Greece, and Romania, we empower sustainable logistics and optimize fleet efficiency, driving the future of clean transportation in the region.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="why_choose_content" v-lazy:background-image="`${CDN_URL}/resource/images/center_bg.webp`">
          <div class="aboutus_title">
            Why choose&nbsp;
            <img class="text-logo" v-lazy="`${CDN_URL}/resource/images/logo_header.webp`" alt="SENSE" title="SENSE" />
            MOTORS？
          </div>
        <div class="aboutus_container">
          <ul class="reason-box">
            <li class="reason-item">
              <div class="reason-title">Customer First</div>
              <div class="content-p">Prioritize customer needs in every decision, striving to exceed expectations with optimal products and dedicated services.</div>
            </li>
            <li class="reason-item">
              <div class="reason-title">Integrity&Partnership</div>
              <div class="content-p">Build lasting partnerships on a foundation of transparency, trust, and mutual success, ensuring fair and ethical operations.</div>
            </li>
            <li class="reason-item">
              <div class="reason-title">Agile&Pragmatic</div>
              <div class="content-p">Respond quickly to market changes with a practical and results-oriented approach, valuing tangible outcomes over theoretical ideas.</div>
            </li>
            <li class="reason-item">
              <div class="reason-title">Open Innovation</div>
              <div class="content-p">Actively collaborate with external partners, universities, and research institutes to integrate diverse ideas and drive technological breakthroughs.</div>
            </li>
            <li class="reason-item">
              <div class="reason-title">Social Responsibility</div>
              <div class="content-p">Committed to sustainable development and contributing positively to our communities, aiming to create long-term value for society.</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getAppEnvConfig } from '@/utils/env';
import loadingImg from '@/store/loadingImg';

const { CDN_URL } = getAppEnvConfig();

</script>
<style lang="less" scoped>
    .aboutus_container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      // padding: 3vw 5vw;
    }
    .aboutus_content {
      text-align: center;
      width: 100%;
    }
    .top-container {
      // justify-content: space-around;
      align-items: center;
      padding: 60px 0;
    }
    .aboutus_title {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #12151a;
      // line-height: 40px;
      font-size: 28px;
      font-weight: bold;
      text-transform: uppercase;
      white-space: nowrap;
    }
    .text-logo {
      display: inline-block;
      width: 15vw;
      margin: 0px 5px;
      max-width: 200px;
      min-width: 120px;
    }
    .aboutus_sub-title {
      margin-top: 10px;
      color: rgba(18,21,26,.6);
      line-height: 2;
      font-size: 16px;
    }
    .reason-title {
      line-height: 2;
      font-size: 16px;
      font-weight: bold;
      color: #12151a;
      // color: #fff;
      text-transform: uppercase;
      margin: 50px auto 10px;
    }
    .content-p {
      color: #000;
      font-size: 15px;
      text-align: justify;
      margin-bottom: 20px;
      line-height: 27px;
    }
    .logo {
      height: 80px;
    }
  .container-l {
    margin-bottom: 30px;
  }
  .container-r {
    margin-left: 50px;
  }
  .logo-img {
    display: inline-block;
    width: 40vw;
    min-width: 368px;
    max-width: 480px;
  }
  .why_choose_content {
    width: 100%;
    height: auto;
    padding: 6% 3vw;
    position: relative;
    box-sizing: border-box;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center 0;
    backdrop-filter: blur(2px);
    text-align: center;
    &::before {
      content: ' ';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: linear-gradient(to top right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%);
      backdrop-filter: blur(6px);
      z-index: -1;
    }
    .aboutus_title,
    .content-p,
    .reason-title{
      color: #fff;
      // height: 72px;
    }
  }
  .reason-box {
    display: flex;
    gap: 20px;
    .reason-item {
      // min-width: 205px;
    }
    .content-p {
      text-align: left;
    }
  }

  @media screen and (max-width: 1200px) {
    .top-container {
      padding-left: 3vw;
      padding-right: 3vw;
    }
  }
  @media screen and (max-width: 992px) {
    .aboutus_title {
      line-height: 30px;
      font-size: 18px;
    }
    .reason-title {
      height: 64px;
    }
    .reason-box {
      gap: 10px;
    }
  }
  @media screen and (max-width: 768px) {
    .reason-box {
      flex-direction: column;
      gap: 0;
    }
    .logo-img {
      max-width: 100%;
    }
    .top-container {
      padding: 0;
    }
    .container-r {
      padding: 20px;
    }
    .reason-title {
      margin-top: 20px;
      height: auto;
    }
    .content-p {
      text-align: justify;
    }
    .top-container {
      flex-direction: column;
    }
    .container-r {
      margin-left: 0;
    }
    .logo-img {
      width: 100%;
      min-width: 368px;
    }
  }
</style>
