import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        component: ()=>import('@/views/main.vue'),
        redirect:"/home",
        children:[
            {
                path:'/home',
                name:'home',
                meta:{label:"Homepage",},
                component:()=>import('@/views/home/Home.vue')
            },
            {
                path:'/user',
                name:'user',
                meta:{label:"User Management",},
                component:()=>import('@/views/User/User.vue')
            },
            {
                path:'/page1',
                name:'page1',
                meta:{label:"Page One",},
                component:()=>import('@/views/Page1.vue')
            },
            {
                path:'/page2',
                name:'page2',
                meta:{label:"Page Two",},
                component:()=>import('@/views/Page2.vue')
            },
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;