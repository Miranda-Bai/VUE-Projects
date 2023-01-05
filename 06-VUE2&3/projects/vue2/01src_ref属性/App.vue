<!-- 
  ref属性
  1. 用来给元素或子组件注册引用信息（id的替代者
  2. 应用在html标签上来获取的是真实的DOM元素，应用在组件标签上是组件实例对象（vc）
  3. 使用方式：
      打标识：<h1 ref="xxx"></h1> 或 <School ref="xxx" />
      获取：this.$refs.xxx
 -->

<script>
import HelloWorld from './components/HelloWorld.vue'
// 引入组件
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name:'App',
  components:{School},
  data(){
    return {
      msg:'welcome to learn VUE!',
    };
  },
  methods: {
    showDOM(){
      // 得到组件的实例对象
      console.log(this.$refs.school)
      // 得到真实DOM元素
      console.log(this.$refs.title)
    }
  },
}
</script>

<template>
  <div>
   <h1 v-text="msg" ref="title"></h1>
   <button ref="btn" @click="showDOM">click me to show upside DOM element</button>
   <School ref="school" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
