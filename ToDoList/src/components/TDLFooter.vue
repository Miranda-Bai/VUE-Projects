<template>
    <section class="tdl-footer">
        <div class="footer-content" v-show="total">
            <label>
                <!-- <input type="checkbox" :checked="isAll" @change="checkAllTodo" /> -->
                <input type="checkbox" v-model="isAll" />
                <span class="bubble"></span>
            </label>
            <div class="sum">
                {{ completedSum }} / {{ total }} 
            </div>
            <div class="actions">
                <button class="delete" @click="removeAll()">Delete all completed things</button>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'TDLFooter',
    props: ["todos_asc", "checkAllLst","removeAllLst"],
    computed: {
        total() {
            return this.todos_asc.length;
        },
        completedSum() {

            if (!this.todos_asc) {
                return 0;
            }

            return this.todos_asc.reduce((pre, current) => {
                return pre + (current.done ? 1 : 0);
            }, 0);

            /* this.todos_asc.forEach(element => {
                element.done === true ? i++ : i;
            }); */
        },
        isAll: {
            get() {
                return this.total === this.completedSum && this.total > 0;
            },
            set(val) {
                this.checkAllLst(val);
            }
        }
    },
    methods: {
       /*  checkAllTodo() {
            this.checkAllLst(this.isAll);
        }, */
        removeAll(){
            this.removeAllLst();
        }
    },
}
</script>
<style scoped>
.footer-content {
    display: flex;
    align-items: center;
    background-color: #FFF;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: var(--shadow);
    margin: 1rem 0;
}

.footer-content input {
    color: var(--dark);
    font-size: 1.125rem;
}

.bubble {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid var(--dark);
    box-shadow: var(--dark-glow);
}

.bubble::after {
    content: "";
    display: block;
    opacity: 0;
    width: 0px;
    height: 0px;
    background-color: var(--dark);
    box-shadow: var(--dark-glow);
    border-radius: 50%;
    transition: 0.2s ease-in-out;
}

input:checked~.bubble::after {
    width: 10px;
    height: 10px;
    opacity: 1;
}

.sum {
    flex: 1 1 0%;
    color: var(--dark);
    font-size: 1.125rem;
    margin: 0 1rem;
}

.actions {
    display: flex;
    align-items: center;
}

.actions button {
    display: block;
    padding: 0.5rem;
    border-radius: 0.25rem;
    color: #FFF;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    background-color: var(--danger);
}

.actions button:hover {
    opacity: 0.75;
}
</style>