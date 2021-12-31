<template>
<Modal v-model:visible="visible" title="选择图片" :maskClosable="false" @ok="handleOk" style="min-width: 1200px;">
  <div class="title">
      <div>您已选择 {{imgDatas.size}} 张图片了</div>
  </div>
  <Row :gutter="[16,18]">
    <Col :span="4">
      <Card >
        <Menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline" @click="handleClick">
          <sub-menu :key="item.value" v-for="item in gData">
            <template #title>{{item.name}}</template>
            <menu-item :key="f.value" v-for="f in item.children">{{f.name}}</menu-item>
          </sub-menu>
        </Menu>
      </Card>
    </Col>
    <Col :span="20">
      <row>
        <Col v-if="imgListData.length===0" :span="24">
          <Empty />
        </Col>
        <Col v-else v-for="path in imgListData" :key="path">
          <div :class="{outer:imgDatas.has(path)}"
               style="margin: 5px 5px 20px 5px; display: flex;flex-direction: column;cursor: pointer;padding: 10px"
          @click="addRemoveImg(path)">
            <Image  :width="200" :src="path" :preview="false" placeholder/>
          </div>
        </Col>
      </row>
    </Col>
  </Row>
</Modal>
</template>

<script>
import { Form, FormItem, Input, Row,Col,Menu,SubMenu,MenuItem,Card,Image,Button,Empty,
  Modal, Radio, RadioGroup, Select, SelectOption, Space } from 'ant-design-vue'
import { getCurrentInstance, ref } from 'vue'
import { imagsListGet, imgMapGet } from '@/api/admin/goods.js'

export default {
  name: 'ginImg',
  components:{
    Modal,Form,FormItem,Input,RadioGroup,Radio,Image,Button,Empty,
    Select,Space,SelectOption,Row,Col,Menu,SubMenu,MenuItem,Card
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
  },
  setup(props){
    const visible = ref(true)
    const imgDatas = ref(new Set())
    const openKeys = ref([]);
    const selectedKeys = ref([])
    const gData = ref([]);
    const imgListData = ref([])
    async function imgMapHttp(){
      imgMapGet().then(item=>{
        // item.forEach(f=>f.disabled = true)
        if(item.length>0){
          openKeys.value = [item[0].value]
          if(item[0].children.length>0){
            selectedKeys.value = [item[0].children[0].value]
          }
        }
        gData.value = item
        getImageListHttp(openKeys.value+'/'+selectedKeys.value)
      })
    }
    imgMapHttp()
    function getImageListHttp(path){
      imagsListGet(path).then(item=>{
        imgListData.value = item
      })
    }
    function handleClick({keyPath}){
      getImageListHttp(keyPath.join('/'))
    }
    function handleOk(){

      props.callback( [...imgDatas.value])
      visible.value = false
    }
    function addRemoveImg(img){
          if(imgDatas.value.has(img)){
            imgDatas.value.delete(img)
          }else {
            imgDatas.value.add(img)
          }
    }
    return {
      openKeys,
      selectedKeys,
      handleClick,
      addRemoveImg,
      imgDatas,
      gData,
      imgListData,
      handleOk,
      visible
    }
  }
}
</script>

<style scoped lang="less">
.title{
  height: 40px;
  margin-bottom: 15px;
  display: flex;
}
.outer{
  border: 4px solid #42b983;
}
</style>
