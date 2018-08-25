<template>
    <div>
          <div class="mp-wrap">
              
                <h2 class="mp-modtitle">周末去哪儿</h2>
                <ul class="mp-product-wrap">
                    <li class="mp-product-item" v-for="item in weekWhereList" :key="item.id">
                         <div><img class="product-img" :src="item.imgUrl" alt=""></div>
                         <div class="mp-product-info">
                             <p class="product-name">{{item.productName}}</p>
                             <p class="product-desc">{{item.productDesc}}</p>
                         </div>
                    </li>
                </ul>
                <div class="mp-price-desc-info"><strong>票面价</strong>是指通过景区指定窗口售卖的纸质门票上标注的价格</div> 
          </div>
    </div>
</template>

<script>
    export default {
        name: "IndexWhereGo",
        props: {
            weekWhereList: {
                type: Array
            }
        }
    }
</script>

<style lang="stylus" scoped>
.mp-modtitle
  height: .8rem
  line-height: .8rem
  color: #212121
  padding-left: .26rem
.mp-product-wrap
  .mp-product-item
    margin-bottom: .2rem
    .product-img
      width: 100%
      height: 2.84rem
    .mp-product-info
      padding-left: 0.26rem
      background: #fff
      .product-name
            padding-right: 1.4rem;
            color: #212121;
            font-size: .28rem;
            line-height: .48rem;
            white-space: nowrap;
            text-overflow: ellipsis
      .product-desc
            color: #616161;
            font-size: .24rem;
            line-height: .42rem;
            white-space: nowrap;
            text-overflow: ellipsis
.mp-price-desc-info  
   height: .6rem
   padding: .14rem .1rem
   font-size: .24rem
   background: #fff
   color: #616161;
   line-height: .6rem
</style>