<template>
   <div>
     <home-header></home-header>
     <home-swiper :list="swiperList"></home-swiper>
     <home-icons :list="iconList"></home-icons>
     <home-recommend :list="recommendList"></home-recommend>
     <home-weekend :list="weekendList"></home-weekend>
   </div>
</template>
<script>

//import HomeHeader from './components/Header' // 导入header.vue文件
import HomeSwiper from './components/Swiper' // 引入swiper插件
import HomeIcons  from './components/Icons' // 引入图标组件
import HomeRecommend from './components/Recommend' // 引入热销组件
import HomeWeekend from './components/Weekend'   // 引入周末游组件
import axios from 'axios' // 引入axios
import { mapState } from 'vuex'
export default {   // 使用异步组件
  name: "Home",
  components: {
    HomeHeader: () => import('./components/Header'),   
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data: function () {
    return {
       lastCity:'',   // 最后一次城市
       swiperList: [], // 轮播图片
       iconList: [],    // 图标
       recommendList: [],  // 热销评论,
       weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      
      axios.get('/static/mock/index.json?city='+this.city)
      .then(this.getHomeInfoSucc)
      
    },
    getHomeInfoSucc(res) {
       res = res.data;
       if (res.ret && res.data) {
         const data = res.data;
         console.log(data);
         this.swiperList = data.swiperList;
         this.iconList = data.iconList;
         this.recommendList = data.recommendList;
         this.weekendList = data.weekendList;
       }
       
    }

  },
  mounted () {
    this.lastCity = this.city; // 对上一次进行保存
    this.getHomeInfo() // 让页面挂载之后,去执行getHomeInfo()函数
  },
  activated () {  // 页面重新被显示的时候
    if (this.lastCity !== this.city) {
       this.lastCity = this.city;
       this.getHomeInfo();
    }
    console.log('active');
  }
}
</script>

<style lang="stylus" scoped></style>
