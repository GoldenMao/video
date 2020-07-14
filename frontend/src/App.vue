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
    /*width: 1190px;*/
    min-width: 620px;
    height: 100%;
    margin: 0 auto;
    font-size: 14px;
  }

  #container {
    margin-top: 20px;
  }

  /*屏幕自适应*/
  @media screen and (min-width: 1189px) {
    #app {
      width: 1190px;
    }
  }

  @media screen and (min-width: 960px) and (max-width: 1189px) {
    #app {
      width: 960px;
    }

  }

    @media screen and (min-width: 768px) and (max-width: 960px) {
    #app {
      width: 768px;
    }
  @media screen and (max-width: 768px) {
    #app {
      width: 620px;
    }
  }
  }
  /*屏幕自适应*/

/*  html {*/

/*  overflow-y: scroll;*/

/*}*/



:root {

  overflow-y: auto;

  overflow-x: hidden;

}


body {

  width: 100vw;

  overflow: hidden;

}
</style>
