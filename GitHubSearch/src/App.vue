<script>
import Search from './components/Search.vue'
import List from './components/List.vue'

export default {
  name: "App",
  components: {
    Search,
    List,
  },
  data(){
    return {
      userLst:[],
    }
  },
  methods:{
    getUserLst(data){
      this.userLst = data;
      console.log(data)
    }
  }
}

</script>

<template>
  <div class="container">
    <Search :getUserLst="getUserLst"></Search>
    <List :userLst="userLst"></List>
  </div>
</template>

<style>

</style>
