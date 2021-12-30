/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */

import axios from 'axios'


const baseURL = 'http://localhost:6452/api'
const instance = axios.create({
  baseURL,
  timeout:50000
})

instance.interceptors.request.use(config=>{
  console.log(config)
  return config
},error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(res=>{
  const {data,config} = res
  const code = data.code
  const message = data.message || data.msg
  if([200,'200'].includes(code)){

    return data.data
  }else {
    console.log('错误：‘’‘')
    return Promise.reject(message)
  }
},error => {
  return Promise.reject(error)
})


export default instance
