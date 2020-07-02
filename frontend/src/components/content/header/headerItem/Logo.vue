<template>
  <div id="logo">
    <img src="~assets/img/logo.png" alt="logo"/>
    <span>X X 电影</span>
  </div>
</template>

<script>
  export default {
    name: "Logo"
  }
</script>

<style scoped>
  #logo {
    height: 70px;
    width: 170px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  img {
    width: 70px;
  }

  span {
    width: 100px;
    font-size: 24px;


  }
</style>
