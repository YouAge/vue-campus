<template>
<Input class="h-input" :style="{width,fontSize}" v-bind="$attrs"/>
</template>

<script>
import {Input} from 'ant-design-vue'
export default {
  name: 'HInput',
  inheritAttrs:false,
  components:{Input},
  props:{
    width:{
      type:String,
      default: '100%'
    },
    fontSize:{
      type: String,
      default: '14px'
    }
  }
}
</script>

<style scoped lang="less">
.h-input{
  outline-style: none ;
  border: 1px solid #ccc;
  border-radius: 1px;
  padding: 4px 14px;
  font-family: "Microsoft soft";
}
</style>
