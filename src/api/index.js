import http from '../utils/request';

export default {
  login(data) {
    return http.post('/login', data)

  },
  index() {
    return http.get('/Index/index')
  },
  // 订单详情
  h5Companion() {
    return http.get('/h5/companion')

  },
  // 订单的提交
  createOrder(data){
    return http.post('/createOrder',data)

  },
  // 订单列表
  orderList(params){
    return http.get('/order/list',{params})

  }
  // 订单详情
  ,
  orderDetail(params){
    return http.get('/order/detail',{params})

  }

}