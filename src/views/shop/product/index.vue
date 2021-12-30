<template>
<!--  商品信息-->
<div class="goods-info">
  <div class="media">
      <GoodsImage :images="imagesMock"/>
      <GoodsSales />
  </div>
  <div class="spec">
    <GoodsTitle :goods="goodsMock"/>
<!--    // 数据选择组件-->
    <GoodsSku :goods="goodsMock" @change="changeSku"/>
<!--    // 数量选择-->
    <HNumber label="数量" v-model="num" :max="goodsMock.inventory" />
<!--    // 加入购物车-->
    <Button type="primary" style="margin-top:20px;width: 180px" size="large">加入购物车</Button>
  </div>
</div>
<!--  //商品信息-->
  <div  class="goods-footer">
    <div class="goods-article">
      <!-- 商品+评价 -->
      <GoodsTabs />
      <!-- 注意事项 -->
      <GoodsWarn />
    </div>
    <!-- 24热榜+周热销榜 -->
    <div class="goods-aside">
    </div>
  </div>

</template>

<script>

import GoodsItem from '@/views/shop/components/goods-item.vue'
import GoodsImage from '@/views/shop/product/components/GoodsImage.vue'
import { goodsMock, imagesMock } from './dataImg.js'
import GoodsSales from '@/views/shop/product/components/GoodsSales.vue'
import GoodsTitle from '@/views/shop/product/components/GoodsTitle.vue'
import GoodsSku from '@/views/shop/product/components/GoodsSku.vue'
import HNumber from '@/components/HNumber.vue'
import { Button } from 'ant-design-vue'
import { ref,provide } from 'vue'
import GoodsTabs from '@/views/shop/product/components/GoodsTabs.vue'
import GoodsWarn from '@/views/shop/product/components/GoodsWarn.vue'

import {useRoute} from 'vue-router'
export default {
  name: 'index',
  components: { GoodsWarn, GoodsTabs, HNumber, GoodsSku, GoodsTitle, GoodsSales, GoodsImage, GoodsItem,Button },
  setup(){
    // 提供goods数据给后代组件使用
    provide('goods', goodsMock)
    // 选择的数量
    const num = ref(1)
    function changeSku(){}
    const route = useRoute()
    // 请求数据,根据商品id




    return {
      imagesMock,goodsMock,changeSku,num
    }
  }
}
</script>

<style scoped lang="less">
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;
  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }
  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}

.goods-footer {
  display: flex;
  margin-top: 20px;
  .goods-article {
    width: 940px;
    margin-right: 20px;
  }
  .goods-aside {
    width: 280px;
    min-height: 1000px;
  }
}


</style>
