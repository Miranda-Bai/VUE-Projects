import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component:()=>import("@/views/home/index.vue"),
  },
{
    path:"/video/:id",
    component: ()=>import("@/views/video/index.vue"),
}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
