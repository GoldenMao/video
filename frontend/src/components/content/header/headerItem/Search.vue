<template>

  <div class="search">
    <input type="text" placeholder="  请输入关键词搜索..."/>
    <div class="search-inner">
      <img src="~assets/img/search.png" alt="search"/>
      <span>搜索</span>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Search"
  }
</script>

<style scoped>
  .search {
    height: 50px;
    width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;

    box-shadow: 0px 0px 8px 6px rgba(24, 24, 24, 0.6);
  }

  input {
    flex: 1;
    line-height: 46px;
    border: none;
    border-radius: 10px;

  }

  img {
    width: 30px;
    height: 30px;
  }

  span {
    text-align: center;
    width: 50px;
    height: 24px;
  }

  .search-inner {
    height: 50px;
    width: 80px;
    background-color: orange;
    border: 1px solid #FFE42C;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 10px 10px 0;
  }
</style>
