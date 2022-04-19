<template>
  <home-overview />
  <div class="user-info">
    <div class="add">
      <el-button @click="addressStatus =true">新增收获地址</el-button>
    </div>

    <div style="padding: 30px;background-color: #FFFFFF;color: #000000;font-size: 16px;" v-if="addressStatus">
      <div class="user-title">
        <span>编写收获地址</span>
      </div>
      <el-form label-width="110px" :rules="rules" ref="addRefModel" :model="addForm">
        <el-form-item label="收件人姓名" prop="name">
          <el-input v-model="addForm.name" placeholder="输入收件人姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="iPhone">
          <el-input v-model="addForm.iPhone" placeholder="收件人联系方式"></el-input>
        </el-form-item>
        <el-form-item label="所在地：" name="fullLocation">
          <HCity class="ant-form-item-control-input-content"
                 :fullLocation="addForm.fullLocation" @change="changeCity" placeholder="请选择所在地区"/>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input
            v-model="addForm.address"
            :rows="2"
            type="textarea"
            placeholder="详细地址"
          />        </el-form-item>
        <el-form-item label="邮政编码">
          <el-input v-model="addForm.postalCode" placeholder="邮政编码"></el-input>
        </el-form-item>
      <el-form-item>
        <div style="display: flex;">
          <el-button @click="submitAdd">保存</el-button>
          <el-button @click="addressStatus =false">取消</el-button>
        </div>
      </el-form-item>
      </el-form>
    </div>


    <div>

    </div>
    <div class="radio-item"  v-for="item in address" :key="item.id">
      <div class="radio-style" :value="item.id">
        {{item.name}} {{item.fullLocation}} {{item.address}} +86-{{item.iPhone}}
        <Tag color="red" v-if="item.isDefault"> 默认地址 </Tag>
      </div>
      <div class="radio-edit">
        <span>设为默认</span>
        <span>编辑</span>
        <span @click="dealAdd(item)">删除</span>
      </div>
    </div>

  </div>

</template>

<script>
import HomeOverview from '@/views/userCenter/home/components/home-overview.vue'
import HCity from '@/components/HCity.vue'
import { message, Tag } from 'ant-design-vue'
import { addAddressPost, delAddressPatch, showAddressGet } from '@/api/shop'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'address',
  components: { HCity, HomeOverview,Tag },
  data(){
    return {
      addressStatus:false,
      addForm:{
        name:'',
        iPhone:'',
        fullLocation:'',
        address:'',
        postalCode:''
      },
      showAddress:[
        {
          name:'',
          iPhone:'',
          fullLocation:'',
          address:'',
          postalCode:''
        },
      ],
      rules: {
        name: [{ required: true, message: '收件人名不能为空' }],
        iPhone: { required: true, message: '手机号不能为空' },
      }
    }
  },
  computed:{
    ...mapGetters([
      'userInfo',
      'address'
    ])
  },
  created () {
    this.getShowAddress()
  },
  methods:{
    getShowAddress(){
      showAddressGet().then(item=>{
        this.$store.commit('home/setAddress',item)
      })
},
    changeCity(value){
      this.addForm.fullLocation = value.fullLocation
    },
    submitAdd(){
      console.log(this.addForm,  this.$refs.addRefModel)
      this.$refs.addRefModel.validate((item,object)=> {
        console.log(object)
        addAddressPost(this.addForm).then((item) => {
          this.$refs.addRefModel.resetFields()
          this.$message.success('新增地址成功')
          this.addressStatus = false
          this.getShowAddress()
        })
      })
    },

    dealAdd(item){
      console.log(item)
      delAddressPatch({ids:[item.id]}).then(()=>{
        this.$message.success('地址删除成功')
        this.getShowAddress()
      })
    }
  }
}
</script>

<style scoped lang="less">
.user-info{
  margin-top: 20px;
  padding: 20px;
}
.user-title{
  background-color: #F9F9F9;
  padding: 10px;
  margin-bottom: 20px;
  span{
    color: #FF4466;
    font-size: 16px;
    font-weight: bold;
    line-height: 16px;
  }
}
.addr_section{
  margin-top: 10px;
  padding: 13px 17px;
  border: 1px solid #efefef;
  background: #fafafa;
  ul{
    display: flex;
  }
}

.radio-item{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #efefef;
  background: #fff;
  margin-top: 10px;
  padding: 13px 17px;
  &:hover{
    background: #F4F4F4;
  }
  &:hover .radio-edit{
    opacity: 1;


  }
  .radio-style{
    display: flex;
    align-items: center;
    height: 30px;
    line-height: 30px;
    &:hover{
      //background: #F4F4F4;
    }
    &:hover .radio-edit{
      opacity: 1;

    }
  }
  .radio-edit{
    opacity: 1;
    cursor: pointer;
    span{
      margin-right: 20px;
      color: #578894;
      cursor: pointer;
      &:hover{
        color: #27BA9B;
      }
    }
  }
}
</style>
