<template>
  <div class="small">
    <a class="linkA" :style="{backgroundImage:'url('+showData.imgurl+')'}" :href="showData.type+'/'+showData.vid">
      <span class="tvnumber"><slot name="tv_series"></slot></span>
    </a>
    <div class="detial1"><a :href="showData.type+'/'+showData.vid">{{showData.name}}</a><span>{{showData.category}}</span></div>
    <div class="detial2"><span>{{showData.area}}</span><span>{{showData.year}}</span></div>
  </div>
</template>

<script>
  export default {
    name: "ImgboxSmall",
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
      showData: function (newVal,oldVal) {
        console.log(newVal)
        console.log(oldVal)
      },
    }
  }
</script>

<style scoped>
  .small{
    width: 160px;
    height: 240px;
    padding: 5px 10px;
    margin: 10px 5px;
    box-shadow: 5px 5px 10px 1px rgba(0, 0, 0,.2);

  }
  .linkA{
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 180px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .tvnumber{
    color: #ffffff;
    font-size: 14px;
    line-height: 30px;
  }

  .detial1 , .detial2{
    width: 100%;
    height: 25px;
    line-height: 25px;
    display:flex;
    justify-content: space-between;
  }
  a:hover{
    color:orange;
    transition: all .15s ease-in .1s;
    transform: scale(1.15);
    -moz-transform: scale(1.15);
    -webkit-transform: scale(1.15);
    -o-transform: scale(1.15);
    background-position-y: 10px;
  }
</style>
