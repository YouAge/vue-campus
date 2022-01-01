import { createStore } from 'vuex'
import home from './modules/home.js'
import shop from '@/store/modules/shop.js'
import cart from '@/store/modules/cart.js'
export default createStore({
  getters: {
    footerShow: state => state.home.footerShow,
    headMenus: state => state.shop.headMenus,
    username: state =>state.home.username,
    token: state => state.home.token,
    userInfo: state=>state.home.userInfo,
    loginStatus: state => state.home.loginStatus,

    // 购物商品
    orderGoods: (state, getters) => getters['cart/orderGoods'],
    address: state => state.home.address
    // admin:
    // adminToken: this.state
  },
  modules: {
    home,
    shop,
    cart
  }
})
