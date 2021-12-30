
// 主要是 前台 用户登入信息，
import { getAccessToken, setAccessToken } from '@/utils/cache.js'
import { loginShopPost } from '@/api/shop'

const SHOP_TOKEN_NAME = 'AuthToken'


export default {
  namespaced: true,
  state: {
    footerShow: true, // footer 显示
    username:'',
    userInfo:{},
    token:getAccessToken(SHOP_TOKEN_NAME),
    loginStatus: false, // 登入状态 购物
  },

  mutations: {
    setLoginStatus(state,data){
      state.loginStatus = data
    },
    setUserInfo(state,info){
      state.userInfo = info
      state.username = info.username
    },
    setToken(state,token){
      state.token = token
      setAccessToken(SHOP_TOKEN_NAME,token)
    },
    removeToken(state,token){
      state.token =''
      setAccessToken(SHOP_TOKEN_NAME,'')
      state.loginStatus = false
    },
    setFooterShow (state, item) {
      state.footerShow = item
    }

  },
  actions: {
    // 登入
    async shopLogin({state,commit},data){
      const item = await loginShopPost(data)
      commit('setToken',item.token)
      commit('setUserInfo',item.user)
      commit('setLoginStatus',true)
      return true
    }


  }

}
