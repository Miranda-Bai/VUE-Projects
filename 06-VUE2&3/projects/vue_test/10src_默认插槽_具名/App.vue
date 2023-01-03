<script>
import Category from './components/Category.vue'

export default {
  name: 'App',
  components:{
    Category,
  },
  data(){
    return {
      foods:['hot pot', 'BBQ', 'lobster', 'steak'],
      games:['LOL', 'CS go', 'Fire', 'KOH'],
      films:['<The Avatar>', '<Jane>', '<Vampire>', '<<Titanic>>'],
    }
  }
}
</script>

<template>
  <div class="container">
    <Category title="foods" :listData="foods">
      <template v-slot:center>
        <img src="./assets/vue.svg" alt="">
      </template>
      <template v-slot:footer>
        <a href="#">more...</a>
      </template>
      
    </Category>
    <Category title="games" :listData="games">
    
    </Category>
    <Category title="films" :listData="films">
    <template v-slot:center>
      <video controls src="https://www.youtube.com/watch?v=QkLSFyyWNEk"></video>
    </template>
    </Category>
  </div>
</template>

<style>
.container{
  display: flex;
  justify-content: space-around;
}
video{
  width: 100%;
}
</style>
