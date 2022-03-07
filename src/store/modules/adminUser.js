import { adminLogin, adminUserInfoGet } from '@/api/admin/specs.js'
import { delAccessToken, getAccessToken, setAccessToken } from '@/utils/cache.js'
import router from '@/router'
const ADMIN_TOKEN_NAME = 'admintoken'

export default {
  namespaced: true,
  state:{
    adminToken:getAccessToken(ADMIN_TOKEN_NAME),
    loginStatus: false,
    adminUser:{}
  },
  getters:{},
  mutations:{
    setAdminUser(state,data){
      state.adminUser = data
      state.loginStatus = true
    },
    setAdminToken(state,token){
      state.adminToken = token
      setAccessToken(ADMIN_TOKEN_NAME,token)
      state.loginStatus = true
    },

    removeToken(state,name=ADMIN_TOKEN_NAME){
      state.adminToken =''
      // setAccessToken(name,'')
      delAccessToken(name)
      state.loginStatus = false
    },
  },
  actions:{

    async getUserInfo({state,commit}){
      const item =await adminUserInfoGet()
      if(item){
        // commit('setAdminToken',item.token)
        commit('setAdminUser',item)
        // 注册 路由
      }else {
        commit('removeToken')
        router.push('/login-admin')
        throw new Error('获取永福信息失败')
      }
    },

    // 管理员登入， 获取token， 注册管理员路由
    async adminLogin({state,commit},data){
      const item = await adminLogin(data)
      if(item.token){
        commit('setAdminToken',item.token)
        commit('setAdminUser',item.user)
        // 注册 路由
      }else {
        throw new Error('获取永福信息失败')
      }
    }
  }


}
