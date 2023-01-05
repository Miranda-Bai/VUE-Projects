<template>
    <div class="child">
        I'm child component<br>
        {{ car.name }}---{{ car.price }}W
    </div>
</template>
<script>
import { inject } from 'vue'

export default {
    name: 'Child',
    setup(){
        let car = inject('car');

        return {
            car,
        }
    }
}
</script>
<style scoped>
.child {
    background-color: skyblue;
    padding: 10px;
}
</style>