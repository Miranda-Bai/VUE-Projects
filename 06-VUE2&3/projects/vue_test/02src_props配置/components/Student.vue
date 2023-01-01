<!-- 组件三个元素：1.结构（html）2.样式（css）3.数据交互（javascript） -->

<template>
    <!-- 1.组件的结构 -->
    <div>
        <h1>{{ msg }}</h1>
        <h2>student name: {{ stuName }}</h2>
        <h2>gender: {{ gender }}</h2>
        <h2>stude age: {{ age + 1 }}</h2>
    </div>
    <div>
        <h1>{{ msg }}</h1>
        <h2>student name: {{ myName }}</h2>
        <h2>gender: {{ myGender }}</h2>
        <h2>stude age: {{ myAge }}</h2>
        <button @click="myAge++">click me age plus one</button>
    </div>
</template>
<script>
// 组件交互相关的代码（数据，方法等）
// 默认暴露 组件的代码
export default {
    // 组件名
    name: 'Student',
    data() {
        return {
            msg: "I'm a student of XXXX",
            myName: this.stuName,
            myAge: this.age,
            myGender: this.gender,
        };
    },
    // 简单接收
    // props: ["stuName", "gender", "age"],
    // 接收同时对数据进行类型限制
    /* props: {
        stuName: String,
        gender: String,
        age: Number,
    }, */
    // 尽量不要改收到的props数据
    props: {
        stuName: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            // 必须传
            required: true,
        },
        age: {
            type: Number,
            // 默认值
            default: () => {
                return 8;
            },
        }
    }
};
// 默认暴露
// export default school;
</script>
<style>
/* 组件的样式 */
</style>