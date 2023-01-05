<script>
//axios 对ajax的封装api
import axios from 'axios'

export default {
  name: 'App',
  methods: {
    getStudentInfo(){
      axios.get("server's url address").then(
        response =>{
          console.log("succeed", response.data)
        },
        error =>{
          console.log("failed", error.message);
        }
      )
    }
  },
  
}
</script>

<template>
  <div class="app">
      <button @click="getStudentInfo">获取学生信息</button>
  </div>
</template>

<style>

</style>
