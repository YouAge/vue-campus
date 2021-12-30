<template>
<div class="account-box">
  <div class="toggle">
    <a @click="isMsgLogin=false" href="javascript:;" v-if="isMsgLogin">
      <i class="iconfont icon-user"></i> 用户
    </a>
    <a @click="isMsgLogin=true" href="javascript:;" v-else>
      <i class="iconfont icon-user"></i> 管理员
    </a>
  </div>
  <Form ref="formRef" class="form" :model="formState" :rules="rulesForm">
    <div style="text-align: center;font-size: 20px;font-weight: bold;margin-bottom: 20px">{{isMsgLogin?'管理员':'用户'}}登入</div>
    <form-item   name="email">
      <label class="title">邮箱号：</label>
      <Input v-model:value="formState.email" size="large" placeholder="请输入用户邮箱" >
        <template #prefix>
          <user-outlined type="user" />
        </template>
      </Input>
    </form-item>
    <form-item ref="password"  name="password">
      <label  class="title">密码：</label>
      <InputPassword v-model:value="formState.password" size="large" placeholder="请输入登入密码" >
        <template #prefix><LockOutlined style="color: rgba(0, 0, 0,1)" /></template>
      </InputPassword>
    </form-item>
    <form-item name="isAgree" v-if="!isMsgLogin">
      <div class="form-item">
        <div class="agree">
          <Checkbox v-model:checked="formState.isAgree"></Checkbox>
          <span>我已同意</span>
          <a href="javascript:;">《隐私条款》</a>
          <span>和</span>
          <a href="javascript:;">《服务条款》</a>
        </div>
      </div>
    </form-item>


<!--    //登入-->
    <form-item>
      <Button type="primary" @click="onSubmit" style="margin-top: 20px;width: 100%">登入</Button>
    </form-item>
  </Form>
<!--  <div class="action">-->
<!--    <a href="https://graph.qq.com/oauth2.0/authorize?client_id=100556005&response_type=token&scope=all&redirect_uri=http%3A%2F%2Fwww.corho.com%3A8080%2F%23%2Flogin%2Fcallback">-->
<!--      <img src="https://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_7.png" alt="">-->
<!--    </a>-->
<!--    <div class="url">-->
<!--      <a href="javascript:;">忘记密码</a>-->
<!--      <a href="javascript:;">免费注册</a>-->
<!--    </div>-->
<!--  </div>-->
</div>
</template>

<script>
import { reactive, ref, watch} from 'vue'
import {Form,Input,Checkbox,Button,InputPassword} from 'ant-design-vue'
import { UserOutlined ,LockOutlined } from '@ant-design/icons-vue';

async function validateIsAgree(rule,value){
  if(!value)  return Promise.reject('请查看并同意勾选')
  return Promise.resolve()
}
import {useStore} from 'vuex'
import {useRoute,useRouter} from 'vue-router'
export default {
  name: 'loginForm',
  components:{  Form, FormItem:Form.Item,Input ,Checkbox,Button,UserOutlined,InputPassword,LockOutlined},
  setup(){
    // 管理员登入
    const isMsgLogin = ref(false) // 用户登入， true 管理员
    const formRef = ref()
    const formState = reactive({
      email:'',
      password:'',
      isAgree:false
    })
    const redirect = ref()
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    watch(()=>route.fullPath,(route)=>{
      redirect.value = route.query && route.query.redirect
    },{deep:true})

    function onSubmit(){
      formRef.value.validate().then(()=>{
        if(!isMsgLogin.value){
          store.dispatch('home/shopLogin',formState).then(()=>{
            router.push({path: redirect.value || '/'})
          })
        }else {
          // 管理原登入
        }

      })
    }
    return{
      formRef,
      formState,
      onSubmit,
      isMsgLogin,
      rulesForm: {
        email: { required: true, message: '请输入登入邮箱号' },
        password: { required: true, message: '请输入密码' },
        isAgree: { validator:validateIsAgree, trigger: 'change' },
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
