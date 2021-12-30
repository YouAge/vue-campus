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



