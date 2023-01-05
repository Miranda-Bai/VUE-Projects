<template>
    <h2>sum is {{ sum }}</h2>
    <button @click="sum++">click me plus one</button><br>
    <hr>
    <h2>当前鼠标的坐标为：{{ point.x }}, {{ point.y }}</h2>

</template>
<script>
import { ref } from 'vue'
import usePoint from '../hooks/usePoint'

export default {
    name: "Demo",
    setup() {
        let sum = ref(0);
        let point = usePoint();
        
        return {
            sum,
            point,
        }
    }
}
</script>
<style>

</style>