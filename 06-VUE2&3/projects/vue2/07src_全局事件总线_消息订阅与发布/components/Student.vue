<!-- 组件三个元素：1.结构（html）2.样式（css）3.数据交互（javascript） -->

<template>
    <!-- 1.组件的结构 -->
    <div class="student">
        <h2>student name: {{ stuName }}</h2>
        <h2>gender: {{ gender }}</h2>
    </div>
</template>
<script>
import PubSub from 'pubsub-js';

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
        demo(msgName, data){
            console.log(msgName, data);
        }
    },
    mounted() {

        // 订阅消息
       /*  this.pubId = PubSub.subscribe("hello", (msgName, data) => {
            console.log(msgName, data);
        }) */
        this.pubId = PubSub.subscribe("hello", this.demo)
    },
    beforeDestroy() {
        // 取消订阅
        PubSub.unsubscribe(this.pubId);
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