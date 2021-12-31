

import Api from '@/utils/request.js'

// 登入
export async function loginShopPost(data){
  return await Api.post('/login-shop',data)
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
  return await  Api.post('/add-cart',data)
}
