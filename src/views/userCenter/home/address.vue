<template>
  <home-overview />
  <div class="user-info">
    <div class="add">
      <el-button @click="addressStatus =true">新增收获地址</el-button>
    </div>

    <div style="padding: 30px;" v-if="addressStatus">
      <div class="user-title">
        <span>编写收获地址</span>
      </div>
      <el-form label-width="110px">
        <el-form-item label="收件人姓名">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="addForm.iphone"></el-input>
        </el-form-item>
        <el-form-item label="所在地：" name="fullLocation">
          <HCity class="ant-form-item-control-input-content" :fullLocation="addForm.fullLocation" @change="changeCity" placeholder="请选择所在地区"/>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input
            v-model="addForm.address"
            :rows="2"
            type="textarea"
            placeholder="详细地址"
          />        </el-form-item>
        <el-form-item label="邮政编码">
          <el-input v-model="addForm.postalCode"></el-input>
        </el-form-item>
      <el-form-item>
        <div style="display: flex;">
          <el-button>保存</el-button>
          <el-button @click="addressStatus =false">取消</el-button>
        </div>


      </el-form-item>
      </el-form>
    </div>


    <div>

    </div>
    <div class="radio-item"  v-for="item in showAddress" :key="item.id">
      <div class="radio-style" :value="item.id">
        {{item.name}} {{item.fullLocation}} {{item.address}} +86-{{item.iPhone}}
        <Tag color="red" v-if="item.isDefault"> 默认地址 </Tag>
      </div>
      <div class="radio-edit">
        <span>设为默认</span>
        <span>编辑</span>
        <span>删除</span>
      </div>
    </div>

  </div>

</template>

<script>
import HomeOverview from '@/views/userCenter/home/components/home-overview.vue'
import HCity from '@/components/HCity.vue'
import {Tag} from 'ant-design-vue'
export default {
  name: 'address',
  components: { HCity, HomeOverview,Tag },
  data(){
    return {
      addressStatus:false,
      addForm:{
        name:'小明',
        iPhone:'15607191234',
        fullLocation:'',
        address:'成都新城',
        postalCode:''
      },
      showAddress:[
        {
          name:'小明',
          iPhone:'15607191234',
          fullLocation:'',
          address:'成都新城',
          postalCode:''
        },
      ]
    }
  },
  methods:{
    changeCity(value){
      this.addForm.fullLocation = value.fullLocation
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
  background: #fafafa;
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
