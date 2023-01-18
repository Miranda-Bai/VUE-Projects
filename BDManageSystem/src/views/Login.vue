<template>
    <el-form :model="loginForm" class="login-container">
        <h3>System Login</h3>
        <el-form-item>
            <el-input type="input" placeholder="please enter username" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input type="password" placeholder="please enter password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="login">login</el-button>
        </el-form-item>
    </el-form>
</template>
<script setup>
import {reactive, getCurrentInstance} from 'vue'
import useStore from "@/store/index.js";
import { useRouter } from "vue-router";

const loginForm =reactive({
    username:"admin",
    password:"admin"
})
// const proxy = getCurrentInstance().appContext;
// console.log("currentInstance:", getCurrentInstance())
// 解构的写法
const {proxy} = getCurrentInstance();
// console.log("proxy:", proxy.$api)
const store = useStore();
const router = useRouter();
const login = async()=>{
    const res = await proxy.$api.getMenu(loginForm)
    // console.log("res in login:", res)
    store.setMenu(res.menu);
    store.addMenu(router);
    store.setToken(res.token);
    //跳转到首页
    router.push({
        name:"home"
    })
}
</script>
<style lang="less" scoped>
.login-container{
    width: 30%;
    background-color: #fff;
    border: 1px solid #eaeaea;
    border-radius: 5%;
    padding: 35px 35px 15px 35px;
    box-shadow: 0 0 25px #cacaca;
    margin: 180px auto;
    h3{
        text-align: center;
        margin-bottom: 20px;
        color:#505450;
    }
    :deep(.el-form-item__content){
        justify-content: center;
    }
}
</style>