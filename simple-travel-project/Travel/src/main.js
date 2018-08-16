// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' // 引入fastclick库,解决300毫秒问题
import VueAwesomeSwiper from 'vue-awesome-swiper' // 引入swiper插件
import store from '@/store'  // 引入store,vuex
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css' // 全局引入重置样式
import 'styles/border.css' // 引入解决1像素问题
import 'styles/iconfont.css'// 引入字体图标库

Vue.config.productionTip = false
fastClick.attach(document.body) // 将fastClick绑定到document身上
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
