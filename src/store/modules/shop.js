import { headGet } from '@/api/shop'

export default {
  namespaced: true,
  state: {
    headMenus:[],

  },

  mutations: {
    setHeadMenus(state,item){
      state.headMenus = item
    },

  },
  actions: {
    async getMenus({commit}){
      const item =  await headGet()
      commit('setHeadMenus',item)
    }

  }

}
