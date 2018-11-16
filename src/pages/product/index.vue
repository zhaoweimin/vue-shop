<template>
  <div class="pd">
    <h2 class="title">产品列表</h2>
    <form class="form-inline ta-l">
      <div class="form-group">
        <label for="exampleInputName2">关键字</label>
        <input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail2">id</label>
        <input type="email" class="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com">
      </div>
      <button type="submit" class="btn btn-default">搜索</button>
    </form>
    <table class="table table-bordered mt">
      <thead>
        <tr class="">
          <th>id</th>
          <th>名称</th>
          <th>图片</th>
          <th>价格</th>
          <th>设置</th>
        </tr>
      </thead>
      <tbody>
        <tr :class="index%2 ? 'info' : 'success'" v-for="(vo, index) in list" :key="index">
          <td>{{vo.id}}</td>
          <td>{{vo.name}}{{index}}</td>
          <td class="img"><img :src="'../../../static/image/'+vo.path" alt=""></td>
          <td>${{vo.price}}</td>
          <td>
            <button type="button" class="btn btn-info">修改</button>
            <button type="button" class="btn btn-danger">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'homeIndex',
  data () {
    let paramObj = {
      page_no: 1,
      page_size: 10
    }
    this.$api.getProductList(paramObj).then(data => {
      console.log(data)
    })
    return {
      msg: 'Welcome to Your Vue.js App',
      list: [
        {id: 0, path: '1.jpg', name: '产品', price: 5},
        {id: 1, path: '2.jpg', name: '产品', price: 5},
        {id: 2, path: '3.jpg', name: '产品', price: 5},
        {id: 3, path: '4.jpg', name: '产品', price: 5},
        {id: 4, path: '5.jpg', name: '产品', price: 5}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
