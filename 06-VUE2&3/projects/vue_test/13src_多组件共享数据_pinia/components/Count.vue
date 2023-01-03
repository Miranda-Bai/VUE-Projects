<!-- 组件三个元素：1.结构（html）2.样式（css）3.数据交互（javascript） -->

<template>
    <!-- 1.组件的结构 -->
    <div>
        <h3>当前求和为：{{ store.sum }}</h3>
        <h3>当前求和放大10倍为：{{ store.grow }}</h3>
        <h3>I'm in {{ store.schoolName }}, learning {{ store.major }}</h3>
        <input type="number" v-model="n" name="" id="">
        <button @click="addCount">+</button>
        <button @click="minusCount"> - </button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>
<script>
import { useCounterStore } from '../store/counter.js'
import { ref } from 'vue'

export default {  
    // 组件名
    name: 'Count',
    setup() {
        const store = useCounterStore();
        // 用户选择的数字,初始为1
        const n = ref(1)
        // 让sum开始的值和n相等
        store.sum = n.value;
        function addCount(){
            store.increment(n.value)
            console.log(n)
        }

        function minusCount(){
            store.minus(n.value)
        }

        function incrementOdd(){
            store.incrementOdd(n.value);
        }
        return {
            n,
            addCount,
            minusCount,
            incrementOdd,
            store,
        }
    },
    data() {
        return {
             
        };
    },
    methods:{
        incrementWait(){
            setTimeout(() => {
               
                this.store.increment(this.n);
                console.log("waiting to add");
            }, 1000);
        }
    },
};

</script>
<style scoped>

</style>