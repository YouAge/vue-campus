
<template>
  <RouterLink :to="`/product/${goods.id}`" class='goods-item'>
    <img :src="goods.picture[0]" alt="">
    <p class="name ellipsis">{{goods.name}}</p>
    <p class="desc ellipsis">{{goods.desc}}</p>
    <div class="goods-info">
      <div class="price_info">&yen;{{goods.price}}</div>
      <div class="fav_num fr">
        <img src="//s18.mogucdn.com/p2/160908/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png" alt="">
        1.0w</div>
    </div>
  </RouterLink>
</template>


<script>
export default {
  name: 'GoodsItem',
  props: {
    goods: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped lang="less">
// 鼠标经过上移阴影动画
.hoverShadow () {
  transition: all .5s;
  &:hover {
    transform: translate3d(0,-3px,0);
    box-shadow: 0 3px 8px rgba(0,0,0,0.2);
    border: 1px solid red;
  }
}
.goods-item {
  display: block;
  width: 220px;
  background: #fff;
  border: 1px solid #f2f2f2;
  //padding: 20px 30px;
  //text-align: center;
  margin-bottom: 20px;
  .hoverShadow();
  img {
    width: 100%;
    height: 293px;
  }
  p {
    line-height: 20px;
    position: relative;
    margin-top: 6px;
    font-size: 14px;
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
  }
  //.name {
  //  font-size: 16px;
  //  text-overflow: ellipsis;
  //  overflow:hidden;
  //  white-space: nowrap;
  //}
.ellipsis{
    text-overflow: ellipsis;
    overflow:hidden;
    white-space: nowrap;
}
  .goods-info{
    display: flex;
    justify-content: space-between;
    height: 25px;
    line-height: 25px;
    overflow: hidden;
    color: #333;
    width: 100%;
    img{
      height: 15px;
      width: 16px;
      vertical-align: -2px;
      margin-right: 4px;
    }
    div{
      padding: 0 15px;
    }
  }
  //.desc {
  //  color: #999;
  //  height: 29px;
  //  text-overflow: ellipsis;
  //  overflow:hidden;
  //  white-space: nowrap;
  //}
  .price {
    color: #CF4444;
    font-size: 20px;
  }
}
</style>
