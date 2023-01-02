<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you searching" v-model="keyword">&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>
<script>
import axios from 'axios'

export default {
    name: 'Search',
    data() {
        return {
            keyword: '',
        }
    },
    props: ["getUserLst"],
    methods: {
        searchUsers() {
            axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
                response => {
                    this.getUserLst(response.data.items);
                },
                error => {
                    console.log("failed!", error.message);
                }
            )
        }
    }
}
</script>
<style scoped>
.jumbotron {
    padding: 1rem;
    margin-bottom: 2rem;
    background-color: rgba(135, 142, 239, 0.25);
}

input[type=text] {
    width: 80%;
    font-size: 1.125rem;
}
</style>