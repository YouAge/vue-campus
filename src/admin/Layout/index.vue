<template>
  <a-layout class="admin-layout">
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
    <div class="logo" />
    <h-menus />
  </a-layout-sider>
    <a-layout class="admin-layout-left">
      <a-layout-header style="background: #fff; padding: 0" class="admin-layout-header">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
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
export default defineComponent({
  components: {
    HMenus,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },

  setup() {
    return {
      selectedKeys: ref(['1']),
      collapsed: ref(false),
    };
  },
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
}
.admin-layout-left{
  margin-left: 200px;
  box-sizing: border-box;
}
.ant-layout-content{
  margin: 88px 16px 24px 26px;
}
.admin-layout-header{
  position: fixed;
  top: 0;
  width: 100%;
  left: 200px;
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
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
