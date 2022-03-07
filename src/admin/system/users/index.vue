<template>
  <div style="display: flex;align-items: center">
    <div style="font-size: 14px;"> 用户名：</div>
    <h-input v-model:value="searchUser" placeholder="请输入用户名" width="300px" style="margin-right: 15px;"/>
    <a-button type="primary" @click="searchAdmin" style="margin-right: 15px;">
      <template #icon><SearchOutlined /></template>搜索</a-button>
    <a-button  @click="delSearch" style="margin-right: 15px;">
      <template #icon><SearchOutlined /></template>删除</a-button>
  </div>

<!--  //表格-->
  <div class="table-operations">
    <a-button @click="addAdminUser" type="primary">
      新增
    </a-button>
    <a-button @click="clearAdmin" danger type="primary" style="margin-left: 10px;">
      批量删除</a-button>
  </div>
  <div class="admin-table-select">
    当前表格已选择 <b>{{0}}</b> 项 <span class="admin-table-clear">清空</span>
  </div>
  <a-table :columns="columnsTable"  bordered :data-source="dataTable"  :row-selection="{  onChange: checkAll }">
    <template #status="{record}">
      <div>{{record.status}}</div>
    </template>
    <template #config="{record}">
          <a-button type="primary" style="margin-right: 10px">编辑</a-button>
          <a-button type="primary" danger @click="delAdmin(record)">删除</a-button>
    </template>
  </a-table>
</template>

<script>
import { UserOutlined, SearchOutlined } from '@ant-design/icons-vue';
import { getCurrentInstance, ref } from 'vue'
import HInput from '@/components/HInput.vue'
import {useCreateModel} from '@/hooks/useCreateModel.js'
import addUser from './components/addUser.vue'
import {  delAdminHttp, getAdminHttp } from '@/api/admin/specs.js'
const columnsTable =[
  {title:'用户名',dataIndex:'username'},
  {title:'邮箱',dataIndex:'email'},
  {title:'手机号',dataIndex:'iphone'},
  {title:'创建时间',dataIndex:'created_at'},
  {title:'状态',dataIndex:'status',slots:{ customRender: 'status'}},
  {title:'操作',slots:{ customRender: 'config'}},

]

export default {
  name: 'index',
  components:{
    HInput,
    UserOutlined,SearchOutlined},
  setup(){
    const internalInstance = getCurrentInstance()
    const app = internalInstance.appContext.config.globalProperties
    const searchUser = ref('')
    const dataTable = ref([])
    const checkAll = ref(false)
    const page = ref({
      pageSize:20,
      pageIndex:1,
      total:0
    })
    function searchAdmin(){
      console.log(searchUser.value)
    }
    function delSearch(){
      searchUser.value = ''
      // 获取所有
    }

    function addAdminUser(){
      const p = useCreateModel(addUser,{
        callback: addOk
      })
    }
    function addOk(){
      getAdminUserHttp()
      app.$message.success('添加成功')
    }
    function clearAdmin(){}

    async function getAdminUserHttp(){
     const rest =    await getAdminHttp({
          pageSize:page.value.pageSize,
          pageIndex:page.value.pageSize,
        })
      dataTable.value = rest.rows
      page.value.total = rest.count
    }
    getAdminUserHttp()


    function delAdmin(row){
      if(row.username === 'admin'){
        return  app.$message.warning('admin 账号不可删除')
      }
      app.$confirm('您确定要删除该账号吗','删除提醒',{
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      }).then(()=>{
        delAdminHttp({id:row.id}).then(()=>{
          app.$message.success('删除成功')
          getAdminUserHttp()
        })
      })
    }
    return {
      searchUser,
      searchAdmin,
      delSearch,
      columnsTable,
      dataTable,
      checkAll,
      addAdminUser,
      clearAdmin,
      delAdmin
    }
  }
}
</script>

<style scoped lang="less">

.table-operations{
  margin-top: 30px;
}

.admin-table-select{
  font-size: 14px;
  margin-top: 10px;
}
.admin-table-clear{
  color: #35b4ed;
  cursor: pointer;
}
</style>
