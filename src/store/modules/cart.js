import { addOrderPost, showCartGet } from '@/api/shop'
import { getLocal, setLocal } from '@/utils/cache.js'

export default {
  namespaced: true,
  state:{
    cartData:getLocal('cart') || [],
    selectedRowKeys: getLocal('selectedRowKeys') || [],
    checkBox:{
      checkAll:false
    },
  },
  getters:{
    indeterminate(state){
      return state.selectedRowKeys.length >0 && state.selectedRowKeys.length<state.cartData.length
    },
    // 购买商品的id
    orderGoods(state){
    return  state.selectedRowKeys.map(item => state.cartData[item])
   },

    // 计算最后的价格
    orderMoney(state,getters){
      let sumNumber =0
      let countMoney=12 // 运费
      let goodsMoney=0
      if(getters.orderGoods.length===0) return {sumNumber,countMoney,goodsMoney}
      getters.orderGoods.forEach(item=>{
        sumNumber += item.shopNumber
        const price =item.goodsSku.price
        const number = item.shopNumber
        goodsMoney += Math.round(price*100)*number/100
      })
      goodsMoney = Math.round(goodsMoney*100)/10
      return {
        sumNumber,
        goodsMoney,
        countMoney: goodsMoney + 12
      }
    }
  },
  mutations: {

    // 设置购物车数据
    setCartData(state,item){
      state.cartData = item
      setLocal('cart',item)
    },

    setSelectedAll(state,item){
      if(item){
        state.selectedRowKeys = state.cartData.map((item,index)=>index)
      }else {
        state.selectedRowKeys = []
      }
      setLocal('selectedRowKeys',state.selectedRowKeys)
    },
    setSelectedRow(state,item){
      state.selectedRowKeys = item
      setLocal('selectedRowKeys',state.selectedRowKeys)
    },

    // 下订单后删除已选择的商品
    delSelectGoods(state,getters,){
      console.log(state,getters,this.getters['cart/orderGoods'])
      state.selectedRowKeys.for(item=>{
        state.cartData.splice(item,1)
      })

    }

  },

  actions:{

    async getCartHttp({commit}){
      const item  = await showCartGet()
      commit('setCartData',item)
    },

    // 提交订单， 清除购物中选中的数据
    async submitOrders({state,commit,getters},data){
      const goods =[]
      getters.orderGoods.forEach(item=>{
        goods.push( {
          name:item.goods.name,
          picture:item.goods.picture,
          oldPrice: item.goodsSku.oldPrice,
          price:item.goodsSku.price,
          specs:item.goodsSku.specs,
          count:item.shopNumber,
          desc:item.goods.desc
        })
      })
     const item = addOrderPost({address:data.address,goods,
        shopNumber:getters.orderMoney.sumNumber})
      // 清除选中的商品
      // commit('delSelectGoods')
      // const newDate =  state.cartData.filter((item,index)=> !state.selectedRowKeys.include(index))
      // commit('setCartData',newDate)
      // commit('setSelectedRow',[])
      return item
    }

  }
}
