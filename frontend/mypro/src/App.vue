<template>
  <div id="app">
    <div>
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  // import NotFound from "./components/common/notfound404/NotFound";

  export default {
    name: 'App',
    components: {

    }
  }
</script>

<style>
  @import "assets/css/base.css";
  #app{
    width: 1190px;
    height: 100%;
    margin:0 auto;
  }
</style>
