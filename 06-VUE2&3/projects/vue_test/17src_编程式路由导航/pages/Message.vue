<template>
    <ul>
        <li v-for="m in messageLst" :key="m.id">
            <!-- 只能用路由的name，不能用path -->
            <router-link :to="{
                name: 'detail',
                params: {
                    id: m.id,
                    title: m.title
                }
            }">
                {{ m.title }}
            </router-link>
            <button @click="pushShow(m)">push</button>
            <button @click="replaceShow(m)">replace</button>
        </li>
    </ul>
    <input type="text">
    <router-view></router-view>
</template>
<script>
export default {
    name: "Message",
    data() {
        return {
            messageLst: [
                {
                    id: '001',
                    title: 'message001'
                },
                {
                    id: '002',
                    title: 'message002'
                },
                {
                    id: '003',
                    title: 'message003'
                },
                {
                    id: '004',
                    title: 'message004'
                }
            ],
        }
    },
    methods: {
        pushShow(m) {
            // console.log(this.$router)
            // push里的对象跟<router-link :to></router-link>标签传参用的对象一样
            this.$router.push({
                name: 'detail',
                params: {
                    id: m.id,
                    title: m.title
                }
            })
        },
        replaceShow(m){
            this.$router.replace({
                name: 'detail',
                params: {
                    id: m.id,
                    title: m.title
                }
            })
        }
    }
}
</script>
<style>

</style>