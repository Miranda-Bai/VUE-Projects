<template>
    <div class="son">
        <h3>I'm son component</h3>
        <Child></Child>
    </div>
</template>
<script>
import Child from './Child.vue'

export default {
    name: 'Son',
    components: {
        Child,
    },
}
</script>
<style scoped>
.son {
    background-color: pink;
    padding: 10px;
}
</style>