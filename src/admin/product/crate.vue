<template>
<!--  <div style="display: flex;align-items: center">-->
<!--    <div style="font-size: 14px;"> 商品名称：</div>-->
<!--    <h-input v-model:value="searchSpecs" placeholder="请输入用户名" width="300px" style="margin-right: 15px;"/>-->
<!--    <a-button type="primary" @click="searchAdmin" style="margin-right: 15px;">-->
<!--      <template #icon><SearchOutlined /></template>搜索</a-button>-->
<!--    <a-button  @click="delSearch" style="margin-right: 15px;" danger>-->
<!--      <template #icon><SearchOutlined /></template>删除</a-button>-->
<!--  </div>-->
  <div class="table-operations">
    <a-button @click="visible=true" type="primary">
      新增
    </a-button>
  </div>
  <a-table :columns="columnsTable"  :data-source="dateTable" bordered>

    <template #picture="{record}">
      <div>
        <a-image :width="50" :src="record.picture" alt=""/>
      </div>
    </template>
    <template #value="{record}">
      <div>
        <a-tag color="#108ee9" v-for="item in record.value" :key="item">{{item.name}}</a-tag>
      </div>
    </template>
    <template #status="{record}">
      <div>
        <a-tag :color=" record.status?'#108ee9':'#f50'" >{{record.status?'使用':'停用'}}</a-tag>
      </div>
    </template>
    <template #config="{record}">
      <a-button type="primary" style="margin-right: 10px" @click="editCate(record)">编辑</a-button>
      <a-button type="primary" danger @click="delCate(record)">删除</a-button>
    </template>
  </a-table>


  <!--  //新增属性-->
  <a-modal v-model:visible="visible" title="新增类型" @ok="addFun" @cancel="restFun">
    <a-form ref="formRef" :model="formState" :rules="rule" :label-col="{span:4}" :wrapper-col="{span:14}">
      <a-form-item label="商品图片" >
<!--        <h-upload :img-number="1" @success="(item)=>{formState.picture = item.length >0?item[0]:''}"/>-->
        <el-input v-model="formState.picture" placeholder="图片地址" ></el-input>
      </a-form-item>
      <a-form-item label="上级分类：" name="superId">
        <a-cascader v-model:value="formState.superId" :fieldNames="{ label: 'name', value: 'id', children: 'to' }"
                    :options="options" placeholder="选择父类" />
      </a-form-item>
      <a-form-item label="Home标签" name="tagId">
        <a-cascader v-model:value="formState.tagId" :fieldNames="{ label: 'name', value: 'id', children: 'to' }"
                    :options="tagOptions" placeholder="选择父类" />
      </a-form-item>
      <a-form-item label="类型名：" name="name">
        <a-input v-model:value="formState.name" placeholder="输入类型名"/>
      </a-form-item>
      <a-form-item label="商品描述">
        <a-textarea v-model:value="formState.desc"
          placeholder="输入商品介绍"
          :auto-size="{ minRows: 2, maxRows: 5 }"
        />
      </a-form-item>
      <a-form-item label="排序：" >
        <a-input v-model:value="formState.layer" placeholder="输入排序" type="number"/>
      </a-form-item>
      <a-form-item label="状态" :wrapper-col="{span:10}">
        <a-radio-group v-model:value="formState.status">
          <a-radio :value="true">使用</a-radio>
          <a-radio :value="false">不使用</a-radio>
        </a-radio-group>
      </a-form-item>
    </a-form>

  </a-modal>
</template>

<script>
import HInput from '@/components/HInput.vue'
import { SearchOutlined, UserOutlined, MinusCircleOutlined, PlusOutlined  } from '@ant-design/icons-vue'
import { reactive, toRaw, ref, getCurrentInstance } from 'vue'
import { hierarchy } from '@/utils'
import HUpload from '@/components/HUpload.vue'
import { cateDel, cateGet, catePost, catePut, tagGet } from '@/api/admin/specs.js'
const columnsTable = [
  {title:'属性名',dataIndex:'name'},
  {title:'图片', dataIndex: 'picture',slots:{ customRender: 'picture'}},
  {title: '描述',dataIndex: 'desc'},
  {title: '标签',dataIndex: 'tagId'},
  {title: '排序',dataIndex: 'layer'},
  {title:'状态',dataIndex:'status',slots:{ customRender: 'status'}},
  {title:'操作',slots:{ customRender: 'config'}},
]
const op = {id:0,name:'无关联'}
export default {
  name: 'crate',
  components:{
    HUpload,
    HInput,
    UserOutlined,SearchOutlined,MinusCircleOutlined, PlusOutlined },
  setup(){
    const internalInstance = getCurrentInstance()
    const app = internalInstance.appContext.config.globalProperties
    console.log('app',app)
    const visible = ref(false)
    const formRef = ref()
    const editId = ref(null)
    const dateTable = ref([])
    const options =ref([op])
    const tagOptions = ref([op])
    let formState = reactive({
      name:'',
      superId: [0],
      picture:'',
      desc:'',
      layer:0,
      tagId:[0],
      status:true,
    })

    async function getDataAll(){
      const data = await cateGet()
      options.value = [op,...data]
      dateTable.value = data
      console.log(dateTable.value)
    }
    async function getTags(){
      const data = await tagGet()
      const g = data.filter(t=>t.isHome)
      tagOptions.value = [op,...g]
      console.log('tag',data)
    }

    async function editCate(row){
      console.log(row)
      formState.picture = row.picture
      formState.desc = row.desc
      formState.superId = [row.superId]
      formState.tagId = [row.tagId?row.tagId:0]
      formState.layer = row.layer
      formState.name = row.name
      formState.status = row.status
      visible.value = true
      editId.value = row.id
    }
    async function delCate(row){
      app.$confirm('您确定要删除它吗','删除提醒',{
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      }).then(()=>{
        cateDel({id:row.id}).then(()=>{
          app.$message.success('删除成功')
          getDataAll()
          getTags()
        })
      })
    }
    getDataAll()
    getTags()

    //字段验证
    const rule = {
      name:{required:true,message:'请输入属性名'},
      picture:{required:true,message:'图片不能为空'},
      superId:{required:true,message:'不能为空'},
    }


    //新增
    function addFun(){
      formRef.value.validate().then(async ()=>{
        console.log(toRaw( formState))
        // visible.value =false
        const data = {...toRaw( formState),tagId:formState.tagId[0],superId :formState.superId[0]}
        if(!editId.value){
          catePost(data).then(()=>{
            getDataAll()
            visible.value =false
            formRef.value.resetFields()
          })
        }else {
          catePut({...data,id:editId.value}).then(()=>{
            getDataAll()
            visible.value =false
            formRef.value.resetFields()
          })
        }

      })

      //
    }
    function restFun(){
      editId.value = null
    }

    return {
      columnsTable,
      formState,
      visible,
      formRef,
      rule,
      options,
      tagOptions,
      dateTable,
      addFun,
      delCate,
      editCate,
      restFun
    }
  }
}
</script>

<style scoped>

</style>
