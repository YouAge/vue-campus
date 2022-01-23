<template>
<div class="goods-list">
  <FSort  @sort-change="sortChange" />
  <div v-if="goodsList.length<1">
    <div style="min-height: 400px;">
      <a-empty />
    </div>
  </div>
  <Skeleton :loading="loading"  active :paragraph="{rows:13}"  v-else>
    <ul style="min-height: 600px;">
      <li v-for="goods in goodsList" :key="goods.id" >
        <goods-item :goods="goods" />
      </li>
    </ul>
  </Skeleton>
</div>
    <div v-if="goodsList.length >0" class="goods-list page">
      <a-pagination v-model:current="current" @change="changePage"
                    v-model:pageSize="pageSizes" :total="total" show-less-items />
    </div>
</template>

<script>
import FSort from './components/FSort.vue'
import GoodsItem from '../goods-item.vue'
import {ref, toRaw} from 'vue'
import HInfiniteLoading from '@/components/HInfiniteLoading.vue'
import {Skeleton} from 'ant-design-vue'

export default {
  name: 'SearchShop',
  components: { HInfiniteLoading, GoodsItem, FSort,Skeleton },
  props:{
    goodsList:{
      type:Array,
      default:[]
    },
    pageIndex:{
      type:Number,
      default: 1,
    },
    pageSize:{
      type:Number,
      default: 10,
    },
    total:{
      type:Number,
      default: 0,
    },
    loading:{
      type:Boolean,
      default: false
    }
  },
  setup(props,{emit}){
    // 商品列表数据
    // const goodsList = ref([])
    const current =ref(props.pageIndex)
    const pageSizes =ref(props.pageSize)

    // 加载中
    // const loading = ref(false)
    // 是否加载完毕
    const finished = ref(false)

    function sortChange(sortParams){
      console.log('排序', toRaw( sortParams))
    }
    function getData(){}


    function changePage(page, pageSize){
      // console.log('野马',page,pageSize)
      emit('change',page,pageSize)
    }
    return {
      sortChange,finished,getData,
      current,
      pageSizes,
      changePage

    }
  }
}
</script>

<style scoped lang="less">
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
    li {
      margin-right: 20px;
      margin-bottom: 20px;
      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
}
.page{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
}
</style>
