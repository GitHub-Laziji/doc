

<template>
  <div class="header">
    <div style="display: flex;align-items: center;">
      <img src="./assets/switch3.svg" style="height:80px">
      <span>Laziji</span>
      / Laziji
    </div>
    <div style="display: flex;">
      <div style="font-size: 1.55rem;line-height: 1.3;">关于我</div>
    </div>
  </div>
  <div class="bk">
    <div class="img">
      Laziji
    </div>
    <div class="btm"></div>
  </div>
  <div style="padding: 40px 0;display: flex;justify-content: center;">
    <el-button type="primary" round style="width:240px">Primary</el-button>
  </div>
</template>

<script >
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    fetch("./doc/content.json").then(resp => resp.json()).then(data => {
      console.log(data)
    })
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  z-index: 1000;
  background: #ffffffaa;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
}
.bk {
  width: 100%;
  height: 700px;
  position: relative;
}
.bk .img {
  background-image: url(./assets/bk.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  position: relative;
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color:#303133;
  font-weight: 600;
  font-size: 10rem;
}
.bk .btm {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 10;
  height: 120px;
  width: 100%;
  background-image: linear-gradient(#ffffff00, #ffffff);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style>
body {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
</style>
