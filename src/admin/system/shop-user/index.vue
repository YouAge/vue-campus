<template>
  <div style="display: flex;align-items: center">
    <div style="font-size: 14px;"> 用户名：</div>
    <h-input v-model:value="searchUser" placeholder="请输入用户名" width="300px" style="margin-right: 15px;"/>
    <a-button type="primary" @click="searchUserFun" style="margin-right: 15px;">
      <template #icon><SearchOutlined /></template>搜索</a-button>
    <a-button  @click="delSearch" style="margin-right: 15px;">
      <template #icon><SearchOutlined /></template>删除</a-button>
  </div>

  <!--  //表格-->
  <div class="table-operations">
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
      <a-button type="primary" danger>删除</a-button>
    </template>
  </a-table>
</template>

<script>
import { UserOutlined, SearchOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue'
import HInput from '@/components/HInput.vue'
import {useCreateModel} from '@/hooks/useCreateModel.js'
import {getShopUserPage} from "./useHttp.js";
const columnsTable =[
  {title:'用户名',dataIndex:'username'},
  {title:'邮箱',dataIndex:'email'},
  {title:'手机号',dataIndex:'iphone'},
  {title:'创建时间',dataIndex:'time'},
  {title:'状态',dataIndex:'status',slots:{ customRender: 'status'}},
  {title:'操作',slots:{ customRender: 'config'}},

]
const dataTable = [
  { key:'1',  username:"管理员",email:"12314@dsf.com",iphone:'1357897823',time:'2022-01-01 12:12:12',status:true },
  { key:'2',  username:"管理员",email:"12314@dsf.com",iphone:'1357897823',time:'2022-01-01 12:12:12',status:true }
]

export default {
  name: 'index',
  components:{
    HInput,
    UserOutlined,SearchOutlined},
  setup(){
    const searchUser = ref('')
    const checkAll = ref(false)
    const dataTable = ref([])
    const page = ref({
      pageSize:20,
      pageIndex:1,
      total:0
    })

    async function currentPage(item={},pageIndex=page.value.pageIndex,pageSize=page.value.pageSize){
     const {rows ,count} =  await getShopUserPage({...item,pageIndex,pageSize})

      dataTable.value = rows
      page.value.total = count
    }
    currentPage()
    function searchUserFun(){
      console.log(searchUser.value)
    }

    function delSearch(){
      searchUser.value = ''
      // 获取所有
    }

    //请求用户信息
    function getShopUserAll(){

    }


    function addOk(){
      console.log('成功关闭')
    }
    function clearAdmin(){}

    return {
      searchUser,
      searchUserFun,
      delSearch,
      columnsTable,
      dataTable,
      checkAll,
      clearAdmin
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
