<template>
  <home-overview />
  <div class="user-info">
    <div class="home-panel">
      <div class="header">
        <h4>我的收藏</h4>
        <router-link to="/" />
      </div>
      <!-- 商品列表 -->
      <div class="goods-list">
        <GoodsItem v-for="item in collectGoods" :key="item.id" :goods="item" />
      </div>
    </div>
  </div>
  <div class="user-info">
    <div class="home-panel">
      <div class="header">
        <h4>我的足迹</h4>
        <router-link to="/" />
      </div>
      <!-- 商品列表 -->
      <div class="goods-list">
        <GoodsItem v-for="item in collectGoods" :key="item.id" :goods="item" />
      </div>
    </div>
  </div>
  <div class="user-info">
    <div class="home-panel">
      <div class="header">
        <h4>猜你喜欢</h4>
        <router-link to="/" />
      </div>
      <!-- 商品列表 -->
      <div class="goods-list">
        <GoodsItem v-for="item in collectGoods" :key="item.id" :goods="item" />
      </div>
    </div>
  </div>
</template>

<script>
import HomeOverview from '@/views/userCenter/home/components/home-overview.vue'
import GoodsItem from './goodItem.vue'
import { findGoodsColl } from '@/api/shop'
export default {
  name: 'collect',
  components: { GoodsItem, HomeOverview },
  data(){
    return {
      collectGoods:[]
    }
  },
  methods:{

  },
 async created () {
    const item = await findGoodsColl()
   this.collectGoods = item
   console.log(this.collectGoods)
  }
}
</script>

<style scoped lang="less">
.user-title{
  background-color: #F9F9F9;
  padding: 10px;
  margin-bottom: 20px;
  span{
    color: #FF4466;
    font-size: 16px;
    font-weight: bold;
    line-height: 16px;
  }
}
.home-panel {
  background-color: #fff;
  padding: 0 20px;
  margin-top: 20px;
  //height: 400px;
  overflow: hidden;
  .header {
    height: 66px;
    border-bottom: 1px solid #f5f5f5;
    padding: 18px 0;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    h4 {
      font-size: 22px;
      font-weight: normal;
    }
  }
  .goods-list {
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
    flex-wrap: wrap;
  }
}
</style>
