<template>

    <label>
        <input type="checkbox" v-model="todo.done" />
        <span :class="`bubble ${todo.category == 'business'
    ? 'business'
    : 'personal'
    }`"></span>
    </label>

    <div class="todo-content" :class="editClass">
        <input type="text" v-model="todo.content" @focus="getFocusToEdit" @blur="loseFocus" />
    </div>

    <div class="actions">
        <button class="delete" @click="removeTodo(todo.todoId)">Delete</button>
    </div>

</template>
<script>
export default {
    name: 'TDLItem',
    data() {
        return {
            editClass: '',
        }
    },
    // 声明接收todo对象
    props: ['todo', "removeTodoLst"],
    methods: {
        removeTodo(todoId) {
            if (confirm("Are you sure to delete?")) {
                this.removeTodoLst(todoId);
            }

            /* let todos_asc = JSON.parse(localStorage.getItem("todos_asc"))

            // filter返回true保留该元素（通过测试），否则删除
            todos_asc = todos_asc.filter((t)=>{
                return t.todoId !== todo.todoId ? true : false
            })
           
            localStorage.setItem("todos_asc", JSON.stringify(todos_asc));*/
        },
        getFocusToEdit() {
            this.editClass = "edit"
        },
        loseFocus() {
            this.editClass = ''
        }
    },
}
</script>
<style scoped>
label {
    display: block;
    margin-right: 1rem;
    cursor: pointer;
}

.todo-content {
    flex: 1 1 0%;
    padding: 0.75 rem;
}

.todo-content input {
    color: var(--dark);
    width: 90%;
    font-size: 1.125rem;
}

.actions {
    display: flex;
    align-items: center;
}

.actions button {
    padding: 0.5rem;
    border-radius: 0.25rem;
    color: #FFF;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    display: none;
}

/* 鼠标悬停，显示button */
.todo-item:hover .actions button {
    display: block;
}

.actions button:hover {
    opacity: 0.75;
}

.edit {
    margin-right: 0.5rem;
    /* background-color: var(--primary); */
    border: 1px solid var(--primary);
}

.actions .delete {
    background-color: var(--danger);
}

.done .todo-content input {
    text-decoration: line-through;
    color: var(--grey);
}
</style>