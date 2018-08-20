<template>
    <div>
          <index-header></index-header>
          <index-banner></index-banner> 
          <index-icon></index-icon> 
    </div>
</template>

<script>
    import IndexHeader from './components/Header' // 头部header组件
    import IndexBanner from './components/Banner' // banner组件
    import IndexIcon from './components/Icon'
    export default {
        name: "Index",
        components: {
            IndexHeader,
            IndexBanner,
            IndexIcon
        }
    }
</script>

<style lang="stylus" scoped>
 
</style>