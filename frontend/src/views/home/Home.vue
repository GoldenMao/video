<template>
  <div id="home">
<!--    <Swiper>-->
<!--      <swiper-item v-for="item in swiperDatas" :key="item.vid">-->
<!--        <a :href="'/'+item.type" :title="item.name">-->
<!--      <img :src="item.imgsrc"/>-->
<!--    </a>-->
<!--      </swiper-item>-->

<!--    </Swiper>-->
    <h2>首页</h2>
    <div>
      <div v-for="item in users" :key="item.id">
        <ul>
          <li v-for="dict in item" :key="dict.id">{{dict}}</li>
        </ul>
      </div>
    </div>
    <div class="movie_list">
          <ImgboxSmall :showData="item" v-for=" item in testData" :key="item.vid">
<!--            <span slot="tv_series">{{item.tv_series?item.tv_series+"集":''}}</span>-->
          </ImgboxSmall>
    </div>
  </div>
</template>

<script>
  // import {getHomeMultidata} from "network/home/homeDatas"; //导入js
  // import {Swiper,SwiperItem} from "components/common/pcswiper"
  import  ImgboxSmall  from "components/content/detail/ImgboxSmall"  // 导入组件
  export default {
    name: "Home",
    components:{
      // Swiper,SwiperItem
      ImgboxSmall
    },
    data() {
      return {
        users: [],
        swiperDatas:[
          {vid:1,name:'误杀2019',type:'movie',imgsrc:"https://ae01.alicdn.com/kf/He03b7437fd0e45beb7b722b045f561fa6.png",},
          {vid:2,name:'1/2魔法',type:'movie',imgsrc:"https://ae01.alicdn.com/kf/Ha992bdabca99421db58b73b7da6d4c42x.jpg",},
          {vid:3,name:'超级战舰',type:'movie',imgsrc:"http://p6-tt.byteimg.com/large/pgc-image/ea1a36deae79460f8657127ad176ec4b?from=pc",},
        ],
        testData:[
          {vid:1,name:'超级战舰',type:'movie',category:'电影',year:'2020',area:'中国',imgurl:"https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",},
          {vid:1,name:'超级战舰',type:'movie',category:'电影',year:'2020',area:'中国',imgurl:"https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",tv_series:3},
          {vid:1,name:'超级战舰',type:'movie',category:'电影',year:'2020',area:'中国',imgurl:"https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",tv_series:21},
          {vid:1,name:'超级战舰',type:'movie',category:'电影',year:'2020',area:'中国',imgurl:"https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",tv_series:4},
          {vid:1,name:'超级战舰',type:'movie',category:'电影',year:'2020',area:'中国',imgurl:"https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",},
          {vid:1,name:'超级战舰',type:'movie',category:'电影',year:'2020',area:'中国',imgurl:"https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",},
          {vid:1,name:'超级战舰',type:'movie',category:'电影',year:'2020',area:'中国',imgurl:"https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",},
          {vid:1,name:'超级战舰',type:'movie',category:'电影',year:'2020',area:'中国',imgurl:"https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",},
          {vid:1,name:'超级战舰',type:'movie',category:'电影',year:'2020',area:'中国',imgurl:"https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",},
          {vid:1,name:'超级战舰',type:'movie',category:'电影',year:'2020',area:'中国',imgurl:"https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",},
          {vid:1,name:'超级战舰',type:'movie',category:'电影',year:'2020',area:'中国',imgurl:"https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",},
          {vid:1,name:'超级战舰',type:'movie',category:'电影',year:'2020',area:'中国',imgurl:"https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",},
          {vid:1,name:'超级战舰',type:'movie',category:'电影',year:'2020',area:'中国',imgurl:"https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",},
          {vid:1,name:'超级战舰',type:'movie',category:'电影',year:'2020',area:'中国',imgurl:"https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",},
          {vid:1,name:'超级战舰',type:'movie',category:'电影',year:'2020',area:'中国',imgurl:"https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",},
          {vid:1,name:'超级战舰',type:'movie',category:'电影',year:'2020',area:'中国',imgurl:"https://ae01.alicdn.com/kf/H1aaead24a17746ca84fcf103fbdeb9b57.png",},

        ]
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
 .movie_list{
   display: flex;
   flex-wrap: wrap;
 }
  /*.movie_list child{*/
  /*  flex:1*/
  /*}*/
</style>
