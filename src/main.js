import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './router/router'
import App from './App'
//import vueResource from 'vue-resource'
import router from './router/router'
import Mock from 'mockjs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'
Vue.use(ElementUI)
Vue.config.productionTip = false
//Vue.use(vueResource)
Vue.use(VueRouter)
Vue.prototype.$Mock = Mock
Vue.prototype.axios = Axios;
// 创建一个路由器实例
/* eslint-disable no-new */
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  },
});
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
