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
            placeholder="个人简介"
          />
        </el-form-item>
      </el-form>

      <div style="text-align: right;">
        <el-button style="width: 200px" @click="updateInfo">保存基本信息</el-button>
      </div>
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

    }
  },
  methods:{

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
