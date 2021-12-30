import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import './styles/index.less'
const app = createApp(App)

//vxe-table
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

//富文本编译器

app
  .use(store)
  .use(router)
  .use(Antd)
  .use(VXETable)


app.mount('#app')
