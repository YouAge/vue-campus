<template>
  <div class="wrapper">
    <!--     //搜获地址-->
    <h3 class="box-title">商品信息</h3>
    <div class="box-body">
        <Table :pagination="false"
          :columns="columns"  :data-source="orderData">
          <template  #info="{ column ,record }">
            <!--          {{ record}}-->
            <div class="goods">
              <RouterLink :to="`/shop/product/${record.goods.id}`">
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
            <div>{{record.shopNumber}}</div>
          </template>
          <template #subtotal="{record}">
            <div class="tc">
              <p >&yen;{{Math.round(record.goodsSku.price*100)*record.shopNumber/100}}</p>
            </div>
          </template>
          <template #config="{record}">
            <div class="tc">
              <p >&yen;{{Math.round(record.goodsSku.price*100)*record.shopNumber/100}}</p>
            </div>
          </template>
        </Table>
    </div>

    <h3 class="box-title" style="display: flex"><p>收获地址</p>
      <span  @click="addShowAddress" style="margin-left: 20px;color: #648697;font-size: 14px;cursor: pointer;">新增地址</span></h3>
    <div class="box-body">
      <!-- 收货地址组件 -->
      <div class="add-text">
        <RadioGroup v-model:value="addSelect" @change="changeAddress">
          <div class="radio-item"  v-for="item in showAddress" :key="item.id">
            <Radio class="radio-style" :value="item.id">
              {{item.name}} {{item.fullLocation}} {{item.address}} +86-{{item.iPhone}}
              <Tag color="red" v-if="item.isDefault"> 默认地址 </Tag>
            </Radio>
            <div class="radio-edit">
              <span>设为默认</span>
              <span>编辑</span>
              <span>删除</span>
            </div>
          </div>

          <!--          <Radio class="radio-style" :value="2">董柱 四川省 成都市 青羊区火车南站 +86-15607195236</Radio>-->
        </RadioGroup>
        <p><a class="btn" @click=" statusAll = !statusAll">{{statusAll?'收起':'更多'}}地址</a>
          <i class="icon  icon-open-address" style="transform: rotate(270deg); cursor: pointer;"></i></p>
      </div>
    </div>
<!--    &lt;!&ndash;    //配送时间&ndash;&gt;-->
<!--    <h3 class="box-title">配送时间</h3>-->
<!--    <div class="box-body">-->
<!--      <a class="my-btn active" href="javascript:;">不限送货时间：周一至周日</a>-->
<!--      <a class="my-btn" href="javascript:;">工作日送货：周一至周五</a>-->
<!--      <a class="my-btn" href="javascript:;">双休日、假日送货：周六至周日</a>-->
<!--    </div>-->

    <h3 class="box-title">支付方式</h3>
    <div class="box-body">
      <a class="my-btn active" href="javascript:;">在线支付</a>
      <a class="my-btn" href="javascript:;">货到付款</a>
      <span style="color:#999">货到付款需付5元手续费</span>
    </div>

    <h3 class="box-title">金额明细</h3>
    <div class="box-body">
      <div class="total">
        <dl><dt>商品件数：</dt><dd>{{orderMoney.sumNumber}}件</dd></dl>
        <dl><dt>商品总价：</dt><dd>¥{{orderMoney.goodsMoney}}</dd></dl>
        <dl><dt>运<i></i>费：</dt><dd>¥{{orderMoney.freight}}</dd></dl>
        <dl><dt>应付总额：</dt><dd class="price">¥{{orderMoney.countMoney}}</dd></dl>
      </div>
    </div>


  </div>
</template>

<script>
import { computed, nextTick, ref, watch, watchEffect } from 'vue'
import {Steps,Step, Table,Button,Checkbox,Radio,RadioGroup,Tag} from 'ant-design-vue'
import { useAddress } from '@/hooks/useAddress.js'
import { useStore } from 'vuex'
const columns = [
  {title:'商品信息', dataIndex:'info', key:'info',  slots: {
      customRender: 'info',
    },},
  {title:'单价',align:'center', dataIndex:'price', key: 'price',slots: {
      customRender: 'price'
    }},
  {title:'数量',align:'center', dataIndex:'shopNumber',key: 'shopNumber',slots: {
      customRender: 'shopNumber'
    }},
  {title:'小计',align:'center', dataIndex:'subtotal',key: 'subtotal',slots: {
      customRender: 'subtotal'
    }
  },
  {title:'实付',align:'center', dataIndex:'config',key:'config',slots: {
      customRender: 'config'
    } },
]
export default {
  name: 'orderPage',
  components:{
    Steps,Step,Table,Button,RadioGroup,Radio,Tag
  },
  props:{
    orderData:{
      type:Object,
      default:[]
    },
    addValue:{
      type:Number,
      default: 0
    },
    orderMoney:{
      type:Object,
      default:{}
    }
  },
  setup(props,{emit}){
    const store = useStore()
    const statusAll = ref(false)
    const addSelect =ref(props.addValue)
    // function getDefault(){
    //   if(address.value.length===0) return 0
    //   const f = address.value.find(item=>item.isDefault)
    //   return f?f.id:address.value[0].id
    // }

    const {addShowAddress,address} = useAddress()
    const showAddress = computed(()=>{
      if(statusAll.value){ //显示所有
         return address.value
      }else {
        if(addSelect.value){
          return  [address.value.find(item=> item.id ===addSelect.value)]
        }else {
          const f = address.value.find(item=>item.isDefault)
          if(f) {
            addSelect.value =f.id
            emit('update:addValue',addSelect.value )
            return [f]}
          else {
            if(address.value.length !==0){
              addSelect.value =address.value[0].id
              emit('update:addValue',addSelect.value )
              return [address.value[0]]
            }
            return []
          }
        }
      }
    })
    // const selectShop =    watchEffect(()=>{
    //   // 请求是异步的，不知道什么时候完成， nextTick 只是在下一次事件循环中调用，请求数据是在下
    //   addSelect.value = getDefault()
    // })
    // watch(()=>address.value,(value)=>{
    //   if(value){
    //     selectShop && selectShop()
    //   }
    // })
    function changeAddress(){
      emit('update:addValue',addSelect.value )
    }

    return {
      columns,
      showAddress,
      addSelect,
      addShowAddress,
      statusAll,
      changeAddress
    }
  }
}
</script>

<style scoped lang="less">
.wrapper{
  background: #fff;
  padding: 0 20px;
  .box-title {
    font-size: 16px;
    font-weight: normal;
    padding-left: 10px;
    line-height: 70px;
    border-bottom: 1px solid #f5f5f5;
  }
  .box-body {
    padding: 20px 0;
  }
}

.ant-radio-group{
  width: 100%;
}

.add-text{
  p{
    font-size: 12px;

    margin-left: 20px;
    cursor:pointer;
    a{
      color: #378694;
    }
  }
}

.radio-item{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover{
    background: #F4F4F4;
  }
  &:hover .radio-edit{
    opacity: 1;
  }
  .radio-style{
    display: flex;
    align-items: center;
    height: 30px;
    line-height: 30px;
    &:hover{
      background: #F4F4F4;
    }
    &:hover .radio-edit{
      opacity: 1;
    }
  }
  .radio-edit{
    opacity: 0;
    span{
      margin-right: 20px;
      color: #578894;
      cursor: pointer;
    }
  }
}
.my-btn {
  width: 228px;
  height: 50px;
  border: 1px solid #e4e4e4;
  text-align: center;
  line-height: 48px;
  margin-right: 25px;
  color: #666666;
  display: inline-block;
  &.active,&:hover {
    border-color: #27BA9B;
  }
}

.total {
  dl {
    display: flex;
    justify-content: flex-end;
    line-height: 50px;
    dt {
      i {
        display: inline-block;
        width: 2em;
      }
    }
    dd {
      width: 240px;
      text-align: right;
      padding-right: 70px;
      &.price {
        font-size: 20px;
        color:#CF4444;
      }
    }
  }
}
.goods {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
  }
  > div {
    //width: 280px;
    font-size: 16px;
    padding-left: 10px;
    .attr {
      font-size: 14px;
      color: #999;
    }
  }
}
</style>
