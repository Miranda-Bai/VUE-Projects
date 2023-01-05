<script>
import Son from './components/Son.vue'

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
    <Son></Son>
  </div>
</template>

<style scoped>
.app {
  background-color: rgba(19, 19, 238, 0.5);
  padding: 10px;
}
</style>
