<template>
  <el-dialog v-model="visibleDialog" title="取消订单" width="600px">
    <div class="cancel-info">
      <p>取消订单后，本单享有的优惠可能会一并取消，是否继续？</p>
      <p class="tip">请选择取消订单的原因（必选）：</p>
      <div class="btn">
        <a
          @click="curText = item"
          v-for="item in cancelReason"
          :key="item"
          href="javascript:;"
          :class="{ active: curText === item }"
        >
          {{ item }}
        </a>
      </div>
    </div>
    <!-- 按钮操作 -->
    <template #footer>
      <el-button type="text" @click="visibleDialog=false" style="margin-right:20px">取消</el-button>
      <el-button type="primary" @click="submit">确认</el-button>
    </template>
  </el-dialog>
</template>

<script>
import { cancelReason } from '@/utils'
import { ElMessage } from 'element-plus'
import {ref} from 'vue'
import { updateOrderPut } from '@/api/shop'
export default {
  name: 'orderCancel',
  setup(){
    const visibleDialog = ref(false)
    const currOrder = ref(null)
    const open = (order) => {
      visibleDialog.value = true
      currOrder.value = order
    }
    // 选中的原因labelå
    const curText = ref('')
    // 确认
    const submit = () => {
      if (!curText.value) return ElMessage.warning('亲，请选择取消原因' )
      updateOrderPut({
        orderId: currOrder.value.orderId,
        orderState: 6,
        cancelReason: curText.value
      }).then(() => {
        message.warn( '取消订单成功' )
        currOrder.value.orderState = 6
        visibleDialog.value = false
      })
    }
    return { visibleDialog, cancelReason, curText, open, submit }
  }
}
</script>

<style  lang="less">
.cancel-info {
  p {
    font-size: 16px;
    line-height: 35px;
    &.tip {
      color: #999;
    }
  }
  .btn {
    padding-top: 21px;
    display: flex;
    flex-wrap: wrap;
    a {
      width: 256px;
      height: 45px;
      line-height: 45px;
      text-align: center;
      background-color: #ffffff;
      border: 1px solid #e4e4e4;
      margin-right: 20px;
      margin-bottom: 20px;
      color: #666;
      &:nth-child(2n){
        margin-right: 0;
      }
      &:hover,&.active {
        background-color: #e3f9f4;
        border-color: #27BA9B;
      }
    }
  }
}
</style>
