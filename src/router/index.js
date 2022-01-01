import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout'

import { adminRouter } from '@/router/admin-router.js'
import { createPermission } from '@/router/permission.js'
const routes = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: '/home',
    children: [
      { path: '/home', name: 'Home', component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue') },
      {
        path: 'shop',
        name: 'shop',
        redirect: '/shop/category',
        component: ()=>import('@/views/shop/index.vue'),
        children:[
          { path:'category/:id', name: 'category',meta:{title:'商品列表',cid:null}, component:()=>import('@/views/shop/category') },
          { path:'search', name: 'search',meta:{title:'商品搜索'}, component:()=>import('@/views/shop/search') },
          { path:'product/:id', name: 'product',meta:{title:'商品详情'}, component:()=>import('@/views/shop/product') },
        ]
      },
      {
        path: '/cart', name: 'Cart',meta:{title:'购物车',author:true}, component:()=>import(/* webpackChunkName: "about" */ '../views/cart')
      },
      { path: '/payment_settlement', name: 'settlement',meta:{title:'订单确认',author:true}, component:()=> import('@/views/userCenter/payment/settlement.vue')},
      { path: '/payment_pay', name: 'pay',meta:{title:'支付页',author:true}, component:()=> import('@/views/userCenter/payment/pay.vue')},
      { path: '/payment_result', name: 'result',meta:{title:'支付结果',author:true}, component:()=> import('@/views/userCenter/payment/result.vue')},
      {
        path: '/user',
        name:'user',
        component: ()=>import('@/views/userCenter/index.vue'),
        children: [
          { path: 'member',meta:{title:'个人中心',author:true}, component: ()=>import('@/views/userCenter/home/index.vue') },
          { path: 'order',meta:{title:'交易管理',author:true}, component: ()=>import('@/views/userCenter/order/index.vue') },
        ]
      },

      { path:'/register', name: 'register',meta:{login:false}, component:()=>import('@/views/login') },
    ]
  },
  // 登入注册
  { path:'/login', name: 'login',meta:{title:'登入'}, component:()=>import('@/views/login/userLogin.vue') },

  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },


  // 管理员页面
  ...adminRouter,

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

createPermission(router)

export default router
