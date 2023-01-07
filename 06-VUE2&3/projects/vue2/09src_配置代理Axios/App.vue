<script>
//axios 对ajax的封装api
import axios from 'axios'

export default {
  name: 'App',
  methods: {
    getStudentInfo(){
      let data = axios.get("http://www.tianqiapi.com/api?version=v9&appid=23035354&appsecret=8YvlPNrz").then(
        response =>{
          console.log("succeed", response.data)
          console.log("response = ",response)
          return response.data;
        },
        error =>{
          console.log("failed", error.message);
        }
      );

      console.log("data = ",data)
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
