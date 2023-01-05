<script>
import Demo from './components/Demo.vue'
import {ref} from 'vue'

export default {
  name: 'App',
  components:{
    Demo,
  },
  setup(){
    let msg = ref('')

    function showHelloMsg(val){
      msg.value = val;
      console.log(msg, val)
      console.log("here is showHelloMsg function in App component")
    }

    return {
      msg,
      showHelloMsg,
    }
  }
}

</script>

<template>
  <Demo></Demo>
</template>

<style scoped>

</style>
