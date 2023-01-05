<!-- 组件三个元素：1.结构（html）2.样式（css）3.数据交互（javascript） -->

<template>
    <!-- 1.组件的结构 -->
    <div class="test">
        <button @click="isShow = !isShow">show / disappear</button>
        
        <transition-group name="hello" appear>
            <h1 v-show="!isShow" key="1">Good Morning!</h1>
            <h1 v-show="isShow" key="2">Good Afternoon!</h1>
        </transition-group>
    </div>
</template>
<script>

export default {
    // 组件名
    name: 'Test2',
    data() {
        return {
            isShow:true,
        };
    },
};

</script>
<style scoped>
/* 组件的样式 */
h1 {
    background-color: orange;
    text-align: center;
}
/* 进入的起点 */
.hello-enter{
    transform: translateX(-100%);
}
/* 进入的终点 */
.hello-enter-to{
    transform: translateX(0);
}
/* 离开的起点 */
.hello-leave{
    transform: translateX(0);
}
/* 离开的终点 */
.hello-leave-to{
    transform: translateX(-100%);
}

.hello-enter-active, .hello-leave-active {
    transition: all .4s;
}
</style>