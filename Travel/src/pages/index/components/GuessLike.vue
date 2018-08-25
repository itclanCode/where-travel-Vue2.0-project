<template>
    <div class="wrap">
         <h2 class="mp-group-title">猜你喜欢</h2>
         <ul class="mp-like-list">
             <li class="border-bottom" v-for="item in guessList" :key="item.id">
                 <div class="mp-like-con">  
                     <div class="mp-like-imgcon">
                         <img class="mp-like-img" :src="item.imgUrl" alt="">
                         <p class="mp-like-tag" v-if="item.mpLikeTag"><img class="mp-img"  :src="item.mpLikeTag" alt=""><span class="kdmr">可定明日</span></p>
                     </div>
                     <div class="mp-like-info">
                            <div class="mp-like-title mp-ellipsis">{{item.title}}</div>
                            <div class="mp-like-comment"><i></i><span>{{item.mpCommentNum}}条评论</span></div>
                            <div class="mp-like-price"><p><span class="mpg-price-num">{{item.mpgPriceNum}}</span>起</p><p><span class="mp-like-address">{{item.mpLikeAddress}}</span></p></div>
                     </div>
                 </div>
                 <div class="mp-like-feature" v-if="item.mpLikFeature"><p class="mp-link-feature">{{item.mpLikFeature}}</p></div>
             </li>
         </ul>
         <div class="watch-all-product">查看所有产品</div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                
            }
        },
        props: {
            guessList:{
                type:Array
            }
        },
        name: "IndexGuessLike",
        computed: {
        }
    }
</script>

<style lang="stylus" scoped>
.wrap 
   margin-top:.2rem
   padding: 0.2rem 0 0 0.2rem
   background: #fff
  .mp-group-title 
    color:#212121
    font-size: .32rem
    height: .44rem
    line-height: .44rem
  .mp-like-list
    margin-top:.2rem 
    li 
      width: 7.26rem
      padding-top:0.2rem
      padding-bottom: 0.2rem
      .mp-like-feature
        display: flex
        justify-content: center
        .mp-link-feature
            color: #f55
            font-size: .24rem
            margin-top: .48rem
            line-height: .34rem
            background: #fff9f9
      .mp-like-con
          width: 100%
          display: flex 
          .mp-like-imgcon
             margin-right: .2rem
             position:relative
          .mp-like-img
            width: 2rem
            height: 2rem
         .mp-like-tag
            width: 1.02rem
            height: .38rem
            position:absolute
            left:0
            top:0
            z-index: 333
            color:#fff
            line-height: .38rem
            .mp-img
               width: 1.02rem
               height: .38rem
            .kdmr 
              position:absolute 
              left:0
              top:0
      .mp-like-title
         font-size: .32rem
         color: #212121
         height: .44rem
         line-height: .44rem
         margin-top: .26rem
      .mp-like-comment
         margin-top: .14rem;
         height: .34rem
      .mp-like-info
         width: 100%
         margin-top: .14rem
         height: .34rem
      .mp-like-price
             padding-right: .2rem
             margin-top: .22rem
             color: #616161
             font-size: .24rem
             line-height: .4rem
             display: flex
             justify-content: space-between
             .mpg-price-num 
                color: #ff8300
                font-size: .4rem
                &:before 
                    content:"￥"
                    display:inline-block 
                    color: #ff8300
                    font-size: .24rem
  .watch-all-product
     text-align: center 
     color: #00afc7;
     padding: .2rem 0;
     font-size: .28rem;
     line-height: .4rem;
                
             
                 
      

</style>