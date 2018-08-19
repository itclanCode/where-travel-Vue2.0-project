<template>
    <div>
          <index-header></index-header>
          <index-banner></index-banner>  
    </div>
</template>

<script>
    import IndexHeader from './components/Header' // 头部header组件
    import IndexBanner from './components/Banner' // banner组件
    export default {
        name: "Index",
        components: {
            IndexHeader,
            IndexBanner
        }
    }
</script>

<style lang="stylus" scoped>
 
</style>