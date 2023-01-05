<template>
    <h3>here is Demo</h3>
    <h4>{{  person.name}}</h4>
    <hr>
    <h3>{{ msg }}</h3>
    <button @click="test">click to trigger test event</button>
</template>
<script>
import {reactive} from 'vue'

export default {
    name:"Demo",
    props:['msg'],
    // 自定义事件
    emits:['hello'],
    setup(props, context){
        const person = reactive({
            name:"miranda",
            age:19,
        });

        function test(){
            context.emit('hello', 666);
        }

        return {
            person,
            test,
        }
    }
}
</script>
<style>
    
</style>