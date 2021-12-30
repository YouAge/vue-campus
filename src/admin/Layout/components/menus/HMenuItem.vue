<template>
  <template v-if="!menuItem.hidden">
    <a-sub-menu :key="menuItem.path"  v-if="menuItem.children && menuItem.children.length>0">
      <template #icon>
        <icon-font style="color: aliceblue" :type="menuItem.meta.icon?menuItem.meta.icon:'icon-shouye'" />
      </template>
      <template #title>{{menuItem.meta.title}}</template>
      <template v-for="item in menuItem.children" :key="item.path">
        <template v-if="item.children && item.children.length>0">
          <h-menu-item :menu-item="item"/>
        </template>
        <template v-else>
          <a-menu-item :key="item.path">{{item.meta.title}}</a-menu-item>
        </template>
      </template>
    </a-sub-menu>
    <a-menu-item :key="menuItem.path" v-else>
      <template #icon v-if="menuItem.meta.icon">
        <icon-font style="color: aliceblue" :type="menuItem.meta.icon?menuItem.meta.icon:'icon-yangshi_icon_tongyong_fast'" />
      </template>
      <span>{{menuItem.meta.title}}</span>
    </a-menu-item>

  </template>

</template>

<script>
import IconFont from '@/components/Icon/IconFont.jsx'
export default {
  name: 'HMenuItem',
  components: { IconFont },
  props:{
    menuItem:{
      type:Object,
      default:{}
    }
  },
  setup(props){

    return {
      menuList:[
        { path: '/admin', name: 'admin', meta:{}, children:
            [
              {path: 'home',name:'',meta:{}}
            ]
        }
      ],
    }
  }
}
</script>

<style scoped>

</style>
