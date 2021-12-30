<template>
<Form :model="shopData"  ref="goodFormRef" :rules="rulesForm" :label-col="{span:2}" :wrapper-col="{span:18}">
  <form-item label="商品名称"  name="name">
    <Input v-model:value="shopData.name"/>
  </form-item>
  <form-item label="商品种类" name="crateId">
    <a-cascader v-model:value="shopData.cateId" :fieldNames="{ label: 'name', value: 'id', children: 'children' }"
                :options="cateOption" placeholder="选择商品类型" />
  </form-item>
  <form-item label="商品描述" name="desc">
    <a-textarea
      v-model:value="shopData.desc"
      placeholder="输入商品介绍"
      :auto-size="{ minRows: 2, maxRows: 5 }"
    />
  </form-item>
  <form-item label="商品图片">
    <h-upload :img-number="4" @success="(file)=>{
          shopData.picture = file
          }"/>
  </form-item>

  <form-item label="商品状态" >
    <radio-group v-model:value="shopData.status">
      <radio :value="true">上架</radio>
      <radio :value="false">下架</radio>
    </radio-group>
  </form-item>

  <form-item label="商品属性：">
    <div>
      <a-button type="primary" style="margin: 10px" @click="addSpecsFun">添加属性</a-button>
<!--      <a-button type="primary" danger>删除</a-button>-->
    </div>
    <a-table :columns="specsTable" :data-source="specsDateTable">
      <template #value="{record}">
        <div>
          <a-tag color="#108ee9" v-for="item in record.value" :key="item">{{item}}</a-tag>
        </div>
      </template>
      <template #config="{record}">
        <a-button type="primary" style="margin-right: 10px">编辑</a-button>
        <a-button type="primary" danger>删除</a-button>
      </template>
    </a-table>
  </form-item>

  <form-item label="商品SKU">
    <div>
      <vxe-table border min-height="600px"  :data="shopData.sku" :edit-config="{trigger:'click',mode:'cell'}">
        <vxe-column v-for="item in specsDateTable" :title="item.name" :key="item.name">
          <template #default="{ row }" >
            <div>{{ (()=>{
              const p = row.specs.find(t=>t.key===item.name)
              return p?p.value:''
            })()}}</div>
          </template>
        </vxe-column>
        <vxe-column field="picture" title="图片">
          <template #default="{ row }">
            <h-upload :img-number="1" @success="(file)=>{
          row.picture =file.length >0?file[0]:''
          }"/>
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
        <vxe-column title="编辑">
          <template #default="{ row }" >
            <vxe-button type="primary" danger @click="delSkuSpecs(row)">删除</vxe-button>
          </template>
        </vxe-column>
      </vxe-table>
    </div>

  </form-item>

  <form-item label="商品详情">
    <h-edit v-model="shopData.particulars"/>

    <vxe-button @click="submitProduct" style="margin-top: 20px;width: 150px;"  status="primary">确定</vxe-button>
  </form-item>
</Form>
</template>

<script>
import {Modal,Form,FormItem,Input,RadioGroup,Radio,Select} from 'ant-design-vue'
import { reactive, ref } from 'vue'
import HUpload from '@/components/HUpload.vue'
import addSpecs from './components/addSpecs.vue'
import {useCreateModel} from '@/hooks/useCreateModel.js'
import { cateGet, specsGet } from '@/api/admin/specs.js'
import { hierarchy } from '@/utils'
import HEdit from '@/components/h-edit'
import { productPost } from '@/api/admin/goods.js'
import { goodsMock } from '../../../mock/goodsMock.js'
const specsTable = [
  {title:'属性名',dataIndex:'name'},
  {title:'属性值',dataIndex:'value',slots:{ customRender: 'value'}},
  {title:'操作',slots:{ customRender: 'config'}},
]

const columnsTable = [
  {title:'图片',dataIndex:'picture'},
  {title:'原价',dataIndex:'price'},
  {title:'折扣',dataIndex:'oldPrice'},
  {title:'库存',dataIndex:'inventory'},
  {title:'操作',dataIndex:'config'},
]

// 验证

const rulesForm = {
  name:{required:true,message:'请输入属性名'},
  picture:{required:true,message:'图片不能为空'},
  desc:{required:true,message:'图片不能为空'},
  cateId:{required:true,message:'类型不能为空'},

}

export default {
  name: 'addProdInfo',
  components:{
    HEdit,
    HUpload,
    Modal,Form,FormItem,Input,RadioGroup,Radio,Select},
  setup(){
    const goodFormRef = ref()
    const specsDateTable = ref([])
    const cateOption = ref([])
    const specsOption = ref([])
    const shopData = reactive(goodsMock)
    // const shopData = reactive({
    //   name:'这是第一个商品',
    //   status: true,
    //   cateId:[],
    //   picture:'',
    //   desc:'爱上放假啊函数即可打开就', // 描述
    //   //商品sku  商品多种属性规格， 价格 图片
    //   sku:[],
    //   specs:[],
    //   particulars:''
    // })

    async function getCateDateAll(){
      cateOption.value = await cateGet()
    }
    getCateDateAll()
    //处理sku 组合算法
    function skuPowerDate(skuArr=[],i,list){
      for(let j =0;j<list[i].length;j++){
        if(i<list.length-1){
          skuArr[i] = list[i][j]
          skuPowerDate(skuArr,i+1,list)
        }else {
          shopData.specs.push([...skuArr,list[i][j]])
        }
      }
    }

    // 添加sku
    async function addSpecsFun(){
      // 请求数据
      if(specsOption.value.length<1){
        specsOption.value = await specsGet()
      }
      useCreateModel(addSpecs,{
        option:specsOption.value,
       callback:function (item) {
         // 判断是否存在
        const s =  specsDateTable.value.find((t,index)=>{
           if(t.name === item.name){
             specsDateTable.value[index].value = item.value
             return true
           }
         })
         if(!s){
           specsDateTable.value.push(item)
         }
         // shopData.specs = specsDateTable.value
         let skuArry =[]
         specsDateTable.value.forEach(i=>{
           let o = []
           for(let g of i.value){
             o.push({
               key:i.name,value:g
             })
           }
           skuArry.push(o)
         })
         console.log(specsDateTable.value)
         //处理规则的格式为 [[{key:'尺码',value:'S'},{key:'尺码',value:'M'}]]
         shopData.specs = []
         shopData.sku =[]
         // 获取到数据， 处理,  渲染 sku 的数据
         skuPowerDate([],0,skuArry)
         shopData.specs.forEach(f=>{
           shopData.sku.push(
           { picture:'',price:0,oldPrice:0,inventory:0,specs:f })
         })
       }
      })
    }
    function delSkuSpecs(row){
      console.log(row)
    }

    function submitProduct(){
      goodFormRef.value.validate().then(async ()=>{
       const item = await productPost(shopData)
        console.log(item)
        //天机成功后提示，
      })
    }


    return {
      rulesForm,
      goodFormRef,
      shopData,
      cateOption,
      columnsTable,
      specsTable,
      specsDateTable,
      addSpecsFun,
      delSkuSpecs,
      submitProduct
    }
  }
}
</script>

<style scoped lang="less">

</style>
