<script>
import { ref, reactive } from 'vue'

export default {
  name: 'App',
  setup() {
    let name = ref("Miranda");
    let age = ref(19);
    // reactive处理对象响应式时是深层次的
    let job = reactive({
      type: "front developer",
      salary: "30k",
      a: {
        b: {
          c: 66
        }
      }
    })
    let hobby = reactive(['study', 'reading', 'watching'])

    function sayHello() {
      alert("hello")
    }
    function changeInfo() {
      name.value = "Bai Ying";
      age.value = 21;
      job.type = "full stack developer";
      job.salary = "40k";
      console.log(job.value);
    }
    function changeDeep() {
      job.a.b.c = 77;
    }
    function addHobby(val) {
      console.log(hobby)
      hobby[3] = 'skiing';
      hobby.unshift(val);
    }

    return {
      name,
      age,
      job,
      hobby,
      sayHello,
      changeInfo,
      changeDeep,
      addHobby,
    }
  }
}

</script>

<template>
  <h1>I'm an App component</h1>
  <h3>Name : <input type="text" v-model="name">{{ name }}</h3>
  <h3>Age : <input type="text" v-model="age">{{ age }}</h3>
  <h3>Job title : {{ job.type }} and Job salary : {{ job.salary }}</h3>
  <button @click="sayHello">click to say hello</button><br>
  <button @click="changeInfo">change person's Information</button><br>
  <h3>{{ job.a.b.c }}</h3>
  <button @click="changeDeep">change deep object value</button><br>
  <ul>
    <li v-for="h in hobby">{{ h }}</li>
  </ul>
  <button @click="addHobby('hiking')">add hiking to hobby</button>
</template>

<style scoped>

</style>
