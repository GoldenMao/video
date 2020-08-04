<template>
  <div id="home">
    <Swiper>
      <swiper-item v-for="item in banners" :key="item.vid">
        <a :href="'detail?'+item.vid">
          <img :src="item.postimage" alt="item.name"/>
        </a>
      </swiper-item>
    </Swiper>
    <detail-box>
      <h2 slot="title">最新电影</h2>
      <imgbox-small slot="item_list" :showData="item" v-for=" item in newestData" :key="item.vid">
      </imgbox-small>
    </detail-box>
    <detail-box>
      <h2 slot="title">精选电影</h2>
      <imgbox-middle slot="item_list" :showData="item" v-for=" item in specialData" :key="item.vid">
      </imgbox-middle>
    </detail-box>
    <detail-box>
      <h2 slot="title">国内电影</h2>
      <imgbox-middle slot="item_list" :showData="item" v-for=" item in chinaData" :key="item.vid">
      </imgbox-middle>
    </detail-box>
    <detail-box>
      <h2 slot="title">欧美电影</h2>
      <imgbox-middle slot="item_list" :showData="item" v-for=" item in westernData" :key="item.vid">
      </imgbox-middle>
    </detail-box>
    <imgbox-big></imgbox-big>

  </div>
</template>

<script>
  import {getHomeMultidata} from "network/home/homeDatas"; //导入js
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
        banners: [],
        newestData: [],
        specialData: [],
        chinaData: [],
        westernData: [],
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
      }
    },
    created() {
      // 在加载首页时，获取轮播图数据共5条，最新电影数据共7条，精选电影数据共9条和国内电影数据共9条
        getHomeMultidata().then(
          res => {
            this.banners = res.homedata.slice(0,5)
            this.newestData = res.homedata.slice(5,12)
            this.specialData = res.homedata.slice(12,21)
            this.chinaData = res.homedata.slice(21,30)
            this.westernData = res.homedata.slice(21,30)
          }
        ).catch(
          err => {
            console.log(err)
          }
        );
    },
     methods:{

    },
  }
</script>

<style scoped>
  .item_list {
    display: flex;
    flex-wrap: wrap;
  }
</style>
