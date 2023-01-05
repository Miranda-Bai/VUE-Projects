<!-- 组件三个元素：1.结构（html）2.样式（css）3.数据交互（javascript） -->

<template>
    <!-- 1.组件的结构 -->
    <div class="demo">   
        <h2>student name: {{ stuName }}</h2>
        <h2>gender: {{ gender }}</h2>
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
            this.hello();
        }
    },
};

</script>
<style scoped>
/* 组件的样式 */
.demo{
    background-color: orange;
}
</style>