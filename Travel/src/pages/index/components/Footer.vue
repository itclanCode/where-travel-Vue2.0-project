<template>
    <div>
          <div class="main-wrapper">
              <ul class="main-nav-wrapper" :class="showStatus?defaultClass:activeClass">
                  <li v-for="item in footerList"   :key="item.id" >
                     <!--  <img class="nav-icon" :src="item.imgUrl"> -->
                      {{item.title}}
                  </li>
              </ul>
              <div class="toogle"><span class="tag" @click="toogleList">更多</span></div>      
          </div>
          <div class="footer-nav border-bottom">
                  <ul class="footer-ul">
                      <li>登录</li> 
                      <li>我的订单</li>
                      <li>最近浏览</li>
                      <li>关于我们</li>   
                  </ul>
          </div>
          <div class="mobile-pc">
                <ul class="mobile-list">
                    <li>触屏版</li>
                    <li class="pc">电脑版</li>
                </ul>
          </div>
          <div class="copy-right">
                 <span>Qunar 京ICP备05021087</span><a class="yijian" href="">意见反馈</a>
          </div>       
    </div>
</template>

<script>
    export default {
        name: "IndexFooter",
        data () {
            return {
                footerUlList: this.footerList,
                showStatus: true,
                defaultClass: 'defaultLi',
                activeClass: 'activeLi'

            }
        },
        props: {
            footerList:{
                type: Array
            }
        },
        computed: {
           
           
        },
        mounted () {
              
        },
        methods: {
           toogleList() {
               if(this.showStatus){
                   this.showStatus = true;                 
               }else{
                   this.showStatus = false;
               }
               this.showStatus = !this.showStatus;
              
           }
        }
    }
</script>

<style lang="stylus" scoped>
.main-wrapper
    .main-nav-wrapper
        padding: 0rem .84rem 0 .84rem
        text-align: center
    .activeLi
       height:auto
       li
            display: inline-block
            height: .62rem
            width: 1.3rem
            text-align: center
            line-height: .62rem
            font-size: 0.24rem
            .nav-icon
              width: .44rem
              height: .44rem
    .defaultLi
        height: 0.6rem
        overflow:hidden
        li
            display: inline-block
            height: .62rem
            width: 1.3rem
            text-align: center
            line-height: .62rem
            font-size: 0.24rem
            .nav-icon
              width: .44rem
              height: .44rem
    .toogle
       padding-right: 1.5rem
       display: flex
       justify-content: flex-end
       .tag
          color: #9e9e9e
          font-size: .28rem
.footer-nav 
  padding: 0.2rem 0 0.2rem 0.2rem
  border-bottom: .02rem solid #cacaca
  .footer-ul
     li 
       display: inline-block
       margin-right: .4rem
       color: #25a4bb
       font-size:.28rem
       text-align:center   
       line-height:.4rem 
          
.mobile-pc
    text-align: center
    padding: 0.2rem 0 0 0
    .mobile-list
      li 
        display:inline-block
        margin: 0 .3rem
     .pc
       color: #25a4bb
.copy-right
   text-align: center
   color: #9e9e9e
   font-size: .28rem
   padding: .2rem
   .yijian
      color: #9e9e9e

        
    
        
</style>