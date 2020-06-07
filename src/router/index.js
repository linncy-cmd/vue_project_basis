import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
Vue.use(VueRouter)

// 实例
const router = new VueRouter({
  routes: [
    { path: '/', component: Login },
    { path: '/', redirect: '/login' }
    // { path: '/login', component: Login },
    // {
    //   path: '/home',
    //   component: Home,
    //   children: [
    //     { path: '/', component: Helloworld },
    //     { path: '/user', component: User },
    //     { path: '/rights', component: Rights },
    //     { path: '/roles', component: Roles },
    //     { path: '/categories', component: Categories },
    //     { path: '/params', component: Parmas },
    //     { path: '/goods', component: GoodsList },
    //     { path: '/goods/add', component: AddGoods },
    //     { path: '/order', component: Order },
    //     { path: '/report', component: Report }
    //   ]
    // }
  ]
})
// 路由守卫
// router.beforeEach((to, from, next) => {
//   // to and from are Route Object,next() must be called to resolve the hook}
//   // 如果用户访问登录页，直接放行
//   if (to.path === '/login') return next()
//   // 从sessionStorage 中获取保存的token 值
//   const tokenStr = window.sessionStorage.getItem('token')
//   // 没有token 强制跳转到登录页
//   if (!tokenStr) return next('/login')
//   next()
// })
export default router
