<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :letter="letter" :cities="cities" :hot="hotCities"></city-list>   
        <city-alphabet @change="handleLetterClick" :cities="cities"></city-alphabet>   
    </div>
</template>

<script>
    import CityHeader from './components/Header' // 引入城市头部组件
    import CitySearch from './components/CitySearch' // 引入城市搜索
    import CityList from './components/List' // 引入城市列表
    import CityAlphabet from './components/Alphabet' // 引入字母表
    import axios from 'axios'  //引入axios
    
    export default {
        name: "City",
        components: {
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet

        },
        data () {
            return {
                cities: {},
                hotCities: [],
                list: '',
                letter: ''
            }
        },
        methods: {
            getCityInfo() {
                axios.get('/static/mock/city.json')

                .then(this.handleGetCityInfoSucc);
            },
            handleGetCityInfoSucc (res) {
                console.log(res);
                res = res.data;
                if(res.ret && res.data){
                    const data =  res.data;
                    this.cities = data.cities;
                    this.hotCities = data.hotCities;
                }
            },
            handleLetterClick (letter){
                this.letter =  letter;
                //console.log(letter);
            }
        },
        mounted () {
            console.log(1);
            this.getCityInfo();
        }
    }
</script>

<style lang="stylus" scoped>

</style>

