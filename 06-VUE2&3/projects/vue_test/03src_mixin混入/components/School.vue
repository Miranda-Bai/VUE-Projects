<!-- 组件三个元素：1.结构（html）2.样式（css）3.数据交互（javascript） -->

<template>
    <!-- 1.组件的结构 -->
    <div>
        <h2 @click="showName">school name: {{ name }}</h2>
        <h2>address: {{ address }}</h2>
        <h2>{{ msg }}</h2>
    </div>
</template>
<script>
// 组件交互相关的代码（数据，方法等）

// 引入混合
import { mixin } from '../mixin'

// 默认暴露 组件的代码
export default {
    // 组件名
    name: 'School',
    data() {
        return {
            name: 'AUT',
            address: 'Auckland',
        };
    },
    // 使用混合
    mixins: [mixin],
};

</script>
<style>
/* 组件的样式 */
</style>