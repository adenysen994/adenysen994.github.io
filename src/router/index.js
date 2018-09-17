import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import GoodsList from '@/components/Goods/GoodsList'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
// import store from '../store'

Vue.use(Router)

// const ifNotAuthenticated = (to, from, next) => {
//   if (!store.getters.isAuthenticated) {
//     next()
//     return
//   }
//   next('/')
// }
//
// const ifAuthenticated = (to, from, next) => {
//   if (store.getters.isAuthenticated) {
//     next('')
//     return
//   }
//   next('/login')
// }

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
      // beforeEnter: ifNotAuthenticated
    },
    {
      path: '/goods',
      name: 'goods',
      component: GoodsList
      // beforeEnter: ifAuthenticated
    },
    {
      path: '/login',
      name: 'login',
      component: Login
      // beforeEnter: ifNotAuthenticated
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
      // beforeEnter: ifNotAuthenticated
    }
  ],
  mode: 'history'
})
