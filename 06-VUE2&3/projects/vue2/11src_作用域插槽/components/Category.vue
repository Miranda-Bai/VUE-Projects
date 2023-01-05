<!-- 组件三个元素：1.结构（html）2.样式（css）3.数据交互（javascript） -->

<template>
    <!-- 1.组件的结构 -->
    <div class="category">
        <h3>{{ title }} category</h3>
        <slot :gameLst="games"></slot>
        <!-- <ul>
            <li v-for="(data, index) in games" :key="index">{{ data }}</li>
        </ul> -->
    </div>
</template>
<script>

export default {
    // 组件名
    name: 'Category',
    data() {
        return {

        };
    },
    props: ["title"],
    data() {
        return {
            games: ['LOL', 'CS go', 'Fire', 'KOH'],
        }
    }
};

</script>
<style scoped>
/* 组件的样式 */
ul>li {
    /* list-style: none; */
    text-align: left;
}

.category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
    /* text-align: center; */
}

h3 {
    text-align: center;
    background-color: pink;
}
</style>