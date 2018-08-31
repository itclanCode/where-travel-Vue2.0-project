// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick' // 引入fastclick解决300毫秒延迟问题
import '@/assets/styles/border.css' // 引入解决1像素边框问题
import '@/assets/styles/reset.css' // 重置样式
import '@/assets/styles/iconfont/iconfont.css' 
//import '@/assets/js/MobileAdaptation.js'  // 移动端适配js
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper) 

Vue.config.productionTip = false
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
