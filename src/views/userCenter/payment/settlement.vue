<template>

<div class="shop-content">
  <Steps v-model:current="current"  type="navigation" size="small" :style="stepStyle" @change="changeSteps">
    <Step title="购物车" status="finish" description="已选择完成"/>
    <Step disabled
          title="订单确认"
          status="process"
          description="核对信息,选择地址"
    />
    <Step disabled
          title="订单支付"
          status="wait"
          description="等待订单支付"
    />
  </Steps>

<!--  // 地址选择-->
  <order-page :order-data="settlementData" v-model:addValue="addressValue" :order-money="orderMoney"/>
  <div class="submit">
    <Button @click="submitOrderFn" type="primary" :size="40">提交订单</Button>
  </div>

</div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
import {Steps,Step, Table,Button,Checkbox,Radio,RadioGroup,Tag} from 'ant-design-vue'
import {useRouter} from 'vue-router'
import OrderPage from '@/views/userCenter/components/orderPage.vue'
import { useAddress} from '@/hooks/useAddress.js'
import {useStore} from 'vuex'
export default {
  name: 'settlement',
  components:{
    OrderPage,
    Steps,Step,Table,Button,RadioGroup,Radio,Tag
  },
  setup(){
    const store =useStore()
    const radioStyle = reactive({
      display: 'block',
      height: '30px',
      lineHeight: '30px',
      background: '#F4F4F4'
    })
    const current = ref(1);
    const router = useRouter()
    const settlementData = computed(() =>store.getters.orderGoods)
    const orderMoney = computed(() =>store.getters['cart/orderMoney'])
    function changeSteps(){
      router.push('/cart')
    }
    const addressValue = ref() // 地址
    //地址
    function submitOrderFn(){
      // router.push('/payment_pay')
        store.dispatch('cart/submitOrders',{
          address: store.getters.address.find(item=>item.id === addressValue.value)
        }).then(orderId=>{
          router.push( {path:'/payment_pay',query:{orderId}})
        })
      }
    return {
      changeSteps,
      current,
      stepStyle: {
        marginBottom: '60px',
        boxShadow: '0px -1px 0 0 #e8e8e8 inset',
      },
      settlementData,
      orderMoney,
      radioStyle,
      submitOrderFn,
      addressValue,
    }
  }
}
</script>

<style scoped lang="less">


.submit {
  text-align: right;
  padding: 60px;
  border-top: 1px solid #f5f5f5;
}
</style>
