<!-- 组件三个元素：1.结构（html）2.样式（css）3.数据交互（javascript） -->

<template>
    <!-- 1.组件的结构 -->
    <div class="demo">
        <h2>school name: {{ name }}</h2>
        <h2>address: {{ address }}</h2>
    </div>
</template>
<script>

// 默认暴露 组件的代码
export default {
    // 组件名
    name: 'School',
    data() {
        return {
            name: 'AUT12334',
            address: 'Auckland',
        };
    },
};

</script>
<style scoped>
/* 组件的样式 scoped 仅组件内有效，局部有效*/
.demo{
    background-color: aqua;
}
</style>