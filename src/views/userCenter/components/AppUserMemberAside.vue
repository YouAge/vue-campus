<template>
  <div class="h-member-aside">
    <div class="user-manage">
      <h4>用户中心</h4>
      <div class="links">
        <RouterLink exact-active-class="active" to="/user/member">我的账号</RouterLink>
<!--        <RouterLink exact-active-class="active" to="/user/member">消息通知</RouterLink>-->

<!--        <a href="javascript:;">个人信息</a>-->
<!--        <RouterLink exact-active-class="active" to="/user/member">个人信息</RouterLink>-->
<!--        <a href="javascript:;">密码设置</a>-->
        <RouterLink exact-active-class="active" to="/user/pwd">密码设置</RouterLink>
<!--        <a href="javascript:;">地址管理</a>-->
        <RouterLink exact-active-class="active" to="/user/address">地址管理</RouterLink>
        <a href="javascript:;">我的足迹</a>
      </div>
      <h4>我的收藏</h4>
      <div class="links">
        <RouterLink active-class="active" to="/user/collect">收藏的商品</RouterLink>
        <a href="javascript:;">猜你喜欢</a>
        <a href="javascript:;">关注的品牌</a>
      </div>
      <h4>交易管理</h4>
      <div class="links">
        <RouterLink active-class="active" to="/user/order">我的订单</RouterLink>
        <a href="javascript:;">优惠券</a>
        <a href="javascript:;">评价晒单</a>
        <a href="javascript:;">售后服务</a>
      </div>

<!--      <h4>帮助中心</h4>-->
<!--      <div class="links">-->
<!--        <a href="javascript:;">帮助中心</a>-->
<!--        <a href="javascript:;">在线客服</a>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppUserMemberAside'
}
</script>

<style scoped lang='less'>
.h-member-aside {
  width: 220px;
  margin-right: 20px;
  border-radius: 2px;
  .user-manage {
    background-color: #fff;
    h4 {
      font-size: 18px;
      font-weight: 400;
      padding: 20px 52px 5px;
      //padding: 20px  0;
      //padding-right: 10px;
      border-top: 1px solid #f6f6f6;
      //text-align: right;
    }

    .links {
      padding: 0 52px 10px;
      //padding-right: 10px;
    }

    a {
      display: block;
      line-height: 1;
      padding: 15px 0;
      font-size: 14px;
      color: #666;
      position: relative;
      //text-align: right;
      &:hover{
        color: #27BA9B;
      }
      &.active {
        color: #27BA9B;

        &:before {
          display: block;
        }
      }

      &:before {
        content: "";
        display: none;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        position: absolute;
        top: 19px;
        left: -16px;
        background-color: #27BA9B;
      }
    }
  }
}
</style>
