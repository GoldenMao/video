<template>

  <div class="searchout">
    <div class="search" :class="{changeShadow:isTrue}">
      <input type="text" placeholder="快速搜索..." ref="inputDom" @focus="getRecord">
      <div class="search-inner" @click="setRecord">
        <img src="~assets/img/search.png" alt="search"/>
        <span>搜索</span>
      </div>
    </div>
    <ul v-show="isshow && recordKeywords.length" class="history">
      <li v-for="(word, index) in recordKeywords" :key="index">
        <a>{{word |forShort}}</a>
      </li>
      <li @click="deleteRecord" class="deleteRecord">删除记录</li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: "Search",
    data() {
      return {
        msg: '',
        recordKeywords: [],
        isshow: false
      }
    },
    methods: {
      getRecord() { /*从localStorage中读取以前保存的历史记录，存入recordKeywords，并显示记录*/
        let record = window.localStorage.getItem('searchRecord')
        if (record) {
          this.recordKeywords = JSON.parse(record).keywords
          this.isshow = true // 显示记录
        }
      },
      setRecord() {
        /* 保存用户输入的搜索记录*/
        this.msg = this.$refs.inputDom.value.trim()
        if (this.msg) { // 搜索重复记录时，删除旧记录，将新记录添加到头部
          if (this.recordKeywords.indexOf(this.msg)) {
            this.recordKeywords.unshift(this.msg) // 添加到头部
            let temp = new Set(this.recordKeywords) // 用Set去重后重新转为数组
            this.recordKeywords = Array.from(temp)
          }
        }
        // 设置保存记录数量的上限，超出后删除之前记录
        if (this.recordKeywords.length > 6) {
          this.recordKeywords.pop()
        }
        window.localStorage.setItem('searchRecord', JSON.stringify({keywords: this.recordKeywords}))
        this.isshow = false // 隐藏记录
      },
      deleteRecord() {
        /*删除，清空历史搜索记录*/
        this.recordKeywords = []
        window.localStorage.removeItem('searchRecord')
        // window.localStorage.clear()
      }
    },
    filters: {
      /*对输入过长文本进行截取*/
      forShort(item) {
        if (item.length > 12) {
          return item.slice(0, 12) + "..."
        } else {
          return item
        }
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
  .deleteRecord:hover{
    color: rgb(255, 161, 36);
    cursor:pointer;
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
