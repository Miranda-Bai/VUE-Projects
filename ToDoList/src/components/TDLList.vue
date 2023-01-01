<template>
    <section class="todo-list">
        <h3>TODO LIST</h3>
        <div class="list" id="todo-list">
            <div v-for="todo in todos_asc" :class="`todo-item ${todo.done && 'done'}`" :key="todo.todoId">
                <TDLItem :todo="todo" :removeTodoLst="removeTodoLst"></TDLItem>
            </div>
        </div>
    </section>
</template>
<script>
import TDLItem from './TDLItem.vue'
export default {
    name: 'TDLList',
    components: {
        TDLItem,
    },
    props:["todos_asc","removeTodoLst"]
}
</script>
<style scoped>
.todo-item:hover{
    background-color: #ddd;
}

.todo-list .list {
    margin: 1rem 0;
}
.todo-item {
	display: flex;
	align-items: center;
	background-color: #FFF;
	padding: 1rem;
	border-radius: 0.5rem;
	box-shadow: var(--shadow);
	margin-bottom: 1rem;
}
.todo-item.done{
    text-decoration: line-through;
    color: var(--grey);
}
</style>