<template>
  <HomeOverview />
  <div class="user-info">
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
import { updateUserInfo } from '@/api/shop'
import { ElMessage } from 'element-plus'
import { mapGetters } from 'vuex'
export default {
  name: 'passowrd',
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
  margin-top: 15px;
  span{
    color: #FF4466;
    font-size: 16px;
    font-weight: bold;
    line-height: 16px;
  }
}
</style>
