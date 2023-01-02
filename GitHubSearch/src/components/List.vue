<template>
    <div class="row" >
        <!-- 展示用户列表 -->
        <div v-show="userLst.length" class="card" v-for="user in userLst">
          <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" style="width:100px" alt="">
          </a>
          <p class="card-text">{{user.login}}</p>
        </div>
        <!-- 展示欢迎词 -->
        <!-- <h1 v-show="isFirst">Welcome</h1> -->
        <!-- 展示加载信息 -->
        <!-- <h1 v-show="isLoading">Loading....</h1> -->
        <!-- 展示错误信息 -->
        <!-- <h1 v-show="errMsg">request is failed! {{ errMsg }}</h1> -->
      </div>
</template>
<script>
export default {
    name:"List",
    props:["userLst"],
    data(){
        return {
            /* isFirst:true,
            isLoading:false,
            errMsg:'', */
        }
    }
}
</script>
<style scoped>
.album{
    /* can be removed,juse added for demo purpose */
    min-height: 50rem; 
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
}

.card{
    box-sizing: border-box;
    float:left;
    width: 33.333%;
    padding: 0.75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
}

.card > img{
    margin-bottom: 0.75rem;
    border-radius: 100px;
}
.card-text{
    font-size: 85%;
}
</style>