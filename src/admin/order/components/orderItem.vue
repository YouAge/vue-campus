<template>
  <div class="order-item">
    <div class="head">
      <span>下单时间：{{order.created_at}}</span>
      <span>订单编号：{{order.orderId}}</span>
<!--      <span class="down-time" v-if="order.orderState===1">-->
<!--        <i class="iconfont icon-down-time"></i>-->
<!--        <b>付款截止：{{timeText}}</b>-->
<!--      </span>-->
    </div>
    <div class="body">
      <div class="column state">
        <h7 style="font-weight: bolder">购买用户：</h7>
        <p>{{order.user && order.user.username}}</p>
      </div>
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
<!--        <p @click="$emit('on-logistics', order)" v-if="order.orderState===3"><a class="green" href="javascript:;">查看物流</a></p>-->
<!--        <p v-if="order.orderState===4"><a class="green" href="javascript:;">评价商品</a></p>-->
<!--        <p v-if="order.orderState===5"><a class="green" href="javascript:;">查看评价</a></p>-->
      </div>
      <div class="column amount">
        <p class="red">¥{{order.payMoney}}</p>
        <p>（含运费：¥{{0}}）</p>
        <p>在线支付</p>
      </div>
      <div class="column action">
<!--        <el-button @click="$router.push(`/payment_pay?orderId=${order.orderId}`)" v-if="order.orderState===1" type="primary" size="small">立即付款</el-button>-->
        <el-button @click="setOrderState" v-if="order.orderState===2" type="primary" size="small">确认发货</el-button>
        <p><a href="javascript:;">查看详情</a></p>
        <p @click="onCancel" v-if="order.orderState===1"><a href="javascript:;">删除订单</a></p>
      </div>
    </div>
  </div>
</template>
<script>
import { usePayTime } from '@/hooks/useAdminSearch.js'
import { orderStatus } from '@/utils'
import { message, Modal } from 'ant-design-vue'
import { createVNode } from 'vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
export default {
  name: 'OrderItem',
  props: {
    order: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['on-cancel', 'on-delete', 'on-confirm', 'on-logistics'],
  setup (props,{emit}) {
    const { start, timeText } = usePayTime()
    start(props.order.countdown)
    function setSpecs (arry) {
      let f=''
      for (let t of arry){
        f+= `${t.key}: ${t.value}  `
      }
      return f
    }


    function onCancel(){

    }

    // 确定发货，处理
    function setOrderState(){
      // 更新订单状态
      console.log(props.order)
      Modal.confirm({
        title: () => '发货提醒',
        content: () => '确定发货商品吗？',
        okText: () => '确定',
        okType: 'danger',
        cancelText: () => '取消',
        onOk() {
          emit('onSuceess',props.order)
          // message.success('发货成功')
        },
        onCancel() {
          message.info('取消了该操作')
        },
      });

    }

    return { orderStatus, timeText ,setSpecs,setOrderState}
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
