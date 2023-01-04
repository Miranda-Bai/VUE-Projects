<template>
  <div class="home-container">
    <h3>Home 组件</h3>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- <a class="list-group-item active" href="/home-news">News</a> -->
          <router-link class="list-group-item" active-class="active" to="/home/home-news">News</router-link>
        </li>
        <li>
          <!-- <a class="list-group-item" href="/home-message">Message</a> -->
          <router-link class="list-group-item" active-class="active" to="/home/home-message">Message</router-link>
        </li>
      </ul>
    </div>
    <!-- is指定要缓存的组件名  -->

    <!-- <keep-alive include="News">
      <router-view></router-view>
    </keep-alive> -->

    <router-view v-slot="{ Component }">
      <keep-alive include="News">
        <component  :is="Component"  />
      </keep-alive>
    </router-view>

  </div>
</template>
  
<script>
import News from './News.vue'
import Message from './Message.vue'

export default {
  name: 'Home',
  components: {
    News,
    Message,
  }
}
</script>
  
<style  scoped>
.home-container {
  min-height: 200px;
  /* background-color: pink; */
  padding: 15px;
}
</style>
  