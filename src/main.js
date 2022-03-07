import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)

import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import './styles/index.less'

//vxe-table
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

app.use(Antd)
  .use(VXETable).use(ElementPlus)
app.use(store).use(router)
app.mount('#app')
