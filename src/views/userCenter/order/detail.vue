<template>
  <div class="member-order-detail" v-if="order">
    <!-- 头部 -->
    <DetailAction :order="order" />

    <div class="detail-step">
      <el-steps :active="order.orderState===7?1:order.orderState" align-center>
        <el-step title="待付款" :description="order.created_at"></el-step>
        <el-step title="待发货" description=" "></el-step>
        <el-step title="待收获" description=" "></el-step>
        <el-step title="待评价" description=" "></el-step>
        <el-step title="已完成" description=" "></el-step>
        <el-step title="已取消" description=" "></el-step>
      </el-steps>
    </div>

    <!-- 信息 -->
    <DetailInfo :order="order" />
  </div>
</template>

<script>

import DetailAction from './components/DetailAction.vue'
import DetailInfo from './components/detailInfo.vue'
import { showOrderGet } from '@/api/shop'
import { ref } from 'vue'
import {useRoute } from 'vue-router'
import { usePayTime } from '@/hooks/useAdminSearch.js'

export default {
  name:'detail',
  components:{
    DetailAction,
    DetailInfo
  },
  setup(){
    const order = ref(null)
    const route = useRoute()
// 倒计时工具函数
    const { start, timerText } = usePayTime()
    console.log({orderId:route})
    showOrderGet({orderId:route.params.id}).then(data=>{
      order.value = data
      if(data.countdown>-1){
        start(data.countdown)
      }
    })

    return {order}
  }
}
</script>

<style scoped lang="less">
.member-order-detail {
  background: #fff;
  height: 100%;
}
.loading {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  background-color: #f5f5f5;
  margin: 30px 50px 0;
}
</style>


