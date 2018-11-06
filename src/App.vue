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
        <router-link v-for="(vo, index) in menu" :key='index' :to="vo.link"><div class="item">{{index}}{{vo.name}}</div></router-link>
        <router-link to="/user"><div class="item">用户1</div></router-link>
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
        {link: '/menu/1', name: '菜单1', type: 1},
        {link: '/menu/2', name: '菜单2', type: 2},
        {link: '/menu/3', name: '菜单3', type: 3}
      ]
    }
  }
}
</script>

<style>
@import './../static/css/base.css'; /*引入公共样式*/
@import './../static/css/style.css'; /*引入公共样式*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
