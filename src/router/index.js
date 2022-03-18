import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout'
import { adminRouter } from '@/router/admin-router.js'
import { createPermission } from '@/router/permission.js'
import { h } from 'vue'
const routes = [
  {
    name: 'Layout',
    component: Layout,
    redirect:'/home',
    // path:'/',
    children:[
      {path:'/home',name:'home',component:()=>import('@/views/Home')},
      {path: '/good-list',component:()=>import('@/views/goodList.vue')},
      {path: '/good-list/:id',component:()=>import('@/views/goodList.vue')},
      {path: '/live-slice',component:()=>import('@/views/liveSlice.vue')},
      { path:'/product/:id',meta:{title:'商品详情'}, component:()=>import('@/views/product') },
      //购物车
      {
        path: '/cart', name: 'Cart',meta:{title:'购物车',author:true}, component:()=>import(/* webpackChunkName: "about" */ '../views/cart')
      },

      { path: '/payment_settlement', name: 'settlement',meta:{title:'订单确认',author:true}, component:()=> import('@/views/userCenter/payment/settlement.vue')},
      { path: '/payment_pay', name: 'pay',meta:{title:'支付页',author:true}, component:()=> import('@/views/userCenter/payment/pay.vue')},
      { path: '/payment_result', name: 'result',meta:{title:'支付结果',author:true}, component:()=> import('@/views/userCenter/payment/result.vue')},
      {
        path: '/user',
        name:'user',
        redirect:'/user/member',
        component: ()=>import('@/views/userCenter/index.vue'),
        children: [
          { path: 'member',meta:{title:'个人中心',author:true}, component: ()=>import('@/views/userCenter/home/index.vue') },
          {path: 'address',meta:{title: '地址管理'},author:true,component:()=>import('@/views/userCenter/home/address.vue') },
          {path: 'collect',meta:{title: '我的收藏'},author:true,component:()=>import('@/views/userCenter/home/collect.vue') },
          { path: 'order',meta:{title:'订单信息',author:true},component: ()=>import('@/views/userCenter/order/index.vue')},
          { path: 'order/:id',meta:{title:'订单详情',author:true},component:()=>import('@/views/userCenter/order/detail.vue')
            // component:{render:()=>h(<RouterView />)},
            // children:[
            //   {path:'', component: ()=>import('@/views/userCenter/order/index.vue') },
            //   {path:':id',component:()=>import('@/views/userCenter/order/detail.vue')}
            // ]
          },
        ]
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name:'login',
    component: ()=>import('@/views/login/login.vue')
  },
  {
    path: '/login-admin',
    name:'adminLogin',
    component: ()=>import('@/views/login/adminLogin.vue')
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
