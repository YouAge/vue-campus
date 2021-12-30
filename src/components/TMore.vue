<template>
<RouterLink :to="path" class="t-mote">
  <span>查看全部</span>
  <RightOutlined class="f-icon"/>
</RouterLink>
</template>

<script>
import { RightOutlined } from '@ant-design/icons-vue';
export default {
  name: 'TMore',
  components:{
    RightOutlined
  },
  props: {
    path: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style scoped lang="less">

.t-mote {
  margin-bottom: 2px;
  span {
    font-size: 16px;
    vertical-align: middle;
    margin-right: 4px;
    color: #999;
  }
  .f-icon {
    font-size: 14px;
    vertical-align: middle;
    position: relative;
    top: 2px;
    color: #ccc;
  }
  &:hover {
    span,.f-icon {
      color: #27BA9B;
    }
  }
}
</style>
