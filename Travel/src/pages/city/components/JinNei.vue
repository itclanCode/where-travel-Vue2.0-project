<template>
    <div>
        <div class="city-list">
               <h2>热门城市</h2>
               <ul class="mp-list clearfix mp-td3">
                    <li @click="handleClick(item.name)" v-for="item in hotCities" :key="item.id"  class="list border-right">{{item.name}}</li>
               </ul>
        </div>
        <div class="city-list">
               <h2>字母排序</h2>
               <ul class="mp-list clearfix mp-td6">
                       <router-link to="">
                            <li class="list"  @click="setScroll" v-for="(value,key) in cities" :key="key">{{key}}</li>
                       </router-link>         
               </ul>
        </div>
        <div class="city-list" id="city-list" v-for="(value,key) in cities" :key="key" ref="cityList">
               <h2 ref="keyLocation" :id="key">{{key}}</h2>
               <ul class="mp-list clearfix mp-td4">
                    <li @click="handleClick(item.name)" v-for="item in value" :key="item.id" class="list border-right">{{item.name}}</li>
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
        },
        computed: {
            getNum (){
                for(key in cities){
                    console.log(key);
                }
            }
        },
        mounted(){
            this.setScroll();
          
        },
        methods: {
            setScroll(ev) {
               
            },
            handleClick(city){
                // changeCity是一个方法,city作为参数传递过去，派发一个changeCity的方法,下面直接用commit去触发也是一样的
                this.$store.dispatch('changeCity',city);  
                this.$router.push("/");
                //alert(city);
            }
        }
    }
</script>

<style lang="stylus" scoped>
.city-list >>> .mp-list .list 
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
.city-list >>> .mp-td6 .list   
   width: 16.66%
   border-bottom: none
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