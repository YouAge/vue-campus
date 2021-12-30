<template>
  <div style="display: flex;align-items: center">
    <div style="font-size: 14px;"> 图床查看：</div>
    <a-cascader v-model:value="imgValue" :options="imgOptions" placeholder="请选择图片类型"
                :fieldNames="{ label: 'name', value: 'value', children: 'children' }"/>
    <a-button type="primary" @click="searchImage" style="margin-right: 15px;">
      <template #icon><SearchOutlined /></template>查看图片</a-button>
    <a-button  @click="visible=true" style="margin-right: 15px;" danger>
      <template #icon><SearchOutlined /></template>新增类型</a-button>
  </div>

  <div class="table-operations">
    <a-button @click="visible=true" type="primary">
      新增图片
    </a-button>
  </div>
  <div>
    <seach-img />
  </div>

  <!--  //新增属性-->
  <a-modal v-model:visible="visible" title="新增图床类型" @ok="addFun" >
    <a-form ref="formRef" :model="formState" :rules="rule" :label-col="{span:4}" :wrapper-col="{span:14}">
      <a-form-item label="上级分类：" name="superId">
        <a-cascader v-model:value="formState.superId" :fieldNames="{ label: 'name', value: 'id', children: 'to' }"
                    :options="imgOptions" placeholder="选择父类" />
      </a-form-item>
      <a-form-item label="类型名：" name="name">
        <a-input v-model:value="formState.name" placeholder="输入类型名"/>
      </a-form-item>
      <a-form-item label="类型值：" name="value">
        <a-input v-model:value="formState.value" placeholder="输入类型值，必须是字母英文数字"/>
      </a-form-item>
      <a-form-item label="图床介绍">
        <a-textarea v-model:value="formState.desc"
                    placeholder="输入商品介绍"
                    :auto-size="{ minRows: 2, maxRows: 5 }"
        />
      </a-form-item>
      <a-form-item label="排序：" >
        <a-input v-model:value="formState.layer" placeholder="输入排序" type="number"/>
      </a-form-item>
      <a-form-item label="状态" :wrapper-col="{span:10}">
        <a-radio-group v-model:value="formState.status">
          <a-radio :value="true">使用</a-radio>
          <a-radio :value="false">不使用</a-radio>
        </a-radio-group>
      </a-form-item>
    </a-form>

  </a-modal>
</template>

<script>
import { SearchOutlined, UserOutlined } from '@ant-design/icons-vue'
import { reactive, ref, toRaw } from 'vue'
import { imgMapGet, imgMapPost } from '@/api/admin/goods.js'
import SeachImg from '@/admin/components/seachImg/seachImg.vue'

export default {
  name: 'index',
  components:{
    SeachImg,
    UserOutlined,SearchOutlined},
  setup(){

    const imgValue = ref([])
    const imgOptions = ref([])
    const visible = ref(false)
    const formRef = ref()
    const formState = reactive({
      name:'',
      superId:null,
      value:'',
      desc:'',
      layer:0,
      status:true
    })


    async function imgMapHttp(){
      imgMapGet().then(item=>{
        imgOptions.value = item
        imgOptions.value
      })
    }

    imgMapHttp()
    function searchImage(){

      const t = imgValue.value.join('/')
      console.log( t)
    }

    function addImage(){}


    function addFun(){
      formRef.value.validate().then(async ()=>{
        console.log(toRaw( formState))
        // visible.value =false
        const data = {...toRaw( formState),superId :formState.superId[0]}
        imgMapPost(data).then(()=>{
          imgMapHttp()
          visible.value =false
        })
      })
    }

    return {
      searchImage,
      addImage,
      imgValue,
      imgOptions,
      formState,
      formRef,
      addFun,
      visible,
      rule : {
        name:{required:true,message:'名不能为空'},
        value:{required:true,message:'值不能为空， 必须是英文'},
        superId:{required:true,message:'不能为空'},
      }
    }
  }
}
</script>

<style scoped>

</style>
