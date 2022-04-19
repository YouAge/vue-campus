import {ref} from 'vue'
import { ElMessageBox, ElMessage  } from 'element-plus'
import { updateOrderPut } from '@/api/shop'
// 取消订单逻辑
export const useCancel = () => {
  // 组件实例
  const orderCancelCom = ref(null)
  // 点击取消
  const handlerCancel = (order) => {
    orderCancelCom.value.open(order)
  }
  return { handlerCancel, orderCancelCom }
}
// 确认收货逻辑
export const useConfirm = () => {
  const handlerConfirm = (order) => {
    return  new Promise((resolve, reject) => {
      ElMessageBox.confirm(
        '亲，您确认收货吗？确认后货款将打给卖家？','Warning',{
          confirmButtonText:'确定',
          cancelButtonText:'取消',
          type:'warning'
        }
      ).then(()=>{
        updateOrderPut({orderId:order.orderId,orderState:4}).then(()=>{
          ElMessage.success('收货成功')
          resolve()
        })
      }).catch((e)=>{reject(e)})
    })

  }
  return { handlerConfirm }
}
// 查看物流逻辑
export const useLogistics = () => {
  const orderLogisticsCom = ref(null)
  const handlerLogistics = (order) => {
    orderLogisticsCom.value.open(order)
  }
  return { handlerLogistics, orderLogisticsCom }
}


export   function setSpecs (arry) {
  let f=''
  for (let t of arry){
    f+= `${t.key}: ${t.value}  `
  }
  return f
}
