<script>

// 引入组件
import Test from './components/Test.vue'
import Test2 from './components/Test2.vue'
import Test3 from './components/Test3.vue'

export default {
  name: 'App',
  components: {
    Test,
    Test2,
    Test3,
  },
}
</script>

<template>
  <div class="app">
    <Test ></Test>   
    <Test2 ></Test2> 
    <Test3 ></Test3> 
  </div>
</template>

<style>

</style>
