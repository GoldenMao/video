import {request} from '../request'


// 根据vid获取单条电影数据
export function getOneMovieData(vid) {
  return request({
    url:'/api/oneMovie',
    method:'get',
    //params 对应get请求

    params: {
        vid: vid,
    },
    // //data 对应post请求
    // data: {
    //     vid: vid,
    // }
  })
}
