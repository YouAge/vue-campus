<template>
  <div class="table-operations">
    <el-button @click="visible=true" type="primary">新增</el-button>
  </div>
  <vxe-grid v-bind="gridOption">
    <template #img="{row}">
      <div>
        <a-image :width="100" style="height: 200px"  :src="row.picture" alt="" v-if="row.picture"/>
      </div>
    </template>
    <template #status="{row}">
      <div>{{row.status}}</div>
    </template>
    <template #config="{row}">
      <el-button type="primary" style="margin-right: 10px">编辑</el-button>
      <el-button type="danger" danger @click="deltag(row)">删除</el-button>
    </template>
  </vxe-grid>

  <!--  //新增属性-->
  <a-modal v-model:visible="visible" title="新增类型" @ok="addFun" >
    <el-form :model="tagForm" ref="tagFormRef">
      <el-form-item label="tag名">
        <el-input v-model="tagForm.name"></el-input>
      </el-form-item>
      <el-form-item label="图片">
        <el-input v-model="tagForm.picture" ></el-input>
      </el-form-item>
      <el-form-item label="是否首页展示">
        <el-switch
          v-model="tagForm.isHome"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-form-item>
    </el-form>

  </a-modal>
</template>

<script>
import { tagDel, tagGet, tagPost } from '@/api/admin/specs.js'

export default {
  name: 'tags',
  data(){
    return {

      visible:false,
      tagForm:{
        name:'',
        picture:'',
        isHome: false,
        status: true
      },
      gridOption:{
        border: true,
        align:null,
        columns:[
          { type: 'checkbox', width: 60 },
          {title:'tag名',field:'name'},
          {title:'图片',field:'picture',slots:{ default: 'img'}},
          {title:'是否首页',field:'isHome'},
          {title:'状态',field:'status',slots:{ default: 'status'}},
          {title:'操作',slots:{ default: 'config'}},
        ],
        data:[]
      }
    }
  },
  methods:{
    addFun(){
      if(!this.tagForm.name){
       return  this.$message.error('请填写tag名字')
      }
      tagPost(this.tagForm).then(item=>{
        console.log(this.$refs)
        this.$refs.tagFormRef.resetFields()
        this.$message.success('新增成功')
        this.visible = false
        this.getTagHttp()
      })
    },
   async getTagHttp(){
      const data = await tagGet()
      this.gridOption.data = data
    },
    async deltag(row){

      tagDel({id:row.id}).then(item=>{
        this.$message.success('删除成功')
        this.getTagHttp()
      })
    }

  },
  created () {
    this.getTagHttp()
  }
}
</script>

<style scoped>

</style>
