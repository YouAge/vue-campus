<template>
<div class="content-header ftp">
  <div class="liveslice">
  </div>
  <el-row :gutter="16">
    <el-col :span="18">
      <div class="liveslice-left">
        <div class="class-video">
          <video data-v-311dffc1="" loop="loop" controls="controls" autoplay="autoplay" class="video__url" src="https://upyunvod.mogucdn.com/vodtranscq1251964405/5213833187227634706/v.f313648.mp4!X5213833187227634706.mp4"></video>
        </div>
        <horizontal-card />
      </div>
    </el-col>
    <el-col :span="6">
      <div class="otherSlider">
        <div>
          <div class="f-otherSlider-ht">
            <h2>热销商品推荐</h2>
            <div style="margin-right: 21px;font-size: 14px;cursor: pointer">
              <el-icon><refresh /></el-icon>
              换一批
            </div>
          </div>
          <app-goods-card placement="left"/>
          <app-goods-card placement="left"/>
          <app-goods-card placement="left"/>
          <app-goods-card placement="left"/>
        </div>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script setup>
import AppGoodsCard from "@/components/AppGoodsCard";
import HorizontalCard from '@/components/HorizontalCard.vue'

// export default {
//   name: 'liveSlice'
// }
</script>

<style scoped lang="less">
.liveslice{
  margin-top: 20px;
}
.app-content{
  background-color: #fff !important;
}
.otherSlider{
  width: 310px;
  overflow: hidden;
  margin-left: 10px;
  background-color: #FFFFFF;
  .f-otherSlider-ht{
    margin-top: 21px;
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

.class-video{
  video{
    position: relative;
    z-index: 1;
    width: 100%;
    min-width: 620px;
    height: 670px
  }

}
</style>
<style>

</style>
