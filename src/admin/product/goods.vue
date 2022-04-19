<template>
  <div style="display: flex;align-items: center;">
    <div style="font-size: 14px;"> 商品名称：</div>
    <h-input v-model:value="searchUser" placeholder="搜索商品名称" width="300px" style="margin-right: 15px;"/>
    <a-button type="primary" @click="searchAdmin" style="margin-right: 15px;">
      <template #icon><SearchOutlined /></template>搜索</a-button>
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

<!--  // 商品信息表-->
  <vxe-grid :data="dataTable" :columns="columnsTable"
            showHeaderOverflow sync-resize resizable
            border :max-height="650">
        <template #status="{row}">
          <el-switch @change="updateGoodsStatus(row)"
            v-model="row.status"
            class="ml-2"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </template>

    <template #picture="{row}">
      <div>
        <a-image  :width="150" :src="row.image" v-if="row.image"/>
      </div>

    </template>
    <template #skus="{row}">
      <a-button @click="showSkuFun(row.skus,row.sku)">查看</a-button>
    </template>
    <template #config="{row}">
      <div style="display: flex;">
        <vxe-button type="primary" size="mini" status="primary"  @click="showEdit(row)">编辑</vxe-button>
        <vxe-button type="primary" size="mini" status="danger" danger @click="delGoods(row)">删除</vxe-button>
      </div>

    </template>

    <template #pager>
      <vxe-pager
        :layouts="['Sizes', 'PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'FullJump', 'Total']"
        :current-page.sync="page.pageIndex"
        :page-size.sync="page.pageSize"
        :total="page.total"
        @page-change="currentPage">
      </vxe-pager>
    </template>
  </vxe-grid>


  <a-modal v-model:visible="showSku.visible" title="查看sku" keyboard :footer="null" :bodyStyle="{minHeight: '400px'}">
    <goods-sku :shop-data-sku="showSku.shopDataSku"/>
  </a-modal>

  <a-modal v-model:visible="editGoodstatus" title="修改商品信息" width="40%" okText="确定"
           @ok="editFun" @cancel="cancelFun" cancelText="取消">
    <el-form :model="goodsForm" ref="goodsFormRef">
      <el-form-item label="商品名称">
        <el-input v-model="goodsForm.name"></el-input>
      </el-form-item>
      <el-form-item label='商品图片'>
        <el-input v-model="goodImgs[key]" v-for="(item,key) in goodImgs" :key="key" @change="setGoodsImages"></el-input>
      </el-form-item>
      <el-form-item label="商品分类">
        <a-cascader v-model:value="goodsForm.cateId" :fieldNames="{ label: 'name', value: 'id', children: 'children' }"
                    :options="cateOption" placeholder="选择商品类型" />
      </el-form-item>
      <el-form-item label="商品标签">
        <a-select
          v-model:value="goodsForm.tags"
          mode="multiple"
          placeholder="请选择 标签，可多选"
          style="width: 100%"
        >
          <a-select-option :value="item.id" v-for="item in tagOption" :key="item.id">{{item.name}}</a-select-option>
        </a-select>
      </el-form-item>
      <el-form-item label="商品描述" name="desc">
        <a-textarea
          v-model:value="goodsForm.desc"
          placeholder="输入商品介绍"
          :auto-size="{ minRows: 2, maxRows: 5 }"
        />
      </el-form-item>
    </el-form>
  </a-modal>

</template>

<script>
import { getCurrentInstance, reactive, ref } from 'vue'
import { useCreateModel } from '@/hooks/useCreateModel.js'
import addUser from '@/admin/system/users/components/addUser.vue'
import HInput from '@/components/HInput.vue'
import { SearchOutlined, UserOutlined } from '@ant-design/icons-vue'
import { delProduct, productGet, productPut } from '@/api/admin/goods.js'
import GoodsSku from './components/goodsSku.vue'
import { cateGet, tagGet } from '@/api/admin/specs.js'

const columnsTable =[
  {type:'checkbox'},
  {title:'商品名称',field:'name',},
  {title:'商品原价',field:'price'},
  {title:'商品折扣',field:'discount'},
  {title:'商品库存',field:'inventory'},
  {title:'商品SKU',field:'skus',slots:{ default: 'skus'}},
  {title:'商品状态',field:'status',slots:{ default: 'status'}},
  {title:'商品图片',field:'picture',slots:{ default: 'picture'}},
  {title:'操作',slots:{ default: 'config'}},

]



export default {
  name: 'goods',
  components:{
    GoodsSku,
    HInput,
    UserOutlined,SearchOutlined},
  setup(){
    const internalInstance = getCurrentInstance()
    const app = internalInstance.appContext.config.globalProperties
    const searchUser = ref('')
    const checkAll = ref(false)
    const goodImgs = ref({
      on0:'',
      on1:'',
      on2:'',
      on3:''
    })
    const dataTable = ref([])
    const editGoodstatus = ref(false)
    const goodsFormRef = ref(null)
    const cateOption = ref([]) //分类
    const tagOption = ref([]) //标签
    const goodsForm = reactive({
      name:'',
      tags:[],
      desc:'',
      cateId:[],
    })
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
    function currentPage({currentPage,pageSize}){
      page.value.pageSize = pageSize
      page.value.pageIndex = currentPage
      getShopAllHttp({},currentPage,pageSize)
    }

    function searchAdmin(){
      console.log(searchUser.value)
    }
    function delSearch(){
      searchUser.value = ''
      // 获取所有
    }
    async function getCateDateAll(){
      cateOption.value = await cateGet()
      tagOption.value = await tagGet()
    }
    getCateDateAll()
    function getShopAllHttp(item={},pageIndex=page.value.pageIndex,pageSize=page.value.pageSize){
       productGet({pageIndex,pageSize,...item}).then(data=>{
         console.log('-----',data)
         dataTable.value = data.rows
         page.value.total = data.count
       })
    }
    getShopAllHttp()


    function clearAdmin(){}


    function showSkuFun(skus){
      showSku.value.visible = true
      showSku.value.shopDataSku = skus
    }
    function updateGoodsStatus(row){
      app.$confirm(`您确定要${row.status?'上架':"下架"}该商品吗`,`${row.status?'上架':"下架"}提醒`,{
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      }).then(()=>{
        productPut({status:row.status,type:1,id:row.id}).then(()=>{
          app.$message.success(
            '更新成功'
          )
        })

      }).catch(()=>{
        row.status = !row.status
      })
    }

    async function delGoods(row){
      app.$confirm('您确定要删除该商品吗','删除提醒',{
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      }).then(()=>{
        delProduct({goodsIds:[row.id]}).then(()=>{
          app.$message.success(
            '删除成功'
          )
          getShopAllHttp()
        })

      })
    }
    function setGoodsImages(value){
      console.log('只改变',value)
      goodsForm.picture = []
      for (let i=0;i<4;i++){
        console.log(goodImgs.value['on'+i])
        if(goodImgs.value['on'+i]){
          goodsForm.picture.push(goodImgs.value['on'+i])
        }
      }
    }
    function showEdit(row){
      console.log(row)
      goodsForm.id = row.id
      editGoodstatus.value = true
      goodsForm.name = row.name
      goodsForm.cateId =row.cate.superId ===0?[row.cate.id]: [row.cate.superId ,row.cate.id]
      goodsForm.tags = row.tags.map(f=>f.id)
      goodsForm.desc = row.desc
      goodsForm.picture = row.picture
      row.picture.forEach((item,index)=>{
        goodImgs.value['on'+index] = item
      })
    }


    function editFun(){
      productPut({...goodsForm,type:2}).then(()=>{
        goodsFormRef.value.resetFields()
        editGoodstatus.value = false
        app.$message.success('商品更新成功')
        getShopAllHttp()
        // console.log(goodsFormRef.value)
      })
    }
    function cancelFun(){}

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
      clearAdmin,
      updateGoodsStatus,
      editGoodstatus,
      goodsForm,
      cateOption,
      tagOption,
      goodImgs,
      delGoods,
      setGoodsImages,
      editFun,
      cancelFun,
      showEdit,
      goodsFormRef
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
