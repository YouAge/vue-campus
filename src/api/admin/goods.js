/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */
import Api from '@/utils/request.js'
import path from 'path'


export async function productPost(data){
  return await  Api.post('/admin/product',data)
}
export async function productGet(data){
  return await  Api.get('/admin/product',{params:data})
}
export async function delProductPost(goodsId){
  return await Api.post('/admin/del-product',{goodsId})
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
