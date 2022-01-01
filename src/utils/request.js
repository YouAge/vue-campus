/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */

import axios from 'axios'
import {message as AMessage ,Modal } from 'ant-design-vue'
import store from '@/store'
import { getAccessToken } from '@/utils/cache.js'
import router from '@/router'
const baseURL = 'http://localhost:6452/api'
const instance = axios.create({
  baseURL,
  timeout:50000
})

instance.interceptors.request.use(config=>{
  const token = getAccessToken('AuthToken')
  if(store.getters.token || token){
    config.headers['AuthToken'] = store.getters.token && token
  }
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
    switch (code){
      case 401:
        // 清除登入信息
        store.commit('home/removeToken')
        router.push('/login')
        AMessage.error('身份验证失败， 请重新登入')
        return
      case 400:
        Modal.error({
          title: () => '请求参数错误',
          content: () => message,
        });
        return
      default:
        return Promise.reject(message)
    }
    return Promise.reject(message)
    }


},error => {
  return Promise.reject(error)
})


export default instance
