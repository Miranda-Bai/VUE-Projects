<script>
import Son from './components/Son.vue'
import { reactive, toRefs, provide } from 'vue'

export default {
  name: 'App',
  components: {
    Son,
  },
  setup() {
    let car = reactive({
      name: "Beetle",
      price: 40,
    });
    // 给自己的后代组件传数据
    provide('car', car);

    return {
      ...toRefs(car),
    }
  }
}
</script>

<template>
  <div class="app">
    <h3>I'm app component</h3>
    {{ name }}----{{ price }}W
    <Son></Son>
  </div>
</template>

<style scoped>
.app {
  background-color: rgba(19, 19, 238, 0.5);
  padding: 10px;
}
</style>
