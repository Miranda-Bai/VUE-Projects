<template>
    <ul>
        <li v-for="m in messageLst" :key="m.id">
            <!-- <a href="/message1">{{ m.title }}</a> -->
            <!-- 跳转路由并携带query参数，to的字符串写法 -->
            <!-- <router-link :to="`/home/home-message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link> -->

            <!-- 跳转路由并携带query参数，to的对象写法 -->
            <!-- <router-link :to="{
                path:'/home/home-message/detail',
                query:{
                    id:m.id,
                    title:m.title
                }
            }">
                {{ m.title }}
            </router-link> -->
            <!-- 跳转路由并携带params参数,需要改路由配置path: "detail/:id/:title", -->
            <router-link :to="`/home/home-message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link>
            <!-- 只能用路由的name，不能用path -->
            <!-- <router-link :to="{
                name:'detail',
                params:{
                    id:m.id,
                    title:m.title
                }
            }">
                {{ m.title }}
            </router-link> -->
        </li>
    </ul>
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
    }
}
</script>
<style>

</style>