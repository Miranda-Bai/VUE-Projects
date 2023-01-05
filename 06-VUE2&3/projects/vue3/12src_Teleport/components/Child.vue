<template>
    <div class="child">
        I'm child component<br>
        <Dialogue></Dialogue>
    </div>
</template>
<script>
import Dialogue from './Dialogue.vue'

export default {
    name: 'Child',
    components:{
        Dialogue,
    }
}
</script>
<style scoped>
.child {
    background-color: skyblue;
    padding: 10px;
}
</style>