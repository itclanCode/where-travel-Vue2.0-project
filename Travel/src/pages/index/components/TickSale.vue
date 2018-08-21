<template>
    <div class="border-bottom">
        <div class="wrap border-top" v-for="(item,index) in tickOnsale" :key="index" >
               <div class="case border-right">
                  <img class="imgIntro" :src="item.LeftImgUrl" alt="">
               </div>
               <div class="case">
                   <img class="imgIntro" :src="item.RightImgUrl" alt="">
               </div>
          </div>
    </div>
</template>

<script>
    export default {
        name: "IndexTickSale",
        props:{
            tickOnsale:{
                type:Array
            }
        }
    }
</script>

<style lang="stylus" scoped>
.wrap
  display: flex
  text-align:center
  line-height: 1rem
  margin-top:.2rem
  background:#fff
  height: 1.4rem
  .case 
    flex: 1
    height: 1.4rem
    font-size: .28rem
    .imgIntro
       widht: 3.75rem
       height:1.4rem

</style>