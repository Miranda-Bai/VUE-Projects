<template>
    <h3>here is Demo</h3>
    <h4>Firstname: {{ person.firstname }}</h4>
    <h4>Lastname: {{ person.lastname }}</h4>
    <h4>Fullname: {{ person.fullname }}</h4>
    Fullname: <input type="text" v-model="person.fullname">
</template>
<script>
import { reactive, computed } from 'vue'

export default {
    name: "Demo",
    setup() {
        let person = reactive({
            firstname: "Ying",
            lastname: "Bai"
        });
        // vue3计算属性-简写
        /* person.fullname = computed(()=>{
            return person.firstname + '-' + person.lastname;
        }); */

        // vue3计算属性-完整写法（考虑读和写）
        person.fullname = computed({
            get() {
                return person.firstname + ' ' + person.lastname;
            },
            set(value) {
                const nArr = value.split(" ");
                person.firstname = nArr[0];
                person.lastname = nArr[1];
            }
        });

        return {
            person,
        }
    }
}
</script>
<style>

</style>