<template>
    <div>
        <button @click="isShow = true">click to alert</button>
        <Teleport to="body">
            <div v-if="isShow" class="mask">
                <div  class="dialog">
                    <h3>i'm an alert window</h3>
                    <h4>xxxxx</h4>
                    <h4>xxxxx</h4>
                    <h4>xxxxx</h4>
                    <button @click="isShow = false">close alert window</button>
                </div>
            </div>
        </Teleport>
    </div>
</template>
<script>
import { ref } from 'vue'

export default {
    name: "Dialogue",
    setup() {
        let isShow = ref(false);

        return {
            isShow,
        }
    }
}
</script>
<style scoped>
.dialog {
    width: 300px;
    height: 300px;
    background-color: greenyellow;
    padding: 10px;
    text-align: center;
}
.mask{
    position:absolute;
    top:0;
    bottom: 0;
    left:0;
    right:0;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>