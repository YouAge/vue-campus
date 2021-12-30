<template>
  <div class="app-heard">
    <div class="container">
      <div class="navigation-left">
        <!--    // logo-->
        <RouterLink class="logo" to="/"></RouterLink>
        <AppMenus />
      </div>
      <div class="navigation-right">
        <AppSearch />
      </div>
    </div>

  </div>
</template>

<script>
import AppMenus from '@/views/Layout/components/AppMenus.vue'
import AppSearch from '@/views/Layout/components/AppSearch.vue'
export default {
  name: 'AppHeader',
  components: { AppSearch, AppMenus }
}
</script>

<style scoped lang="less">
.app-heard{
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 888;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4e4;
  box-sizing: border-box;
//transform: translateY(-100%);
//opacity: 0;

.container{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  .navigation-left{
    flex: 1;
    display: flex;
    align-content: center;
    text-align: center;
  }
  .navigation-right{
    width: 420px;
  }
}

.logo{
  width: 40px;
  height: 40px;
  background: url(~@/assets/img/app-heard/logo.gif) no-repeat;
  background-size: 100% 100%;
}
}
</style>
