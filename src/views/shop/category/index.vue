<template>
  <!--    //轮播图-->
  <t-carousel :sliders="sliders" style="height:500px"/>
<!--//全部商品-->
  <div class="sub-list">
    <h3>潮流服装</h3>
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
const topCategory ={
  id:'1',
  title:'男装',
  children:[
    {id:1, title:'外套',picture:'https://yanxuan.nosdn.127.net/bf9f0a32c2b79c6d29de7d0843888b48.png?quality=95&imageView'},
    {id:2, title:'衬衫',picture:'https://yanxuan.nosdn.127.net/bf9f0a32c2b79c6d29de7d0843888b48.png?quality=95&imageView'},
    {id:3, title:'裤装',picture:'https://yanxuan.nosdn.127.net/bf9f0a32c2b79c6d29de7d0843888b48.png?quality=95&imageView'},
    {id:4, title:'运动衫',picture:'https://yanxuan.nosdn.127.net/bf9f0a32c2b79c6d29de7d0843888b48.png?quality=95&imageView'},
    {id:5, title:'群装',picture:'https://yanxuan.nosdn.127.net/bf9f0a32c2b79c6d29de7d0843888b48.png?quality=95&imageView'},
    {id:6, title:'内衣装',picture:'https://yanxuan.nosdn.127.net/bf9f0a32c2b79c6d29de7d0843888b48.png?quality=95&imageView'},
  ]
}
const subList =[
  {id:1,title:'外套',goods:[]},
  {id:2,title:'衬衫',goods:[]},
  {id:3,title:'裤装',goods:[]},
  {id:4,title:'运动衫',goods:[]},
  {id:5,title:'内衣装',goods:[]},
]
const sliders = [
  {imgUrl:require('@/assets/img/shop/category/01.jpg')},
  {imgUrl:require('@/assets/img/shop/category/02.jpg')}
]
import {useStore} from 'vuex'
import {useRoute,onBeforeRouteUpdate} from 'vue-router'
import { ref, watch, nextTick, computed,onMounted,watchEffect } from 'vue'
import { cateShopGet } from '@/api/shop'
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
      pageSize:2,
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
      loading.value = false
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
      subList,
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

      a {
        text-align: center;
        display: block;
        font-size: 16px;
        img {
          width: 100px;
          height: 100px;
        }
        p {
          line-height: 40px;
        }
        &:hover {
          color: #27BA9B;
        }
      }
    }
    .sel-cate {
      border: 1px #27BA9B solid;
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
