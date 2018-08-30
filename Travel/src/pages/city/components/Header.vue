<template>
    <div>
        <header class="header">
               <div class="city-select-wrap">
                   <router-link to="/" tag="div" class="left-return">
                       <i class="iconfont icon-leftarrow"></i>
                   </router-link>
                   <h2 class="city-title">{{cityTitle}}</h2>
               </div>
               <div class="mp-tab-con">
                    <ul class="city-list">
                       <li @click="toggleTabs(index)" :class="{active:index == nowIndex}" v-for="(item,index) in citySelect" :key="index">{{item}}</li>
                    </ul>
               </div>
               
        </header>
    </div>
</template>

<script>
    export default {
        name: "cityHeader",
        props: {
            cityTitle: {
                type: String
            },
            citySelect: {
                type:Array
            }
        },
        data() {
            return {
                nowIndex: 0

            }
        },
        methods: {
            toggleTabs(index) {
               this.nowIndex = index;
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header 
   background:$bgColor       
   .city-select-wrap
       position:relative
       .left-return
          width: .8rem
          height: .68rem
          text-align:center
          line-height: .68rem
          position:absolute
          left:0
          top:0
          .icon-leftarrow
            color: #fff
            font-size: .36rem
        .city-title
          text-align: center
          line-height: .68rem
          color: #fff
          white-space: nowrap
          text-overflow: ellipsis
          font-size: .32rem
    .mp-tab-con
         overflow:hidden
         background: $bgColor 
         color:#fff
         padding: .2rem 1rem; 
         .city-list 
            display:flex
            justify-content:center
            border: 1px solid #fff
            border-radius: .03rem
            zoom: 1
            overflow: hidden
            li
              width: 50%
              height: .4rem
              text-align:center 
              line-height: .4rem
              font-size: .28rem;
              &.active 
                background: #fff 
                color:$bgColor 
             

</style>