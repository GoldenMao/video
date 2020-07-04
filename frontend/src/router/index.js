import Vue from 'vue'
import Router from 'vue-router'

// 懒加载
const Home = () => import('views/home/Home')
const Movie = () => import('views/movie/Movie')
const Tvplay = () => import('views/tvplay/Tvplay')
const Cartoon = () => import('views/cartoon/Cartoon')
const Special = () => import('views/special/Special')



const NotFound = () => import('components/common/notfound404/NotFound')
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/movie',
      component: Movie,
      meta: {
        title: '电影'
      }
    },
    {
      path: '/tvplay',
      component: Tvplay,
      meta: {
        title: '电视剧'
      }
    },
    {
      path: '/cartoon',
      component: Cartoon,
      meta: {
        title: '动漫'
      }
    },
    {
      path: '/special',
      component: Special,
      meta: {
        title: '专题'
      }
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
      meta: {
        title: '404'
      }
    }
  ],
  mode: 'history'

})

export default router
