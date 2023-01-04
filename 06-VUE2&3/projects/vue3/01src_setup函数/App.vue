<script>
import {h} from 'vue'

export default {
  name: 'App',
  setup() {
    let name="Miranda";
    let age=19;

    function sayHello(){
      alert("hello")
    }

    /* return {
      name,
      age,
      sayHello,
    } */

    // 返回渲染函数
    /* return ()=>{
      return h('h1','Welcome to learn VUE3')
    } */
    // 简写
    return ()=> h('h1','Welcome to learn VUE3')
    
  }
}

</script>

<template>
  <h1>I'm an App component</h1>
  <h3>Name : {{ name }}</h3>
  <h3>Age : {{ age }}</h3>
  <button @click="sayHello">click to say hello</button>
</template>

<style scoped>

</style>
