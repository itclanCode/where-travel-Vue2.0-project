<template>
    <div>
         <div class="icon-wrap border-bottom">
             <swiper :options="swiperOption">
                 <swiper-slide  v-for="(page,index) in pages" :key="index">
                    <div class="icon-list"  v-for="item in page" :key="item.id">
                        <div class="icon-case"><img class="icon-img" :src="item.imgUrl" :alt="item.desc"></div>
                        <p class="desc">{{item.desc}}</p>
                    </div>
                 </swiper-slide>
             </swiper> 
         </div>
    </div>
</template>

<script>
    export default {
        name: "IndexIcon",
        props: {
            iconList: Array
        },
        data () {
            return {
                swiperOption: {
                     autoPlay: false
                }
            }
        },
        computed: {
            pages () {
                const pages = []
                this.iconList.forEach((item,index) => {
                    const page = Math.floor(index/8);
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item);
                })
                return pages
            }
        }

    }
</script>

<style lang="stylus" scoped>

.icon-wrap
  height: 2.8rem
  padding-bottom: 10%
  background: #fff
  .icon-list
        width: 25%
        float: left
        text-align:center
     .icon-case
        margin-top: 0.2rem
        .icon-img
            width: 1.1rem
            height: 1.1rem
        .desc
            font-size: .28rem
            color: #212121
            margin-top: .1rem
</style>