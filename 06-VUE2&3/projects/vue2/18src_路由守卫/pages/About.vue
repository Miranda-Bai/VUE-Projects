<template>
    <div class="about-container">
        <h3>About 组件</h3>
    </div>
</template>
  
<script>
export default {
    name: 'About',
    // 通过路由规则，进入该组件时被调用
    beforeRouteEnter(to,from,next){

    },
    // 通过路由规则，离开该组件时被调用
    beforeRouteLeave (to, from, next) {
        // ...
    }
}
</script>
  
<style scoped>
.about-container {
    min-height: 200px;
    background-color: pink;
    padding: 15px;

}
</style>
  