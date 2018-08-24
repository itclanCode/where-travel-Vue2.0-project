<template>
    <div class="wrap">
          <index-header :city = "city"></index-header>
          <index-banner :swiperList = "swiperList"></index-banner> 
          <index-icon :iconList = "iconList"></index-icon> 
          <index-position :position="position"></index-position>
          <index-tick-sale :tickOnsale="tickOnsale"></index-tick-sale>
          <index-this-week :thisWeekList="thisWeekList"></index-this-week>  
          <index-guess-like :guessList="guessList"></index-guess-like>   
    </div>
</template>

<script>
    import IndexHeader from './components/Header' // 头部header组件
    import IndexBanner from './components/Banner' // banner组件
    import IndexIcon from './components/Icon'
    import IndexPosition from './components/Position'
    import IndexTickSale from './components/TickSale'
    import IndexThisWeek from './components/ThisWeekList'
    import IndexGuessLike from './components/GuessLike'
    import axios from 'axios'
    export default {
        name: "Index",
        data () {
            return {
                city: '',
                swiperList: [],
                iconList: [],
                position: [],
                tickOnsale: [],
                thisWeekList: [],
                guessList:[]
            }
        },
        methods: {
            getIndexInfo () {
                axios.get('/static/mock/index.json')
                .then (res => {
                    res = res.data;
                    if (res.ret === true && res.data) {
                        const data = res.data;
                        this.city = data.city;
                        this.swiperList = data.swiperList;
                        this.iconList = data.iconList;
                        this.position = data.position;
                        this.tickOnsale = data.tickOnsale;
                        this.thisWeekList = data.thisWeekList;
                        this.guessList = data.guessList;
                    }
                })
                .catch (err => {
                    console.log(err);
                })
            }
        },
        mounted () {
            this.getIndexInfo();
        },
        components: {
            IndexHeader,
            IndexBanner,
            IndexIcon,
            IndexPosition,
            IndexTickSale,
            IndexThisWeek,
            IndexGuessLike
        }
    }
</script>

<style lang="stylus" scoped>
.wrap 
   height: 100%
   height:100%
   background: #F5F5F5
</style>