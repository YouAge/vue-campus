<template>
  <div class="sub-list">
    <h3>{{'商品搜索：'+ keyword}}</h3>
  </div>
  <!--  // 商品列表-->
  <search-shop :goods-list="goodsList" :total="pages.total" @change="npPage"
               :page-index="pages.pageIndex" :page-size="pages.pageSize"/>

</template>


<script>

import SearchShop from '@/views/shop/components/SearchShop'
import {useRoute,onBeforeRouteUpdate} from 'vue-router'
import { ref ,computed,watch,watchEffect} from 'vue'
import { cateShopGet } from '@/api/shop'

export default {
  name:'search',
  components: { SearchShop },
  setup(){
    const route = useRoute()
    const keyword= ref(route.query.keyword)
    const goodsList =ref()
    const pages = ref({
      total:0,
      pageIndex:1,
      pageSize:10
    })

    async function getCateShop(item={},pageIndex=pages.value.pageIndex,pageSize=pages.value.pageSize){
      const f = await cateShopGet({
        keyword:keyword.value,pageIndex,pageSize,...item
      })
      console.log('获取',f)
      pages.value.total = f.count
      goodsList.value = f.rows
    }
    getCateShop()
    onBeforeRouteUpdate((to)=>{
      keyword.value = to.query.keyword
      console.log( '搜索关键字',keyword.value,to)
      getCateShop()
    })


  function npPage(pageIndex,pageSize){

  }
    return {
      goodsList,
      pages,
      npPage,
      keyword
    }
  }
}
</script>

<style scoped>
.sub-list {
  margin-top: 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
 align-items: center;
  height: 50px;
}
</style>
