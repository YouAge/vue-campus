<template>
  <div class="account-box">
    <Form ref="formRef" class="form" :model="formState" :rules="roleForm">
      <div style="text-align: center;font-size: 20px;font-weight: bold;margin:20px 0">账号注册</div>

      <form-item   name="username">
        <label class="title">用户名：</label>
        <Input v-model:value="formState.username" size="large" placeholder="请输入用户名" >
          <template #prefix>
            <user-outlined type="user" />
          </template>
        </Input>
      </form-item>
      <form-item   name="email">
        <label class="title">邮箱：</label>
        <Input v-model:value="formState.email" size="large" placeholder="请输入用户名" >
          <template #prefix>
            <user-outlined type="user" />
          </template>
        </Input>
      </form-item>
      <form-item   name="password">
        <label  class="title">密码：</label>
        <InputPassword v-model:value="formState.password" size="large" placeholder="请输入登入密码" >
          <template #prefix><LockOutlined style="color: rgba(0, 0, 0,1)" /></template>
        </InputPassword>
      </form-item>
      <form-item   name="password2">
        <label  class="title">确认密码：</label>
        <InputPassword v-model:value="formState.password2" size="large" placeholder="请输入登入密码" >
          <template #prefix><LockOutlined style="color: rgba(0, 0, 0,1)" /></template>
        </InputPassword>
      </form-item>
      <!--    //登入-->
      <form-item>
        <Button type="primary" @click="onSubmit" style="margin-top: 20px;width: 100%">确定</Button>
      </form-item>
    </Form>
  </div>
</template>

<script>
import { reactive, ref, } from 'vue'
import {Form,Input,Checkbox,Button,InputPassword} from 'ant-design-vue'
import { UserOutlined ,LockOutlined } from '@ant-design/icons-vue';
import { registerShopPost } from '@/api/shop'



export default {
  name: 'registerForm',
  components:{  Form, FormItem:Form.Item,Input ,Checkbox,Button,UserOutlined,InputPassword,LockOutlined},
  setup(){
    // 管理员登入
    const isMsgLogin = ref(false)
    const formRef = ref()
    const formState = reactive({
      username:'',
      password:'',
      email:'',
      password2:''
    })
    async function paw2(rule,value){
      console.log('规则',rule)
      if(!value)return Promise.reject('确认密码不能为空')
      if(value !== formState.password)return Promise.reject('2次密码不相等')
      return Promise.resolve()
    }
    function onSubmit(){
      formRef.value.validate().then(()=>{
        const {email,password,username} = formState
        registerShopPost({email,password,username}).then(item=>{
           // 组测成功， 直接登入，跳转首页
          console.log(item)
        })
      })
    }
    return{
      formRef,
      formState,
      onSubmit,
      roleForm:{
        username: { required: true, message: '请输入用户名' },
        password: { required: true, message: '请输入密码' },
        email: { required: true, message: '请输入用户邮箱',type:'email' },
        password2: { validator:paw2 ,trigger:'change'},
      }
    }
  }
}
</script>

<style scoped lang="less">
.account-box {
  background-color: white;
  //
  margin: 30px 0;
  width: 70%;
  .toggle {
    padding: 15px 40px;
    text-align: right;
    a {
      color: #27BA9B;
      i {
        font-size: 14px;
      }
    }
  }


  .form {
    padding: 0 40px;
    .title{
      font-weight: bold;
      font-size: 14px;
    }
  }
  .action {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .url {
      a {
        color: #999;
        margin-left: 10px;
      }
    }
  }
}
</style>
