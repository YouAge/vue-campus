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
  <a-table :columns="columnsTable"
           :pagination="{current:page.pageIndex,pageSize:page.pageSize,total:page.total,onChange:currentPage}"
           bordered :data-source="dataTable"  :row-selection="{  onChange: checkAll }">
    <template #status="{record}">
      <div>{{record.status}}</div>
    </template>
    <template #picture="{record}">
      <a-image  :width="200" :src="record.picture.length>0 && record.picture[0]"/>
    </template>
    <template #skus="{record}">
        <a-button @click="showSkuFun(record.skus,record.sku)">查看</a-button>
    </template>
    <template #config="{record}">
      <a-button type="primary" style="margin-right: 10px">编辑</a-button>
      <a-button type="primary" danger>删除</a-button>
    </template>
  </a-table>


  <a-modal v-model:visible="showSku.visible" title="查看sku" keyboard :footer="null" :bodyStyle="{minHeight: '400px'}">
    <goods-sku :shop-data-sku="showSku.shopDataSku"/>
  </a-modal>
</template>

<script>
import { ref } from 'vue'
import { useCreateModel } from '@/hooks/useCreateModel.js'
import addUser from '@/admin/system/users/components/addUser.vue'
import HInput from '@/components/HInput.vue'
import { SearchOutlined, UserOutlined } from '@ant-design/icons-vue'
import { productGet } from '@/api/admin/goods.js'
import GoodsSku from './components/goodsSku.vue'

const columnsTable =[
  {title:'商品名字',dataIndex:'name'},
  {title:'商品原价',dataIndex:'price'},
  {title:'商品折扣',dataIndex:'discount'},
  {title:'商品库存',dataIndex:'inventory'},
  {title:'商品SKU',dataIndex:'skus',slots:{ customRender: 'skus'}},
  {title:'商品状态',dataIndex:'status',slots:{ customRender: 'status'}},
  {title:'商品图片',dataIndex:'picture',slots:{ customRender: 'picture'}},
  {title:'操作',slots:{ customRender: 'config'}},

]



export default {
  name: 'goods',
  components:{
    GoodsSku,
    HInput,
    UserOutlined,SearchOutlined},
  setup(){
    const searchUser = ref('')
    const checkAll = ref(false)
    const dataTable = ref([])
    const showSku = ref({
      visible:false,
      specsDateTable:[],
      shopDataSku:[]
    })
    const page = ref({
      pageSize:20,
      pageIndex:1,
      total:0
    })
    function currentPage(pageIndex,pageSize){
      getShopAllHttp({},pageIndex,pageSize)
    }

    function searchAdmin(){
      console.log(searchUser.value)
    }
    function delSearch(){
      searchUser.value = ''
      // 获取所有
    }

    function getShopAllHttp(item={},pageIndex=page.value.pageIndex,pageSize=page.value.pageSize){
       productGet({pageIndex,pageSize,...item}).then(data=>{
         dataTable.value = data.rows
         page.value.total = data.total
       })
    }
    getShopAllHttp()


    function clearAdmin(){}


    function showSkuFun(skus){
      showSku.value.visible = true
      showSku.value.shopDataSku = skus
    }

    return {
      page,
      currentPage,
      searchUser,
      searchAdmin,
      delSearch,
      showSku,
      showSkuFun,
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
