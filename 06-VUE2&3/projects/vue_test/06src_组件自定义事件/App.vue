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
  data() {
    return {
      msg: 'Good day !'
    }
  },
  methods: {
    getSchoolName(val) {
      console.log("app received school name is " , val);
    },
    // val接收第一个参数，其他参数都整理到a这个数组上
    getStudentName(val, ...params) {
      console.log("app received student name is ", val, params);
    }
  },
  /* mounted() {
    console.log(this.$refs.student)
    // vue3中$on已被移除，此方法行不通
    this.$refs.student.$on("stusend",this.getStudentName)
  }, */
}
</script>

<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <School :getSchoolName="getSchoolName"></School>
    <!-- 给student实例对象（组件实例对象）绑定一个自定义事件，事件触发时调用demo函数
        给谁绑，谁触发
        v-on:stusend可简写成@stusend
    -->
    <Student v-on:stusend="getStudentName"></Student>

    <!-- 使用ref -->
    <!-- <Student ref="student"></Student> -->
  </div>
</template>

<style>
.app {
  background-color: grey;
  padding: 5px;
}
</style>
