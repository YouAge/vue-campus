

import HAddress from '@/views/userCenter/components/HAddress.vue'
import {useCreateModel} from './useCreateModel.js'
import {useStore} from 'vuex'
import { showAddressGet } from '@/api/shop'
import { computed, nextTick } from 'vue'
export const useAddress = ()=>{

  const store = useStore()
   function getShowAddress(){
    showAddressGet().then(item=>{
      store.commit('home/setAddress',item)
    })
  }
  if(store.getters.address && store.getters.address.length===0){
    getShowAddress()
  }

  // 新增加地址
  function addShowAddress(){
    useCreateModel(HAddress,{
      title:'新增地址',
      callback:()=>{
        getShowAddress()
      }
    })
  }

  function updateAddress(data){
    useCreateModel(HAddress,{
      title:'修改地址',
      data
    })
  }


  return {
    address:computed(()=>store.getters.address),
    addShowAddress,
    getShowAddress
  }
}
