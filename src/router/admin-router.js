import AdminLayout from '@/admin/Layout'

export const adminRouter = [
  // 管理员页面
  {
    path: '/admin',
    name: 'admin',
    component: AdminLayout,
    redirect: '/home2',
    hidden: true,
    meta: {title: '首页',icon:'icon-yangshi_icon_tongyong_home'},
    children: [
      {path: 'home',component:()=>import('@/admin/home')}
    ]
  },
  {path:'/home2',redirect: '/admin/home',meta: {title: '首页',icon:'icon-yangshi_icon_tongyong_home'},name:'home2'},
  // 设置
  {path:'/admin',component: AdminLayout,redirect: '/admin/admin-user',meta: {title:"系统管理",icon:'icon-yangshi_icon_tongyong_home'},children: [
      {path:'admin-user',component:()=>import('@/admin/system/users'),meta:{title:"管理员管理"}},
      // {path:'role',component:()=>import('@/admin/system/role'),meta:{title:"角色管理"}},
      {path:'img-map', name:'imgMap',component:()=>import('@/admin/system/img-map'),meta:{title:"图床管理"}},
      {path:'userShop',component:()=>import('@/admin/system/shop-user'),meta:{title:"用户列表"}},
      // {path:'demo',component:()=>import('@/admin/system/demo.vue'),meta:{title:"demo"}}
    ]},
  //商品管理
  {
    path:"/admin/product",component: AdminLayout,redirect: '/admin/product/goods',meta: {title:'商品管理'},
    children: [
      {path:'add-prod-info', component:()=>import('@/admin/product/addProdInfo.vue'),meta:{title:"添加商品"}},
      {path:'goods',component:()=>import('@/admin/product/goods'),meta:{title:"商品管理"}},
      {path:'crate',component:()=>import('@/admin/product/crate'),meta:{title:"商品分类管理"}},
      {path:'specs',component:()=>import('@/admin/product/specs'),meta:{title:"商品属性管理"}},
      {path:'tags',component:()=>import('@/admin/product/tags'),meta:{title:"商品标签管理"}},
    ]
  },
  {
    path: "/admin/order",component: AdminLayout,redirect: '/admin/order/all',meta: {title:"订单管理",icon:'icon-yangshi_icon_tongyong_home'},
    children: [
      {path: 'all',meta: {title:'订单管理'},component:()=>import('@/admin/order')}
    ]
  }


]
