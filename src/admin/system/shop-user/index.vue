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
  <vxe-grid v-bind="gridOptionsl">
    <template #status="{ row }">
      <el-tag
        class="mx-1"
        :type="row.status?'success':'danger'"
        effect="dark"
      >{{row.status?'正常':'失效'}}</el-tag>
    </template>
    <template #config="{row}">
            <el-button type="primary" style="margin-right: 10px">编辑</el-button>
            <el-button type="danger" danger @click="updateStatus(row)">{{row.status?'封号':'解封'}}</el-button>
    </template>

  </vxe-grid>
</template>

<script>
import { UserOutlined, SearchOutlined } from '@ant-design/icons-vue';
import { reactive, ref } from 'vue'
import HInput from '@/components/HInput.vue'
import {getShopUserPage} from "./useHttp.js";
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
    const gridOptionsl = reactive({
      border: true,
      align:null,
      columns:[
        { type: 'checkbox', width: 60 },
        {title:'用户名',field:'username'},
        {title:'邮箱',field:'email'},
        {title:'手机号',field:'iphone'},
        {title:'创建时间',field:'time'},
        {title:'状态',field:'status',slots:{ default: 'status'}},
        {title:'操作',slots:{ default: 'config'}},
      ],
      data:[]
    })

    async function currentPage(item={},pageIndex=page.value.pageIndex,pageSize=page.value.pageSize){
     const {rows ,count} =  await getShopUserPage({...item,pageIndex,pageSize})

      gridOptionsl.data = rows
      page.value.total = count
    }
    currentPage()
    function searchUserFun(){
      console.log(searchUser.value)
    }
    function updateStatus(row){

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
      dataTable,
      checkAll,
      clearAdmin,
      gridOptionsl,
      updateStatus
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
