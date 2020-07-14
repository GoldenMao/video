<template>
  <div id="home">
    <Swiper>
      <swiper-item v-for="item in swiperDatas" :key="item.vid">
        <a :href="'detail?'+item.vid">
          <img :src="item.imgsrc" alt="item.name"/>
        </a>
      </swiper-item>
    </Swiper>
    <detail-box>
      <h2 slot="title">电影</h2>
      <imgbox-small slot="item_list" :showData="item" v-for=" item in movieData" :key="item.vid">
      </imgbox-small>
    </detail-box>
    <detail-box>
      <h2 slot="title">电视剧</h2>
      <imgbox-middle slot="item_list" :showData="item" v-for=" item in tvData" :key="item.vid">
      </imgbox-middle>
    </detail-box>
    <imgbox-big></imgbox-big>

  </div>
</template>

<script>
  // import {getHomeMultidata} from "network/home/homeDatas"; //导入js
  import {Swiper, SwiperItem} from "components/common/pcswiper"
  import DetailBox from "components/content/detail/DetailBox"
  import ImgboxSmall from "components/content/detail/detailItem/ImgboxSmall"  // 导入组件
  import ImgboxMiddle from "components/content/detail/detailItem/ImgboxMiddle"
  export default {
    name: "Home",
    components: {
      Swiper,
      SwiperItem,
      DetailBox,
      ImgboxSmall,
      ImgboxMiddle,

    },
    data() {
      return {
        users: [],
        swiperDatas: [
          {
            vid: 1,
            name: '误杀2019',
            type: 'movie',
            imgsrc: "https://ae01.alicdn.com/kf/He03b7437fd0e45beb7b722b045f561fa6.png",
          },
          {
            vid: 2,
            name: '1/2魔法',
            type: 'movie',
            imgsrc: "https://ae01.alicdn.com/kf/Ha992bdabca99421db58b73b7da6d4c42x.jpg",
          },
          {
            vid: 3,
            name: '超级战舰',
            type: 'movie',
            imgsrc: "http://p6-tt.byteimg.com/large/pgc-image/ea1a36deae79460f8657127ad176ec4b?from=pc",
          },
        ],
        movieData: [
          {
            type: 'movie',

            vid: "8409",
            title: "2020年古装悬疑《隐市奇闻录2》HD国语中字",
            postimage: "https://lookimg.com/images/2020/06/29/PK8fSV.jpg",
            prscimage: " ",
            year: "2020",
            showdate: "2020-06-14(中国大陆)",
            transname: "The Hidden Town II",
            vname: "隐市奇闻录2",
            region: "中国大陆",
            category: "奇幻 / 武侠 / 古装",
            language: "普通话",
            captions: "中文",
            actors: "['郜思雯 Siwen Gao', '蔡佩池 Peichi Cai', '苑琼丹 King-Tan Yuen', '钟久夫 Jiufu Zhong', '李瑞超 Ruichao Li', '李耀景 Yiu Ging Lee']",
            labels: "奇幻 | 药理人心 | 2020 | 网络大电影 | 浅情人不知 | 奇闻 | 大陆 | 中国内地",
            brief: "天圣八年，岁在庚午。",
            prize: "",
            downlink: "['ftp://ygdy8:ygdy8@yg18.dydytt.net:8033/阳光电影www.ygdy8.com.隐市奇闻录2.HD.1080p.国语中字.mp4']",
            imdb: " ",
            douban: " ",
            director: "薛文华 Wenhua Xue",
            scenario: "叶蘅 Heng Ye"
          },
          {
            type: 'movie',

            vid: "8413",
            title: "2020年动作《雪豹之虎啸军魂》HD国语中字",
            postimage: "https://lookimg.com/images/2020/05/31/PzLb3E.jpg",
            prscimage: " ",
            year: "2020",
            showdate: "2020-05-29(中国大陆)",
            transname: "雪豹/雪豹 电影版",
            vname: "雪豹之虎啸军魂",
            region: "中国大陆",
            category: "动作/悬疑/战争",
            language: "普通话",
            captions: "中文",
            actors: "['文章 Zhang Wen', '乔鹏樾 Pengyue Qiao', '冯越', '吴承轩 Chengxuan Wu', '杜玉明 Yuming Du', '赵家林 Jialin Zhao', '刘广楠 Guangnan Liu', '林雪松 Xuesong Lin', '张政勇 Zhengyong Zhang']",
            labels: "雪豹之呼啸之惊魂好看 | 文章客串 | 动作 | 战争 | 情怀 | 谍战",
            brief: "1944年，周卫国（文章饰）秘密调遣雪豹特战队成员徐虎（乔鹏樾饰）前往上海日军警备司令部，营救已暴露身份被捕的苏联红军情报员田冲（吴承轩饰）。获救的田冲带来关东军边境布防图的情报，周卫国同意让徐虎配合军令部前往北部作战，一个精心布置的致命陷阱正等着雪豹特战队。",
            prize: "",
            downlink: "['ftp://ygdy8:ygdy8@yg69.dydytt.net:4001/阳光电影www.ygdy8.com.雪豹之虎啸军魂.HD.2160p.国语中字.mp4']",
            imdb: " ",
            douban: " ",
            director: "王利兴 Lixing Wang",
            scenario: "张健 Jian Zhang"
          },
          {
            type: 'movie',

            vid: "8410",
            title: "2020年古装悬疑《隐市奇闻录》HD国语中字",
            postimage: "https://lookimg.com/images/2020/06/29/PK88mH.jpg",
            prscimage: " ",
            year: "2020",
            showdate: "2020-05-23(中国大陆)",
            transname: "The Hidden Town",
            vname: "隐市奇闻录",
            region: "中国大陆",
            category: "剧情 / 悬疑 / 古装",
            language: "普通话",
            captions: "中文",
            actors: "['郜思雯 Siwen Gao', '蔡佩池 Peichi Cai', '苑琼丹 King-Tan Yuen', '张晴 Zhang Qing', '卢庆辉 Marco Lo', '钟久夫 Jiufu Zhong', '李耀景 Yiu Ging Lee', '高琳', '姜雯雯 Wenwen Jiang', '赵毅新 Yixin Zhao', '沈凯 Kai Shen', '李瑞超 Ruichao Li', '杨平友 Pingyou Yang', '田钰婧', '唐郁文', '谭琍敏 Limin Tan', '童小梅', '吴祥超', '张萱亿', '彭皓锋 Peter Pang', '袁梓毓', '乐乐']",
            labels: "悬疑 | 古风 | 奇闻 | 隐市 | 药理人心 | 大陆 | 2020 | 友情",
            brief: "影片以一座“没有人心，只有规矩”的人间隐市做背景，隐市规矩自成一体，从而形成了一个全新的生存世界及世界观。全片涵盖了“奇谈”、“悬疑”“药理”等多重元素，围绕 “天赋医师”白青萝（郜思雯饰）同“诡案捕快”拾生（蔡佩池饰）的破案经历，揭开了一件件跌宕起伏扣人心弦的悬案谜底，巧思设置既环环相扣又能发人深省。",
            prize: "",
            downlink: "['ftp://ygdy8:ygdy8@yg18.dydytt.net:7033/阳光电影www.ygdy8.com.隐市奇闻录.HD.1080p.国语中字.mp4']",
            imdb: " ",
            douban: " ",
            director: "薛文华 Wenhua Xue",
            scenario: "叶蘅 Heng Ye"
          },
          {
            type: 'movie',

            vid: "8411",
            title: "2020年奇幻《仙书奇谭/捉仙记2》HD国语中字",
            postimage: "https://lookimg.com/images/2020/06/26/PB1yG5.jpg",
            prscimage: " ",
            year: "2020",
            showdate: "2020-05-22(中国大陆)",
            transname: "捉仙记2",
            vname: "仙书奇谭",
            region: "中国大陆",
            category: "喜剧 / 奇幻 / 古装",
            language: "普通话",
            captions: "中文",
            actors: "['张致恒 Steven Cheung', '何蓝逗 Lan He', '骆应钧 Ying Kwan Lok', '王李丹妮 Daniella Wang']",
            labels: "国产电影 | 捉妖录 | 魔幻 | 搞笑 | 捉妖大仙 | 2020 | 网大 | 武侠",
            brief: "该片讲述了燕十七的师傅临终前传他一本捉妖录，但捉妖录却被三只猫妖所偷，燕十七一路追赶猫妖到不音城，发现城主正在召集能人异士捉住国王体内的“耳中之妖”。燕十七捉住了一只偷窃自己钱财宝物的鼠妖，而这个名为鼠来宝的鼠妖却是捉妖录真正的传人。",
            prize: "",
            downlink: "['ftp://ygdy8:ygdy8@yg18.dydytt.net:7032/阳光电影www.ygdy8.com.仙书奇谭.HD.1080p.国语中字.mkv']",
            imdb: " ",
            douban: " ",
            director: "董伟 Wei Dong",
            scenario: "叶蘅 Heng Ye"
          },
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
          {
            type: 'movie',

            vid: "8413",
            title: "2020年动作《雪豹之虎啸军魂》HD国语中字",
            postimage: "https://lookimg.com/images/2020/05/31/PzLb3E.jpg",
            prscimage: " ",
            year: "2020",
            showdate: "2020-05-29(中国大陆)",
            transname: "雪豹/雪豹 电影版",
            vname: "雪豹之虎啸军魂",
            region: "中国大陆",
            category: "动作/悬疑/战争",
            language: "普通话",
            captions: "中文",
            actors: "['文章 Zhang Wen', '乔鹏樾 Pengyue Qiao', '冯越', '吴承轩 Chengxuan Wu', '杜玉明 Yuming Du', '赵家林 Jialin Zhao', '刘广楠 Guangnan Liu', '林雪松 Xuesong Lin', '张政勇 Zhengyong Zhang']",
            labels: "雪豹之呼啸之惊魂好看 | 文章客串 | 动作 | 战争 | 情怀 | 谍战",
            brief: "1944年，周卫国（文章饰）秘密调遣雪豹特战队成员徐虎（乔鹏樾饰）前往上海日军警备司令部，营救已暴露身份被捕的苏联红军情报员田冲（吴承轩饰）。获救的田冲带来关东军边境布防图的情报，周卫国同意让徐虎配合军令部前往北部作战，一个精心布置的致命陷阱正等着雪豹特战队。",
            prize: "",
            downlink: "['ftp://ygdy8:ygdy8@yg69.dydytt.net:4001/阳光电影www.ygdy8.com.雪豹之虎啸军魂.HD.2160p.国语中字.mp4']",
            imdb: " ",
            douban: " ",
            director: "王利兴 Lixing Wang",
            scenario: "张健 Jian Zhang"
          },

          {
            type: 'movie',

            vid: "8410",
            title: "2020年古装悬疑《隐市奇闻录》HD国语中字",
            postimage: "https://lookimg.com/images/2020/06/29/PK88mH.jpg",
            prscimage: " ",
            year: "2020",
            showdate: "2020-05-23(中国大陆)",
            transname: "The Hidden Town",
            vname: "隐市奇闻录",
            region: "中国大陆",
            category: "剧情 / 悬疑 / 古装",
            language: "普通话",
            captions: "中文",
            actors: "['郜思雯 Siwen Gao', '蔡佩池 Peichi Cai', '苑琼丹 King-Tan Yuen', '张晴 Zhang Qing', '卢庆辉 Marco Lo', '钟久夫 Jiufu Zhong', '李耀景 Yiu Ging Lee', '高琳', '姜雯雯 Wenwen Jiang', '赵毅新 Yixin Zhao', '沈凯 Kai Shen', '李瑞超 Ruichao Li', '杨平友 Pingyou Yang', '田钰婧', '唐郁文', '谭琍敏 Limin Tan', '童小梅', '吴祥超', '张萱亿', '彭皓锋 Peter Pang', '袁梓毓', '乐乐']",
            labels: "悬疑 | 古风 | 奇闻 | 隐市 | 药理人心 | 大陆 | 2020 | 友情",
            brief: "影片以一座“没有人心，只有规矩”的人间隐市做背景，隐市规矩自成一体，从而形成了一个全新的生存世界及世界观。全片涵盖了“奇谈”、“悬疑”“药理”等多重元素，围绕 “天赋医师”白青萝（郜思雯饰）同“诡案捕快”拾生（蔡佩池饰）的破案经历，揭开了一件件跌宕起伏扣人心弦的悬案谜底，巧思设置既环环相扣又能发人深省。",
            prize: "",
            downlink: "['ftp://ygdy8:ygdy8@yg18.dydytt.net:7033/阳光电影www.ygdy8.com.隐市奇闻录.HD.1080p.国语中字.mp4']",
            imdb: " ",
            douban: " ",
            director: "薛文华 Wenhua Xue",
            scenario: "叶蘅 Heng Ye"
          },
        ],
        tvData: [
          {
            type: 'movie',

            vid: "8409",
            title: "2020年古装悬疑《隐市奇闻录2》HD国语中字",
            postimage: "https://lookimg.com/images/2020/06/29/PK8fSV.jpg",
            prscimage: " ",
            year: "2020",
            showdate: "2020-06-14(中国大陆)",
            transname: "The Hidden Town II",
            vname: "隐市奇闻录2",
            region: "中国大陆",
            category: "奇幻 / 武侠 / 古装",
            language: "普通话",
            captions: "中文",
            actors: "['郜思雯 Siwen Gao', '蔡佩池 Peichi Cai', '苑琼丹 King-Tan Yuen', '钟久夫 Jiufu Zhong', '李瑞超 Ruichao Li', '李耀景 Yiu Ging Lee']",
            labels: "奇幻 | 药理人心 | 2020 | 网络大电影 | 浅情人不知 | 奇闻 | 大陆 | 中国内地",
            brief: "天圣八年，岁在庚午。",
            prize: "",
            downlink: "['ftp://ygdy8:ygdy8@yg18.dydytt.net:8033/阳光电影www.ygdy8.com.隐市奇闻录2.HD.1080p.国语中字.mp4']",
            imdb: " ",
            douban: " ",
            director: "薛文华 Wenhua Xue",
            scenario: "叶蘅 Heng Ye"
          },
          {
            type: 'movie',

            vid: "8410",
            title: "2020年古装悬疑《隐市奇闻录》HD国语中字",
            postimage: "https://lookimg.com/images/2020/06/29/PK88mH.jpg",
            prscimage: " ",
            year: "2020",
            showdate: "2020-05-23(中国大陆)",
            transname: "The Hidden Town",
            vname: "隐市奇闻录",
            region: "中国大陆",
            category: "剧情 / 悬疑 / 古装",
            language: "普通话",
            captions: "中文",
            actors: "['郜思雯 Siwen Gao', '蔡佩池 Peichi Cai', '苑琼丹 King-Tan Yuen', '张晴 Zhang Qing', '卢庆辉 Marco Lo', '钟久夫 Jiufu Zhong', '李耀景 Yiu Ging Lee', '高琳', '姜雯雯 Wenwen Jiang', '赵毅新 Yixin Zhao', '沈凯 Kai Shen', '李瑞超 Ruichao Li', '杨平友 Pingyou Yang', '田钰婧', '唐郁文', '谭琍敏 Limin Tan', '童小梅', '吴祥超', '张萱亿', '彭皓锋 Peter Pang', '袁梓毓', '乐乐']",
            labels: "悬疑 | 古风 | 奇闻 | 隐市 | 药理人心 | 大陆 | 2020 | 友情",
            brief: "影片以一座“没有人心，只有规矩”的人间隐市做背景，隐市规矩自成一体，从而形成了一个全新的生存世界及世界观。全片涵盖了“奇谈”、“悬疑”“药理”等多重元素，围绕 “天赋医师”白青萝（郜思雯饰）同“诡案捕快”拾生（蔡佩池饰）的破案经历，揭开了一件件跌宕起伏扣人心弦的悬案谜底，巧思设置既环环相扣又能发人深省。",
            prize: "",
            downlink: "['ftp://ygdy8:ygdy8@yg18.dydytt.net:7033/阳光电影www.ygdy8.com.隐市奇闻录.HD.1080p.国语中字.mp4']",
            imdb: " ",
            douban: " ",
            director: "薛文华 Wenhua Xue",
            scenario: "叶蘅 Heng Ye"
          },
          {
            type: 'movie',

            vid: "8411",
            title: "2020年奇幻《仙书奇谭/捉仙记2》HD国语中字",
            postimage: "https://lookimg.com/images/2020/06/26/PB1yG5.jpg",
            prscimage: " ",
            year: "2020",
            showdate: "2020-05-22(中国大陆)",
            transname: "捉仙记2",
            vname: "仙书奇谭",
            region: "中国大陆",
            category: "喜剧 / 奇幻 / 古装",
            language: "普通话",
            captions: "中文",
            actors: "['张致恒 Steven Cheung', '何蓝逗 Lan He', '骆应钧 Ying Kwan Lok', '王李丹妮 Daniella Wang']",
            labels: "国产电影 | 捉妖录 | 魔幻 | 搞笑 | 捉妖大仙 | 2020 | 网大 | 武侠",
            brief: "该片讲述了燕十七的师傅临终前传他一本捉妖录，但捉妖录却被三只猫妖所偷，燕十七一路追赶猫妖到不音城，发现城主正在召集能人异士捉住国王体内的“耳中之妖”。燕十七捉住了一只偷窃自己钱财宝物的鼠妖，而这个名为鼠来宝的鼠妖却是捉妖录真正的传人。",
            prize: "",
            downlink: "['ftp://ygdy8:ygdy8@yg18.dydytt.net:7032/阳光电影www.ygdy8.com.仙书奇谭.HD.1080p.国语中字.mkv']",
            imdb: " ",
            douban: " ",
            director: "董伟 Wei Dong",
            scenario: "叶蘅 Heng Ye"
          },
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
          {
            type: 'movie',

            vid: "8413",
            title: "2020年动作《雪豹之虎啸军魂》HD国语中字",
            postimage: "https://lookimg.com/images/2020/05/31/PzLb3E.jpg",
            prscimage: " ",
            year: "2020",
            showdate: "2020-05-29(中国大陆)",
            transname: "雪豹/雪豹 电影版",
            vname: "雪豹之虎啸军魂",
            region: "中国大陆",
            category: "动作/悬疑/战争",
            language: "普通话",
            captions: "中文",
            actors: "['文章 Zhang Wen', '乔鹏樾 Pengyue Qiao', '冯越', '吴承轩 Chengxuan Wu', '杜玉明 Yuming Du', '赵家林 Jialin Zhao', '刘广楠 Guangnan Liu', '林雪松 Xuesong Lin', '张政勇 Zhengyong Zhang']",
            labels: "雪豹之呼啸之惊魂好看 | 文章客串 | 动作 | 战争 | 情怀 | 谍战",
            brief: "1944年，周卫国（文章饰）秘密调遣雪豹特战队成员徐虎（乔鹏樾饰）前往上海日军警备司令部，营救已暴露身份被捕的苏联红军情报员田冲（吴承轩饰）。获救的田冲带来关东军边境布防图的情报，周卫国同意让徐虎配合军令部前往北部作战，一个精心布置的致命陷阱正等着雪豹特战队。",
            prize: "",
            downlink: "['ftp://ygdy8:ygdy8@yg69.dydytt.net:4001/阳光电影www.ygdy8.com.雪豹之虎啸军魂.HD.2160p.国语中字.mp4']",
            imdb: " ",
            douban: " ",
            director: "王利兴 Lixing Wang",
            scenario: "张健 Jian Zhang"
          },
          {
            type: 'movie',

            vid: "8413",
            title: "2020年动作《雪豹之虎啸军魂》HD国语中字",
            postimage: "https://lookimg.com/images/2020/05/31/PzLb3E.jpg",
            prscimage: " ",
            year: "2020",
            showdate: "2020-05-29(中国大陆)",
            transname: "雪豹/雪豹 电影版",
            vname: "雪豹之虎啸军魂",
            region: "中国大陆",
            category: "动作/悬疑/战争",
            language: "普通话",
            captions: "中文",
            actors: "['文章 Zhang Wen', '乔鹏樾 Pengyue Qiao', '冯越', '吴承轩 Chengxuan Wu', '杜玉明 Yuming Du', '赵家林 Jialin Zhao', '刘广楠 Guangnan Liu', '林雪松 Xuesong Lin', '张政勇 Zhengyong Zhang']",
            labels: "雪豹之呼啸之惊魂好看 | 文章客串 | 动作 | 战争 | 情怀 | 谍战",
            brief: "1944年，周卫国（文章饰）秘密调遣雪豹特战队成员徐虎（乔鹏樾饰）前往上海日军警备司令部，营救已暴露身份被捕的苏联红军情报员田冲（吴承轩饰）。获救的田冲带来关东军边境布防图的情报，周卫国同意让徐虎配合军令部前往北部作战，一个精心布置的致命陷阱正等着雪豹特战队。",
            prize: "",
            downlink: "['ftp://ygdy8:ygdy8@yg69.dydytt.net:4001/阳光电影www.ygdy8.com.雪豹之虎啸军魂.HD.2160p.国语中字.mp4']",
            imdb: " ",
            douban: " ",
            director: "王利兴 Lixing Wang",
            scenario: "张健 Jian Zhang"
          },

          {
            type: 'movie',

            vid: "8413",
            title: "2020年动作《雪豹之虎啸军魂》HD国语中字",
            postimage: "https://lookimg.com/images/2020/05/31/PzLb3E.jpg",
            prscimage: " ",
            year: "2020",
            showdate: "2020-05-29(中国大陆)",
            transname: "雪豹/雪豹 电影版",
            vname: "雪豹之虎啸军魂",
            region: "中国大陆",
            category: "动作/悬疑/战争",
            language: "普通话",
            captions: "中文",
            actors: "['文章 Zhang Wen', '乔鹏樾 Pengyue Qiao', '冯越', '吴承轩 Chengxuan Wu', '杜玉明 Yuming Du', '赵家林 Jialin Zhao', '刘广楠 Guangnan Liu', '林雪松 Xuesong Lin', '张政勇 Zhengyong Zhang']",
            labels: "雪豹之呼啸之惊魂好看 | 文章客串 | 动作 | 战争 | 情怀 | 谍战",
            brief: "1944年，周卫国（文章饰）秘密调遣雪豹特战队成员徐虎（乔鹏樾饰）前往上海日军警备司令部，营救已暴露身份被捕的苏联红军情报员田冲（吴承轩饰）。获救的田冲带来关东军边境布防图的情报，周卫国同意让徐虎配合军令部前往北部作战，一个精心布置的致命陷阱正等着雪豹特战队。",
            prize: "",
            downlink: "['ftp://ygdy8:ygdy8@yg69.dydytt.net:4001/阳光电影www.ygdy8.com.雪豹之虎啸军魂.HD.2160p.国语中字.mp4']",
            imdb: " ",
            douban: " ",
            director: "王利兴 Lixing Wang",
            scenario: "张健 Jian Zhang"
          },

          {
            type: 'movie',

            vid: "8413",
            title: "2020年动作《雪豹之虎啸军魂》HD国语中字",
            postimage: "https://lookimg.com/images/2020/05/31/PzLb3E.jpg",
            prscimage: " ",
            year: "2020",
            showdate: "2020-05-29(中国大陆)",
            transname: "雪豹/雪豹 电影版",
            vname: "雪豹之虎啸军魂",
            region: "中国大陆",
            category: "动作/悬疑/战争",
            language: "普通话",
            captions: "中文",
            actors: "['文章 Zhang Wen', '乔鹏樾 Pengyue Qiao', '冯越', '吴承轩 Chengxuan Wu', '杜玉明 Yuming Du', '赵家林 Jialin Zhao', '刘广楠 Guangnan Liu', '林雪松 Xuesong Lin', '张政勇 Zhengyong Zhang']",
            labels: "雪豹之呼啸之惊魂好看 | 文章客串 | 动作 | 战争 | 情怀 | 谍战",
            brief: "1944年，周卫国（文章饰）秘密调遣雪豹特战队成员徐虎（乔鹏樾饰）前往上海日军警备司令部，营救已暴露身份被捕的苏联红军情报员田冲（吴承轩饰）。获救的田冲带来关东军边境布防图的情报，周卫国同意让徐虎配合军令部前往北部作战，一个精心布置的致命陷阱正等着雪豹特战队。",
            prize: "",
            downlink: "['ftp://ygdy8:ygdy8@yg69.dydytt.net:4001/阳光电影www.ygdy8.com.雪豹之虎啸军魂.HD.2160p.国语中字.mp4']",
            imdb: " ",
            douban: " ",
            director: "王利兴 Lixing Wang",
            scenario: "张健 Jian Zhang"
          },
          {
            type: 'movie',

            vid: "8413",
            title: "2020年动作《雪豹之虎啸军魂》HD国语中字",
            postimage: "https://lookimg.com/images/2020/05/31/PzLb3E.jpg",
            prscimage: " ",
            year: "2020",
            showdate: "2020-05-29(中国大陆)",
            transname: "雪豹/雪豹 电影版",
            vname: "雪豹之虎啸军魂",
            region: "中国大陆",
            category: "动作/悬疑/战争",
            language: "普通话",
            captions: "中文",
            actors: "['文章 Zhang Wen', '乔鹏樾 Pengyue Qiao', '冯越', '吴承轩 Chengxuan Wu', '杜玉明 Yuming Du', '赵家林 Jialin Zhao', '刘广楠 Guangnan Liu', '林雪松 Xuesong Lin', '张政勇 Zhengyong Zhang']",
            labels: "雪豹之呼啸之惊魂好看 | 文章客串 | 动作 | 战争 | 情怀 | 谍战",
            brief: "1944年，周卫国（文章饰）秘密调遣雪豹特战队成员徐虎（乔鹏樾饰）前往上海日军警备司令部，营救已暴露身份被捕的苏联红军情报员田冲（吴承轩饰）。获救的田冲带来关东军边境布防图的情报，周卫国同意让徐虎配合军令部前往北部作战，一个精心布置的致命陷阱正等着雪豹特战队。",
            prize: "",
            downlink: "['ftp://ygdy8:ygdy8@yg69.dydytt.net:4001/阳光电影www.ygdy8.com.雪豹之虎啸军魂.HD.2160p.国语中字.mp4']",
            imdb: " ",
            douban: " ",
            director: "王利兴 Lixing Wang",
            scenario: "张健 Jian Zhang"
          },
        ],
        detailData: [
          {
            vid: "8409",
            title: "2020年古装悬疑《隐市奇闻录2》HD国语中字",
            postimage: "https://lookimg.com/images/2020/06/29/PK8fSV.jpg",
            prscimage: " ",
            year: "2020",
            showdate: "2020-06-14(中国大陆)",
            transname: "The Hidden Town II",
            vname: "隐市奇闻录2",
            region: "中国大陆",
            category: "奇幻 / 武侠 / 古装",
            language: "普通话",
            captions: "中文",
            actors: "['郜思雯 Siwen Gao', '蔡佩池 Peichi Cai', '苑琼丹 King-Tan Yuen', '钟久夫 Jiufu Zhong', '李瑞超 Ruichao Li', '李耀景 Yiu Ging Lee']",
            labels: "奇幻 | 药理人心 | 2020 | 网络大电影 | 浅情人不知 | 奇闻 | 大陆 | 中国内地",
            brief: "天圣八年，岁在庚午。",
            prize: "",
            downlink: "['ftp://ygdy8:ygdy8@yg18.dydytt.net:8033/阳光电影www.ygdy8.com.隐市奇闻录2.HD.1080p.国语中字.mp4']",
            imdb: " ",
            douban: " ",
            director: "薛文华 Wenhua Xue",
            scenario: "叶蘅 Heng Ye"
          },
          {
            vid: "8410",
            title: "2020年古装悬疑《隐市奇闻录》HD国语中字",
            postimage: "https://lookimg.com/images/2020/06/29/PK88mH.jpg",
            prscimage: " ",
            year: "2020",
            showdate: "2020-05-23(中国大陆)",
            transname: "The Hidden Town",
            vname: "隐市奇闻录",
            region: "中国大陆",
            category: "剧情 / 悬疑 / 古装",
            language: "普通话",
            captions: "中文",
            actors: "['郜思雯 Siwen Gao', '蔡佩池 Peichi Cai', '苑琼丹 King-Tan Yuen', '张晴 Zhang Qing', '卢庆辉 Marco Lo', '钟久夫 Jiufu Zhong', '李耀景 Yiu Ging Lee', '高琳', '姜雯雯 Wenwen Jiang', '赵毅新 Yixin Zhao', '沈凯 Kai Shen', '李瑞超 Ruichao Li', '杨平友 Pingyou Yang', '田钰婧', '唐郁文', '谭琍敏 Limin Tan', '童小梅', '吴祥超', '张萱亿', '彭皓锋 Peter Pang', '袁梓毓', '乐乐']",
            labels: "悬疑 | 古风 | 奇闻 | 隐市 | 药理人心 | 大陆 | 2020 | 友情",
            brief: "影片以一座“没有人心，只有规矩”的人间隐市做背景，隐市规矩自成一体，从而形成了一个全新的生存世界及世界观。全片涵盖了“奇谈”、“悬疑”“药理”等多重元素，围绕 “天赋医师”白青萝（郜思雯饰）同“诡案捕快”拾生（蔡佩池饰）的破案经历，揭开了一件件跌宕起伏扣人心弦的悬案谜底，巧思设置既环环相扣又能发人深省。",
            prize: "",
            downlink: "['ftp://ygdy8:ygdy8@yg18.dydytt.net:7033/阳光电影www.ygdy8.com.隐市奇闻录.HD.1080p.国语中字.mp4']",
            imdb: " ",
            douban: " ",
            director: "薛文华 Wenhua Xue",
            scenario: "叶蘅 Heng Ye"
          },

        ],
      }
    },
    created() {
      //   getHomeMultidata().then(
      //     res => {
      //       this.users = res
      //     }
      //   ).catch(
      //     err => {
      //       console.log(err)
      //     }
      //   );
    }
  }
</script>

<style scoped>
  .item_list {
    display: flex;
    flex-wrap: wrap;
  }
</style>
