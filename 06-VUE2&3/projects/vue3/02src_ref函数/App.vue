<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    let name = ref("Miranda");
    let age = ref(19);
    let job = ref({
      type:"front developer",
      salary:"30k"
    })

    function sayHello() {
      alert("hello")
    }
    function changeInfo() {
      name.value = "Bai Ying";
      age.value = 21;
      job.value.type = "full stack developer";
      job.value.salary= "40k";
      console.log(job.value);
    }
    return {
      name,
      age,
      job,
      sayHello,
      changeInfo,
    }
  }
}

</script>

<template>
  <h1>I'm an App component</h1>
  <h3>Name : <input type="text" v-model="name">{{  name }}</h3>
  <h3>Age : <input type="text" v-model="age">{{  age }}</h3>
  <h3>Job title : {{ job.type }} and Job salary : {{ job.salary }}</h3>
  <button @click="sayHello">click to say hello</button>
  <button @click="changeInfo">change person's Information</button>
</template>

<style scoped>

</style>
