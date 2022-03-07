<template>
<div class="goods-details">
    <div v-html="goods.particulars" v-if="goods.particulars"></div>
  <div v-else-if="goods.partInfo">
    <div class="particulars-item">
      <h3>商品描述</h3>
      <p>自家工厂直营，【高品质】实力造就品质,专注女装10年
        拒绝暴利,只为亲民,坚持性价比才才是长久经营之道。【不怕货比货】打造女装高性价比品牌,【理念】做一单生意,结识一位朋友,以心交心,成就你我,【品质】从不夸大质量,乱做保证,用事实说话。柔软舒适手感柔软舒适,贴身穿都不扎皮肤,透气性很好,弹性好,不缩水,不褪色,不变形。本店承诺七天无理由更换货,赠送运费险，亲亲可以放心购买。</p>
    </div>

    <div class="particulars-item" v-if="goods.partInfo">
      <h3>常品参数</h3>
      <el-row class="info-table">
        <el-col :span="8" v-for="(value,key) in goods.partInfo.detailSet" :key="key"><span>{{key}} : {{value}}</span></el-col>
      </el-row>
    </div>
    <div class="particulars-item" v-if="goods.partInfo">
      <h3>图文详情</h3>
      <div>
        <el-image v-for="(img,index) in goods.partInfo.detailImage" :key="index" :src="img"/>
      </div>
    </div>



  </div>
  <div v-else><h1>暂无商品详情，待录入</h1> </div>
</div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'GoodsDetails',
  setup () {
    const goods = inject('goods')
    return { goods }
  }
}
</script>

<style scoped lang="less">
.goods-details {
  padding: 40px;
  .attrs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    li {
      display: flex;
      margin-bottom: 10px;
      width: 50%;
      .dt {
        width: 100px;
        color: #999;
      }
      .dd {
        flex: 1;
        color: #666;
      }
    }
  }
  > img {
    width: 100%;
  }
}

.particulars-item{
  margin-bottom: 20px;
  .info-table{
    margin-top: 20px;
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
    box-sizing: border-box;
    >div{
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      padding: 10px;
      box-sizing: border-box;
      span{
        font-size: 12px;
        text-align: center;
      }
    }
  }
}

</style>
