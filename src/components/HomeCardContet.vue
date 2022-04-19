<template>
<div class='f-card'>
<!--  头部-->
  <div class="f-toplink">
    <div class="sideIcon"></div>
    <div class="cateTitleName">{{homeItem.name}}</div>
    <div class="cateLinkBox">
      <template v-for="item in homeItem.cates" :key="item.id">
        <a class="topLink-item" :href="`/good-list/${homeItem.id}?tag=${item.id}`">{{ item.name}}</a>
        <span>|</span>
      </template>
    </div>
  </div>
<!--  内容-->
  <div class="f-clearfix">
<!--    左大图，-->
    <div class="leftBanner">
      <a :href="`/good-list/${homeItem.id}`">
        <img :src="homeItem.picture">
      </a>
    </div>
<!--    中间轮播图-->
    <div class="topSwiper">
      <el-carousel trigger="click" height="555px" arrow="never" :autoplay="false">
        <el-carousel-item v-for="item in 4" :key="item">
<!--          <h3 class="small">{{ item }}</h3>-->
          <div class="f-good-card">
            <AppGoodsCard v-for="tp in homeItem.goods" :key="tp.id" :goods="tp"/>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
<!--    推介-->
    <div class="otherSlider">
      <div>
        <div class="f-otherSlider-ht">
          <h2>热销商品推荐</h2>
          <div style="margin-right: 21px;font-size: 14px;cursor: pointer">
            <el-icon><refresh /></el-icon>
            换一批
          </div>
        </div>
        <div v-if="homeItem.goods && homeItem.goods.length>0">
          <app-goods-card placement="left"
                          v-for="item in getGoods(homeItem.goods)" :key="item.id +'f'" :goods="item"/>
        </div>
        <div v-else> 暂无数据</div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
import AppGoodsCard from "@/components/AppGoodsCard";
import {Refresh} from '@element-plus/icons-vue'
export default {
  name: "HomeCardContet",
  components: {AppGoodsCard,Refresh},
  props:{
    homeItem:{
      default:{
      },
      type:Object
    }
  },
  data(){
    return{}
  },
  methods:{
    getGoods(array){
      const f = [...array]
      return f.reverse().slice(0,5)
    }
  }
}
</script>

<style scoped lang="less">
.f-card{
  margin-bottom: 40px;
}
.f-toplink{
  display: flex;
  margin: 10px;
  .sideIcon{
    width: 8px;
    height: 100%;
    float: left;
    margin-right: 10px;
  }

  .cateTitleName{
    margin-right: 30px;
    height: 22px;
    line-height: 22px;
    font-size: 20px;
    font-weight: 700;
  }

  .cateLinkBox{
    display: flex;
    a{
      margin: 0 16px;
      font-size: 16px;
      &:hover{
        color: #FF5777;
      }
    }
  }
}


.f-clearfix{
  display: flex;

  .leftBanner{
    width: 230px;
    height: 555px;
    overflow: hidden;
    margin-right: 10px;
    position: relative;
    img{
      width: 100%;
      height: 100%;
    }
  }

  .topSwiper{
    flex: 1;
    padding: 10px 20px;
    background-color: #FFFFFF;
    box-sizing: border-box;
    height: 555px;
    overflow: hidden;
  }
  .otherSlider{
    width: 310px;
    overflow: hidden;
    margin-left: 10px;
    background-color: #FFFFFF;
    .f-otherSlider-ht{
      //margin-top: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    >div{
      >div{
        margin:0 0 21px 21px;
      }
    }
  }
}


.f-good-card{
 display: flex;
 flex-flow: wrap;
  overflow: hidden;
  height: 555px;

}
</style>
