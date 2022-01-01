<template>
<div class="shop-content">
   <h1>{{loginStu?'用户登入':'新用户注册'}}</h1>
  <div class="login-form">
     <div class="login-box">
<!--        <LoginForm  v-if="loginStu"/>-->
       <register-form />
     </div>
     <div class="but-box">
        <div class="account-box" v-if="loginStu">
          <h2>用户注册</h2>
          <RouterLink to="/register">
            <div  style="width: 100%;line-height: 50px;text-align: center; font-size: 18px;background-color: #1B1B1B;color: white">新用户注册</div>
          </RouterLink>
<!--          <Button @click="()=>{$router.push('/register')}" style="width: 100%;height: 50px;font-size: 18px;background-color: #1B1B1B;color: white">新用户注册</Button>-->
        </div>
       <div class="account-box" v-else>
         <RouterLink to="/login">
           <div  style="width: 100%;line-height: 50px;text-align: center; font-size: 18px;background-color: #1B1B1B;color: white">已有账号登入</div>
         </RouterLink>
       </div>
     </div>
  </div>
</div>
</template>

<script>

import {Form,Input,Button} from 'ant-design-vue'
import { reactive, ref } from 'vue'
import LoginForm from '@/views/login/components/loginForm.vue'
import RegisterForm from '@/views/login/components/registerForm.vue'
import {useRoute,onBeforeRouteUpdate} from 'vue-router'
export default {
  name: 'index',
  components:{ RegisterForm, LoginForm, Form, FormItem:Form.Item,Input,Button },
  setup(){
    const route = useRoute()
    const loginStu = ref(false)
    // onBeforeRouteUpdate((to)=>{
    //   console.log('监听',to.meta)
    //   loginStu.value = to.meta.login
    // })
    return {
      loginStu
    }
  }
}
</script>

<style scoped lang="less">
h1{
  background-color: white;
  font-size: 16px;
  text-indent: 6px;
  width: 100%;
  line-height: 60px;
  font-weight: bold;
}
.login-form{
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  .login-box,
  .but-box{
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 50%;
  }
  .login-box{
    //background-color: #42b983;
    border-right: 1px solid #DADADA;
  }
  .but-box{
    .account-box{
      margin: 30px;
      width: 70%;
    }

  }

}
</style>
