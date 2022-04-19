<template>
<div>
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
    <order-item
      @on-cancel="handlerCancel"
      @on-confirm="handlerConfirm"
      @on-logistics="handlerLogistics"
      @on-suceess="updateOrder"
      v-for="item in orderList"
      :key="item.id"
      :order="item"
    />
    <!--    //分页-->
    <h-pagination v-if="reqPage.total>0"  :current-page="reqPage.page"
                  :page-size="reqPage.pageSize"
                  :total="reqPage.total"
                  @current-change="reqPage.page=$event" />
  </div>
</div>
</template>

<script>
import HTabsPanel from '@/components/order/HTabsPanel.vue'
import HTabs from '@/components/order/HTabs.vue'
import { orderStatus } from '@/utils'
import OrderItem from './components/orderItem.vue'
import { showAllOrder, updateAllOrder } from '@/api/admin/goods.js'
import HPagination from '@/components/order/HPagination.vue'
export default {
  name: 'index',
  components:{
    HPagination,
    OrderItem,
    HTabs,HTabsPanel},
  data(){
    return {
      orderStatus,
      activeName:'all',
      loading:false,
      reqPage:{
        pageSize: 30,
        page:1,
        orderState:1
      },
      orderList:[]
    }
  },
  watch:{
    'reqPage':{
      handler(newName, oldName) {
        console.log('gaidsfadfasd')
        this.getOrderHttp()
      },
      // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
      immediate: true,
      deep:true
    },
  },

  methods:{
    //点击切换 tag
    tabClick({index}){
      this.reqPage.page =1
      this.reqPage.orderState = index
      this.getOrderHttp()
    },
    //取消按钮
    handlerCancel(order){
      console.log(this.$refs['orderCancelCom'].value,this.$refs['orderCancelCom'])
      this.$refs['orderCancelCom'].open(order)
    },

    handlerConfirm(order){
      const {handlerConfirm} = useConfirm()
      handlerConfirm(order)
    },
    handlerLogistics(){

    },

    updateOrder(order){
      updateAllOrder({orderState:Number(order.orderState)+1,orderId:order.orderId}).then(()=>{
        this.getOrderHttp()
        this.$message.success('发货成功')
      })
    },
    async getOrderHttp(){
      this.loading =  true
      const data = await showAllOrder({
        pageSize:this.reqPage.pageSize,
        pageIndex:this.reqPage.page,
        orderState: this.reqPage.orderState
      })
      this.reqPage.total = data.count
      this.orderList = data.rows
      this.loading =  false
      console.log('===>订单',data)
    }
  },
  created () {
    this.getOrderHttp()
  }
}
</script>

<style scoped>

</style>
