<template>
    <div>
          <div class="header border-bottom">
             <div class="left-return">
                  <i class="iconfont icon-leftarrow"></i>
             </div>
             <div class="middle-search">
               <div class="search-wrap">
                    <form action="" class="search-form">
                          <input type="text" placeholder="输入城市/景点/游玩主题" class="search-input">
                    </form>
               </div>
                 
   
             </div>
             <div class="right-city">
                 <router-link to="/city" tag="div"><span class="city">{{city}}</span><i class="iconfont icon-ico_arrows_unfold"></i></router-link>
            </div> 
         </div>
    </div>
</template>

<script>
    export default {
        name: "IndexHeader",
        props: {
            city: String
            
        }
    }
</script>

<style lang="stylus" scoped>
.header  
    height: .9rem
    background: #00BCD4 
    display: Flex
    .left-return
        padding: .3rem 0 .3rem .20rem
        .icon-leftarrow
            width: .8rem
            text-align:center
            color: #fff
            font-size: .4rem
            font-weight: bold

    .middle-search
        Flex: 1
        padding: .16rem 0 .16rem .3rem
        .search-wrap
            height: .6rem
            border-radius: .1rem
            background: #fff
            .search-form
                .search-input
                    width: 100%
                    border-radius: .1rem
                    height: .6rem
                    outline: none
                    border: none
                    line-height: .6rem
                    text-indent: .4rem
                    color: #e4e7ea;
    .right-city
       padding: .35rem  .3rem  .26rem .3rem   
       .city 
          color: #fff 
          font-size: .28rem
       .icon-ico_arrows_unfold
          color: #fff
          font-size: .2rem
          margin-left: .02rem
         
</style>