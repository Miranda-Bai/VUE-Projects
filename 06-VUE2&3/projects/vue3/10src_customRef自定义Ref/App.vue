<script>
import { ref, customRef } from 'vue'

export default {
  name: 'App',

  setup() {
    // 自定义的ref,必须有返回值
    /* function myRef(attr){
      console.log('----', attr);
      const x = customRef((track, trigger)=>{

        return {
          get(){
            console.log('@@@get....')
            // 追踪数据的变化
            track();
            return attr;
          },
          set(val){
            attr = val;
            // 通知vue重新解析模版，因为改了数据，所以得重新解析
            trigger();
          }
        }
      });
      console.log('@',x);

      return x;
    } */

    function myRef(attr, delay) {
      
      return customRef((track, trigger) => {
        let timer;

        return {
          get() {
            // 追踪数据的变化
            track();
            return attr;
          },
          set(val) {
            // 每次都清空定时器，防止trigger积压太多
            clearTimeout(timer);
            timer = setTimeout(() => {
              attr = val;
              // 通知vue重新解析模版，因为改了数据，所以得重新解析
              trigger();
            }, delay);
          }
        }
      });
    }

    // 使用vue提供的ref
    // let keyword = ref('hello');

    // 使用自定义的ref
    let keyword = myRef('hello', 1000);

    return {
      keyword,
    }
  }
}
</script>

<template>
  <input type="text" v-model="keyword">
  <h3>{{ keyword }}</h3>
</template>

<style scoped>

</style>
