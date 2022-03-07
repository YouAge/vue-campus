<template>
  <div class="member-order">
    <HTabs v-model="activeName" @tab-click="tabClick">
      <HTabsPanel
        v-for="item in orderStatus"
        :key="item.name"
        :label="item.label"
        :name="item.name"
      >
      </HTabsPanel>
    </HTabs>

    <!-- 订单列表 -->
    <div class="order-list">
      <div v-if="loading" class="loading"></div>
      <div class="none" v-if="!loading && orderList.length === 0">暂无数据</div>
      <OrderItem
        @on-cancel="handlerCancel"
        @on-delete="handlerDelete"
        @on-confirm="handlerConfirm"
        @on-logistics="handlerLogistics"
        v-for="item in orderList"
        :key="item.id"
        :order="item"
      />
    </div>

<!--    //分页-->
    <h-pagination v-if="reqPage.total>0"  :current-page="reqPage.page"
                  :page-size="reqPage.pageSize"
                  :total="reqPage.total"
                  @current-change="reqPage.page=$event" />

    <!-- 取消原因组件 -->
    <OrderCancel ref="orderCancelCom" />
  </div>
</template>

<script>
import HTabsPanel from '@/components/order/HTabsPanel.vue'
import HTabs from '@/components/order/HTabs.vue'
import { orderList as opt } from '../../../../mock/goodsMock.js'
import OrderItem from '@/views/userCenter/order/components/OrderItem.vue'
import { showOrderGet } from '@/api/shop'
import HPagination from '@/components/order/HPagination.vue'
import OrderCancel from '@/views/userCenter/order/components/orderCancel.vue'
import { ElMessageBox } from 'element-plus'
import {useConfirm} from './order.js'
export default {
  name: 'index',
  components: { OrderCancel, HPagination, OrderItem, HTabs, HTabsPanel },
  data(){
    return {
      orderStatus:[
        { name: 'all', label: '全部订单' },
        { name: 'unpay', label: '待付款' },
        { name: 'deliver', label: '待发货' },
        { name: 'receive', label: '待收货' },
        { name: 'comment', label: '待评价' },
        { name: 'complete', label: '已完成' },
        { name: 'cancel', label: '已取消' }
      ],
      activeName:'all',
      loading:false,
      opt,
      orderList:[],
      reqPage:{
        page:1,
        pageSize:5,
        orderState:0,
        total:0
      }
    }
  },
  watch:{
    'reqPage':{
      handler(newName, oldName) {
        console.log('gaidsfadfasd')
        this.getOrderHttp()
      },
      // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
      immediate: true
    }
  },
  methods:{
    //点击切换 tag
    tabClick({index}){
      console.log(index)
      this.reqPage.page =1
      this.reqPage.orderState = index
      this.getOrderHttp()
    },
    //取消按钮
    handlerCancel(order){
      console.log(this.$refs['orderCancelCom'].value,this.$refs['orderCancelCom'])
      this.$refs['orderCancelCom'].open(order)
    },
    handlerDelete(order){
      ElMessageBox.confirm(
        '亲，您确认删除该订单吗？','Warning',{
          confirmButtonText:'确定',
          cancelButtonText:'取消',
          type:'warning'
        }
      ).then(()=>{
        console.log('删除成功')
      }).catch(()=>{})

    },
    handlerConfirm(order){
      const {handlerConfirm} = useConfirm()
      handlerConfirm(order)
    },
    handlerLogistics(){

    },

    async getOrderHttp(){
     const data =   await showOrderGet({
       pageSize:this.reqPage.pageSize,
       pageIndex:this.reqPage.page,
       orderState: this.reqPage.orderState
     })
      this.reqPage.total = data.count
      this.orderList = data.rows
      console.log('===>订单',data)
    }
  },
  created () {
    this.getOrderHttp()
    this.orderList = this.opt.items
    console.log('<=>==',this.orderList)
  }
}
</script>

<style scoped lang="less">
.member-order {
  height: 100%;
  background: #fff;
}
.order-list {
  background: #fff;
  padding: 20px;
  position: relative;
  min-height: 400px;
}
.loading {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(255,255,255,.9) url('~@/assets/img/loading.gif') no-repeat center;
}
.none {
  height: 400px;
  text-align: center;
  line-height: 400px;
  color: #999;
}
</style>
