<template>
    <div>
          <div class="wrap" v-for="(item,index) in position" :key="index">
               <div class="case border-right">{{item.nearby}}</div>
               <div class="case">{{item.playWay}}</div>
          </div>
    </div>
</template>

<script>
    export default {
        name: "IndexPosition",
        props: {
            position: Array
        }
    }
</script>

<style lang="stylus" scoped>
.wrap
  display: flex
  text-align:center
  line-height: 1rem
  background:#fff
  .case 
    flex: 1
    height: 1rem
    font-size: .28rem
    

</style>