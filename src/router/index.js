import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/home/index'
import leftMenu from '@/pages/home/menu'
import user from '@/pages/home/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
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
