
// 主要是 前台 用户登入信息，
import {delAccessToken, getAccessToken, setAccessToken} from '@/utils/cache.js'
import { loginShopPost, userInfoGet } from '@/api/shop'
import {adminLogin} from "@/api/admin/specs";

const SHOP_TOKEN_NAME = 'AuthToken'


export default {
  namespaced: true,
  state: {
    footerShow: true, // footer 显示
    username:'',
    userInfo:{},
    token:getAccessToken(SHOP_TOKEN_NAME),
    loginStatus: false, // 登入状态 购物
    address:[] // 收获地址
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
    removeToken(state,name=SHOP_TOKEN_NAME){
      state.token =''
      // setAccessToken(name,'')
      delAccessToken(name)
      state.loginStatus = false
    },
    setFooterShow (state, item) {
      state.footerShow = item
    },
    setAddress(state,item){
      state.address = item
    },


    // ----- 管理员操作
    setAdminToken(state,token){
      state.token = token
      setAccessToken('admintoken',token)
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
    },
    async getUserInfo({state,commit},data){
      const item =await userInfoGet()
      commit('setUserInfo',item)
      commit('setLoginStatus',true)
      return true
    },





  }

}
