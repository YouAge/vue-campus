<template>
  <app-header />
  <div class="app-content">
    <router-view />
  </div>
  <app-footer />
</template>

<script>
import AppHeader from "@/views/Layout/AppHeader";
import AppFooter from '@/views/AppFooter.vue'
export default {
  name: "index",
  components: {AppHeader,AppFooter}
}
</script>

<style scoped lang="less">
.app-content{
  background-color: #F3F3F3;
  min-height: 500px;
}
</style>
