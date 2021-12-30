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
        :row-selection="{  onChange: checkAll }" :pagination="false"
        :columns="columns"  :data-source="cartData">
        <template  #info="{ column ,record }">
<!--          {{ record}}-->
            <div class="goods">
              <RouterLink :to="`/shop/product/${record.id}`">
                <img :src="record.picture" alt="">
              </RouterLink>
              <div>
                <p class="name ellipsis">{{record.name}}</p>
<!--                // 选择商品规格-->
                <div></div>
              </div>
            </div>
        </template>
        <template #price="{ record}">
          <div class="tc">
            <p>&yen;{{record.nowPrice}}</p>
            <p v-if="record.price-record.nowPrice>0">
              比加入时降价 <span class="red">&yen;{{record.price-record.nowPrice}}</span>
            </p>
          </div>
        </template>
        <template #count="{record}">
          <HNumber @change="$event=>updateCount(record.skuId,$event)" :max="record.stock" :modelValue="record.count"/>
        </template>
        <template #subtotal="{record}">
          <div class="tc">
            <p style="color: red;">&yen;{{Math.round(record.nowPrice*100)*record.count/100}}</p>
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
        <Checkbox v-model:checked="checked" :indeterminate="indeterminate"  @change="checkAll">全选</Checkbox>
        <Button @click="deleteCart">删除商品</Button>
        <Button >移入收藏夹</Button>
      </div>
      <div class="total">
        共 {{3}} 件商品，已选择 {{3}} 件，商品合计：
        <span class="red">¥{{12}}</span>
        <Button @click="checkout" type="primary">下单结算</Button>
      </div>
    </div>
  </div>
</template>

<script>
import {Steps,Step, Table,Button,Checkbox} from 'ant-design-vue'
import { ref } from 'vue';
import HCheckbox from '@/components/HCheckbox.vue'
import { cartData } from '@/views/cart/cart_data.js'
import HNumber from '@/components/HNumber.vue'
import { useRouter} from 'vue-router'
const columns = [
  {title:'商品信息',align:'center', dataIndex:'info', key:'info',  slots: {
      customRender: 'info',
    },},
  {title:'单价',align:'center', dataIndex:'price', key: 'price',slots: {
    customRender: 'price'
    }},
  {title:'数量',align:'center', dataIndex:'count',key: 'count',slots: {
    customRender: 'count'
    }},
  {title:'小计',align:'center', dataIndex:'subtotal',key: 'subtotal',slots: {
    customRender: 'subtotal'
    }
  },
  {title:'操作',align:'center', dataIndex:'config',key:'config',slots: {
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
    const router = useRouter()
    const current = ref(0);
    const indeterminate = ref(true)
    const checked = ref(false)

    // 全选
    function checkAll(){}
    // 小计
    function updateCount(){}
    //删除
    function deleteCart(){}
    function checkout(){
      router.push('/payment_settlement')
    }
    return {
      current,
      stepStyle: {
        marginBottom: '60px',
        boxShadow: '0px -1px 0 0 #e8e8e8 inset',

      },
      checkAll,
      columns,
      cartData,
      updateCount,
      deleteCart,
      checkout,
      indeterminate,
      checked
    }
  }
}
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
