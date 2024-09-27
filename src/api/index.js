import http from '../utils/request';

export default {
  login(data) {
    return http.post('/v3pz/login', data)

  },
  index() {
    return http.get('/v3pz/Index/index')
  },
  // 订单详情
  h5Companion() {
    return http.get('/v3pz/h5/companion')

  },
  // 订单的提交
  createOrder(data){
    return http.post('/v3pz/createOrder',data)

  },
  // 订单列表
  orderList(params){
    return http.get('/v3pz/order/list',{params})

  }
  // 订单详情
  ,
  orderDetail(params){
    return http.get('/v3pz/order/detail',{params})

  }

}