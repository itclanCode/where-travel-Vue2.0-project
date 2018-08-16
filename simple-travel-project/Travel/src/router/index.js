import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
//import Home from '@/pages/home/Home'
//import City from '@/pages/city/City'
//import Detail from '@/pages/detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import ('@/pages/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import ('@/pages/city/City')
    },
     {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import ('@/pages/detail/Detail')
    }
  ],
  // 让页面切换的时候,始终回调顶部
  scrollBehavior (to,from,savePosition) {
    return {x:0,y:0}
  }
})
