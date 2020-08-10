<template>
  <div class="RightNavbar">
    <router-link to="/home" replace>首页</router-link>
    <router-link to="/movie" replace>电影</router-link>
    <router-link to="/tvplay" replace>电视剧</router-link>
    <router-link to="/cartoon" replace>动漫</router-link>
    <router-link to="/special" replace>专题</router-link>
  </div>
</template>

<script>
  export default {
    name: "RightNavbar"
  }
</script>

<style scoped>
  .RightNavbar {
    font-size: 18px;
    display: flex;
    width: 300px;

  }

  a {
    text-align: center;
    width: 60px;
    height: 35px;
    line-height: 35px;

  }

  a:hover {
    transition: all .35s ease-in .1s;
    background-color: coral;
    border-radius: 5px;
    color: #fffccf;
    transform: scale(1.1);
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -o-transform: scale(1.1);

  }
</style>
