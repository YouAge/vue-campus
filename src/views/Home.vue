<template>
  <div class="app-header-carousel">
    <div class="f-header">
      <!--  <div></div>-->
      <home-category />
      <div class="f-carousel">
        <img src="https://s10.mogucdn.com/mlcdn/c45406/200518_482bj515c0a2lb0abg0b60hl2h5l8_1134x440.jpg">
      </div>
    </div>
  </div>

  <div class="f-content">
    <HomeCardContet v-for="item in homeData" :key="item.id" :home-item="item" />
  </div>


</template>

<script>
import HomeMenus from "@/components/HomeMenus";
import HomeCardContet from "@/components/HomeCardContet";
import HomeCategory from '@/components/home-category.vue'
import { headGet, tagShopHome } from '@/api/shop'
import AppFooter from '@/views/AppFooter.vue'
import { mapActions, mapGetters ,mapState} from 'vuex'
export default {
  components: {
    AppFooter,
    HomeCategory,
    HomeCardContet, HomeMenus},
  data(){
    return{
      homeData:[],
    }
  },
  computed:{
    ...mapState({
      headMenus:state=>state['shop/headMenus']
    })
  },
  methods:{
    httpHomeTag(){
      tagShopHome().then(item=>{
        this.homeData = item
      })
    },


  },
  created () {
    this.httpHomeTag()
  }

}
</script>

<style lang="less" scoped>
.app-header-top{
  width: 710px;
  border-radius: 4px;
  overflow: hidden;
  background-color: #FFFFFF;
}
.app-header-carousel{
  height: 500px;
  width: 100%;
  border-top: 2px solid #FF4466;
  background-color: #CCEAE2;
  box-sizing: border-box;
  text-align: center;

}
.f-content,
.f-header{
  width: 75%;
  margin: auto;
  //width: 1240px;
  //margin: 0 auto;
  position: relative;
  //display: flex;
  .f-carousel{
    //width: 1274px;
    //width: 85%;
    height: 500px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 98;
    img{
      height: 100%;
      width: 100%;
    }
  }
}

</style>
