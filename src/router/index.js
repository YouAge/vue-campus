import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout'

import { adminRouter } from '@/router/admin-router.js'
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
        path: '/cart', name: 'Cart', component:()=>import(/* webpackChunkName: "about" */ '../views/cart')
      },
      { path: '/payment_settlement', name: 'settlement', component:()=> import('@/views/userCenter/payment/settlement.vue')},
      { path: '/payment_pay', name: 'pay', component:()=> import('@/views/userCenter/payment/pay.vue')},
      { path: '/payment_result', name: 'result', component:()=> import('@/views/userCenter/payment/result.vue')},
      {
        path: '/user',
        name:'user',
        component: ()=>import('@/views/userCenter/index.vue'),
        children: [
          { path: 'member', component: ()=>import('@/views/userCenter/home/index.vue') },
          { path: 'order', component: ()=>import('@/views/userCenter/order/index.vue') },
        ]
      },

      // 登入注册
      { path:'/login', name: 'login',meta:{login:true}, component:()=>import('@/views/login') },
      { path:'/register', name: 'register',meta:{login:false}, component:()=>import('@/views/login') },
    ]
  },
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

export default router
