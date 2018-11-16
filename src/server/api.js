import http from './http'

export const api = {
  getProductList: function (paramObj) {
    return http.get('/product/list', paramObj)
  }
}
