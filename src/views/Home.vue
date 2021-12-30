<template>
  <div style="height: 60px"></div>
<div class="content">
  <Carousel dot-position="left" ref="varousel" :afterChange="dotNumber">
    <div v-for="item in carouseDateImg" :key="item.id" class="carousel">
      <img :src="item.img" class="carousel-img"/>
    </div>
  </Carousel>
</div>
</template>

<script>
import { Carousel } from 'ant-design-vue'
import { computed, onMounted, ref ,onUnmounted} from 'vue'
import { debounce, throttle } from '@/utils/pubils.js'
import { useStore } from 'vuex'

const carouseEnum ={
  prev:0,
  next:1,
}
const carouseDateImg = [
  {id:0, img:require('@/assets/img/shop/home/3-T1.jpg'),title:'',children:[]},
  {id:1, img:require('@/assets/img/shop/home/5-T1.jpg'),title:'',children:[]},
  {id:2, img:require('@/assets/img/shop/home/4-T1.jpg'),title:'',children:[]},
  {id:3, img:require('@/assets/img/shop/home/6-T1.jpg'),title:'',children:[]},
  {id:4, img:require('@/assets/img/shop/home/7-T3.jpg'),title:'',children:[]},
  {id:5, img:require('@/assets/img/shop/home/3.jpg'),title:'',children:[]}
]


export default {
  name: 'Home',
  components: {
    Carousel
  },
  setup () {
    const store = useStore()
    store.commit('home/setFooterShow', false)
    const timer = 1500
    const varousel = ref(null)
    const carouseIndex = ref(0)
    const dataIndexLength = carouseDateImg.length -1
    function dotNumber (index) {
      carouseIndex.value = index
      if (index === dataIndexLength) {
        store.commit('home/setFooterShow', true)
      } else {
        store.commit('home/setFooterShow', false)
      }
    }

    function slideCarousel (item){
      if( item === 'next' ){
        if( carouseIndex.value === dataIndexLength) return
        throttle(function () {
          varousel.value.next()
        }, timer)()
      }
      else{
        // 获取滚动跳，到0时 才出发 走马灯
        let osTop = document.documentElement.scrollTop || document.body.srcollTop;
        console.log(carouseIndex.value === dataIndexLength ,osTop,osTop === undefined )
        if(carouseIndex.value === dataIndexLength && osTop !== undefined && osTop >0) return
        throttle(() => {
          varousel.value.prev()
        }, timer)()
      }

    }

    onMounted(() => {
      document.onmousewheel = function (e) {
        e = e || window.event
        if (e.wheelDelta) {
          if (e.wheelDelta > 0) {
            console.log('prev',e.wheelDelta,e.wheelDelta > 0)
            slideCarousel('prev')
          }
          if (e.wheelDelta < 0) {
            console.log('next',e.wheelDelta)
            slideCarousel('next')
          }
        } else if (e.detail) {
          if (e.detail > 0) {
            throttle(() => {
              console.log('下滚')
            }, timer)()
          }
          if (e.detail < 0) {
            throttle(() => {
              console.log('上滚')
            }, timer)()
          }
        }
      }
    })

    onUnmounted(()=>{
      //销毁页面是，显示底部
      store.commit('home/setFooterShow', true)
      document.onmousewheel = function (){}
    })

    return {
      varousel,
      dotNumber,
      store,
      carouseDateImg
    }
  }
}
</script>
<style scoped lang="less">
.content{
  margin-top: 12px;
}
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: calc( 100vh - 72px);
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.carousel{
  height: calc( 100vh - 72px);
  width: 100%;
}
.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}

.carousel-img{
  width: 100%;
  height: 100%;
}
</style>
