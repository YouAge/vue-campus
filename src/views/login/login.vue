<template>
  <div class="jp-table">
    <div class="dynamic-area2"></div>
    <div class="jp-tablecell">
      <div style="text-align: right">
        <RouterLink class="entry" to="/">
          进入网站首页
          <i class="iconfont icon-angle-right"></i>
          <i class="iconfont icon-angle-right"></i>
        </RouterLink>
      </div>
      <!--      <div class="loginbox">-->
      <div class="login-tit">
        <h1>
          新风尚-校园购
        </h1>
        <Row :gutter="16">
          <Col :span="6">  <a-divider style="background-color: #D4DBE1" /></Col>
          <Col :span="12" class="text-center">登录中心</Col>
          <Col :span="6"><a-divider style="background-color: #D4DBE1" /></Col>
        </Row>
      </div>
      <div class="vite-login">
        <a-form :model="formState" :rules="rules" ref="formRef" hideRequiredMark>
          <template v-if="!isIphone">
            <a-form-item name="username" >
              <a-input placeholder="输入登入邮箱或手机号" v-model:value="formState.username" allowClear>
                <template #prefix>
                  <user-outlined type="user" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item name="password">
              <a-input-password  placeholder="请输入密码" v-model:value="formState.password" allowClear>
                <template #prefix>
                  <WindowsOutlined type="user" />
                </template>
              </a-input-password >
            </a-form-item>
          </template>
         <template v-else>
           <a-form-item name="username">
             <a-input placeholder="手机号" v-model:value="formState.username" allowClear>
               <template #prefix>
                 <user-outlined type="user" />
               </template>
             </a-input>
           </a-form-item>
           <a-form-item name="code">
             <a-input placeholder="请输入验证码" v-model:value="formState.code" allowClear>
               <template #prefix>
                 <WindowsOutlined type="user" />
               </template>
               <template #suffix>
                 <span class="h-code" @click="getcode">{{codeStatus?`${codeNumber}秒倒计时`: '获取验证吗'}}</span>
               </template>
             </a-input>
           </a-form-item>
         </template>


          <a-form-item>
            <div style="width: 100%;display: flex;justify-content: center">
              <a-button  class="login-button"  type="primary" @click="onSubmit">登入</a-button>
            </div>
          </a-form-item>
        </a-form>
<!--        <div class="tourist" style="text-align: right">-->
<!--          <a-checkbox v-model:checked="isMsgLogin">管理员登入</a-checkbox>-->
<!--        </div>-->

        <div class="register">
          <div style="width: 100%;height: 0.5px; background-color: #D4DBE1;margin: 15px 0;"></div>
          <div style="display: flex;justify-content: space-between">
            <div class="entry" @click="isIphone=!isIphone">
             {{isIphone?'账号密码登入':'手机号登入'}}
            </div>
            <RouterLink class="entry" to="/login">
              忘记密码
            </RouterLink>
          </div>
        </div>


      </div>

    </div>
    <div class="copyright text-effect">
      <span>新</span>
      <span>-</span>
      <span>风</span>
      <span>-</span>
      <span>尚</span>
      <span>-</span>
      <span>-</span>
      <span>校</span>
      <span>园</span>
      <span>购</span>
<!--      <span>城</span>-->

    </div>
  </div>
</template>

<script>
import {Row,Col,message} from 'ant-design-vue'
import {defineComponent, reactive, ref,watch} from "vue";
import {UserOutlined,WindowsOutlined}  from '@ant-design/icons-vue';
import {useRoute, useRouter} from 'vue-router'
import {useStore} from 'vuex'

export default defineComponent({
  name:'userLogin',
  components:{Row,Col,UserOutlined,WindowsOutlined},
  setup(){
    let validUserName = async (rules,value)=>{
      if(!value) return Promise.reject('请正确输入手机号，不能为空')
      if(isIphone.value){
        if(!(/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(value))){
          return Promise.reject('请输入正确待手机号')
        }
      }else {
        return Promise.resolve()
      }
    }

    const rules = {
      username: [{ validator: validUserName, trigger: 'blur' }],
      password: { required: true, message: '请输入密码' },
      code: { required: true, message: '请输入验证码' },
    }
    const isMsgLogin = ref(false)
    const isIphone = ref(false)
    const codeNumber = ref(60)
    const codeStatus = ref(false)
    const themr = ref(null)
    const store = useStore()
    const router = useRouter()
    const route = useRoute(); // 路由
    const formRef = ref()
    const formState  = reactive({
      username : '',
      password : '',
      code:'',
      isIphone: isIphone.value
    })
    let redirect = ref()

    /** 监听路由*/
    watch(()=>route.fullPath,value => {
      redirect.value = route.query && route.query.redirect
    }, { immediate: true })
    function getcode(){
      codeStatus.value = true
      themr.value= setTimeout(()=>{
        codeNumber.value--
       if(codeNumber.value === 53){
        formState.code = Math.random().toString().substr(2, 4)
       }else if(codeNumber.value === 0){
         clearTimeout(themr.value)
         codeNumber.value = 60
         codeStatus.value = false
         return false
       }
       return getcode()
      },1000)
    }

    const onSubmit = async ()=>{
      await formRef.value.validate().then(()=>{
        if(!isMsgLogin.value){
          formState.isIphone = isIphone.value
          store.dispatch('home/shopLogin',formState).then(()=>{
            router.push({path: redirect.value || '/'}).then(()=>{
              message.success('欢迎回来')
            })
          })
        }else {
          // 管理原登入
          store.dispatch('home/adminLogin',formState).then(()=>{
            router.push({path:redirect.value || '/admin/home'}).then(()=>{
              message.success('欢迎回来')
            })
          })
        }
      })
    }
    return {
      formRef,
      formState, //...toRefs(state),
      rules,
      onSubmit,
      isMsgLogin,
      isIphone,
      getcode,
      codeStatus,
      codeNumber
    }
  }
})

</script>

<style lang="less" scoped>
.h-code{
  color: #FE4763;
  font-size: 12px;
  cursor: pointer;
}
.entry{
  cursor: pointer;
}
.jp-table{
  height: 100%;
  width: 100%;
  background: url("~@/assets/img/login/bg.jpg") no-repeat;
  //background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.jp-tablecell{
  position: relative;
  width: 500px;
  background:rgba(255, 255, 255, 0.7);
  margin: 0 auto;
  border-radius: 5px;
  padding: 30px 50px;
  box-shadow: 0 0 10px rgb(0 0 0 / 10%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  z-index: 100;
  .login-tit{
    text-align: center;
    h1{
      margin: 10px 0 10px 0;
    }
    .ant-divider-horizontal{
      margin: 10px;
    }
    .text-center{
      text-align: center;
      line-height: 20px;
      margin-bottom: 20px;
    }
  }


  .jabil-login{
    display: flex;
    flex-direction: column;
    .login-button,
    .ant-input-affix-wrapper{
      margin-top: 30px;
    }

    .ant-form-item{
      margin-bottom:0
    }

    .tourist{
      margin-top: 15px;
      text-align: center;
      font-size: 14px;
      color: #9E9EA0;
    }
  }
}

.login-button{
  font-weight: bold;
  text-align: center;
  width: 100%;
}
/** 动画*/
.dynamic-area2 {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url("~@/assets/img/login/poster-drop-animate2.png") repeat-x 0px 0px;
  background-size: cover;
  animation: posterDrop2 3000s linear infinite;
  opacity: 0.4;
  z-index: 2;
}
@keyframes posterDrop2 {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 30000% 0;
  }
}


.copyright {
  font-size: 18px;
  color: #666;
  position: absolute;
  bottom: 2px;
  left: 0;
  text-align: center;
  width: 100%;
  height: 30px;
}

/* copyright */
.text-effect {
  color: #fff;
  font-size: 0.24rem;
  font-weight: 600;
  text-align: center;
}
.text-effect span {
  animation: animate linear 2000ms infinite;
}
.text-effect span:nth-child(1n) {
  animation-delay: 0s;
}
.text-effect span:nth-child(2n) {
  animation-delay: 100ms;
}
.text-effect span:nth-child(3n) {
  animation-delay: 200ms;
}
.text-effect span:nth-child(4n) {
  animation-delay: 300ms;
}
.text-effect span:nth-child(5n) {
  animation-delay: 400ms;
}
.text-effect span:nth-child(6n) {
  animation-delay: 500ms;
}
.text-effect span:nth-child(7n) {
  animation-delay: 600ms;
}
.text-effect span:nth-child(8n) {
  animation-delay: 700ms;
}
.text-effect span:nth-child(9n) {
  animation-delay: 800ms;
}
.text-effect span:nth-child(10n) {
  animation-delay: 900ms;
}
@keyframes animate {
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
    text-shadow: 0 0 80px #6472bb, 0 0 30px #6472bb, 0 0 6px #6472bb;
  }
}




</style>
