
<script>

// 引入组件
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    Student
  },
}
</script>

<template>
  <div>
    <button>original button style</button>
    <input type="text">
    
    <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
  </div>
</template>

<style>

</style>
