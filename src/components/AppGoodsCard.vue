<template>
  <div :class="placement === 'bottom'?'good-card-bot':'goods-card-left'">
    <template v-if="placement === 'bottom'">
      <a :href="`/product/${goods.id}`" class="f-goods-a">
        <div class="goods-img">
          <img :src="img">
        </div>
        <p class="goods-title">{{goods.name}}</p>
        <p class="goods-price">
          <span>￥</span>{{goods.price}}
        </p>
      </a>
    </template>
    <template v-else>
      <a :href="`/product/${goods.id}`" class="f-goods-a-left">
        <div class="goods-img">
          <img :src="img">
        </div>
        <div class="f-goods-title">
          <p class="goods-title">{{goods.name}}</p>
          <p class="goods-price">
            <span>￥</span>{{goods.price}}
          </p>

        </div>
      </a>
    </template>
  </div>


</template>

<script>
export default {
  name: 'AppGoodsCard',
  props: {
    placement: {
      type: String,
      default: 'bottom'
    },
    goods:{
      type:Object,
      default:{}
    }
  },
  computed:{
    img:function () {
      if(this.goods.picture && this.goods.picture.length>0){
        return this.goods.picture[0]
      }else {
        return  'https://s5.mogucdn.com/mlcdn/55cf19/211203_5108ch8gi9cdg589hhfjaj62a62g4_800x800.jpg'
      }
    }
  },
}
</script>

<style scoped lang="less">
.goods-card-left {
  width: 274px;

  height: 93px;
}
.good-card-bot{
  width: 182px;
  height: 233px;
  flex-basis: 20%;
  margin-bottom: 42px;
  margin-left: 20px;
}

.f-goods-a {
  display: block;
  flex-direction: column;

  .goods-img {
    position: relative;
    width: 182px;
    height: 182px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .goods-title {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
    height: 20px;
    margin-top: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 182px;
    color: #333333;
  }

  .goods-price {
    letter-spacing: 0;
    height: 24px;
    margin-top: 4px;
    line-height: 24px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    color: #FF4466;
  }
}


.f-goods-a-left {
  display: inline-flex;
  overflow: hidden;
    width: 100%;
  .goods-img {
    width: 93px;
    height: 93px;
    img {
      //width: 100%;
      height: 100%;
    }
  }
.f-goods-title{
  flex: 1;
  .goods-title {
    width: 100%;
    font-size: 14px;
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    height: 44px;
    position: relative;
    line-height: 22px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .goods-price {
    letter-spacing: 0;
    height: 24px;
    margin-top: 4px;
    line-height: 24px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    color: #FF4466;
  }
}

}
</style>
