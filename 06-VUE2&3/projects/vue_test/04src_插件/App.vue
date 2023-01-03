<!-- 
  mixin(混合)
    功能：可以把多个组件共用的配置提取成一个混入对象
    数据冲突时，以组件自身为准
    如涉及生命周期函数的冲突，则两个都保留
 -->

<script>

// 引入组件
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
  name: 'App',
  components: {
    Student,
    School,
  },
}
</script>

<template>
  <div>
    <Student></Student>
    <School></School>
  </div>
</template>

<style>

</style>
