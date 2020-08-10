<template>
  <div id="Detail">
    <h1>{{detailData.transname}}</h1>
    <div class="top">
      <ul class="left">
        <li class="li_item"><span class="lef-span">片 名：</span><span>{{detailData.title}}</span></li>
        <li class="li_item"><span class="lef-span">译   名：</span><span>{{detailData.vname}}</span></li>
        <li class="li_item"><span class="lef-span">产   地：</span><span>{{detailData.region}}</span></li>
        <li class="li_item"><span class="lef-span">类   型：</span><span>{{detailData.category}}</span></li>
        <li class="li_item"><span class="lef-span">语   言：</span><span>{{detailData.language}}</span></li>
        <li class="li_item"><span class="lef-span">imdb评分：</span><span>{{detailData.imdb}}</span></li>
        <li class="li_item"><span class="lef-span">豆瓣评分：</span><span>{{detailData.douban}}</span></li>
        <li class="li_item"><span class="lef-span">字   幕：</span><span>{{detailData.captions}}</span></li>
        <li class="li_item"><span class="lef-span">上映时间：</span><span>{{detailData.showdate}}</span></li>
        <li class="li_item"><span class="lef-span">获奖情况：</span><span>{{detailData.prize}}</span></li>
        <li class="li_item"><span class="lef-span">导   演：</span><span>{{detailData.director}}</span></li>
        <li class="li_item"><span class="lef-span">标   签：</span><span>{{detailData.labels}}</span></li>
      </ul>
      <div class="right">
        <img :src="detailData.postimage"/>
      </div>
    </div>
    <div>
      <ul>
        <li class="li_item"><span class="lef-span">简 介：</span><span>{{detailData.brief}}</span></li>
      </ul>
      <h3>下载链接：</h3>
      <a :href="detailData.downlink">{{detailData.title}}<span>(右键复制链接地址下载)</span></a>
    </div>


  </div>
</template>

<script>
  import {getOneMovieData} from "network/detail/detailDatas"

  export default {
    name: "Detail",
    data() {
      return {
        detailData:null
      }
    },
    created(){
      // 在加载组件时，获取路由中的vid数值，传递给后端查询对应vid的单条数据，并将结果保存在detailData中
      const vid = this.$route.params.vid
      console.log('activated',vid)
      getOneMovieData(vid).then(
          res => this.detailData=res.detaildata[0]
        ).catch(
          err => console.log(err)
        )
    },

  }
</script>

<style scoped>
  h1{
    text-align: center;
  }
  #Detail {
    color: dodgerblue;
    width: 100%;
    padding: 0 60px;
  }
  .top{
    display: flex;
    justify-content: space-between;
  }
  .left{
    flex:1;
  }
  img{
    height: 600px;

  }
  .li_item{
    display: flex;
    line-height: 50px;
    font-size: 18px;
    align-items: center;
  }
  .lef-span{
    width: 100px;
    white-space:pre; /* 正常显示空格*/
    /*margin-right: 100px;*/
    /*text-align: center;*/
  }
  a{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    color: red;
    background-color: #fffccf;
    margin: 20px 0;
  }

</style>
