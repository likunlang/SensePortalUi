<template>
  <Result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra>
      <Button type="primary" @click="goHome">Back Home</Button>
    </template>
  </Result>
</template>
<script lang="ts" setup>
  import { unref } from 'vue';
  import { Result, Button } from 'ant-design-vue';
  import router from "@/router";

  function goHome() {
    router.push("/");
  }
</script>
