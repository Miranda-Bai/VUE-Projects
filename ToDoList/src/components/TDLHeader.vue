<template>
    <section class="greeting">
        <h2 class="title">
            What's up, <input type="text" id="name" placeholder="Name here" v-model="name">
        </h2>
    </section>
    <section class="create-todo">
        <h3>CREATE A TODO</h3>

        <form id="new-todo-form" @submit.prevent="addTodo">
            <h4>What's on your todo list?</h4>
            <input type="text" name="content" id="content" placeholder="e.g. make a video" v-model="input_content" :class="red"/>

            <h4>Pick a category</h4>
            <div class="options">

                <label>
                    <input type="radio" name="category" id="category1" value="business" v-model="input_category" />
                    <span class="bubble business"></span>
                    <div>Business</div>
                </label>

                <label>
                    <input type="radio" name="category" id="category2" value="personal" v-model="input_category" />
                    <span class="bubble personal"></span>
                    <div>Personal</div>
                </label>

            </div>

            <input type="submit" value="Add todo" />
        </form>
    </section>
</template>
<script>
import { nanoid } from 'nanoid'

export default {
    name: 'TDLHeader',
    data() {
        return {
            name: "Miranda",
            input_content: '',
            input_category: 'personal',
            red:''
        }
    },
    props:['addTodoLst'],
    methods: {
        addTodo() {
            if(!this.input_content.trim()){
                this.input_content='please input !!'
                this.red='red'
                return;
            }

            const todoObj = {
                todoId: nanoid(), category: this.input_category, content: this.input_content, done: false
            };
            // 通知App组件去添加一个todo对象
            this.addTodoLst(todoObj);
            //清空输入框
            this.input_content='';
        }
    },
}
</script>
<style scoped>
.red{
    color:var(--danger) !important;
}
.greeting .title {
    display: flex;
}

.greeting .title input {
    margin-left: 0.5rem;
    flex: 1 1 0%;
    min-width: 0;
}

.greeting .title,
.greeting .title input {
    color: var(--dark);
    font-size: 1.5rem;
    font-weight: 700;
}

.create-todo input[type="text"] {
    display: block;
    width: 100%;
    font-size: 1.125rem;
    padding: 1rem 1.5rem;
    color: var(--dark);
    background-color: #FFF;
    border-radius: 0.5rem;
    box-shadow: var(--shadow);
    margin-bottom: 1.5rem;
}

.create-todo .options {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    margin-bottom: 1.5rem;
}

.create-todo .options label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    background-color: #FFF;
    border-radius: 0.5rem;
    box-shadow: var(--shadow);
    cursor: pointer;
}



.create-todo .options label div {
    color: var(--dark);
    font-size: 1.125rem;
    margin-top: 1rem;
}

.create-todo input[type="submit"] {
    display: block;
    width: 100%;
    font-size: 1.125rem;
    padding: 1rem 1.5rem;
    color: #FFF;
    background-color: var(--primary);
    border-radius: 0.5rem;
    box-shadow: var(--personal-glow);
    cursor: pointer;
    transition: 0.2s ease-in-out;
}

.create-todo input[type="submit"]:hover {
    opacity: 0.75;
}
</style>