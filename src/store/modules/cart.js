import { showCartGet } from '@/api/shop'

export default {
  namespaced: true,
  state:{
    cartData:[],
    selectedRowKeys:[],
    checkBox:{
      checkAll:false
    }
  },
  getters:{
    // isCheckAll(state){
    //   return state.selectedRowKeys.length === state.cartData.length
    // },
    indeterminate(state){
      return state.selectedRowKeys.length >0 && state.selectedRowKeys.length<state.cartData.length
    },
    // 购买商品的id
    orderGoods(state){
    return   state.selectedRowKeys.map(item => state.cartData[item])
   }
  },
  mutations: {
    setOrderGoods(state,item){
      state.orderGoods = item
    },

    // 设置购物车数据
    setCartData(state,item){
      state.cartData = item
    },

    setSelectedAll(state,item){
      if(item){
        state.selectedRowKeys = state.cartData.map((item,index)=>index)
      }else {
        state.selectedRowKeys = []
      }
    },
    setSelectedRow(state,item){
      state.selectedRowKeys = item
    }

    // 下订单后删除已选择的商品


  },

  actions:{

    async getCartHttp({commit}){
      const item  = await showCartGet()
      commit('setCartData',item)
    },



  }
}
