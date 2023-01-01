<script>
import TDLHeader from './components/TDLHeader.vue'
import TDLFooter from './components/TDLFooter.vue'
import TDLList from './components/TDLList.vue'

export default {
  name: 'App',
  components: {
    TDLFooter,
    TDLHeader,
    TDLList,
  },
  data() {
    return {
      /* todos_asc: [
        {
          todoId: '001',
          content: 'study',
          category: 'personal',
          done: false,
        },
        {
          todoId: '002',
          content: 'rent',
          category: 'business',
          done: false,
        },
        {
          todoId: '003',
          content: 'market',
          category: 'personal',
          done: true,
        },
      ] */
      // 浏览器本地存储取数据,第一次使用时没有todos_asc返回空数组
      todos_asc: JSON.parse(localStorage.getItem("todos_asc")) || [],
    }
  },
  methods: {
    addTodoLst(val) {
      this.todos_asc.unshift(val);
    },
    removeTodoLst(todoId) {
      this.todos_asc = this.todos_asc.filter((todo) => {
        return todo.todoId != todoId;
      })
    },
    // 全选or取消全选
    checkAllLst(done) {

      this.todos_asc.forEach((todo) => {
        todo.done = done;
      });
    },
    // 删除所有已完成的todo
    removeAllLst() {
      this.todos_asc = this.todos_asc.filter((todo) => {
        return !todo.done;
      });
    }
  },
  watch: {
    // 深度监测todos_asc的改变
    todos_asc: {
      deep: true,
      handler(val) {
        // val是todos_asc的新值
        // 更新浏览器本地存储
        localStorage.setItem("todos_asc", JSON.stringify(val));
      }
    }
    // 要检测对象内done的变化，必须用深度监视
    /* todos_asc(val) {
      // val是todos_asc的新值
      // 更新浏览器本地存储
      localStorage.setItem("todos_asc", JSON.stringify(val));
    } */
  }
}

</script>

<template>
  <main class="app">

    <TDLHeader :addTodoLst="addTodoLst"></TDLHeader>

    <TDLList :todos_asc="todos_asc" :removeTodoLst="removeTodoLst"></TDLList>

    <TDLFooter :todos_asc="todos_asc" :checkAllLst="checkAllLst" :removeAllLst="removeAllLst"></TDLFooter>

  </main>
</template>
<style >
:root {
  --primary: #EA40A4;
  --business: #3A82EE;
  --personal: var(--primary);
  --light: #EEE;
  --grey: #888;
  --dark: hwb(240 19% 67%);
  --danger: #ff5b57;

  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  --business-glow: 0px 0px 4px rgba(58, 130, 238, 0.75);
  --personal-glow: 0px 0px 4px rgba(234, 64, 164, 0.75);
  --dark-glow: 0px 0px 4px rgba(240, 240, 240, 0.75; )
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'montserrat', sans-serif;
}

input:not([type="radio"]):not([type="checkbox"]),
button {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  cursor: initial;
}

body {
  background: var(--light);
  color: var(--dark);
}

section {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5em;
}

h3 {
  color: var(--dark);
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}

h4 {
  color: var(--grey);
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

input[type="radio"],
input[type="checkbox"] {
  display: none;
}

.bubble {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid var(--business);
  box-shadow: var(--business-glow);
}

.bubble.personal {
  border-color: var(--personal);
  box-shadow: var(--personal-glow);
}

.bubble::after {
  content: "";
  display: block;
  opacity: 0;
  width: 0px;
  height: 0px;
  background-color: var(--business);
  box-shadow: var(--business-glow);
  border-radius: 50%;
  transition: 0.2s ease-in-out;
}

.bubble.personal::after {
  background-color: var(--personal);
  box-shadow: var(--personal-glow);
}

input:checked~.bubble::after {
  width: 10px;
  height: 10px;
  opacity: 1;
}
</style>
