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
      <a :href="detailData.downlink.slice(2,-2)">{{detailData.title}}<span>(右键复制链接地址下载)</span></a>
    </div>


  </div>
</template>

<script>
  export default {
    name: "Detail",
    data() {
      return {
        detailData:
          {
            type: 'movie',

            vid: "8412",
            title: "2020年动作奇幻《天启大爆炸》HD国语中字",
            postimage: "https://lookimg.com/images/2020/06/23/PBeZEe.jpg",
            prscimage: " ",
            year: "2020",
            showdate: "2020-06-11(中国大陆)",
            transname: " ",
            vname: "天启大爆炸",
            region: "中国大陆/中国香港",
            category: "动作 / 奇幻 / 古装",
            language: "普通话",
            captions: "中文",
            actors: "['郭晋东 Ryan Kuo', '黄柳嫣', '梁家仁 Ka-Yan Leung', '邓威', '脑门额尔德尼 Naomen Eerdeni']",
            labels: " ",
            brief: "《天启大爆炸》以中国古代曾真实发生的神秘爆炸为原型，加以天马行空的巧妙构思，为观众解封至今困惑世人的隐秘真相。神秘机构“夜行司”追踪离奇谜团勇闯“无相城”，一场关乎百姓苍生命运博弈就此展开。",
            prize: "",
            downlink: "['ftp://ygdy8:ygdy8@yg18.dydytt.net:7031/阳光电影www.ygdy8.com.天启大爆炸.HD.2160p.国语中字.mp4']",
            imdb: " ",
            douban: "4.2/10 from 762 users",
            director: "黄羿 Yi Huang / 曾黎",
            scenario: " "
          },

      }
    }
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
