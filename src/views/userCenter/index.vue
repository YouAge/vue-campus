<template>
  <div class="shop-content">
    <div class="app-user">
<!--        // 菜单-->
      <AppUserMemberAside />
      <article class="article">
        <router-view />
      </article>
    </div>

  </div>
</template>

<script>
import AppUserMemberAside from '@/views/userCenter/components/AppUserMemberAside.vue'
export default {
  name: 'index',
  components: { AppUserMemberAside }
}
</script>

<style scoped lang="less">
.app-user {
  display: flex;
  padding-top: 20px;
  .article {
    width: 1000px;
  }
}
</style>
