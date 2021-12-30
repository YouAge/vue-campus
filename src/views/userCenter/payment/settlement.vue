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
  <div class="wrapper">
<!--     //搜获地址-->
    <h3 class="box-title">商品信息</h3>
    <div class="box-body">
      <div class="goods">
        <Table :pagination="false"
               :columns="columns"  :data-source="settlementData"></Table>
      </div>
    </div>

    <h3 class="box-title" style="display: flex"><p>收获地址</p>
    <span style="margin-left: 20px;color: #648697;font-size: 14px;cursor: pointer;">新增地址</span></h3>
    <div class="box-body">
      <!-- 收货地址组件 -->
      <div class="add-text">
        <RadioGroup v-model:value="addSelect">
          <div class="radio-item">
            <Radio class="radio-style" :value="1">
              董柱 四川省 成都市 青羊区火车南站 +86-15607195236
              <Tag color="red"> 默认地址 </Tag>
            </Radio>
            <div class="radio-edit">
              <span>设为默认</span>
              <span>编辑</span>
              <span>删除</span>
            </div>
          </div>

<!--          <Radio class="radio-style" :value="2">董柱 四川省 成都市 青羊区火车南站 +86-15607195236</Radio>-->
        </RadioGroup>
        <p><a class="btn">更多地址</a>
          <i class="icon  icon-open-address" style="transform: rotate(270deg); cursor: pointer;"></i></p>
      </div>
    </div>
<!--    //配送时间-->
    <h3 class="box-title">配送时间</h3>
    <div class="box-body">
      <a class="my-btn active" href="javascript:;">不限送货时间：周一至周日</a>
      <a class="my-btn" href="javascript:;">工作日送货：周一至周五</a>
      <a class="my-btn" href="javascript:;">双休日、假日送货：周六至周日</a>
    </div>

    <h3 class="box-title">支付方式</h3>
    <div class="box-body">
      <a class="my-btn active" href="javascript:;">在线支付</a>
      <a class="my-btn" href="javascript:;">货到付款</a>
      <span style="color:#999">货到付款需付5元手续费</span>
    </div>

    <h3 class="box-title">金额明细</h3>
    <div class="box-body">
      <div class="total">
        <dl><dt>商品件数：</dt><dd>{{4}}件</dd></dl>
        <dl><dt>商品总价：</dt><dd>¥{{5}}</dd></dl>
        <dl><dt>运<i></i>费：</dt><dd>¥{{14}}</dd></dl>
        <dl><dt>应付总额：</dt><dd class="price">¥{{19}}</dd></dl>
      </div>
    </div>

    <div class="submit">
      <Button @click="submitOrderFn" type="primary" :size="40">提交订单</Button>
    </div>
  </div>

</div>
</template>

<script>
import { reactive, ref } from 'vue'
import {Steps,Step, Table,Button,Checkbox,Radio,RadioGroup,Tag} from 'ant-design-vue'
import {useRouter} from 'vue-router'
import { settlementData } from '@/views/cart/cart_data.js'

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
  {title:'实付',align:'center', dataIndex:'config',key:'config',slots: {
      customRender: 'config'
    } },
]


export default {
  name: 'settlement',
  components:{
    Steps,Step,Table,Button,RadioGroup,Radio,Tag
  },
  setup(){
    const radioStyle = reactive({
      display: 'block',
      height: '30px',
      lineHeight: '30px',
      background: '#F4F4F4'
    })
    const current = ref(1);
    const router = useRouter()
    function changeSteps(){
      router.push('/cart')
    }

    //地址
    const addSelect = ref(1)
      function submitOrderFn(){
      router.push('/payment_result')
      }
    return {
      changeSteps,
      current,
      stepStyle: {
        marginBottom: '60px',
        boxShadow: '0px -1px 0 0 #e8e8e8 inset',

      },
      columns,
      settlementData,
      addSelect,
      radioStyle,
      submitOrderFn
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


.submit {
  text-align: right;
  padding: 60px;
  border-top: 1px solid #f5f5f5;
}
</style>
