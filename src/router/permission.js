



import { getAccessToken } from '@/utils/cache.js'
import store from '@/store'
// 路由权限管控
export function createPermission(router){

  router.beforeEach(async (to,from,next)=>{
    console.log('===路由=>',to)
    if(/^\/admin\//.test(to.fullPath)){
      const adminToken = getAccessToken('admintoken')
      if(adminToken && !store.getters.adminLoginStatus){
        await store.dispatch('adminUser/getUserInfo').catch(()=>{
          store.commit('adminUser/removeToken')
          return next({path:'/login',query:{redirect:to.fullPath}})
        })
        return  next({...to,redirect: true})
      }
      if(!adminToken) {
        return await next({path:'/login-admin',query:{redirect:to.fullPath}})
      }else {
       return  await next()
      }
    }
    const token = getAccessToken()
    if(token && !store.getters.loginStatus){ // 防止刷新后，用户信息失效
      await store.dispatch('home/getUserInfo')
       return  next({...to,redirect: true})
    }
    if(to.meta && to.meta.author){ //需要登入的
      if(!token){
        return next({path:'/login',query:{redirect:to.fullPath}})
      }else {
        next()
      }
    }else {
      next()
    }

  })

  router.afterEach((to) => {

  });

  router.onError(error=>{
    console.log('路由错误',error)
  })
}

