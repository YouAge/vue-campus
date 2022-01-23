



import Api from '@/utils/request.js'



// 获取所以的用户信息， 翻页
export async function getShopUserPage(data){
  return await Api.get('/admin/shop-user',{params:data})
}
