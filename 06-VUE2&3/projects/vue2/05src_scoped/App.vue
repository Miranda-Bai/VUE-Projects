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
/* 不适合用scoped，因为app管理所有组件，里面的样式应该全局有效 */
/* lang="less" 用less写样式，需要安装less-loader ， 终端中安装 npm i less-loader@版本号 不写版本号默认安装最新版本 */

</style>
