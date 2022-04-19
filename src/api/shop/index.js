

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

//获取首页商品数据
export async function tagShopHome(){
  return await Api.get('/tag-list')
}

//
export async function addGoodsBrowse(data){
  return await Api.put('/goods-browse',data)
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
  return await  Api.post('/del-address',data)
}
export async function updateAddressPut(data){
  return await  Api.put('/address',data)
}
export async function showAddressGet(){
  return await  Api.get('/address')
}


// 订单
export async function addOrderPost(data){
  return await  Api.post('/order',data)
}
export async function delOrderPatch(data){
  return await  Api.patch('/order',data)
}
export async function updateOrderPut(data){
  return await  Api.put('/order',data)
}
export async function showOrderGet(data){
  return await  Api.get('/order',{params:data})
}

export async function updateUserInfo(data){
  return await Api.put('/user-info',data)
}






/**
 * 查询商品评价信息
 * @param {String} id - 商品ID
 * @returns
 */
export const findGoodsCommentInfo = (id) => {
  // return request(`/goods/${id}/evaluate`, 'get')
  // axios 遇见 http https 开头的地址，不会加上基准地址
  // return Api.get(`https://mock.boxuegu.com/mock/1175/goods/${id}/evaluate`)
  return Api.get(`/evaluate`)
}

/**
 * 查询商品评价列表
 * @param {String} id - 商品ID
 * @param {Object} params - 商品ID
 * @returns
 */
export const findGoodsCommentList = (id, params) => {
  // return Api.get(`https://mock.boxuegu.com/mock/1175/geoods/${id}/evaluate/page`, params)
  return Api.get(`/evaluate/page`, params)
}

export const  findGoodsColl= async ()=>{
  return await Api.get('/collect')
}
