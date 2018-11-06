<template>
  <div class="main">
    菜单{{type}}
    <div class="msg">
      <div class="text">{{conTime}}</div>
      <button v-on:click="greet">点击</button>
    </div>
    <!-- <div v-for="(vo, index) in menu" :key='index'><div class="item">{{index}}{{vo.name}}</div></div> -->
  </div>
</template>

<script>
export default {
  name: 'leftMenu',
  props: ['type'],
  data () {
    return {
      time: 'aaaa'
    }
  },
  methods: {
    greet: function () {
      this.time = (new Date()).getTime()
    }
  },
  computed: {
    conTime: function () {
      return 'computed time: ' + this.time
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
