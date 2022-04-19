<template>
<Form :model="shopData"  ref="goodFormRef" :rules="rulesForm"
      :label-col="{span:2}" :wrapper-col="{span:13}">
  <form-item label="商品名称"  name="name" placeholder="输入商品名称" >
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

  <form-item label="商品标签">
    <a-select
      v-model:value="shopData.tags"
      mode="multiple"
      placeholder="请选择 标签，可多选"
      style="width: 100%"
    >
      <a-select-option :value="item.id" v-for="item in tagOption" :key="item.id">{{item.name}}</a-select-option>
    </a-select>
  </form-item>

  <form-item label="商品图片" name="picture">
<!--    <template v-if="shopData.picture.length<1">-->
<!--      <h-upload  :img-number="4" @success="(file)=>{-->
<!--          shopData.picture = file-->
<!--          }"/>-->
<!--    </template>-->
<!--      <div v-else style="margin-bottom:10px;display: flex">-->
<!--        <a-image  :width="150" :src="path" v-for="path in shopData.picture" :key="path"/>-->
<!--      </div>-->

<!--    <a-button @click="setImagArr" style="margin-right: 15px;">选择图片</a-button>-->
<!--    <a-button @click="shopData.picture=[]">重置图片</a-button>-->

    <el-input v-model="pictureModel" clearable placeholder="输入商品图片"/>
  </form-item>

  <form-item label="商品介绍类型" >
    <radio-group v-model:value="shopData.isTypeExplain">
      <radio :value="1">普通商品</radio>
      <radio :value="2">文章描述</radio>
    </radio-group>
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
    <a-table :columns="specsTable" :data-source="specsDateTable" v-if="specsDateTable.length>0">
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
      <vxe-table border min-height="600px"  :data="shopData.skus" :edit-config="{trigger:'click',mode:'cell'}">
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
        <vxe-column field="oldPrice" title="原价" :edit-render="{}">
          <template #edit="{ row }">
            <vxe-input v-model="row.oldPrice" type="number" placeholder="请输入价格"></vxe-input>
          </template>
        </vxe-column>
        <vxe-column field="price" title="折扣" :edit-render="{}">
          <template #edit="{ row }">
            <vxe-input v-model="row.price" type="number" placeholder="请输入价格"></vxe-input>
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
  <div>
    <div>
      <h4>产品参数</h4>
      <a-textarea v-model:value="detailSet" placeholder="Basic usage" :rows="4" />
    </div>

    <div>
      <h4>图片详情</h4>
      <a-textarea v-model:value="detailImage" placeholder="Basic usage" :rows="4" />
    </div>
  </div>
</form-item>

  <form-item label="商品详情">
    <h-edit v-model="shopData.particulars"/>
    <vxe-button @click="submitProduct" style="margin-top: 20px;width: 150px;"  status="primary">确定添加</vxe-button>
  </form-item>
</Form>
</template>

<script>
import {Modal,Form,FormItem,Input,RadioGroup,Radio,Select} from 'ant-design-vue'
import { computed, getCurrentInstance, reactive, ref } from 'vue'
import HUpload from '@/components/HUpload.vue'
import addSpecs from './components/addSpecs.vue'
import {useCreateModel} from '@/hooks/useCreateModel.js'
import { cateGet, specsGet, tagGet } from '@/api/admin/specs.js'
import HEdit from '@/components/h-edit'
import { productPost } from '@/api/admin/goods.js'
import ginImg from '@/admin/components/seachImg/ginImg.vue'
import router from '@/router'
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
    const internalInstance = getCurrentInstance()
    const app = internalInstance.appContext.config.globalProperties
    const goodFormRef = ref()
    const specsDateTable = ref([])
    const cateOption = ref([])
    const tagOption = ref([])
    const specsOption = ref([])
    const pictureModel = computed({
        get(){
          if(shopData.picture){
            return JSON.stringify(shopData.picture)
          }else {
            return ''
          }
        },
        set(value){
          shopData.picture = JSON.parse(value)
        }
    })

    const detailImage = computed({
      get(){
        if(shopData.partInfo.detailImage) return JSON.stringify(shopData.partInfo.detailImage)
        return  ''
      },
      set(value){
        shopData.partInfo.detailImage = JSON.parse(value)
      }
    })
    const detailSet = computed({
      get(){
        if(shopData.partInfo.detailSet) return JSON.stringify(shopData.partInfo.detailSet)
        return ''
      },
      set(value){
        shopData.partInfo.detailSet = JSON.parse(value)
      }
    })
    // const shopData = reactive(goodsMock)
    const shopData = reactive({
      name:'',
      status: true,
      isTypeExplain:1,
      tags:[],
      cateId:[],
      picture:[],
      desc:'', // 描述
      //商品sku  商品多种属性规格， 价格 图片
      skus:[],
      specs:[],
      particulars:'',
      partInfo:{
        detailImage:[],
        detailSet:{},
      }
    })

    async function getCateDateAll(){
      cateOption.value = await cateGet()
      tagOption.value = await tagGet()
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

    //选择图片，添加
    function setImagArr(){
      useCreateModel(ginImg,{
        callback:(item)=>{

          shopData.picture =item
        }
      })
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
         console.log('specs',specsDateTable.value)
         //处理规则的格式为 [[{key:'尺码',value:'S'},{key:'尺码',value:'M'}]]
         shopData.specs = []
         shopData.skus =[]
         // 获取到数据， 处理,  渲染 sku 的数据
         skuPowerDate([],0,skuArry)
         shopData.specs.forEach(f=>{
           shopData.skus.push(
           { picture:'',price:item.price,oldPrice:item.oldPrice,inventory:item.inventory,specs:f })
         })
       }
      })
    }
    function delSkuSpecs(row){
      console.log(row)
    }

    function submitProduct(){
      goodFormRef.value.validate().then(async ()=>{
        if(shopData.skus.length ===0){
          return app.$message.success('商品sku 不能为空')
        }
       const item = await productPost(shopData)
        console.log(item)
        //天机成功后提示，
        app.$message.success('新增商品成功')
        // await goodFormRef.value.resetFields()
        // location.reload()
        // router.push('')
      })
    }


    return {
      rulesForm,
      goodFormRef,
      shopData,
      cateOption,
      tagOption,
      columnsTable,
      specsTable,
      specsDateTable,
      setImagArr,
      addSpecsFun,
      delSkuSpecs,
      submitProduct,
      pictureModel,
      detailImage,
      detailSet
    }
  }
}
</script>

<style scoped lang="less">
::v-deep(.ant-form-item-label ){
  > label {
    font-weight: bold;
    font-size: 16px;
    color: #000000;
  }
}
</style>
