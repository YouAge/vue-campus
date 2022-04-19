<template>
<div class="header">
  <div class="header-nav content-header">
    <div class="header-nav-wrap">
      <a href="/" target="">首页</a>
<!--      <span>|</span>-->
<!--      <a href="/" target="">商城</a>-->
      <span>|</span>
      <a href="/user/order" target="">我的订单</a>
      <span>|</span>
      <a href="/" target="">关于我们</a>
<!--      <span>|</span>-->
    </div>
  </div>
  <div class="header-wrap content-header">
    <div class="header-logo">
      <a rel="nofollow" id="top_logo_mogu" href="/" class="logo" title="新尚风首页" style="background-image: none;">
        <h2>新风尚</h2>
      </a>
      <div class="header-menu">
        <el-popover
            placement="bottom"
            :width="350"
            trigger="hover"
        >
          <template #reference>
           <div class="header-menu-icon">
              <el-icon :size="18"><expand /></el-icon>
             <span style="font-size: 20px">目录</span>
            </div>
          </template>
          <div class="header-menu-content">
            <h4>其他主题</h4>
            <div class="header-menu-content-url">
              <a :href="`/good-list/${item.id}`" v-for="item in headMenus" :key="item.id">{{item.name}}</a>
            </div>
          </div>
        </el-popover>
      </div>
    </div>
    <div class="header-search">
      <el-input
          v-model="input3"
          placeholder="搜索商品名称"
          class="input-with-select"
          size="large"
      >
        <template #append>
          <el-button style="color: #FFFFFF" @click="searchGoodsList">搜索</el-button>
        </template>
      </el-input>
    </div>
    <div class="header-user-icon">
      <div class="user-icon-item">
        <el-icon :size="24"><chat-dot-round /></el-icon>
        <span>消息</span>
      </div>
      <div class="user-icon-item" @click="$router.push('/user/collect')">
        <el-icon :size="24"><star /></el-icon>
        <span>收藏</span>
      </div>
      <div class="user-icon-item" @click="$router.push('/cart')">
        <el-icon :size="24"><shopping-cart-full /></el-icon>
        <span>购物车</span>
      </div>

    </div>
    <div class="user-info">
        <div class="user-login" v-if="!loginStatus" @click="$router.push('/login')">登入</div>
        <div v-else>
          <a-dropdown  class="f-dropdown" >
<!--            <UserOutlined :style="{fontSize: '20px'}"/>-->
            <a-avatar :size="40" style="background-color: #f56a00">{{userInfo.username}}</a-avatar>
            <template #overlay>
              <a-menu @click="setUserPage">
                <a-menu-item :key="1"><div>我的账户</div></a-menu-item>
                <a-menu-item :key="3"><div>我的订单</div></a-menu-item>
                <a-menu-item :key="2">
                  退出
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import {Expand,Search,ChatDotRound,Star,ShoppingCartFull} from '@element-plus/icons-vue'
import {mapActions,mapState,mapMutations,mapGetters} from 'vuex'
import { Modal ,message} from 'ant-design-vue'
import store from '@/store'
import router from '@/router'
export default {
  name:'AppHeader',
 components:{Expand,Search,ChatDotRound,Star,ShoppingCartFull},
  data(){
    return {
      input3:'',
    }
  },
  computed:{
    // ...mapState({
    //   headMenus:state=>state.shop.headMenus,
    // }),
    ...mapGetters([
      'loginStatus',
      'userInfo',
      'headMenus'
    ])
  },
  methods:{
    setUserPage({item,key,keyPath}){
      const that = this
      if(key ===1){
        this.$router.push('/user')
      }else if(key ===2){
        Modal.confirm({
          title: '退出登入',
          // icon: createVNode(ExclamationCircleOutlined),
          content: '您确定要退出吗',
          okText: '确认',
          cancelText: '取消',
          onOk() {
            that.$store.commit('home/removeToken')
            that.$router.push('/login')
            message.success('欢迎下次再来，您即将退出登入')
          },
          onCancel() {
            // console.log('Cancel');
          },
        });
      }else if (key ===3){
        this.$router.push('/user/order')
      }
    },

    searchGoodsList(){
    if(this.input3){
      this.$router.push(`/good-list?keyword=${this.input3}`,)
    }

    }
  },
  created () {
    console.log('==登入状态=>',this.$store)
    this.$store.dispatch('shop/getMenus')
  }
}

</script>

<style scoped lang="less">
.header{
  display: flex;
  flex-direction: column;
  //width: 100%;
  .header-nav{
    //width: 100%;
    height: 33px;
    border-bottom: 1px solid #F6F6F6;
    .header-nav-wrap{
      //width: 80%;
      //margin: auto;
      text-align: right;
      a, span{
        margin-left: 15px;
        font-size: 14px;
        text-decoration: none
      }
    }
  }
  .header-wrap{
    //width: 85%;
    //margin: auto;
    border-bottom: 1px solid #F6F6F6;
    display: flex;
    align-items: center;
    .header-logo{
      display: flex;
      align-items: center;
      //flex-basis: 130px;
      flex-grow: 1;
      .logo{
        line-height: 100px;
        h2{
          color: #FF4466;
          font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
          font-weight: bold;
        }

      }
      a{
        display: block;
        height: 100px;
        //width: 130px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .header-menu{
        margin-left: 10px;
        .header-menu-icon{
          //line-height: 100px;
          font-size: 15px;
          color: #333;
          i{
            font-size: 16px;
          }

        }
      }
    }
    .header-search{
      //flex: 1;
      flex-grow: 2;
      text-align: right;
      //margin-left: 400px;
      .el-input-group{
       width: 600px;
      }

    }
  }
}

.header-user-icon{
  display: flex;
  flex-grow: 1;
  .user-icon-item{
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    span{
      font-size: 14px;
    }
    &:hover{
      color: #42b983;
    }
  }
}

.user-info{
  flex-basis: 100px;
  text-align: right;
}
</style>
<style lang="less">
.header-menu-content{
  h4{
    margin-bottom: 20px;
  }
  .header-menu-content-url{
    display: flex;
    flex-flow: wrap;
    a{
      font-size: 14px;
      margin: 0 25px 25px 0;
      text-decoration: none
    }
  }
}
.header-search{
  .el-input__inner{
    //border: #8D8D8D;
    background-color: #F7F7F7;
  }
  .el-input-group__append, .el-input-group__prepend{
    width: 56px;
    background-color: #8D8D8D;
    border: #F7F7F7;
    .el-icon{
      color: #ffff;
      font-size: 20px;
    }
  }
}

</style>
