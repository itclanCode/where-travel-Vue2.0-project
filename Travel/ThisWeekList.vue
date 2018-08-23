<template>
    <div class="wrap">
          <div class="top">
              <span class="week-left">本周热门榜单</span>
              <span class="week-right">全部榜单</span>
          </div>
          <div class="bottom wrapper" ref="wrapper">
                <ul class="content">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
          </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "IndexThisWeek",
        mounted () {
            const wrapper =  this.$refs.wrapper;
            let scroll = new BScroll(wrapper,{
                scrollX: true
            });
            console.log(scroll);
            
        }
    }
</script>

<style lang="stylus" scoped>
.wrap
  margin-top: .2rem
  background: #fff
  position:relative
  .top 
    padding: 0 .7rem 0 .2rem
    height: .84rem
    line-height: .84rem
    &:after 
       content: '' 
       height: 0
       overflow:hidden 
       clear: both 
    .week-left
        float: left 
        font-size: .32rem
        color: #212121;
    .week-right
        float:right
        font-size: .24rem
        color: #616161
   .bottom
     width:1000%
     position:absolute 
     left:0
     top:0.84rem
     overflow:hidden
     height: 3rem
     padding: 0 .1rem .2rem .2rem
     overflow-x:scroll
     li 
       width: 2rem
       height: 2.8rem
       border: 1px solid red
       float: left 
       margin-right:.1rem
        
</style>