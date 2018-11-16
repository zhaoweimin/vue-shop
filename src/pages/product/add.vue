import VueCoreImageUpload  from 'vue-core-image-upload'
<template>
  <div class="pd">
    <h2 class="title">添加产品</h2>
    <form class="ta-l">
      <div class="form-group">
        <label for="exampleInputEmail1">名称{{data.name}}</label>
        <input type="text" v-model="data.name" class="form-control" placeholder="名称">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">价格(单位：${{data.price}})</label>
        <input type="number" v-model="data.price" class="form-control" placeholder="价格">
      </div>
      <div class="form-group">
        <label for="exampleInputFile">选择图片</label>
        <vue-core-image-upload
        :class="['btn', 'btn-primary']"
        :crop="false"
        @imageuploaded="imageuploaded"
        :data="data"
        :max-file-size="5242880"
        url="http://localhost:8080" >
        </vue-core-image-upload>
        <!-- <input type="file" id="exampleInputFile"> -->
        <p class="help-block">Example block-level help text here.</p>
      </div>
      <button v-on:click="send" class="btn btn-default">确定</button>
    </form>
  </div>
</template>

<script>
import VueCoreImageUpload from 'vue-core-image-upload'

export default {
  name: 'homeIndex',
  components: {
    VueCoreImageUpload
  },
  data () {
    return {
      data: {
        src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
        name: 'a',
        price: 0
      }
    }
  },
  methods: {
    imageuploaded (res) {
      console.log(res)
      if (res.errcode === 0) {
        this.src = 'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png'
      }
    },
    send (e) {
      let that = this
      let data = that.data
      console.log(data.name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
