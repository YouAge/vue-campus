<template>
  <div class="shop-content">
    <div class="f-breadcrumb">
      <breadcrumb>
        <breadcrumb-item>首页</breadcrumb-item>
        <breadcrumb-item>{{title.title}}</breadcrumb-item>
      </breadcrumb>
    </div>
    <router-view />
  </div>

</template>

<script>
import {Breadcrumb,Carousel} from 'ant-design-vue'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import {useRoute,onBeforeRouteUpdate} from 'vue-router'
import { ref } from 'vue'
export default {
  name: 'index',
  components:{
    Breadcrumb,
    BreadcrumbItem:Breadcrumb.Item,
    Carousel,
    LeftCircleOutlined, RightCircleOutlined
  },
  setup(){
    const route = useRoute()
    const title = ref(route.meta)
    onBeforeRouteUpdate((to)=>{
      // title.value = to.meta
    })
    return {
      title
    }
  }
}
</script>

<style scoped lang="less">
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 500px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
  &:hover{
    .ant-carousel :deep(.slick-arrow.custom-slick-arrow){
      opacity: 1;

    }

  }
}
.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #000;
  background-color: rgba(31, 45, 61, 0.11);
  opacity:0;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}

.f-breadcrumb{
  height: 60px;
  display: flex;
  align-items: center;
}

</style>
