import Vue from 'vue'
import Router from 'vue-router'
import leftMenu from '@/pages/home/menu'
import product from '@/pages/product/index'
import add from '@/pages/product/add'
import user from '@/pages/user/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: product
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/product/add',
      name: 'add',
      component: add
    },
    {
      path: '/menu/:type',
      name: 'leftMenu',
      component: leftMenu,
      props: true
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
