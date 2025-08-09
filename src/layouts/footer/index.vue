<template>
  <div id="contact_us" class="relative flex flex-row items-center text-lg font-regular bg-dark-500 md:flex-col px-10 py-20 sm:p-6 md:px-8 md:py-10">
    <div class="w-full text-center">
      <div class="md:mb-6 mb-8 flex justify-between items-center footer-box">
        <a class="hover:no-underline shrink-0 text-white/80 cursor-pointer">
          <el-icon class="mr-1 footer-icon"><Message /></el-icon>
          Email: info@sensemotor.com
        </a>
        <a class="hover:no-underline shrink-0 text-white/80 cursor-pointer">
          <el-icon class="mr-1 footer-icon"><ChatSquare /></el-icon>
          Whatsapp: +40 762075103
        </a>
        <a class="hover:no-underline shrink-0 text-white/80 cursor-pointer">
          <el-icon class="mr-1 footer-icon"><Location /></el-icon>
          Add:Bloc 452, Aleea Dealul Măcinului 1a, București Romania
        </a>
      </div>
      <div class="flex lg:flex-col text-l text-light-300 md:flex md:flex-col md:items-center">
        <p class="mr-2 lg:mr-0">
          Copyright © {{new Date().getFullYear()}} Sense Co.,Ltd
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
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
  }
}
</style>
