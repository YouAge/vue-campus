<template>
  <div class="shop-content">
  <Steps :current="2"  type="navigation" size="small" :style="stepStyle" @change="changeSteps">
    <Step title="购物车" status="finish" description="已选择完成"/>
    <Step title="订单确认" status="finish" disabled description="已确认" />
    <Step disabled title="订单支付" status="process" description="选择支付方式"/>
  </Steps>
  <div class="pay-info">
    <span class="icon iconfont icon-queren2"></span>
    <div class="tip">
      <p>订单提交成功！请尽快完成支付。</p>
      <p v-if="order.countdown> -1">支付还剩 <span>{{ timerText }}</span>, 超时后将取消订单</p>
      <p v-else>订单已经超时</p>
    </div>
    <div class="amount">
      <span>应付总额：</span>
      <span>¥{{90}}</span>
    </div>
  </div>
  <!-- 付款方式 -->
  <div class="pay-type">
    <p class="head">选择以下支付方式付款</p>
    <div class="item">
      <p>支付平台</p>
      <a class="btn wx" href="javascript:;"></a>
      <a class="btn alipay" @click="visibleDialog=true" :href="payUrl" target="_blank"></a>
    </div>
    <div class="item">
      <p>支付方式</p>
      <a class="btn" href="javascript:;">招商银行</a>
      <a class="btn" href="javascript:;">工商银行</a>
      <a class="btn" href="javascript:;">建设银行</a>
      <a class="btn" href="javascript:;">农业银行</a>
      <a class="btn" href="javascript:;">交通银行</a>
    </div>
  </div>
  </div>
</template>

<script>
import {Steps,Step, Table,Button,Checkbox,Radio,RadioGroup,Tag} from 'ant-design-vue'
import { computed, ref } from 'vue'
import {useRouter,useRoute} from 'vue-router'
import { showOrderGet } from '@/api/shop'
const routerPath = {
  0:'/cart',
  1: '/payment_settlement'
}
export default {
  name: 'pay',
  components:{
    Steps,Step,Table,Button,RadioGroup,Radio,Tag
  },
  setup(){
    const order = ref({});
    const router = useRouter()
    const orderId = ref(null)
    const route = useRoute()
    // 倒计时工具函数
    const { start, timerText } = usePyTimer()
    function changeSteps(item){
      router.push(routerPath[item])
    }
    showOrderGet({orderId:route.query.orderId}).then(item=>{
      order.value = item
      if(item.countdown>-1){
        start(item.countdown)
      }
    })




    return {
      changeSteps,
      timerText:computed(()=>timerText.value),
      order,
      stepStyle: {
        marginBottom: '60px',
        boxShadow: '0px -1px 0 0 #e8e8e8 inset',
      },

    }
  }
}
import dayjs from 'dayjs'
const usePyTimer = ()=>{
  const timer=  ref(0)
  const timerText = ref('')

  const start = (countdown,cab)=>{
    timer.value = countdown
    timerText.value = dayjs.unix(timer.value).format('mm分ss秒')
    if(timer.value <=0){
      timerText.value = ''
      cab && cab()
      return
    }
    timer.value--
   return setTimeout(()=>{
      start(timer.value,cab)
    },1000)
  }
  return {
    start,
    timerText
  }

}

</script>

<style scoped lang="less">
.pay-info {
  background: #fff;
  display: flex;
  align-items: center;
  height: 240px;
  padding: 0 80px;
  .icon {
    font-size: 80px;
    color: #1dc779;
  }
  .tip {
    padding-left: 10px;
    flex: 1;
    p {
      &:first-child {
        font-size: 20px;
        margin-bottom: 5px;
      }
      &:last-child {
        color: #999;
        font-size: 16px;
      }
    }
  }
  .amount {
    span {
      &:first-child {
        font-size: 16px;
        color: #999;
      }
      &:last-child {
        color: #CF4444;
        font-size: 20px;
      }
    }
  }
}
.pay-type {
  margin-top: 20px;
  background-color: #fff;
  padding-bottom: 70px;
  p {
    line-height: 70px;
    height: 70px;
    padding-left: 30px;
    font-size: 16px;
    &.head {
      border-bottom: 1px solid #f5f5f5;
    }
  }
  .btn {
    width: 150px;
    height: 50px;
    border: 1px solid #e4e4e4;
    text-align: center;
    line-height: 48px;
    margin-left: 30px;
    color: #666666;
    display: inline-block;
    &.active,
    &:hover {
      border-color: #27BA9B;
    }
    &.alipay {
      background: url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b6b02396368c9314528c0bbd85a2e06.png) no-repeat center / contain;
    }
    &.wx {
      background: url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg) no-repeat center / contain;
    }
  }
}
</style>
