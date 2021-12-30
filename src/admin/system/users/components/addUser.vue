<template>
  <Modal v-model:visible="visible" title="Basic Modal" @ok="handleOk" >
    <Form :model="formState" label-align="left">
      <form-item label="用户名" label-align="left" :label-col="{span:3}" :wrapper-col="{span:17}">
        <Input v-model:value="formState.username"/>
      </form-item>
      <form-item label="密码" label-align="left" :label-col="{span:3}" :wrapper-col="{span:17}">
        <Input v-model:value="formState.username"/>
      </form-item>
      <form-item label="邮箱" label-align="left" :label-col="{span:3}" :wrapper-col="{span:17}">
        <Input v-model:value="formState.username"/>
      </form-item>
      <form-item label="手机" label-align="left" :label-col="{span:3}" :wrapper-col="{span:17}">
        <Input v-model:value="formState.username"/>
      </form-item>
      <form-item label="超级管理员">
        <radio-group v-model:value="formState.isSuper" @change="radioIsSuper">
          <radio :value="true">是</radio>
          <radio :value="false">否</radio>
        </radio-group>
      </form-item>
      <form-item label="角色：" :label-col="{span:3}"  :wrapper-col="{span:17}">
        <Select v-model:value="formState.role" :options="options" mode="multiple" placeholder="Please select"
          :maxTagCount="2" :disabled="formState.isSuper">
        </Select>
      </form-item>
    </Form>

  </Modal>
</template>

<script>
import { reactive, ref } from 'vue'
import {Modal,Form,FormItem,Input,RadioGroup,Radio,Select} from 'ant-design-vue'
export default {
  name: 'addUser',
  components:{
    Modal,Form,FormItem,Input,RadioGroup,Radio,Select
  },
  props:{
    remove:{
      type:Function,
      default:()=>{}
    },
    callback:{
      type:Function,
      default:()=>{}
    }
  },
  setup(props){
    const visible = ref(true)
    const formState = reactive({
      username:'',
      password:'',
      email:'',
      iphone:'',
      sex:'',
      isSuper: false,
      role:[]
    })
    function handleOk(){

      // 执行回调
      props.callback()
      visible.value = false
    }

    function radioIsSuper (e) {
      if(formState.isSuper){
        formState.role=[]
      }
    }

    return {
      visible,
      handleOk,
      formState,
      options:[
        {value:1, label:'角色1'},
        {value:3, label:'角色2'},
        {value:4, label:'角色5'},
      ],
      radioIsSuper
    }
  }
}
</script>

<style scoped>
.ant-input{
  outline-style: none ;
  border: 1px solid #ccc;
  border-radius: 1px;
  padding: 4px 14px;
  font-family: "Microsoft soft";
}
</style>
