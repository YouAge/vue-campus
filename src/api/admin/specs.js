/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */


import Api from '@/utils/request.js'
export async function specsPost(data){
  return  await Api.post('/admin/specs',data)
}

export  function specsGet(){
  return  Api.get('/admin/specs')
}


export async function catePost(data){
  return await Api.post('/admin/cate',data)
}

export async function cateGet(){
  return await Api.get('/admin/cate')
}
