<template>
    <h2>sum is {{ sum }}</h2>
    <button @click="sum++">click me plus one</button><br>
    <button @click="msg = msg + '!'">{{ msg }}</button>
    <hr>
    <h2>Name: <input type="text" v-model="person.name"></h2>
    <h2>Gender: <input type="text" v-model="person.gender"></h2>
    <h2>Age: <input type="text" v-model="person.age"></h2>
    <h2>job salary: <input type="text" v-model="person.job.salary"></h2>
</template>
<script>
import { ref, watchEffect, reactive } from 'vue'

export default {
    name: "Demo",
    setup() {
        let sum = ref(0);
        let msg = ref("hello");
        let person = reactive({
            name: "Miranda",
            gender: "female",
            age: 19,
            job: {
                type: "developer",
                salary: "40k",
            }
        })
        // 监视的回调中用到哪个属性就监视哪个属性
        watchEffect(() => {
            const x = sum.value
            const s = person.job.salary
            console.log("watchEffect is running")
        })

        return {
            sum,
            msg,
            person,
        }
    }
}
</script>
<style>

</style>