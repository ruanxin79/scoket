<template>
  <div id="my-app">
    <router-view></router-view>
  </div>
</template>

<script>
import store from './vuex/store'

export default {
  store
}
</script>

<style lang="scss">
@import './common/css/common.css';
  html,body,#my-app{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  ol,ul,li,{
    list-style: none;
  }
</style>
