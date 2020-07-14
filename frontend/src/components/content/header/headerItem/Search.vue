<template>

  <div :class="{changeShadow:isTrue}" class="search" >
    <input type="text" placeholder="请输入关键词搜索..." @focus="inpFocus" @blur="inpBlur"/>
    <div class="search-inner" >
      <img src="~assets/img/search.png" alt="search"/>
      <span>搜索</span>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Search",
    data(){
      return {
        isTrue:false,
      }
    },
    methods:{
      inpFocus(){
        this.isTrue=true
      },
      inpBlur(){
        this.isTrue=false
      }
    }
  }
</script>

<style scoped>
  .search {
    height: 50px;
    width: 500px;
    margin: 0 auto 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    box-shadow: 5px 5px 10px 5px rgba(24, 24, 24, 0.6);
  }
  .changeShadow{
        box-shadow: 5px 5px 10px 5px rgba(255, 161, 36, 0.6);
  }

  input {
    flex: 1;
    line-height: 46px;
    border: none;
    margin-left: 20px ;
    border-radius: 10px 0 0 10px;
  }
  input:focus{
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
    background-color: orange;
    border: 1px solid #FFE42C;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 10px 10px 0;
    cursor: pointer;
  }
</style>
