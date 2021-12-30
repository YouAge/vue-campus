<template>
<Menu
  theme="dark" mode="inline" v-model:selectedKeys="selectedKeys"
  @click="clickMenu"
>
    <template v-for="item in menuList" :key="item.path">
      <h-menu-item :menu-item="item" />
    </template>
</Menu>
</template>

<script>
import {Menu} from 'ant-design-vue'
import { ref } from 'vue'
import IconFont from '@/components/Icon/IconFont.jsx'
import HMenuItem from '@/admin/Layout/components/menus/HMenuItem.vue'
import { useRouter } from 'vue-router'
import path from "path";
import { adminRouter } from '@/router/admin-router.js'

console.log(adminRouter)
export default {
  name: 'HMenus',
  components:{
    HMenuItem,
    IconFont,
    Menu,
  },
  setup(){
    const router = useRouter()
    function clickMenu({key,item,keyPath}){
      if (/http(s)?:/.test(key)) {
        window.open(key)
      } else {
        const url = path.resolve('/',keyPath.join('/'))
        // console.log(url)
        router.push(url)
      }
    }
    return{
      selectedKeys: ref(['1']),
      menuList:adminRouter,
      clickMenu
    }

  }
}
</script>

<style scoped>

</style>
