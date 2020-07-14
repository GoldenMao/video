<template>
  <div class="middle">
    <a class="linkA" :style="{backgroundImage:'url('+showData.postimage+')'}" :href="'detail?'+showData.vid">
      <span class="tvnumber"><slot name="tv_series"></slot></span>
    </a>
    <div class="detial">
      <div class="detial1"><a
        :href="showData.type+'/'+showData.vid">{{showData.vname}}</a><span>{{showData.language}}</span></div>
      <div class="detial2"><span>{{showData.region}}</span><span>{{showData.year}}</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ImgboxMiddle",
    props: {
      showData: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    watch: {
      // 监测父组件传递的数据,实时更新给子组件保存
      showData: function (newVal, oldVal) {
        console.log(newVal)
        console.log(oldVal)
      },
    }
  }
</script>

<style scoped>
  .middle {
    width: 30%;
    height: 110px;
    /*padding: 5px 10px;*/
    margin: 10px 19px;
    /*box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, .2);*/
    border-top:1px dashed lightgray;
    border-bottom:1px dashed lightgray;
    display: flex;
    justify-content: space-between;

  }

  .linkA {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 110px;
    width: 80px;
  }

  .tvnumber {
    color: #ffffff;
    font-size: 14px;
    line-height: 30px;
  }

  .detial{
    flex:0.9;
    width: 100%;
    height: 100%;
    line-height: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .detial1 , .detial2{
    display: flex;
    justify-content: space-between;
  }
  a:hover {
    color:orange;
    transition: all .15s ease-in .1s;

  }
</style>
