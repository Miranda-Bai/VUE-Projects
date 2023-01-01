<!-- 
  配置项props
    功能：让组件接收外部传过来的数据
    props是只读的，Vue底层会监测你对props的修改，如果进行了修改，会发出警告,
    若业务需要修改，那么复制props的内容到data中一份，然后去修改data中的数据
 -->

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
    <!-- :age="18" = v-bind:age="表达式" 结果为数字不再是字符串 -->
   <Student stuName="Miranda" gender="female" :age="18"></Student>
   <hr>
   <Student stuName="Andy" gender="male" ></Student>
  </div>
</template>

<style>

</style>
