<template>
  <div class="home-overview">
    <!-- 用户信息 -->
    <div class="user-meta">
      <div class="avatar">
        <img src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/avatar/2021-11-30/9c48e7dd-7ea4-44c6-98ad-b0f722330cc1.jpg"/>
      </div>
      <h4>{{userInfo.username}}</h4>
    </div>
    <div class="item">
      <a href="javascript:;">
        <span class="iconfont icon-hy"></span>
        <p>会员中心</p>
      </a>
      <a href="javascript:;">
        <span class="iconfont icon-aq"></span>
        <p>安全设置</p>
      </a>
      <a href="/user/address">
        <span class="iconfont icon-dw"></span>
        <p>地址管理</p>
      </a>
    </div>
  </div>

  <div class="">

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'homeOverview',
  data(){
    return {}
  },
  computed:{
    ...mapGetters([
      'userInfo'
    ])
  }
}
</script>

<style scoped lang="less">
.home-overview {
  height: 132px;
  background: url("~@/assets/img/center-bg.png") no-repeat center / cover;
  display: flex;
  .user-meta {
    flex: 1;
    display: flex;
    align-items: center;
    .avatar {
      width: 85px;
      height: 85px;
      border-radius: 50%;
      overflow: hidden;
      margin-left: 60px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    h4 {
      padding-left: 26px;
      font-size: 18px;
      font-weight: normal;
      color: white;
    }
  }
  .item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    &:first-child {
      border-right: 1px solid #f4f4f4;
    }
    a {
      color: white;
      font-size: 16px;
      text-align: center;
      .iconfont {
        font-size: 32px;
      }
      p {
        line-height: 32px;
      }
    }
  }
}
</style>
