<template>
    <ul>
        <li :style="{ opacity }">Welcome to learn VUE!</li>
        <li>news01
            <input type="text">
        </li>
        <li>news02
            <input type="text">
        </li>
        <li>news03
            <input type="text">
        </li>
    </ul>
</template>
<script>
export default {
    name: "News",
    data() {
        return {
            opacity: 1
        }
    },
    /* mounted() {
        console.log('mounted', this);
        this.timer = setInterval(() => {
            console.log("@");
            this.opacity -= 0.01
            if (this.opacity <= 0) this.opacity = 1;
        }, 16);
    },
    beforeDestroy() {
        console.log("news is going to be destroyed")
        clearInterval(this.timer);
    }, */
    // 路由器独有的两个生命周期函数
    activated() {
        console.log("news is active")
        this.timer = setInterval(() => {
            console.log("@");
            this.opacity -= 0.01
            if (this.opacity <= 0) this.opacity = 1;
        }, 16);
    },
    deactivated(){
        console.log("news is deactive")
        clearInterval(this.timer);
    }
}
</script>
<style>

</style>