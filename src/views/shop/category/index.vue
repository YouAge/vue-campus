<template>
  <!--    //轮播图-->
<!--  <t-carousel :sliders="sliders" style="height:500px"/>-->
<!--//全部商品-->
  <div class="sub-list">
    <h3>{{topCategory.name}}</h3>
    <ul>
      <li v-for="sub in topCategory.children" :key="sub.id"
          :class="{'sel-cate':sub.id ==cateId }" >
        <a href="javascript:;" @click="cateId=sub.id">
          <img :src="sub.picture" >
          <p>{{sub.name}}</p>
        </a>
      </li>
    </ul>
  </div>
<!--  // 商品列表-->
<search-shop :goods-list="goodsList" :total="pages.total" @change="npPage" :loading="loading"
             :page-index="pages.pageIndex" :page-size="pages.pageSize"/>
</template>

<script>
import GoodsItem from '../components/goods-item.vue'
import TCarousel from '@/components/TCarousel.vue'
import TMore from '@/components/TMore.vue'
import SearchShop from '@/views/shop/components/SearchShop'

import {useStore} from 'vuex'
import {useRoute,onBeforeRouteUpdate} from 'vue-router'
import { ref, watch, nextTick, computed,onMounted,watchEffect } from 'vue'
import { cateShopGet } from '@/api/shop'

const sliders = [
  {imgUrl:require('@/assets/img/shop/category/01.jpg')},
  {imgUrl:require('@/assets/img/shop/category/02.jpg')}
]
export default {
  name: 'index',
  components: { SearchShop, TMore, GoodsItem,TCarousel },

  setup(){
    const store = useStore()
    const route = useRoute()
    const loading =  ref(false)
    const cateId = ref(null) // 二级分类id
    const topCategory = computed(()=>{
      let cate ={children:[]}
      const f = store.getters.headMenus.find(item=>item.id == route.params.id)
      if(f) cate = f
      return cate
    })

    const goodsList = ref([])
    const pages = ref({
      pageIndex:1,
      pageSize:20,
      total:0
    })

    async function setCateId(routes){
      cateId.value = routes.params.cateId?routes.params.cateId:''
       // 这是个坑，vuex数据异步加载，页面刷新 vuex数据并没有获取到，
       // watchEffect 数据改变后出发，
        watchEffect(()=>{
          if(topCategory.value.children.length>0){
            if(!cateId.value){
            cateId.value = topCategory.value.children[0].id
            }
          }
        })
      }
    setCateId(route)

    async function getCateShop(item={},pageIndex=pages.value.pageIndex,pageSize=pages.value.pageSize){
      loading.value = true
      const f = await cateShopGet({
        cateId:cateId.value,pageIndex,pageSize,...item
      })
      pages.value.total = f.count
      goodsList.value = f.rows
      setTimeout(()=>{
        loading.value = false
      },1000)

    }
    function npPage(pageIndex,pageSize){
      getCateShop({},pageIndex,pageSize)
    }


    watch(()=>cateId.value,async (value)=>{
      if(value){
        await getCateShop()
      }
    })



    // 监听路由改变，
    onBeforeRouteUpdate((to, from) => {
      setCateId(to)
    })


    return {
      topCategory,
      cateId,
      sliders,
      goodsList,
      pages,
      npPage,
      loading
    }
  }
}
</script>

<style scoped lang="less">
// 鼠标经过上移阴影动画
.hoverShadow () {
  transition: all .5s;
  &:hover {
    transform: translate3d(0,-3px,0);
    box-shadow: 0 3px 8px rgba(0,0,0,0.2);
  }
}
h3 {
  font-size: 28px;
  color: #666;
  font-weight: normal;
  text-align: center;
  line-height: 100px;
}
.sub-list {
  margin-top: 20px;
  background-color: #fff;
  ul {
    display: flex;
    padding: 0 32px;
    flex-wrap: wrap;
    min-height: 160px;
    li {
      width: 168px;
      height: 160px;
      border-radius: 4px;
      a {
        text-align: center;
        display: block;
        font-size: 16px;
        img {
          margin-top: 15px;
          width: 100px;
          height: 100px;
          border-radius: 4px;
        }
        p {
          line-height: 40px;
        }
          transition: all .5s;
          &:hover {
            color: #27BA9B;
            transform: translate3d(0,-3px,0);
            box-shadow: 0 3px 8px rgba(0,0,0,0.2);
          }
      }
    }
    .sel-cate {
      //border: 1px #27BA9B solid;
      background: #42b983;
    }
  }
}


.ref-goods {
  background-color: #fff;
  margin-top: 20px;
  position: relative;
  .head {
    .t-mote {
      position: absolute;
      top: 20px;
      right: 20px;
    }
    .tag {
      text-align: center;
      color: #999;
      font-size: 20px;
      position: relative;
      top: -20px;
    }
  }
  .body {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0 65px 30px;
  }
}
</style>
