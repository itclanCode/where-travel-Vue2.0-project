<template>
    <div>
        <div class="city-list">
               <h2>热门城市</h2>
               <ul class="mp-list clearfix mp-td3">
                    <li v-for="item in hotCities" :key="item.id"  class="border-right">{{item.name}}</li>
               </ul>
        </div>
        <div class="city-list">
               <h2>字母排序</h2>
               <ul class="mp-list clearfix mp-td6">
                    <li v-for="(value,key) in cities" :key="key"  class="border-right">{{key}}</li>
               </ul>
        </div>
        <div class="city-list" v-for="(value,key) in cities" :key="key">
               <h2>{{key}}</h2>
               <ul class="mp-list clearfix mp-td4">
                    <li v-for="item in value" :key="item.id" class="border-right">{{item.name}}</li>
               </ul>
        </div>
        
        
    </div>
</template>

<script>
    export default {
        name: "cityJingNei",
        props:{
            hotCities:{
                type: Array
            },
            cities: {
                type: Object
            }
        }
    }
</script>

<style lang="stylus" scoped>
.city-list >>> .mp-list li 
     height: .9rem;
     line-height: .9rem
     font-size: .28rem
     text-align: center
     color: #212121
     float: left
     border-bottom: .01rem solid #eaeaea
     box-sizing:border-box
.city-list >>> .mp-td3 li 
   width: 33.3%
.city-list >>> .mp-td6 li   
   width: 16.66%
.city-list >>> .mp-td4 li 
    width: 25%
.clearfix:after 
    content: "" 
    display: block 
    clear:both 
    height:0 
    overflow: hidden 
    zoom: 1
.city-list
   background: #fff
   h2
     font-size: .24rem
     padding: .24rem .3rem
     background: #F5F5F5
    
          
</style>