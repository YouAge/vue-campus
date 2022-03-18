<template>
  <a-layout class="admin-layout">
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
    <div class="logo" v-if="!collapsed" style="color: #000">
      新风尚管理平台
    </div>
    <div class="logo" v-else style="font-size: 14px">新风尚</div>
    <h-menus />
  </a-layout-sider>
    <a-layout class="admin-layout-left" :class="{'admin-min-layout-left':collapsed}">
      <a-layout-header style="background: #fff; padding: 0" :class="collapsed?'admin-min-layout-header':'admin-layout-header'" >
        <div style="display: flex;justify-content: space-between;text-align: center;box-sizing: border-box">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
          <div style="margin-right: 300px;">
            <a-dropdown  class="f-dropdown" >
              <!--            <UserOutlined :style="{fontSize: '20px'}"/>-->

              <a-avatar style="background-color: #f56a00">{{adminUserInfo.username}}</a-avatar>
              <template #overlay>
                <a-menu @click="setUserPage">
                  <a-menu-item :key="1"><div>我的账户</div></a-menu-item>
                  <a-menu-item :key="2">退出</a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>

      </a-layout-header>
      <a-layout-content
        :style="{  padding: '24px', background: '#fff' }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import HMenus from '@/admin/Layout/components/menus'
import { mapGetters } from 'vuex'
import { message, Modal } from 'ant-design-vue'
export default defineComponent({
  components: {
    HMenus,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  data(){
    return {
      selectedKeys:['1'],
      collapsed:false
    }
  },
  computed:{
    ...mapGetters([
      'adminUserInfo'
    ])
  },
  methods:{
    setUserPage({item,key,keyPath}){
      const that = this
      if(key ===2){
        Modal.confirm({
          title: '退出登入',
          // icon: createVNode(ExclamationCircleOutlined),
          content: '您确定要退出吗',
          okText: '确认',
          cancelText: '取消',
          onOk() {
            that.$store.commit('adminUser/removeToken')
            that.$router.push('/login-admin')
            message.success('欢迎下次再来，您即将退出登入')
          },
          onCancel() {
            // console.log('Cancel');
          },
        });
      }
    }
  }
});
</script>
<style scoped lang="less">


.admin-layout{
  min-height: 100vh;
  box-sizing: border-box;
}
.ant-layout-sider{
  min-height: 100%;
  position: fixed;
  background-color: #FFFFFF;
  color: #000000;
}
.admin-layout-left{
  margin-left: 200px;
  box-sizing: border-box;
}


.admin-min-layout-left{
  margin-left: 80px;
  box-sizing: border-box;
}
.admin-min-layout-header{
  left: 80px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;

}

.ant-layout-content{
  margin: 88px 16px 24px 26px;
}
.admin-layout-header{
  position: fixed;
  top: 0;
  width: 100%;
  left: 200px;
  z-index: 99;
  box-sizing: border-box;
}


 .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

 .logo {
  height: 32px;
  //background: rgba(255, 255, 255, 0.3);
  margin: 16px;
   line-height: 32px;
   color: #FFFFFF;
   text-align: center;
   font-size: 20px;
   cursor: pointer;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
