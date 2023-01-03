<!-- 组件三个元素：1.结构（html）2.样式（css）3.数据交互（javascript） -->

<template>
    <!-- 1.组件的结构 -->
    <div class="test">
        <button @click="isShow = !isShow">show / disappear</button>
        <!-- <h1 v-show="isShow" class="come">Good Day!</h1>    -->
        <!-- transition 是vue里面包裹动画的效果
            配合v-enter-active v-leave-active 使用 可用name替代v
            :appear="true" 开始时显示-->
        <transition name="hello" appear>
            <h1 v-show="isShow" class="come">Good Day!</h1>
        </transition>
    </div>
</template>
<script>

export default {
    // 组件名
    name: 'Test',
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
.hello-enter-active {
    animation: show 2s;
    transition: all .4s;
}
.hello-leave-active{
    animation: show 2s reverse;
    transition: all .4s;
}

@keyframes show {
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0);
    }
}
</style>