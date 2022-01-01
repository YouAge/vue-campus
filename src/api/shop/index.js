

import Api from '@/utils/request.js'

// 登入
export async function loginShopPost(data){
  return await Api.post('/login-shop',data)
}

export async function userInfoGet(){
  return await Api.get('/get-user-info')
}


export async function registerShopPost(data){
  return await Api.post('/register-shop',data)
}


// 首页栏目 菜单获取
export async function headGet(){
  return await Api.get('/head-mun')
}

//获取类型商品 list
export  async function cateShopGet(data){
  return await Api.get('/goods-list',{params:data})
}



// 获取商品详情
export async function goodsDetailsGet(goodsId){
  return await Api.get('/goods-details',{params:{goodsId}})
}


//加入购物车
export async function addCartPost(data){
  return await  Api.post('/cart',data)
}
export async function delCartPatch(data){
  return await  Api.patch('/cart',data)
}
export async function updateCartPut(data){
  return await  Api.put('/cart',data)
}
export async function showCartGet(){
  return await  Api.get('/cart')
}


// 地址
export async function addAddressPost(data){
  return await  Api.post('/address',data)
}
export async function delAddressPatch(data){
  return await  Api.patch('/address',data)
}
export async function updateAddressPut(data){
  return await  Api.put('/address',data)
}
export async function showAddressGet(){
  return await  Api.get('/address')
}

