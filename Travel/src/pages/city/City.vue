<template>
    <div>
          <city-header :city-title="cityTitle" :city-select="citySelect"></city-header>
          <city-jin-nei :hot-cities="hotCities" :cities="cities"></city-jin-nei>
    </div>
</template>

<script>
    import CityHeader from "./components/Header"
    import CityJinNei from "./components/jinNei"
    import axios from "axios"

    export default {
        name: "City",
        data(){
            return {
                cityTitle:'',
                citySelect: [],
                hotCities:[],
                cities: {}
            }
        },
        components: {
            CityHeader,
            CityJinNei
        },
        mounted() {
            this.getCityInfo(); 
        },
        methods: {
           getCityInfo(){
               axios.get('/static/mock/city.json')
               .then(res => {
                    console.log(res);
                    res = res.data;
                   if (res.ret === true) {
                       let data = res.data;
                       this.cityTitle = data.cityTitle;
                       this.citySelect = data.citySelect;
                       this.hotCities = data.hotCities;
                       this.cities = data.cities;

                   }
               })
           }
        }
    }
</script>

<style lang="stylus" scoped>

</style>