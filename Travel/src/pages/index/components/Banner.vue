<template>
    <div class="swiper-wrap">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id">
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
  props: {
      swiperList: Array
  },
  data () {
      return {
          swiperOption: {
              pagination: ".swiper-pagination",
              paginationClickable: true,
              loop: true
          }
      }
   }
}
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

