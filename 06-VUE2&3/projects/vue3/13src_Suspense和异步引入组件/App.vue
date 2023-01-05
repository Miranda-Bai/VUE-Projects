<script>
// 静态引入
// import Son from './components/Son.vue'
// defineAsyncComponent定义异步的组件
import { defineAsyncComponent } from 'vue';
// 动态引入，异步引入
const Son = defineAsyncComponent(()=>import('./components/Son.vue'))

export default {
  name: 'App',
  components: {
    Son,
  },
  setup() {

    return {
      
    }
  }
}
</script>

<template>
  <div class="app">
    <h3>I'm app component</h3>
    <Suspense>
      <template v-slot:default>
        <Son></Son>
      </template>
      <!-- 退路 -->
      <template v-slot:fallback>
       <h3>loading....</h3>
      </template>
    </Suspense>  
  </div>
</template>

<style scoped>
.app {
  background-color: rgba(19, 19, 238, 0.5);
  padding: 10px;
}
</style>
