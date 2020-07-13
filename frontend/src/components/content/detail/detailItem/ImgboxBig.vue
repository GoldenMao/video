<template>
  <div id="imagboxBig">
    <div>
      <h3>{{detailData.transname}}</h3>
      <imgbox-middle></imgbox-middle>
    </div>

    <div class="box">
      <div v-for="(value,key,index) in detailData" :key="index"
           class="boxItem">
        <span class="keyItem">{{key}} :</span>
        <span>{{value}}</span>
      </div>
    </div>


  </div>
</template>

<script>
  import ImgboxMiddle from "./ImgboxMiddle";
  export default {
    name: "ImgboxBig",
    components: {ImgboxMiddle},
    data() {
      return {
        detailData:
          {
            "vid": "8409",
            "title": "2020年古装悬疑《隐市奇闻录2》HD国语中字",
            "postimage": "https://lookimg.com/images/2020/06/29/PK8fSV.jpg",
            "prscimage": " ",
            "year": "2020",
            "showdate": "2020-06-14(中国大陆)",
            "transname": "The Hidden Town II",
            "vname": "隐市奇闻录2",
            "region": "中国大陆",
            "category": "奇幻 / 武侠 / 古装",
            "language": "普通话",
            "captions": "中文",
            "actors": "['郜思雯 Siwen Gao', '蔡佩池 Peichi Cai', '苑琼丹 King-Tan Yuen', '钟久夫 Jiufu Zhong', '李瑞超 Ruichao Li', '李耀景 Yiu Ging Lee']",
            "labels": "奇幻 | 药理人心 | 2020 | 网络大电影 | 浅情人不知 | 奇闻 | 大陆 | 中国内地",
            "brief": "天圣八年，岁在庚午。",
            "prize": "",
            "downlink": "['ftp://ygdy8:ygdy8@yg18.dydytt.net:8033/阳光电影www.ygdy8.com.隐市奇闻录2.HD.1080p.国语中字.mp4']",
            "imdb": " ",
            "douban": " ",
            "director": "薛文华 Wenhua Xue",
            "scenario": "叶蘅 Heng Ye"
          }

      }
    }
  }
</script>

<style scoped>
  #imagboxBig {
    color: dodgerblue;
  }

  .box {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .boxItem {
    line-height: 40px;

  }

  .keyItem {
    width: 100px;
    height: 40px;
    font-size: 16px;
    text-align: center;
  }
</style>
