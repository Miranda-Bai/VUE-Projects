<!-- 组件三个元素：1.结构（html）2.样式（css）3.数据交互（javascript） -->

<template>
    <!-- 1.组件的结构 -->
    <div class="student">
        <h2>student name: {{ stuName }}</h2>
        <h2>gender: {{ gender }}</h2>
        <button @click="sendStudentName">give student name to app</button>
        <button @click="unbind">unbind stusend event </button>
        
    </div>
</template>
<script>

export default {
    // 组件名
    name: 'Student',
    data() {
        return {
            stuName: 'Miranda',
            gender: 'female',
        };
    },
    methods: {
        sendStudentName() {
            // 触发student实例上的stusend事件,并把学生名传给了它
            this.$emit('stusend', this.stuName, 66, 88, 99);
        },
        unbind(){
            // vue3中$off已被移除
            // this.$off('stusend');
        }
    },
};

</script>
<style scoped>
/* 组件的样式 */
.student {
    background-color: orange;
    padding: 5px;
    margin-top: 30px;
}
</style>