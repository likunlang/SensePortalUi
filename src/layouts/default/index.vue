<template>
  <div class="layout-contianer">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from "@/layouts/header/index.vue";
import Footer from "@/layouts/footer/index.vue";

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
  },
  setup() {}
})
</script>
<style lang='scss'>
</style>
