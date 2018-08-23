<template>
    <div class="wrap">
          <div class="top clearfix">
              <span class="week-left">本周热门榜单</span>
              <span class="week-right">全部榜单</span>
          </div>
          <div class="bottom wrapper" ref="wrapper">
                <ul class="content clearfix" ref="content">
                    <li ref="liitem" v-for="item in thisWeekList" :key="item.id"><img class="imgList" :src="item.imgUrl" :alt="item.mpHotsaleSight"></li>
                </ul>
          </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "IndexThisWeek",
        props: {
            thisWeekList:{
                type: Array
            }
        },
        created(){
            //this.initHorScroll();
        },
        mounted () {
            /* const wrapper =  this.$refs.wrapper;
            let scroll = new BScroll(wrapper,{
                scrollX: true,
                eventPassthrough:'vertical' //忽略竖直方向的滚动
            });
            console.log(scroll); */
            this.$nextTick(()=>{
                this.initHorScroll();   
            })
            
            
        },
        methods: {
            initHorScroll(){
                let width = 0+"rem";
                for (let i = 0;i<this.thisWeekList;i++){
                    //width += this.$refs.listitem[0].getBoundingClientRect().width;
                    width+=this.$refs.listitem[0].getBoundingClientRect().width;
                    console.log(width);
                }
                this.$refs.content.style.width=width+'rem';
                if (!this.scroll) {
                        this.scroll = new BScroll(this.$refs.wrapper, {
                            scrollX:true,
                            eventPassthrough:'vertical'
                        })
                } else {
                    this.scroll.refresh();
                }
            }
        },
        watch: {
            "thisWeekList"(){
                this.$nextTick(() => {
                    this.initHorScroll();
                })
            }
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
     width: 25rem
     position:absolute 
     left:0
     top:0.84rem
     overflow:hidden
     height: 3rem
     padding: 0 .1rem .2rem .2rem
     white-space nowrap
     .content 
         height: 2.8rem
         oveflow:hidden
       li 
         width: 2rem
         height: 2.8rem
         border: 1px solid red 
         margin-right:.1rem
         float: left
         .imgList
             width:2rem
             height: 2rem
        
</style>