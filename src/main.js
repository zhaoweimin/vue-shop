// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCoreImageUpload from 'vue-core-image-upload'
import {api} from './server/api'

Vue.config.productionTip = false
// 定义全局变量
Vue.prototype.$api = api

Vue.use(VueCoreImageUpload)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, VueCoreImageUpload },
  template: '<App/>'
})
