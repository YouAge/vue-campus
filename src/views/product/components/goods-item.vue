
<template>
    <RouterLink :to="`/shop/product/${goods.id}`" class='goods-item'>
      <img :src="goods.picture[0]" alt="">
      <p class="name ellipsis">{{goods.name}}</p>
      <p class="desc ellipsis">{{goods.desc}}</p>
      <p class="price">&yen;{{goods.price}}</p>
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
  }
}
.goods-item {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
  .hoverShadow();
  img {
    width: 160px;
    height: 160px;
  }
  p {
    padding-top: 10px;
  }
  .name {
    font-size: 16px;
    text-overflow: ellipsis;
    overflow:hidden;
    white-space: nowrap;
  }

  .desc {
    color: #999;
    height: 29px;
    text-overflow: ellipsis;
    overflow:hidden;
    white-space: nowrap;
  }
  .price {
    color: #CF4444;
    font-size: 20px;
  }
}
</style>
