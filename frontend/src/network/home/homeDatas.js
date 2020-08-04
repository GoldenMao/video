import {request} from '../request'

// 获取首页多个数据
export function getHomeMultidata() {
  return request({
    url:'/api/home',
    method:'get',
    // params: {
    //     userName: 'Lan',
    //     password: '123'
    // }
  })
}

// 获取电影多个数据
export function getMovieMultidata() {
  return request({
    url:'/api/Movie',
    method:'get',
    // params: {
    //     userName: 'Lan',
    //     password: '123'
    // }
  })
}

// 获取电视剧多个数据
export function getTvshowMultidata() {
  return request({
    url:'/api/Tvshow',
    method:'get',
    // params: {
    //     userName: 'Lan',
    //     password: '123'
    // }
  })
}
