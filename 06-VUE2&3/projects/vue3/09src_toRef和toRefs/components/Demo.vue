<template>
    <h3>person源数据： {{ person }}</h3>
    <h2>Name: {{ name }}</h2>
    <h2>Gender: {{ gender }}</h2>
    <h2>Age: {{ age }}</h2>
    <h2>job salary: {{ job.salary }}K</h2>
    <button @click="name = name + '~'">change name</button>
    <button @click="age++">change age</button>
    <button @click="job.salary++">change salary</button>
    <hr>
    <h2>salary: {{ salary }}</h2>
</template>
<script>
import { toRef, reactive, toRefs } from 'vue'

export default {
    name: "Demo",
    setup() {
        let person = reactive({
            name: "Miranda",
            gender: "female",
            age: 19,
            job: {
                type: "developer",
                salary: 40,
            }
        });

        // toRef引用源数据的某个属性
        let salary = toRef(person.job, 'salary')

        /* let p = toRefs(person);
        console.log("@@@", p); */

        return {
            person,
            salary,
            ...toRefs(person),
        }
    }
}
</script>
<style>

</style>