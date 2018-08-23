<template>
    <div class="wrap">
          <div class="top clearfix">
              <span class="week-left">本周热门榜单</span>
              <span class="week-right">全部榜单</span>
          </div>
          <div class="bottom wrapper" ref="wrapper">
                <ul class="content" ref="content">
                    <li ref="liitem" v-for="item in thisWeekList" :item="item" :key="item.id">
                        <img class="imgList" :src="item.imgUrl" :alt="item.mpHotsaleSight">
                        <img class="mp-hotsale-tagimg" v-show="showMpHotImg" ref="mpHotsaleTagimg" :src="item.mpHotsaleTagimg">
                        {{item.mpHotsaleSight}}
                        <p><span class="mp-hotsale-price">{{item.mpHotSalePrice}}</span>起</p>

                    </li>
                </ul>
          </div>
    </div>
</template>

<script>
    
    export default {
        name: "IndexThisWeek",
        data(){
            return {
                mpHotImg: true
            } 
        },
        props: {
            thisWeekList:{
                type: Array
            },
            mpHotsaleTagimg:{
                type: String
            }
        },
        created(){
            //this.initHorScroll();
            
        },
        mounted () {  
           this.showMpHotImg();
        },
        computed: {
          
          
        },
        methods: {
           showMpHotImg (item){
              if(item.mpHotsaleTagimg){
                  return this.mpHotsaleTagimg;
              }
          }
        },
        watch: {
           
        }

    }
</script>

<style lang="stylus" scoped>
.clearfix
&:after 
    content:"";
    height:0
    clear:both
    display: block
    overflow:hidden 
.wrap >>> .wrapper 
     width: 7.5rem
.wrap
  margin-top: .2rem
  background: #fff
  position:relative
  .top 
    padding: 0 .7rem 0 .2rem
    height: .84rem
    line-height: .84rem
    .week-left
        float: left 
        font-size: .32rem
        color: #212121;
    .week-right
        float:right
        font-size: .24rem
        color: #616161
   .bottom
     position:relative 
     overflow-x:scroll
     white-space: nowrap
     height: 3rem
     .content 
         width: 7.5rem
         height: 2.8rem
         padding: 0 0.2rem
       li 
         width: 2rem
         height: 2.8rem 
         margin-right:.1rem
         display:inline-block
         position:relative
         text-align:center
         color:#212121
         .imgList
             width:2rem
             height: 2rem
             display:block
             margin-bottom: .2rem
         .mp-hotsale-tagimg
             width:  0.84rem
             height: 0.4rem
             position:absolute 
             left: 0
             top:0
             z-index: 999
         p
            margin-top:.1rem
            .mp-hotsale-price
                color:#ff8300
                display:inline-block
                vertical-align:middle
        
</style>