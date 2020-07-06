<template>
  <div id="home">
<!--        <Swiper>-->
<!--          <swiper-item v-for="item in swiperDatas" :key="item.vid">-->
<!--            <a :href="'/'+item.type" :title="item.name">-->
<!--          <img :src="item.imgsrc"/>-->
<!--        </a>-->
<!--          </swiper-item>-->
<!--        </Swiper>-->
    <detail-box>
      <h3 slot="title">电影</h3>
      <imgbox-small slot="item_list" :showData="item" v-for=" item in movieData" :key="item.vid">
      </imgbox-small>
    </detail-box>
    <detail-box>
      <h3 slot="title">电视剧</h3>
      <imgbox-middle slot="item_list" :showData="item" v-for=" item in tvData" :key="item.vid">
      </imgbox-middle>
    </detail-box>


    <div>
      <div v-for="item in users" :key="item.id">
        <ul>
          <li v-for="dict in item" :key="dict.id">{{dict}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  // import {getHomeMultidata} from "network/home/homeDatas"; //导入js
  // import {Swiper,SwiperItem} from "components/common/pcswiper"
  import DetailBox from "components/content/detail/DetailBox"
  import ImgboxSmall from "components/content/detail/detailItem/ImgboxSmall"  // 导入组件
  import ImgboxMiddle from "components/content/detail/detailItem/ImgboxMiddle"  // 导入组件
  export default {
    name: "Home",
    components: {
      // Swiper,SwiperItem,
      DetailBox, ImgboxSmall, ImgboxMiddle,
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
            vid: 1,
            name: '超级战舰',
            type: 'movie',
            category: '电影',
            year: '2020',
            area: '中国',
            imgurl: "https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",
            tv_series: 21
          },
          {
            vid: 1,
            name: '超级战舰',
            type: 'movie',
            category: '电影',
            year: '2020',
            area: '中国',
            imgurl: "https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",
            tv_series: 4
          },
          {
            vid: 1,
            name: '超级战舰',
            type: 'movie',
            category: '电影',
            year: '2020',
            area: '中国',
            imgurl: "https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",
          },
          {
            vid: 1,
            name: '超级战舰',
            type: 'movie',
            category: '电影',
            year: '2020',
            area: '中国',
            imgurl: "https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",
          },
          {
            vid: 1,
            name: '超级战舰',
            type: 'movie',
            category: '电影',
            year: '2020',
            area: '中国',
            imgurl: "https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",
          },
          {
            vid: 1,
            name: '超级战舰',
            type: 'movie',
            category: '电影',
            year: '2020',
            area: '中国',
            imgurl: "https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",
          },
          {
            vid: 1,
            name: '超级战舰',
            type: 'movie',
            category: '电影',
            year: '2020',
            area: '中国',
            imgurl: "https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",
          },
          {
            vid: 1,
            name: '超级战舰',
            type: 'movie',
            category: '电影',
            year: '2020',
            area: '中国',
            imgurl: "https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",
          },
          {
            vid: 1,
            name: '超级战舰',
            type: 'movie',
            category: '电影',
            year: '2020',
            area: '中国',
            imgurl: "https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",
          },
          {
            vid: 1,
            name: '超级战舰',
            type: 'movie',
            category: '电影',
            year: '2020',
            area: '中国',
            imgurl: "https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",
          },
          {
            vid: 1,
            name: '超级战舰',
            type: 'movie',
            category: '电影',
            year: '2020',
            area: '中国',
            imgurl: "https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",
          },
          {
            vid: 1,
            name: '超级战舰',
            type: 'movie',
            category: '电影',
            year: '2020',
            area: '中国',
            imgurl: "https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",
          },
          {
            vid: 1,
            name: '超级战舰',
            type: 'movie',
            category: '电影',
            year: '2020',
            area: '中国',
            imgurl: "https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",
          },
          {
            vid: 1,
            name: '超级战舰',
            type: 'movie',
            category: '电影',
            year: '2020',
            area: '中国',
            imgurl: "https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",
          },

        ],
        tvData: [
          {
            vid: 1,
            name: '这段恋爱是罪过吗?',
            type: 'tvplay',
            category: '电视剧',
            year: '2020',
            area: '日本',
            tv_series: 32,
            IMDb: 6.7,
            imgurl: "https://img.zxziyuan.com/images/upload/vod/2020-04-05/15860172410.jpg",
          },
          {
            vid: 1,
            name: '这段恋爱是罪过吗?',
            type: 'tvplay',
            category: '电视剧',
            year: '2020',
            area: '日本',
            tv_series: 32,
            IMDb: 6.7,
            imgurl: "https://img.zxziyuan.com/images/upload/vod/2020-04-05/15860172410.jpg",
          },
          {
            vid: 1,
            name: '这段恋爱是罪过吗?',
            type: 'tvplay',
            category: '电视剧',
            year: '2020',
            area: '日本',
            tv_series: 32,
            IMDb: 6.7,
            imgurl: "https://img.zxziyuan.com/images/upload/vod/2020-04-05/15860172410.jpg",
          },
          {
            vid: 1,
            name: '这段恋爱是罪过吗?',
            type: 'tvplay',
            category: '电视剧',
            year: '2020',
            area: '日本',
            tv_series: 32,
            IMDb: 6.7,
            imgurl: "https://img.zxziyuan.com/images/upload/vod/2020-04-05/15860172410.jpg",
          },
          {
            vid: 1,
            name: '这段恋爱是罪过吗?',
            type: 'tvplay',
            category: '电视剧',
            year: '2020',
            area: '日本',
            tv_series: 32,
            IMDb: 6.7,
            imgurl: "https://img.zxziyuan.com/images/upload/vod/2020-04-05/15860172410.jpg",
          },
          {
            vid: 1,
            name: '这段恋爱是罪过吗?',
            type: 'tvplay',
            category: '电视剧',
            year: '2020',
            area: '日本',
            tv_series: 32,
            IMDb: 6.7,
            imgurl: "https://img.zxziyuan.com/images/upload/vod/2020-04-05/15860172410.jpg",
          },
          {
            vid: 1,
            name: '这段恋爱是罪过吗?',
            type: 'tvplay',
            category: '电视剧',
            year: '2020',
            area: '日本',
            tv_series: 32,
            IMDb: 6.7,
            imgurl: "https://img.zxziyuan.com/images/upload/vod/2020-04-05/15860172410.jpg",
          },
          {
            vid: 1,
            name: '这段恋爱是罪过吗?',
            type: 'tvplay',
            category: '电视剧',
            year: '2020',
            area: '日本',
            tv_series: 32,
            IMDb: 6.7,
            imgurl: "https://img.zxziyuan.com/images/upload/vod/2020-04-05/15860172410.jpg",
          },
          {
            vid: 1,
            name: '这段恋爱是罪过吗?',
            type: 'tvplay',
            category: '电视剧',
            year: '2020',
            area: '日本',
            tv_series: 32,
            IMDb: 6.7,
            imgurl: "https://img.zxziyuan.com/images/upload/vod/2020-04-05/15860172410.jpg",
          },


        ],
      }
    },
    // created() {
    //   getHomeMultidata().then(
    //     res => {
    //       this.users = res
    //     }
    //   ).catch(
    //     err => {
    //       console.log(err)
    //     }
    //   );
    // }
  }
</script>

<style scoped>
  .item_list {
    display: flex;
    flex-wrap: wrap;
  }
</style>
