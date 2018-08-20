<template>
    <div>
          <index-header :city="city"></index-header>
          <index-banner :swiperList="swiperList"></index-banner> 
          <index-icon></index-icon> 
    </div>
</template>

<script>
    import IndexHeader from './components/Header' // 头部header组件
    import IndexBanner from './components/Banner' // banner组件
    import IndexIcon from './components/Icon'
    import axios from 'axios'
    export default {
        name: "Index",
        data () {
            return {
                city: '',
                swiperList: []
            }
        },
        methods: {
            getIndexInfo () {
                axios.get('/static/mock/index.json')
                .then (res => {
                    res = res.data;
                    if (res.ret === true) {
                        const data = res.data;
                        this.city = data.city;
                        this.swiperList = data.swiperList;
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
            IndexIcon
        }
    }
</script>

<style lang="stylus" scoped>
 
</style>