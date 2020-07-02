<template>
  <div id="app">
    <div id="head">
      <Header/>
    </div>
    <div id="container">
      <router-view></router-view>
    </div>
    <div id="footer"></div>

  </div>
</template>

<script>
  import Header from "components/content/header/Header";

  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style>
  @import "assets/css/base.css";

  #app {
    width: 1190px;
    height: 100%;
    margin: 0 auto;
  }

  #container{
    margin-top: 20px;
  }
</style>
