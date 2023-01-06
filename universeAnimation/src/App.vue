<script>
import { reactive } from 'vue'

export default {
  name: 'App',
  setup() {
    let planet1 = reactive({
      size: 100,
      duration: 10,
      radius:500,
      bgc:"#cccccc",
      width:10,
    });

    let planet2 = reactive({
      size: 100,
      duration: 5,
      radius:800,
      bgc:"#cccccc",
      width:10,
    });
    return {
      planet1,
      planet2,
    }
  }
}
</script>

<template>
  <div class="box">
    <!-- 太阳系 -->
    <div class="main">
      <img src="./assets/sun.png" alt="" class="sun">
      <!-- 星球1 -->
      <div class="one" 
      :style="{
        width: planet1.radius + 'px',
        height: planet1.radius + 'px',
        marginLeft: -planet1.radius / 2 + 'px',
        marginTop: -planet1.radius / 2 + 'px',
        boxShadow: '0 0 '+planet1.width+'px '+planet1.bgc+', inset 0px 0px '+planet1.width+'px '+planet1.bgc,
        animationDuration: planet1.duration + 's',
      }">
        <img src="./assets/planet1.png" alt="" class="planetone" 
        :style="{
          width: planet1.size + 'px',
          height: planet1.size + 'px',
          marginLeft: -planet1.size / 2 + 'px',
          marginTop: -planet1.size / 2 + 'px',
        }">
      </div>
      <!-- 星球2 -->
      <div class="second"
      :style="{
        width: planet2.radius + 'px',
        height: planet2.radius + 'px',
        marginLeft: -planet2.radius / 2 + 'px',
        marginTop: -planet2.radius / 2 + 'px',
        boxShadow: '0 0 '+planet2.width+'px '+planet2.bgc+', inset 0px 0px '+planet2.width+'px '+planet2.bgc,
        animationDuration: planet2.duration + 's',
      }">
        <img src="./assets/planet2.png" alt="" class="planettwo"
        :style="{
          width: planet2.size + 'px',
          height: planet2.size + 'px',
          marginLeft: -planet2.size / 2 + 'px',
          marginTop: -planet2.size / 2 + 'px',
        }">
      </div>
    </div>

    <div class="pannel">
      <div class="item">
        <div>
          <img src="./assets/planet1.png" alt="">
        </div>
        <div class="list">
          <div class="ipt">
            planet size: <input type="number" v-model="planet1.size">
          </div>
          <div class="ipt">
            duration: <input type="number" v-model="planet1.duration">
          </div>
          <div class="ipt">
            orbital radius: <input type="number" v-model="planet1.radius">
          </div>
          <div class="ipt">
            orbital color: <input type="color" v-model="planet1.bgc">
          </div>
          <div class="ipt">
            orbital width: <input type="range" min="10" max="100" v-model="planet1.width">
          </div>
        </div>
      </div>

      <div class="item">
        <div>
          <img src="./assets/planet2.png" alt="">
        </div>
        <div class="list">
          <div class="ipt">
            planet size: <input type="number" v-model="planet2.size">
          </div>
          <div class="ipt">
            duration: <input type="number" v-model="planet2.duration">
          </div>
          <div class="ipt">
            orbital radius: <input type="number" v-model="planet2.radius">
          </div>
          <div class="ipt">
            orbital color: <input type="color" v-model="planet2.bgc">
          </div>
          <div class="ipt">
            orbital width: <input type="range" min="10" max="100" v-model="planet2.width">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

.box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: #ccc; */
  background: url('./assets/bg2.jpeg') no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}

.main {
  width: 80px;
  height: 80px;
  /* background-color: #ccc; */
  position: absolute;
  top: 50%;
  left: 30%;
  margin-left: -40px;
  margin-top: -40px;
}

.sun {
  width: 100%;
  height: 100%;
  ;
}

.one,
.second {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -200px;
  border-radius: 100%;
  /* background-color: #ccc; */
  box-shadow: 0 0 10px #fff, inset 0px 0px 10px #fff;
  animation: move 5s linear infinite;
}

.planetone,
.planettwo {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -30px;
  margin-top: -30px;
}

@keyframes move {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.pannel {
  width: 300px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  padding-left: 20px;
}

.pannel img {
  width: 80px;
}

.pannel .item {
  border-bottom: 1px solid #fff;
}

.pannel .item .ipt {
  margin: 5px 0px;
  font-size: 22px;
  font-weight: 23;
}

.pannel .item .ipt input {
  margin-left: 10px;
}
</style>
