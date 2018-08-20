<template>
    <div class="swiper-wrap">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="item in imgList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            
            <!-- Optional controls -->
            <div class="swiper-pagination"   slot="pagination"></div>
       </swiper>
    </div>
</template>

<script>
export default {
  name: "IndexBanner",
  data () {
      return {
          swiperOption: {
              pagination: ".swiper-pagination",
              paginationClickable: true,
              loop: true
          },
          imgList: [
              {id:1,imgUrl:"http://img1.qunarzz.com/piao/fusion/1808/5e/514ce60160e62602.jpg_750x200_9b0074e2.jpg"},
              {id:2,imgUrl:"http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg"},
              {id:3,imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/bd/8e4a1c3f470d3702.jpg_750x200_f1f0a8c7.jpg"},
              {id:4,imgUrl:"http://img1.qunarzz.com/piao/fusion/1806/3c/c72a1ccd4d7b2202.jpg_750x200_b88bbab4.jpg"},
              {id:5,imgUrl:"http://img1.qunarzz.com/piao/fusion/1801/bd/04554e7c67650302.jpg_750x200_4293d60a.jpg"},
              {id:6,imgUrl:"http://img1.qunarzz.com/piao/fusion/1806/1c/4847ea66072c7b02.jpg_750x200_c32457fb.jpg"},
              {id:7,imgUrl:"http://img1.qunarzz.com/piao/fusion/1807/40/1d7be74ed1584002.jpg_750x200_c41233c9.jpg"},
              {id:8,imgUrl:"http://img1.qunarzz.com/piao/fusion/1807/22/382624cbe97b0502.jpg_750x200_36a074d6.jpg"},
              {id:9,imgUrl:"http://img1.qunarzz.com/piao/fusion/1808/c6/44fce1467be17702.jpg_750x200_4a5f74a0.jpg"}

          ]
      }
  }
};
</script>

<style lang="stylus" scoped>
.swiper-wrap >>> .swiper-pagination-bullet-active
   background: #fff
.swiper-wrap
    height: 0
    padding-bottom: 27%
    .swiper-img
        width: 100%
        min-width: 7.5rem
        height: 2rem
</style>

