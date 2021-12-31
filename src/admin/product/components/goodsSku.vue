<template>

  <vxe-table border min-height="600px"  :data="shopDataSku" :edit-config="{trigger:'click',mode:'cell'}">
    <vxe-column v-for="item in specsDateTable" :title="item.key" :key="item.key">
      <template #default="{ row }" >
        <div>{{ (()=>{
          const p = row.specs.find(t=>t.key===item.key)
          return p?p.value:''
        })()}}</div>
      </template>
    </vxe-column>
    <vxe-column field="picture" title="图片">
      <template #default="{ row }">
        <a-image  :width="200" :src="row.picture"/>
      </template>
    </vxe-column>
    <vxe-column field="price" title="原价" :edit-render="{}">
      <template #edit="{ row }">
        <vxe-input v-model="row.price" type="number" placeholder="请输入价格"></vxe-input>
      </template>
    </vxe-column>
    <vxe-column field="oldPrice" title="折扣" :edit-render="{}">
      <template #edit="{ row }">
        <vxe-input v-model="row.oldPrice" type="number" placeholder="请输入价格"></vxe-input>
      </template>
    </vxe-column>
    <vxe-column field="inventory" title="库存" :edit-render="{}">
      <template #edit="{ row }">
        <vxe-input v-model="row.inventory" type="number" placeholder="请输入价格"></vxe-input>
      </template>
    </vxe-column>
<!--    <vxe-column title="编辑">-->
<!--      <template #default="{ row }" >-->
<!--        <vxe-button type="primary" danger @click="delSkuSpecs(row)">删除</vxe-button>-->
<!--      </template>-->
<!--    </vxe-column>-->
  </vxe-table>

</template>

<script>
import { ref } from 'vue'

export default {
  name: 'goodsSku',
  props:{
    shopDataSku:{
      type:Array,
      default:[]
    }
  },
  setup(props){
    const specsDateTable = ref([])
    let specs = []
    // 处理属性
    if(props.shopDataSku.length >0){
      for(let item of props.shopDataSku){
        item.specs.forEach(s=>{
          const sp =  specs.find(h=>h.key === s.key)
          // 多组合，添加照片，当个商品，就不需要照片了，
          if(sp){
            sp.value.push(s.value)
          }else {specs.push({key:s.key, value:[s.value]})
          }
        })
      }
    }
    specsDateTable.value = specs
  return {
    specsDateTable
  }
  }
}
</script>

<style scoped>

</style>
