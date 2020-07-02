import Vue from 'vue'
import Router from 'vue-router'

// 懒加载
const Home = () => import('views/home/Home')
const About = () => import('views/about/About')



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
      path: '/about',
      component: About,
      meta: {
        title: '关于'
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
