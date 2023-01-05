<script>
import Category from './components/Category.vue'

export default {
  name: 'App',
  components: {
    Category,
  },
}
</script>

<template>
  <div class="container">
    <Category title="games">
      <template v-slot:default="suiyi">
        <!-- {{ suiyi.gameLst }} -->
        <ul>
          <li v-for="(data, index) in suiyi.gameLst" :key="index">{{ data }}</li>
        </ul>
      </template>

    </Category>
    <Category title="games">
      <template v-slot:default="suiyi">
        <ol>
          <li v-for="(data, index) in suiyi.gameLst" :key="index">{{ data }}</li>
        </ol>
      </template>

    </Category>
    <Category title="games">
      <!-- 解构赋值 -->
      <template v-slot:default="{gameLst}">
        <h4 v-for="(data, index) in gameLst" :key="index">{{ data }}</h4>
      </template>   
    </Category>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: space-around;
}

video {
  width: 100%;
}

h4{
  text-align: left;
  margin-left: 40px;
}
</style>
