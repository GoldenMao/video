<template>
  <div class="RightNavbar">
    <router-link to="/home">首页</router-link>
    <router-link to="/movie">电影</router-link>
    <router-link to="/tvplay">电视剧</router-link>
    <router-link to="/cartoon">动漫</router-link>
    <router-link to="/special">专题</router-link>
  </div>
</template>

<script>
  export default {
    name: "RightNavbar"
  }
</script>

<style scoped>
  .RightNavbar {
    font-size: 16px;
    display: flex;
    width: 300px;

  }

  a {
    text-align: center;
    width: 60px;
    height: 35px;
    line-height: 35px;
    transition: all .28s ease-in .1s;
  }
  a:hover{
    background-color: coral;
    border-radius: 5px;
    transform:scale(1.1);
    color: #fffccf;
  }
</style>
