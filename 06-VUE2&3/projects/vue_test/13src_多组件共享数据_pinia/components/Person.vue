<template >
    <div>
        <h3>Person List</h3>
        <input type="text" v-model="name" placeholder="please enter your name"><br>
        <input type="radio" v-model="gender" value="female" name="gender">Female
        <input type="radio" v-model="gender" value="male" name="gender"> Male
        <br>
        <button @click="addPerson">add</button>
        <ul>
            <li v-for="p in personLst" :key="p.id">
                Name: {{ p.name }} <br>
                Gender: {{ p.gender }}
            </li>
        </ul>
    </div>
</template>
<script>
import { usePersonStore } from '../store/person.js'
import { nanoid } from 'nanoid'

export default {
    name: 'Person',
    setup() {
        // 初始化store实例
        const store = usePersonStore();

        return {
            personLst: store.personLst,
            store,
        }
    },
    data() {
        return {
            name: '',
            gender: 'male',
        }
    },
    methods: {
        addPerson() {
            if (!this.name) {
                return alert("please enter name!")
            }

            this.store.addPerson({
                id: nanoid(),
                name: this.name,
                gender: this.gender
            });
            this.name = '';
        }
    },
}
</script>
<style scoped>

</style>