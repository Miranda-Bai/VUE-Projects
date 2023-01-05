<!-- 组件三个元素：1.结构（html）2.样式（css）3.数据交互（javascript） -->

<template>
    <!-- 1.组件的结构 -->
    <div>   
        <h2>student name: {{ stuName }}</h2>
        <h2>gender: {{ gender }}</h2>
        <input type="text" v-fbind:value="stuName">
        <button @click="test">click me to test hello function</button>
    </div>
</template>
<script>

export default {
    // 组件名
    name: 'Student',
    data() {
        return {
            stuName:'Miranda',
            gender:'female',
        };
    },
    methods: {
        test(){
            // console.log(this.$root.hello())
            this.hello;
        }
    },
};

</script>
<style>
/* 组件的样式 */
</style>