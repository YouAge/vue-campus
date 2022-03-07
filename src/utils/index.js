/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */
export function is(val, type) {
  return toString.call(val) === `[object ${type}]`
}
/**
 * @description:  是否为字符串
 */
export function isString(val)  {
  return is(val, 'String')
}




// 处理
export const hierarchy = (list,stu='children' ,parentMenuId = 0, superName = 'superId') => {
  if (list.length < 1) return []
  let menuObj = {}
  list.forEach((item) => {
    if(item[superName] === parentMenuId){
      item[stu] = []
      menuObj[item.id] = item
    }
  })
  return list.filter((item) => {
    if (item[superName] !== parentMenuId) {
      menuObj[item[superName]][stu].push(item)
      return false
    }
    return true
  })
}

// 订单状态
export const orderStatus = [
  { name: 'all', label: '全部订单' },
  { name: 'unpay', label: '待付款' },
  { name: 'deliver', label: '待发货' },
  { name: 'receive', label: '待收货' },
  { name: 'comment', label: '待评价' },
  { name: 'complete', label: '已完成' },
  { name: 'cancel', label: '已取消' }
]

export const cancelReason = [
  '配送信息有误',
  '商品买错了',
  '重复下单/误下单',
  '忘记使用优惠券、兔币等',
  '其他渠道价格更低',
  '不想买了'
]
