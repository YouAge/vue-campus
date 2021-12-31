<template>
  <div style="display: flex;align-items: center">
    <div style="font-size: 14px;"> 商品名称：</div>
    <h-input v-model:value="searchSpecs" placeholder="请输入用户名" width="300px" style="margin-right: 15px;"/>
    <a-button type="primary" @click="searchAdmin" style="margin-right: 15px;">
      <template #icon><SearchOutlined /></template>搜索</a-button>
    <a-button  @click="delSearch" style="margin-right: 15px;" danger>
      <template #icon><SearchOutlined /></template>删除</a-button>
  </div>
  <div class="table-operations">
    <a-button @click="visible=true" type="primary">
      新增
    </a-button>
  </div>
  <a-table :columns="specsTable"  :data-source="specsDateTable" bordered>
    <template #value="{record}">
      <div>
        <a-tag color="#108ee9" v-for="item in record.value" :key="item">{{item.name}}</a-tag>
      </div>
    </template>
    <template #config="{record}">
      <a-button type="primary" style="margin-right: 10px">编辑</a-button>
      <a-button type="primary" danger>删除</a-button>
    </template>
  </a-table>


<!--  //新增属性-->
  <a-modal v-model:visible="visible" @cancel="()=>{
     visible =false
    formRef.resetFields()
  }" title="新增属性" @ok="addSpecsFun" >
    <a-form ref="formRef" :model="formState" :rules="rule" :label-col="{span:4}" :wrapper-col="{span:14}">
      <a-form-item label="属性名：" name="name">
        <a-input
          v-model:value="formState.name"
          placeholder="输入属性名"
          style="width: 60%; margin-right: 8px"
        />
      </a-form-item>
      <a-form-item label="属性值：">
        <div  v-for="(domain, index) in formState.value">
          <a-input v-model:value="domain.value" placeholder="输入属性值" style="width: 60%; margin: 8px  0"/>
          <MinusCircleOutlined v-if="formState.value.length > 1" class="dynamic-delete-button" :disabled="formState.value.length === 1"
            @click="removeSpecsValue(domain)"
          />
        </div>
        <a-button type="dashed" style="width: 60%" @click="addDomain">
          <PlusOutlined />
          新增
        </a-button>
      </a-form-item>
    </a-form>

  </a-modal>
</template>

<script>
import HInput from '@/components/HInput.vue'
import { SearchOutlined, UserOutlined, MinusCircleOutlined, PlusOutlined  } from '@ant-design/icons-vue'
import { reactive, toRaw,ref } from 'vue'
import { specsGet, specsPost } from '@/api/admin/specs.js'
import { hierarchy } from '@/utils'
const specsTable = [
  {title:'属性名',dataIndex:'name'},
  {title:'属性值',dataIndex:'value',slots:{ customRender: 'value'}},
  {title:'操作',slots:{ customRender: 'config'}},
]
export default {
  name: 'specs',
  components:{
    HInput,
    UserOutlined,SearchOutlined,MinusCircleOutlined, PlusOutlined },
  setup(){
    const visible = ref(false)
    const formRef = ref()
    const specsDateTable = ref([])
    const searchSpecs = ref('')
    const formState = reactive({
      name:'',
      value:[]
    })

   async function getSpecsAll(){
      const data = await specsGet()
     console.log(data)
     // specsDateTable.value = hierarchy(data,'value')
     console.log(data)
     specsDateTable.value = data
   }
    getSpecsAll()

    //字段验证
    const rule = {
      name:{required:true,message:'请输入属性名'},
      value:{required: true,message: '请输入属性值'}
    }

    function searchAdmin(){
      console.log(searchSpecs.value)
    }
    function delSearch(){
      searchSpecs.value = ''
      // 获取所有
      getSpecsAll()
    }

    //新增
    function addSpecsFun(){
      formRef.value.validate().then(async ()=>{
        let t =[]
        toRaw(formState).value.forEach(item=>{
          if(item.value){
            t.push(item.value)
          }
        })
       const data = {name:formState.name,value:t}
        // visible.value =false
        await specsPost(data).then(()=>{
          getSpecsAll()
          visible.value =false
          formRef.value.resetFields()
        })

      })

      //
    }

    function removeSpecsValue(item){
      let index = formState.value.indexOf(item);
      if (index !== -1) {
        formState.value.splice(index, 1);
      }
    }
    function addDomain(){
      for (let item of formState.value){
        if(item && item.value===''){
          return false
        }
      }
      formState.value.push({
        value: '',
        key: Date.now(),
      })
    }

    return {
      addSpecsFun,
      searchSpecs,
      searchAdmin,
      delSearch,
      specsTable,
      specsDateTable,
      formState,
      visible,
      removeSpecsValue,
      addDomain,
      formRef,
      rule,
    }
  }
}
</script>

<style scoped>

</style>
