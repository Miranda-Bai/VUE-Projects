<!-- 组件三个元素：1.结构（html）2.样式（css）3.数据交互（javascript） -->

<template>
    <!-- 1.组件的结构 -->
    <div class="test">
        <button @click="isShow = !isShow">show / disappear</button>
    </div>
</template>
<script>

export default {
    // 组件名
    name: 'Test',
    data() {
        return {
            
        };
    },
};

</script>
<style scoped>
/* 组件的样式 */

</style>