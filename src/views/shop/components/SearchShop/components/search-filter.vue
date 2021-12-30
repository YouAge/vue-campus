<template>
<div class="sea-filter">
  <div class="item">
    <div class="head">品牌：</div>
    <div class="body">
      <a @click="cchangeBrand(item.id)" :class="{active:item.id ===filterData.selectedBrand}" href="javascript:;"></a>
    </div>
  </div>
  <div class="item" v-for="item in filterData.saleProperties" :key="item.id">
    <div class="head"{{item.name}}></div>
    <div class="body">
      <a href="javascript:;"></a>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'SearchFilter',
}
</script>

<style scoped lang="less">

</style>
