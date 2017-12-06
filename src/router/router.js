import Login from '../components/login'
import Wechat from '../components/chat/wechat'
import Home from '../components/Home'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/wechat',
      name: 'wechat',
      component: Wechat
    },
    {
      path: '*',
      hidden: true,
      redirect: { path: '/home' }
    }
  ]
})
