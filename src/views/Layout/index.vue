<template>
  <AppHeader />
  <router-view />
  <AppFooter v-if="store.getters.footerShow"/>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import {useStore} from 'vuex'
export default {
  name: 'index',
  components: { AppHeader, AppFooter },
  setup () {
    const store = useStore()
    store.dispatch('shop/getMenus')
    // 获取 菜单
    return {
      store
    }
  }
}
</script>

<style scoped>

</style>
