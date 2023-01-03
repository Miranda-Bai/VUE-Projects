<script>

// 引入组件
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
  name: 'App',
  components: {
    Student,
    School,
  },
  data() {
    return {
      msg: 'Good day !'
    }
  },
  methods: {
    
  },
  mounted() {
    
  },
}
</script>

<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <School ></School>   
    <Student ></Student>
  </div>
</template>

<style>
.app {
  background-color: grey;
  padding: 5px;
}
</style>
