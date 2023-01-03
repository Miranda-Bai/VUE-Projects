<!-- 组件三个元素：1.结构（html）2.样式（css）3.数据交互（javascript） -->

<template>
    <!-- 1.组件的结构 -->
    <div class="test">
        <button @click="isShow = !isShow">show / disappear</button>

        <transition-group 
            appear 
            name="animate__animated animate__bounce" 
            enter-active-class="animate__swing"
            leave-active-class="animate__fadeOut"
        >
            <h1 v-show="!isShow" key="1">Good Morning!</h1>
            <h1 v-show="isShow" key="2">Good Afternoon!</h1>
        </transition-group>
    </div>
</template>
<script>
import 'animate.css'

export default {
    // 组件名
    name: 'Test2',
    data() {
        return {
            isShow: true,
        };
    },
};

</script>
<style scoped>
/* 组件的样式 */
h1 {
    /* background-color: orange; */
    text-align: center;
}
</style>