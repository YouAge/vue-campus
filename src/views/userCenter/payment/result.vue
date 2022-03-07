<template>
  <div class="shop-content">
  <Steps v-model:current="current"  type="navigation" size="small" :style="stepStyle" @change="changeSteps">
    <Step title="购物车" status="finish" description="已选择完成"/>
    <Step disabled title="订单确认" status="finish"
          description="已确认" />
    <Step disabled
          title="订单支付"
          status="finish"
          description="支付完成"/>
  </Steps>
  <!-- 支付结果 -->
  <div class="pay-result">
    <span v-if="$route.query.payResult" class="iconfont icon-queren2 green"></span>
    <span v-else class="iconfont icon-shanchu red" ></span>
    <p class="tit">订单支付{{$route.query.payResult?'成功':'失败'}}</p>
    <p class="tip">我们将尽快为您发货，收货期间请保持手机畅通</p>
    <p>支付方式：<span>支付宝支付</span></p>
    <p>支付金额：<span class="red">¥{{400}}</span></p>
    <div class="btn">
      <Button @click="$router.push('/member/order')" type="primary" style="margin-right:20px">查看订单</Button>
      <Button type="gray">进入首页</Button>
    </div>
    <p class="alert">
      <span class="iconfont icon-tip"></span>
      温馨提示：新风尚，校园购不会以订单异常、系统升级为由要求您点击任何网址链接进行退款操作，保护资产、谨慎操作。
    </p>
  </div>

  </div>
</template>

<script>
import {Steps,Step, Table,Button,Checkbox,Radio,RadioGroup,Tag} from 'ant-design-vue'
import { ref } from 'vue'
import {useRouter} from 'vue-router'
const routerPath = {
  0:'/cart',
  1: '/payment_settlement'
}
export default {
  name: 'result',
  components:{
    Steps,Step,Table,Button,RadioGroup,Radio,Tag
  },
  setup(){
    const current = ref(2);
    const router = useRouter()
    function changeSteps(item){
      router.push(routerPath[item])
    }
    return {
      current,
      stepStyle: {
        marginBottom: '60px',
        boxShadow: '0px -1px 0 0 #e8e8e8 inset',

      },
      changeSteps
    }
  }
}
</script>

<style scoped lang="less">
.pay-result {
  padding: 100px 0;
  background: #fff;
  text-align: center;
  > .iconfont {
    font-size: 100px;
  }
  .green {
    color: #1dc779;
  }
  .red {
    color:#CF4444;
  }
  .tit {
    font-size: 24px;
  }
  .tip {
    color: #999;
  }
  p {
    line-height: 40px;
    font-size: 16px;
  }
  .btn {
    margin-top: 50px;
  }
  .alert {
    font-size: 12px;
    color: #999;
    margin-top: 50px;
  }
}
</style>
