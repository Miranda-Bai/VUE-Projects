<script>
import About from './pages/About.vue'
import Home from './pages/Home.vue'
import Banner from './components/Banner.vue'

export default {
  name: 'App',
  components: {
    About,
    Home,
    Banner,
  },
}
</script>

<template>
  <div class="container">
    <div class="row">
      <Banner></Banner>
    </div>
    <div class="row">
      <div class="offset-md-2 col-md-2">
        <div class="list-group">
          <!-- <a class="list-group-item active" href="/about">About</a> -->
          <!-- <router-link>会转成a标签</router-link> active-class 是该元素激活时的样式 -->
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <!-- <a class="list-group-item" href="/home">Home</a> -->
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-md-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container{
  height: 100vh;
  /* background-color: pink; */
}
</style>
