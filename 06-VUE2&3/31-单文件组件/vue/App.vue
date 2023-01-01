<!-- App组件是用来汇总所有组件的总组件，即所有组件的总管理 -->
<template>
    <div>
        <School />
        <Student></Student>
    </div>
</template>

<script>
// 引入组件
import School from './School.vue'
import Student from './Student.vue'

export default {
    name: 'App',
    // 组册组件
    components: {
        School,
        Student,
    }
}
</script>

<style>

</style>