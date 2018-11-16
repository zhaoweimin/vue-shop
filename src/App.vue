<template>
  <div id="app">
    <div class="header dis-flex">
      <div class="logo">
        <a href=""><img src="./assets/logo.png" alt="logo"></a>
      </div>
      <div class="flex-1 nav">
        <span>{{user}}</span>
        <a href="">登录</a> | <a href="">注册</a>
      </div>
    </div>
    <div class="dis-flex content">
      <div class="menu">
        <router-link v-for="(vo, index) in menu" :key="index" :to="vo.link"><div class="item">{{vo.name}}</div></router-link>
      </div>
      <div class="flex-1 main">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      user: '用户1',
      menu: [
        {link: '/product', name: '产品'},
        {link: '/product/add', name: '添加产品'},
        {link: '/user', name: '我的'}
      ]
    }
  }
}
</script>

<style>
@import './../static/css/base.css'; /*引入公共样式*/
@import './../static/css/style.css'; /*引入公共样式*/
@import './../static/css/bootstrap.min.css'; /*引入公共样式*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
