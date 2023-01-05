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
import { ref, watch, reactive } from 'vue'

export default {
    name: "Demo",
    setup() {
        let sum = ref(0);
        let msg = ref("hello");
        let person = reactive({
            name: "Miranda",
            gender: "female",
            age:19,
            job:{
                type:"developer",
                salary:"40k",
            }
        })

        // vue3监视 ref定义的响应式数据
        /* watch(sum, (newVal, oldVal) => {
            console.log("sum is changing", newVal, oldVal);
        }); */

        // 1:监视的对象 2:监视的回调函数 3.配置项，immediate = true，初始时会调用一次；deep=true，深度监视
        /* watch([sum, msg], (newValArr, oldValArr) => {
            console.log("sum or msg is changing", newValArr, oldValArr);
        }, {immediate:true}); */

       /*  watch([sum, msg], ([newSum, newMsg], [preSum, preMsg]) => {
            console.log("sum or msg is changing", newSum, newMsg, preSum, preMsg);
        }, { immediate: true });

        // 不用deep，可以深度监视reactive person对象,
        // 无法正确得到oldval
        watch(person, (newVal, oldVal) => {
            console.log("person is changing", newVal, oldVal);
        }); */
        // 监视reactive对象中的某一个属性
       /*  watch(()=>{return person.name}, (newVal, oldVal) => {
            console.log("person is changing", newVal, oldVal);
        }); */
        // 监视reactive对象中的多个属性
       /*  watch([()=>{return person.name}, ()=>{return person.age}], (newVal, oldVal) => {
            console.log("person is changing", newVal, oldVal);
        }); */

        // 监视reactive对象中的对象属性,此时需要deep:true才能检测到对象属性内的属性变化
        // 依然无法正确获取oldVal，即只要监视的是对象，就无法获得正确的oldVal（20230105
        watch(()=>{return person.job}, (newVal, oldVal) => {
            console.log("person is changing", newVal, oldVal);
        }, {deep:true});

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