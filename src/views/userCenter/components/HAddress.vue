<template>
  <Modal v-model:visible="visible" :title="title" @ok="handleOk" >
    <Form  ref="formRef" :model="formState" :rules="rule" :label-col="{span:4}" :wrapper-col="{span:14}">
      <form-item label="收货人：" name="name">
        <Input v-model:value="formState.name"/>
      </form-item>
      <form-item label="手机号：" name="iPhone">
        <Input v-model:value="formState.iPhone"/>
      </form-item>
      <form-item label="所在地：" name="fullLocation">
        <HCity class="ant-form-item-control-input-content" :fullLocation="formState.fullLocation" @change="changeCity" placeholder="请选择所在地区"/>
      </form-item>
      <form-item label="详细地址：" name="address">
        <Input v-model:value="formState.address"/>
      </form-item>
      <form-item label="邮政编码：">
        <Input v-model:value="formState.postalCode"/>
      </form-item>
    </Form>
  </Modal>
</template>

<script>
import { Form, FormItem, Input, message, Modal, Radio, RadioGroup, Select } from 'ant-design-vue'
import { reactive, ref } from 'vue'
import HCity from '@/components/HCity.vue'
import { addAddressPost } from '@/api/shop'
export default {
  name: 'HAddress',
  components:{
    HCity,
    Modal,Form,FormItem,Input,RadioGroup,Radio,Select
  },
  props:{
    title:{
      default:'提示',
      type:String,
    },
    data:{
      default: {},
      type:Object
    }
  },
  setup(){
    const visible =ref(true)
    const formRef = ref()
    const formState = reactive({
      name:'小明',
      iPhone:'15607191234',
      fullLocation:'湖北省 武汉市 江岸区',
      address:'成都新城',
      postalCode:''
    })

    function handleOk(){
      formRef.value.validate().then(()=>{
        addAddressPost(formState).then((item)=>{
          message.success('新增地址成功')
          visible.value =false
          formRef.value.resetFields()
        })
      })
    }
    function changeCity(result){
      formState.fullLocation = result.fullLocation
    }
    return {
      formState,
      visible,
      formRef,
      rule:{
        name:{required:true,message:'请输入收件人'},
        iPhone:{required: true,message: '请输入电话'},
        fullLocation:{required: true,message: '请输入收件地址'},
        address:{required: true,message: '请输入详细地址'}
      },
      handleOk,
      changeCity
    }
  }

}
</script>

<style scoped>
.h-city{
  display: block;
  height: 34px;
}
</style>
