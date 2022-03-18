<template>
  <HomeOverview />
  <div class="user-info">
    <div class="user-title">
      <span>基本信息</span>
    </div>

    <div style="padding: 30px;background-color: #FFFFFF;color: #000000;font-size: 16px;">
      <el-form v-model="userInfo" label-width="100px">
        <el-form-item label="用户名">
          <el-input v-model="userInfo.username"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="userInfo.sex" class="m-2" placeholder="请选择性别" style="width: 100%">
            <el-option label="保密" value="保密"></el-option>
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="userInfo.iphone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="userInfo.email"></el-input>
        </el-form-item>

        <el-form-item label="个人简介">
          <el-input
            v-model="userInfo.desc"
            :rows="2"
            type="textarea"
            placeholder="Please input"
          />
        </el-form-item>
      </el-form>

      <div style="text-align: right;">
        <el-button style="width: 200px" @click="updateInfo">保存基本信息</el-button>
      </div>
    </div>

    <div class="user-title">
      <span>{{userInfo.password?'修改密码':'设置登入密码'}}</span>
    </div>
    <div style="padding: 30px;background-color: #FFFFFF;color: #000000;font-size: 16px;">
      <el-form label-width="100px" :rules="rules" :model="password" ref="pwdRef">
        <template v-if="userInfo.password">
          <el-form-item label="旧密码" prop="pwd1">
            <el-input v-model="password.pwd1" show-password type="password" ></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="pwd2">
            <el-input v-model="password.pwd2" show-password type="password" ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="pwd3">
            <el-input show-password type="password" v-model="password.pwd3"></el-input>
          </el-form-item>
        </template>
        <template v-else>
          <el-form-item label="新密码" prop="pwd2">
            <el-input v-model="password.pwd2" show-password type="password" ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="pwd3">
            <el-input show-password type="password" v-model="password.pwd3"></el-input>
          </el-form-item>
        </template>
        <div style="text-align: right;">
          <el-button style="width: 200px" @click="updPassword">保存密码</el-button>
        </div>
      </el-form>
    </div>
  </div>

</template>

<script>
import HomeOverview from '@/views/userCenter/home/components/home-overview.vue'
import { mapGetters } from 'vuex'
import {ElMessage} from 'element-plus'
import { updateUserInfo } from '@/api/shop'
export default {
  name: 'index',
  components: { HomeOverview },
  computed:{
    ...mapGetters([
      'userInfo'
    ])
  },
  data(){
    return {
      password:{
        pwd1:'',
        pwd2:"",
        pwd3:""
      },
      rules:{
        pwd1:[{ required: true, message: '就密码必须存在', trigger: 'blur'}],
        pwd2:[{ required: true, message: '必须输入密码', trigger: 'blur'}],
        pwd3:[{ required: true, message: '必须输入密码', trigger: 'blur'}]
      }
    }
  },
  methods:{
    updPassword(){
      this.$refs['pwdRef'].validate((item)=>{
      if(item){
        if(this.password.pwd2 === this.password.pwd3){
         updateUserInfo({type:1,password:this.password.pwd3}).then(()=>{
           ElMessage.success('密码修改成功')
           this.$refs['pwdRef'].resetFields()
         })
        }else {
          this.password.pwd3 =''
          ElMessage.error('2次密码不一样')
        }
      }
      })
    } ,
    updateInfo(){
      updateUserInfo({type:2,...this.userInfo}).then(()=>{
        ElMessage.success('用户信息修改成功')
        // this.$refs['pwdRef'].resetField()
      })
    }
  },

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
  margin-top: 15px;
  span{
    color: #FF4466;
    font-size: 16px;
    font-weight: bold;
    line-height: 16px;
  }
}
</style>
