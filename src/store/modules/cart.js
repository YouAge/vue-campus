import { addOrderPost, delCartPatch, showCartGet } from '@/api/shop'
import { getLocal, setLocal } from '@/utils/cache.js'

export default {
  namespaced: true,
  state:{
    cartData:getLocal('cart') || [],
    selectedRowKeys: getLocal('selectedRowKeys') || [], // 选中待数据 索引
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
      let countMoney=0 // 运费
      let goodsMoney=0
      let freight = 0
      if(getters.orderGoods.length===0) return {sumNumber,countMoney,goodsMoney}
      getters.orderGoods.forEach(item=>{
        sumNumber += item.shopNumber
        const price =item.goodsSku.price
        const number = item.shopNumber
        goodsMoney += Math.round(price*100)*number/100
      })
      goodsMoney = Math.round(goodsMoney*100)/100
      return {
        sumNumber,
        goodsMoney,
        freight,
        countMoney: goodsMoney +freight
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
      state.selectedRowKeys.forEach(item=>{
        state.cartData.splice(item,1)
      })
    }

  },

  actions:{
    async delCartHttp({state,commit,dispatch},row){
      let delIds =[]
      if(!row){
        for (let index of state.selectedRowKeys){
          console.log(state.cartData[index], this.state.cartData)
          delIds.push(state.cartData[index].id)
        }
      }else {
        delIds = [row.id]
      }
      delCartPatch({cartIds:delIds}).then(()=>{
        commit('delSelectGoods')
        dispatch('getCartHttp')
      })
    },

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
      if(!data.address){
        return  this.$message.warning('收获地址不能为空')
      }
     const item = addOrderPost({
       address:data.address,goods,payMoney:getters.orderMoney.goodsMoney,
        shopNumber:getters.orderMoney.sumNumber})

      const delData = []
      let delIds =[]
      for (let index of state.selectedRowKeys){
        delData.push(state.cartData[index])
        delIds.push(state.cartData[index].id)
      }
      //请求接口
     const status =  await delCartPatch({cartIds:delIds})
      let newDate =[]
       delData.forEach(item=>{
         newDate = state.cartData.filter(f=>f.id !==item.id)
      })
      commit('setCartData',newDate)
      commit('setSelectedRow',[])
      // 清除选中的商品
      commit('delSelectGoods')
      return item
    }

  }
}
