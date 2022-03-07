/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */


import Api from '@/utils/request.js'


// 登入
export async function adminLogin(data){
  return await Api.post('/admin/admin-login',data)
}
export async function adminUserInfoGet(){
  return await Api.get('/admin/get-admin-info')
}

export async function addAdminPost(data){
  return await Api.post('/admin/add-admin',data)
}
export async function getAdminHttp(params){
  return await Api.get('/admin/admin',{params})
}
export async function delAdminHttp(params){
  return await  Api.delete('/admin/admin',{params})
}


export async function specsPost(data){
  return  await Api.post('/admin/specs',data)
}

export  function specsGet(){
  return  Api.get('/admin/specs')
}

export function specsDel(params){
  return  Api.delete('/admin/specs',{params})
}
export async function specsPut(data){
  return  await Api.put('/admin/specs',data)
}


export async function catePost(data){
  return await Api.post('/admin/cate',data)
}
export async function cateDel(params){
  return await Api.delete('/admin/cate',{params})
}
export async function catePut(params){
  return await Api.put('/admin/cate',params)
}
export async function cateGet(){
  return await Api.get('/admin/cate')
}

export async function tagGet(){
  return await Api.get('/admin/tags')
}
export async function tagPost(data){
  return await Api.post('/admin/tags',data)
}
export async function tagDel(params){
  return await Api.delete('/admin/tags',{params})
}

//获取用户
export async function adminUserGet(params){
  return await Api.get('/admin/shop-user',{params})
}
