<!-- 组件三个元素：1.结构（html）2.样式（css）3.数据交互（javascript） -->

<template>
    <!-- 1.组件的结构 -->
    <div class="demo">
        <h2>school name: {{ schoolName }}</h2>
        <h2>address: {{ address }}</h2>
        <button @click="showName">click me to show school name</button>
    </div>
</template>
<script>
// 组件交互相关的代码（数据，方法等）
// 默认暴露 组件的代码
export default {
    // 组件名
    name: 'School',
    data() {
        return {
            schoolName: "Wintec",
            address: "Hamilton",
        };
    },
    methods: {
        showName() {
            alert(this.schoolName);
        },
    },
};
// 默认暴露
// export default school;
</script>
<style>
/* 组件的样式 */
.demo {
    background-color: aquamarine;
}
</style>