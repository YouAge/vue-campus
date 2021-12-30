<template>
  <div style="display: flex;align-items: center">
    <div style="font-size: 14px;"> 商品名称：</div>
    <h-input v-model:value="searchUser" placeholder="请输入用户名" width="300px" style="margin-right: 15px;"/>
    <a-button type="primary" @click="searchAdmin" style="margin-right: 15px;">
      <template #icon><SearchOutlined /></template>搜索</a-button>
    <a-button  @click="delSearch" style="margin-right: 15px;">
      <template #icon><SearchOutlined /></template>删除</a-button>
  </div>
  <div class="table-operations">
    <a-button @click="$router.push('/admin/product/add-prod-info')" type="primary">
      新增
    </a-button>
    <a-button @click="clearAdmin" danger type="primary" style="margin-left: 10px;">
      批量删除</a-button>
  </div>
  <div class="admin-table-select">
    当前表格已选择 <b>{{0}}</b> 项 <span class="admin-table-clear">清空</span>
  </div>
  <a-table :columns="columnsTable"  bordered :data-source="data"  :row-selection="{  onChange: checkAll }">
    <template #status="{record}">
      <div>{{record.status}}</div>
    </template>
    <template #picture="{record}">
      <div>{{record.picture}}</div>
    </template>
    <template #sku="{record}">
      <div></div>
<!--      <div>{{record.sku}}</div>-->
    </template>
    <template #config="{record}">
      <a-button type="primary" style="margin-right: 10px">编辑</a-button>
      <a-button type="primary" danger>删除</a-button>
    </template>
  </a-table>
</template>

<script>
import { ref } from 'vue'
import { useCreateModel } from '@/hooks/useCreateModel.js'
import addUser from '@/admin/system/users/components/addUser.vue'
import HInput from '@/components/HInput.vue'
import { SearchOutlined, UserOutlined } from '@ant-design/icons-vue'

const columnsTable =[
  {title:'商品名字',dataIndex:'name'},
  {title:'商品原价',dataIndex:'price'},
  {title:'商品折扣',dataIndex:'discount'},
  {title:'商品库存',dataIndex:'counts'},
  {title:'商品SKU',dataIndex:'sku',slots:{ customRender: 'sku'}},
  {title:'商品状态',dataIndex:'status',slots:{ customRender: 'status'}},
  {title:'商品图片',dataIndex:'picture',slots:{ customRender: 'picture'}},
  {title:'操作',slots:{ customRender: 'config'}},

]
const dataTable = [
  { key:'1',  name:"管理员",price:"500.00",discount:'0.5',counts:'2022',status:true },
  { key:'2',  name:"管理员",price:"456.12",discount:'0.8',counts:'2022',status:true }
]


export default {
  name: 'goods',
  components:{
    HInput,
    UserOutlined,SearchOutlined},
  setup(){
    const searchUser = ref('')
    const checkAll = ref(false)
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
      console.log('成功关闭')
    }
    function clearAdmin(){}

    return {
      searchUser,
      searchAdmin,
      delSearch,
      columnsTable,
      data:dataTable,
      checkAll,
      addAdminUser,
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
