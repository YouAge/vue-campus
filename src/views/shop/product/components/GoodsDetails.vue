<template>
<div class="goods-details">
    <div v-html="goods.particulars" v-if="goods"></div>
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
</style>
