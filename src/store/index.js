import { createStore } from 'vuex'
import home from './modules/home.js'
import shop from '@/store/modules/shop.js'
export default createStore({
  getters: {
    footerShow: state => state.home.footerShow,
    headMenus: state => state.shop.headMenus,
    username: state =>state.home.username,
    token: state => state.home.token,
    userInfo: state=>state.home.userInfo,
    loginStatus: state => state.home.loginStatus
  },
  modules: {
    home,
    shop
  }
})
