<template>
  <div class="shop-content">
    <Steps v-model:current="current"  type="navigation" size="small" :style="stepStyle">
      <Step disabled
        title="购物车"
        status="process"
        description="购物车商品"
      />
      <Step disabled
        title="订单确认"
        status="wait"
        description="核对信息,选择地址"
      />
      <Step disabled
        title="订单支付"
        status="wait"
        description="订单支付"
      />
    </Steps>
<!--    //购物车-->
    <div class="cart">
      <Table
        :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: checkAll }" :pagination="false"
        :columns="columns"  :data-source="cartData">
        <template  #info="{ column ,record }">
<!--          {{ record}}-->
            <div class="goods">
              <RouterLink :to="`/product/${record.goods.id}`">
                <img :src="record.goods.picture[0]" alt="">
              </RouterLink>
              <div>
                <p class="name ellipsis">{{record.goods.name}}</p>
<!--                // 选择商品规格-->
                <div></div>
              </div>
            </div>
        </template>
        <template #price="{ record}">
          <div class="tc">
            <p>&yen;{{record.goodsSku.price}}</p>
            <p v-if="record.oldPrice-record.price>0">
              比加入时降价 <span class="red">&yen;{{record.oldPrice-record.price}}</span>
            </p>
          </div>
        </template>
        <template #shopNumber="{record}">
          <HNumber v-model="record.shopNumber" :max="record.goodsSku.inventory"/>
        </template>
        <template #subtotal="{record}">
          <div class="tc">
            <p style="color: red;">&yen;{{Math.round(record.goodsSku.price*100)*record.shopNumber/100}}</p>
          </div>
        </template>
        <template #config="{record}">
          <p><a href="javascript:;">移入收藏夹</a></p>
          <p><a @click="deleteCart(record.skuId)" class="green" href="javascript:;">删除</a></p>
        </template>
      </Table>
    </div>
    <!--      //选择统计 计算-->
    <div class="action">
      <div class="batch">
        <Checkbox v-model:checked="isCheckAll" :indeterminate="indeterminate" >全选</Checkbox>
        <Button @click="deleteCart">删除商品</Button>
        <Button >移入收藏夹</Button>
      </div>
      <div class="total">
        共 {{cartData.length}} 件商品，已选择 {{selectedRowKeys.length}} 件，商品合计：
        <span class="red">¥{{sumPrice}}</span>
        <Button @click="checkout" type="primary">下单结算</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { Steps, Step, Table, Button, Checkbox, message } from 'ant-design-vue'
import { computed, ref,onMounted } from 'vue'
import HCheckbox from '@/components/HCheckbox.vue'
import HNumber from '@/components/HNumber.vue'
import { useRouter} from 'vue-router'
import { Mart } from '@/utils/message.js'
import {useStore} from 'vuex'
const columns = [
  {title:'商品信息',align:'center',  dataIndex:'info', key:'info',  slots: {
      customRender: 'info',
    },},
  {title:'单价',align:'center',width:170, dataIndex:'price', key: 'price',slots: {
    customRender: 'price'
    }},
  {title:'数量',align:'center',width:130, dataIndex:'shopNumber',key: 'shopNumber',slots: {
    customRender: 'shopNumber'
    }},
  {title:'小计',align:'center',width:170, dataIndex:'subtotal',key: 'subtotal',slots: {
    customRender: 'subtotal'
    }
  },
  {title:'操作',align:'center',width:150, dataIndex:'config',key:'config',slots: {
    customRender: 'config'
    } },
]

export default {
  name: 'index',
  components:{
    HNumber,
    HCheckbox,Button,
    Steps,Step,Table,Checkbox
  },
  setup(){
    const store = useStore()
    const router = useRouter()
    const current = ref(0);
    store.dispatch('cart/getCartHttp') // 获取购物测数据
    const cartData = computed(()=>store.state.cart.cartData)
    const selectedRowKeys = computed(()=>store.state.cart.selectedRowKeys)
    const isCheckAll = computed({
      get(){
        return selectedRowKeys.value.length === cartData.value.length
      },
      set(value){
        store.commit('cart/setSelectedAll',value)
      }
    })
    const sumPrice = computed(()=>{
      let money = 0
      if(selectedRowKeys.value.length === 0) return money
      selectedRowKeys.value.forEach(value=>{
        const price = cartData.value[value].goodsSku.price
        const number = cartData.value[value].shopNumber
        money += Math.round(price*100)*number/100
      })
      return Math.round(money*100)/100
    }) // 选择后的计算总价
    // 全选
    function checkAll(rows,selectedRows){
      console.log('---',rows,selectedRows)
      store.commit('cart/setSelectedRow',rows)
    }
    //删除
    function deleteCart(){
      if(selectedRowKeys.value.length ===0) return Mart({content:"请先选择要购买的商品"})
    }
    // 下单
    function checkout(){
      if(selectedRowKeys.value.length ===0) return Mart({content:"请先选择要购买的商品"})
      router.push('/payment_settlement')
    }
    return {
      current,
      stepStyle: {
        marginBottom: '60px',
        boxShadow: '0px -1px 0 0 #e8e8e8 inset',
        border:  '1px solid #f5f5f5',
      },
      checkAll,
      columns,
      cartData,
      deleteCart,
      checkout,
      isCheckAll,
      indeterminate:computed(()=>selectedRowKeys.value.length   && selectedRowKeys.value.length < cartData.value.length),
      selectedRowKeys,
      sumPrice
    }
  }
}

// const useCart = ()=>{
//   const cartData = ref([])
//   async function getCartHttp(){
//    const item  = await showCartGet()
//     cartData.value = item
//   }
//   getCartHttp()
//
//   return {
//     cartData,
//     getCartHttp
//   }
// }


</script>

<style scoped lang="less">
.goods {
  display: flex;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
  }
  > div {
    width: 280px;
    font-size: 16px;
    padding-left: 10px;
    .attr {
      font-size: 14px;
      color: #999;
    }
  }
}
.tc {
  text-align: center;
  .h-numbox {
    margin: 0 auto;
    width: 120px;
  }
}

.action {
  display: flex;
  background: #fff;
  margin-top: 20px;
  height: 80px;
  align-items: center;
  font-size: 16px;
  justify-content: space-between;
  padding: 0 30px;
  .h-checkbox {
    color: #999;
    cursor: pointer;
  }
  .batch {
    a {
      margin-left: 20px;
    }
  }
  .red {
    font-size: 18px;
    margin-right: 20px;
    font-weight: bold;
  }
}

</style>
