<template>
  <div class="order-item">
    <div class="head">
      <span>下单时间：{{order.created_at}}</span>
      <span>订单编号：{{order.orderId}}</span>
      <span class="down-time" v-if="order.orderState===1">
        <i class="iconfont icon-down-time"></i>
        <b>付款截止：{{timeText}}</b>
      </span>
      <a @click="$emit('on-delete', order)" href="javascript:;" class="del" v-if="[5,6].includes(order.orderState)">删除</a>
    </div>
    <div class="body">
      <div class="column goods">
        <ul>
          <li v-for="goods in order.goods" :key="goods.id">
            <RouterLink class="image" :to="`/product/${order.id}`">
              <img :src="goods.image" alt="" />
            </RouterLink>
            <div class="info">
              <p class="name ellipsis-2">{{goods.name}}</p>
              <span class="attr ellipsis">{{setSpecs(goods.specs)}}</span>
            </div>
            <div class="price">¥{{goods.price}}</div>
            <div class="count">x{{goods.count}}</div>
          </li>
        </ul>
      </div>
      <div class="column state">
        <p>{{orderStatus[order.orderState].label}}</p>
        <!-- 待收货  查看物流 -->
        <!-- 待评价  评价商品 -->
        <!-- 已完成  查看评价 -->
        <p @click="$emit('on-logistics', order)" v-if="order.orderState===3"><a class="green" href="javascript:;">查看物流</a></p>
        <p v-if="order.orderState===4"><a class="green" href="javascript:;">评价商品</a></p>
        <p v-if="order.orderState===5"><a class="green" href="javascript:;">查看评价</a></p>
      </div>
      <div class="column amount">
        <p class="red">¥{{order.payMoney}}</p>
        <p>（含运费：¥{{0}}）</p>
        <p>在线支付</p>
      </div>
      <div class="column action">
        <!-- 待支付：立即付款，查看详情，取消订单 -->
        <!-- 待发货：查看详情，再次购买 -->
        <!-- 待收货：确认收货，查看详情，再次购买 -->
        <!-- 待评价：查看详情，再次购买，申请售后 -->
        <!-- 已完成：查看详情，再次购买，申请售后 -->
        <!-- 已取消：查看详情 -->
        <el-button @click="$router.push(`/payment_pay?orderId=${order.orderId}`)" v-if="order.orderState===1" type="primary" size="small">立即付款</el-button>
        <el-button @click="$emit('on-confirm', order)" v-if="order.orderState===3" type="primary" size="small">确认收货</el-button>
        <p><a  @click="$router.push(`/user/order/${order.orderId}`)" href="javascript:;">查看详情</a></p>
        <p @click="$emit('on-cancel', order)" v-if="order.orderState===1"><a href="javascript:;">取消订单</a></p>
        <p @click="$router.push(`/payment_settlement?orderId=${order.orderId}`)" v-if="[2,3,4,5].includes(order.orderState)"><a href="javascript:;">再次购买</a></p>
        <p v-if="[4,5].includes(order.orderState)"><a href="javascript:;">申请售后</a></p>
      </div>
    </div>
  </div>
</template>
<script>
import { usePayTime } from '@/hooks/useAdminSearch.js'
export default {
  name: 'OrderItem',
  props: {
    order: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['on-cancel', 'on-delete', 'on-confirm', 'on-logistics'],
  setup (props) {
    const { start, timeText } = usePayTime()
    start(props.order.countdown)
    function setSpecs (arry) {
      let f=''
      for (let t of arry){
        f+= `${t.key}: ${t.value}  `
      }
      return f
    }
    return { orderStatus:[
        { name: 'all', label: '全部订单' },
        { name: 'unpay', label: '待付款' },
        { name: 'deliver', label: '待发货' },
        { name: 'receive', label: '待收货' },
        { name: 'comment', label: '待评价' },
        { name: 'complete', label: '已完成' },
        { name: 'cancel', label: '已取消' }
      ], timeText ,setSpecs}
  }
}
</script>
<style scoped lang="less">
.order-item {
  margin-bottom: 20px;
  border: 1px solid #f5f5f5;
  .head {
    height: 50px;
    line-height: 50px;
    background: #f5f5f5;
    padding: 0 20px;
    overflow: hidden;
    span {
      margin-right: 20px;
      &.down-time {
        margin-right: 0;
        float: right;
        i {
          vertical-align: middle;
          margin-right: 3px;
        }
        b {
          vertical-align: middle;
          font-weight: normal;
        }
      }
    }
    .del {
      margin-right: 0;
      float: right;
      color: #999;
    }
  }
  .body {
    display: flex;
    align-items: stretch;
    .column {
      border-left: 1px solid #f5f5f5;
      text-align: center;
      padding: 20px;
      > p {
        padding-top: 10px;
      }
      &:first-child {
        border-left: none;
      }
      &.goods {
        flex: 1;
        padding: 0;
        align-self: center;
        ul {
          li {
            border-bottom: 1px solid #f5f5f5;
            padding: 10px;
            display: flex;
            &:last-child {
              border-bottom: none;
            }
            .image {
              width: 70px;
              height: 70px;
              border: 1px solid #f5f5f5;
            }
            .info {
              width: 220px;
              text-align: left;
              padding: 0 10px;
              p {
                margin-bottom: 5px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                box-sizing: border-box;
                &.name {
                  height: 38px;
                }
                &.attr {
                  color: #999;
                  font-size: 12px;
                  span {
                    margin-right: 5px;
                  }
                }
              }
            }
            .price {
              width: 100px;
            }
            .count {
              width: 80px;
            }
          }
        }
      }
      &.state {
        width: 120px;
        .green {
          color: #27BA9B;
        }
      }
      &.amount {
        width: 200px;
        .red {
          color: #CF4444;
        }
      }
      &.action {
        width: 140px;
        a {
          display: block;
          &:hover {
            color:#27BA9B;
          }
        }
      }
    }
  }
}
</style>
