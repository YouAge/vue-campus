<template>
  <div class="clearfix" v-if="inputStat">
<!--    <template v-if="fileList.length">-->
<!--      <a-img  :src="item" alt="avatar"   v-for="item in fileList" :key="item"/>-->
<!--    </template>-->

  <a-upload
    v-model:file-list="fileList"
    list-type="picture-card"
    class="avatar-uploader"
    action="http://127.0.0.1:6452/upload/file"
    :before-upload="beforeUpload"
    @change="handleChange"
    @preview="handlePreview"
    :remove="removeImg"
    :data="{path}"
  >
    <div v-if="fileList.length < imgNumber">
      <plus-outlined />
      <div class="ant-upload-text">上传图片</div>
    </div>

  </a-upload>
  <a-modal :visible="previewVisible" :footer="null" @cancel="imgCancel">
    <img alt="example" style="width: 100%" :src="imageUrl" />
  </a-modal>
  </div>
  <div v-else>
    <el-input v-model="pictureModel" @blur="setPicture"></el-input>
  </div>
</template>

<script>
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { defineComponent, reactive, ref, toRaw,computed } from 'vue'

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function getImgPath(fileList){
  let item = []
  for (let file of fileList){
    const {data} = file.response
    if(data.path){
      item.push(data.path)
    }
  }
  return item
}

export default {
  name: 'HUpload',
  components: {
    LoadingOutlined,
    PlusOutlined,
  },
  props:{
    imgNumber:{
      type: Number,
      default: 1
    },
    path:{
      type:String,
      default: "fenshangjian/default"
    },
    imgDates:{
      type:Array,
      default:[]
    },
    inputStat:{
      default:false,
      type: Boolean
    }
  },
  setup(props,{emit}) {
      const fileList = ref([]);
      const loading = ref(false);
      const previewVisible = ref(false);
      const imageUrl = ref('');

      const handleChange = info => {
        if (info.file.status === 'uploading') {
          loading.value = true;
          return;
        }
        if (info.file.status === 'done') {
          // 获取到 后端 数据
          // Get this url from response in real world.
          const response = info.file.response
          imageUrl.value = response.path
          loading.value = false;
          // 返回图片信息出去
          const imgList = getImgPath(fileList.value)
          console.log('shufhu:',imgList)
          emit('success',imgList)
        }

        if (info.file.status === 'error') {
          loading.value = false;
          message.error('upload error');
        }
      };

      const beforeUpload = file => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
      };
    const imgCancel = () => {
      previewVisible.value = false;
    };

    const handlePreview = async file =>{
      imageUrl.value = file.thumbUrl
      previewVisible.value = true
    }
    async function removeImg(file){
      imageUrl.value = ''
      for (let index in fileList.value){
        if(file.name === fileList.value[index].name){
          fileList.value.splice(index,1)
        }
      }
      const imgList = getImgPath(toRaw(fileList.value))
      emit('success',imgList)
    }
  const shopData = reactive({
    picture:[]
  })
    const pictureModel = computed({
      get(){
        if(shopData.picture.length===0) return ''
        return shopData.picture.join(',')
      },
      set(value){
        shopData.picture = value.split(',')
      }
    })
    function setPicture(){
      console.log('==》',shopData.picture)
      emit('success',shopData.picture)
    }

      return {
        shopData,
        pictureModel,
        setPicture,
        fileList,
        loading,
        imageUrl,
        handleChange,
        beforeUpload,
        previewVisible,
        imgCancel,
        handlePreview,
        removeImg
      }

  }
}
</script>

<style>
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
