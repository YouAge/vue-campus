<template>
  <a-row :gutter="[16,18]">
    <a-col :span="4">
      <a-card >
        <a-menu

          v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
          mode="inline"
          @click="handleClick"
        >
          <a-sub-menu :key="item.value" v-for="item in gData">
            <template #title>{{item.name}}</template>
            <a-menu-item :key="f.value" v-for="f in item.children">{{f.name}}</a-menu-item>
          </a-sub-menu>

        </a-menu>
      </a-card>

    </a-col>
    <a-col :span="20">

      <a-row>
        <a-col v-if="imgListData.length===0" :span="24">
          <a-empty />
        </a-col>

        <a-col v-else v-for="path in imgListData" :key="path">
          <div  style="margin: 5px 5px 20px 5px; display: flex;flex-direction: column">
            <a-image  :width="200" :src="path"/>
            <a-button style="width: 200px" @click="copyImage($event,path)">复制地址</a-button>
          </div>
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>

<script>
import { defineComponent, ref,getCurrentInstance  } from 'vue';
import { imagsListGet, imgMapGet } from '@/api/admin/goods.js'
import Clipboard from 'clipboard'
export default defineComponent({
  setup() {
    const openKeys = ref(['safdsf']);
    const selectedKeys = ref(['chaoliufuz'])
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
    const f = getCurrentInstance()
    const  app = f.appContext.config.globalProperties
    function copyImage(e,text){
      const clipboard = new Clipboard(e.target, { text: () => text })
      clipboard.on('success', e => {
        // this.message.success('This is a success message');
        // 释放内存
        app.$message.success('图片地址 复制成功')
        clipboard.off('error')
        clipboard.off('success')
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        // 不支持复制
        // 释放内存
        app.$message.error('图片地址 复制失败')
        clipboard.off('error')
        clipboard.off('success')
        clipboard.destroy()
      })
      clipboard.onClick(e)
    }

    function getImageListHttp(path){
       imagsListGet(path).then(item=>{
         imgListData.value = item
       })
    }
  function handleClick({keyPath}){
    getImageListHttp(keyPath.join('/'))
  }
    return {
      openKeys,
      selectedKeys,
      handleClick,
      gData,
      copyImage,
      imgListData
    }
  }
})
</script>

<style scoped>

</style>
