<template>

  <div class="searchout">
    <div class="search" :class="{changeShadow:isTrue}">
      <input type="text" placeholder="请输入关键词搜索..." @focus="inpFocus" @blur="inpBlur"/>
      <div class="search-inner">
        <img src="~assets/img/search.png" alt="search"/>
        <span>搜索</span>
      </div>
    </div>

    <ul v-if="isTrue" class="history">
      <li><a>天下无贼</a></li>
      <li><a>叶问</a></li>
      <li><a>当幸福来敲门</a></li>
      <li><a>大象席地而坐</a></li>
      <li><a>征途2</a></li>
      <li><a>血战钢锯岭</a></li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: "Search",
    data() {
      return {
        isTrue: false,
      }
    },
    methods: {
      inpFocus() {
        this.isTrue = true
      },
      inpBlur() {
        this.isTrue = false
      }
    }
  }
</script>

<style scoped>
  .searchout {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 110px;


  }

  .history {
    list-style: none;
    width: 500px;
    border: 2px solid rgb(255, 161, 36);
    border-top: none;
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-wrap: wrap;
    background-color: #F0F0F0;
  }

  li {
    margin: 5px 0 0 20px;
    width: 140px;




  }

  .search {
    height: 50px;
    width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    border: 2px solid rgb(255, 161, 36);
    /*box-shadow: 5px 5px 10px 5px rgba(24, 24, 24, 0.6);*/
  }

  .changeShadow {
    /*box-shadow: 5px -5px 10px 5px rgba(255, 161, 36, 0.6);*/
    border-radius: 10px 10px 0 0;
    border: 2px solid rgb(255, 161, 36);
    border-bottom: none;
  }

  input {
    flex: 1;
    line-height: 46px;
    border: none;
    margin-left: 20px;
    border-radius: 10px 0 0 10px;
  }

  input:focus {
    outline: none;
    /*outline:#00FF00 dotted red;*/
    /*border: 1px solid orange;*/
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
    background-color: rgb(255, 161, 36);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 10px 10px 0;
    cursor: pointer;
  }
</style>
