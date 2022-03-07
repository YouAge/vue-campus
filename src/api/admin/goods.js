/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */
import Api from '@/utils/request.js'
import path from 'path'

// 商品处理
export async function productPost(data){
  return await  Api.post('/admin/product',data)
}
export async function productGet(data){
  return await  Api.get('/admin/product',{params:data})
}
export async function delProduct(data){
  return await Api.delete('/admin/product',{params:data})
}
export async function productPut(data){
  return await Api.put('/admin/product',data)
}



export async function imgMapPost(data){
  return await Api.post('/admin/img-map-keys',data)
}
export async function imgMapGet(){
  return await Api.get('/admin/img-map-keys')
}

export async function imagsListGet(paths){
  return await Api.post('/admin/imgs',{paths})
}



export async function showAllOrder(data){
  return await Api.get('/admin/order',{params:data})
}
