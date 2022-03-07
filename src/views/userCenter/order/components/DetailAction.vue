<template>
  <div class="detail-action">
    <div class="state">
      <span class="iconfont icon-order-unpay"></span>
      <p>{{orderStatus[order.orderState].label}}</p>
    </div>
    <div class="info">
      <p>订单编号：{{order.orderId}}</p>
      <p>下单时间：{{order.created_at}}</p>
    </div>
    <div class="btn">
      <!-- 待付款 -->
      <template v-if="order.orderState === 1">
        <el-button @click="$router.push(`/payment_settlement?orderId=${order.orderId}`)" type="primary" size="small">立即付款</el-button>
        <el-button @click="handlerCancel(order)" type="danger" size="small">取消订单</el-button>
      </template>
      <!-- 待发货 -->
      <template v-if="order.orderState === 2">
        <el-button @click="$router.push(`/payment_settlement?orderId=${order.orderId}`)" type="primary" size="small">再次购买</el-button>
      </template>
      <!-- 待收货 -->
      <template v-if="order.orderState === 3">
        <el-button @click="handlerConfirm(order)" type="primary" size="small">确认收货</el-button>
        <el-button  @click="$router.push(`/payment_settlement?orderId=${order.orderId}`)" type="primary" size="small">再次购买</el-button>
      </template>
      <!-- 待评价 -->
      <template v-if="order.orderState === 4">
        <el-button  @click="$router.push(`/payment_settlement?orderId=${order.orderId}`)" type="primary" size="small">再次购买</el-button>
        <el-button type="success" size="small">评价商品</el-button>
        <el-button type="danger" size="small">申请售后</el-button>
      </template>
      <!-- 已完成 -->
      <template v-if="order.orderState === 5">
        <el-button  @click="$router.push(`/payment_settlement?orderId=${order.orderId}`)" type="primary" size="small">再次购买</el-button>
        <el-button type="info" size="small">查看评价</el-button>
        <el-button type="danger" size="small">申请售后</el-button>
      </template>
      <!-- 已取消 -->
    </div>
      <OrderCancel ref="orderCancelCom"/>
  </div>
</template>
<script>
import { orderStatus } from '@/utils'
import OrderCancel from './orderCancel.vue'
import { useCancel, useConfirm } from '../order.js'
export default {
  name: 'detailAction',
  props: {
    order: {
      type: Object,
      default: {}
    }
  },
  components: {
    OrderCancel
  },
  setup () {
    const { handlerCancel, orderCancelCom } = useCancel()
    const { handlerConfirm } = useConfirm()
    return { orderStatus, handlerCancel,orderCancelCom, handlerConfirm }
  }
}
</script>
<style scoped lang="less">
.detail-action {
  height: 180px;
  width: 100%;
  display: flex;
  align-items: center;
  .state {
    width: 220px;
    text-align: center;
    .iconfont {
      font-size: 40px;
      color: #27BA9B;
    }
    p {
      font-size: 16px;
      color: #666;
      margin-bottom: 10px;
    }
  }
  .info {
    width: 240px;
    line-height: 30px;
    p {
      color: #999;
    }
  }
  .btn {
    flex: 1;
    text-align: right;
    margin-right: 100px;
    .xtx-button {
      margin-left: 20px;
    }
  }
}
</style>
