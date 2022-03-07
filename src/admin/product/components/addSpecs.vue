<template>
  <Modal v-model:visible="visible" title="添加商品属性" :maskClosable="false"
         @ok="handleOk" cancelText="取消" destroyOnClose>
<!--    <Space direction="vertical">-->
    <div>
      <div>
        <span>属性名：</span>
        <Space>
        <Select v-model:value="name" placeholder="选择属性名"
                style="width: 400px" @change="setSpecsValue">
          <SelectOption v-for="item in option" :key="item.id" :value="item.name">{{item.name}}</SelectOption>
        </Select>
        </Space>
      </div>
      <div style="margin-top: 20px">
       <span>属性值：</span>
        <Select v-model:value="value"  mode="tags" placeholder="选择属性值" style="width: 400px">
          <SelectOption v-for="item in specsValueOption" :key="item.name" :value="item.name">{{item.name}}</SelectOption>
        </Select>
      </div>
      <div style="margin-top: 20px">
        <span>原价：</span>
        <Input v-model:value="inp.oldPrice" placeholder="输入原价"></Input>
      </div>
      <div style="margin-top: 20px">
        <span>折扣价：</span>
        <Input v-model:value="inp.price" placeholder="输入折扣价"></Input>
      </div>
      <div style="margin-top: 20px">
        <span>库存：</span>
        <Input v-model:value="inp.inventory" placeholder="输入折扣价"></Input>
      </div>
    </div>
<!--    </Space>-->
  </Modal>
</template>

<script>
import { reactive, ref,toRefs } from 'vue'
import {Modal,Form,FormItem,Input,RadioGroup,
  Radio,Select,Space,SelectOption} from 'ant-design-vue'

export default {
  name: 'addSpecs',
  components:{
    Modal,Form,FormItem,Input,RadioGroup,Radio,Select,Space,SelectOption
  },
  props:{
    remove:{
      type:Function,
      default:()=>{}
    },
    callback:{
      type:Function,
      default:()=>{}
    },
    option:{
      type:Object,
      default:[]
    },
  },
  setup(props){
    // const specsNameOption =ref([])
    const specsValueOption = ref([])
    const visible = ref(true)
    const name = ref(null)
    const inp = reactive({
      price:0,
      oldPrice:0,
      inventory:0
    })

    const value = ref([])

    function setSpecsValue(id){
      const t = props.option.find(item=>item.name === id)
      specsValueOption.value = t.value
      value.value = []
    }



    function handleOk(){
      // 判断是否存在里面，然后处理掉

      const specss = {
        name:name.value,
        value:value.value,
        ...inp
      }

      // 执行回调
      props.callback(specss)
      visible.value = false
    }

    return {
      inp,
      visible,
      handleOk,
      name,
      value,
      specsValueOption,
      setSpecsValue
    }
  }
}
</script>

<style scoped>

</style>
