<template>
  <div class="f-goods">
    <div class="img">
      <el-image style="width: 100px; height: 100px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                fit="cover"
      ></el-image>
    </div>
    <div class="goods-content">
      <div class="title">爆款女港风老爹鞋新款网红同款厚底阿甘鞋ins潮运动鞋女韩版</div>
      <div class="price">
        <div style="flex: 1">价格： <span>￥69.6</span></div>
        <el-button type="danger">立刻购物</el-button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name:'HorizontalCard'
}

</script>

<style lang="less" scoped>
.f-goods{
  display: flex;
  border-radius: 4px;
  width: 100%;
  height: 100px;
  .goods-content{
    padding-left: 20px;
    flex: 1;
    background-color: #F5F5F5;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    .title{
      height: 75px;
    }
    .price{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
