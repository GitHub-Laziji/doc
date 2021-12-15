

<template>
  <div class="header">
    <div>
      <span>Laziji</span>
     / Laziji
    </div>
    <div style="display: flex;">
      <div style="font-size: 1.55rem;line-height: 1.3;">关于我</div>
    </div>
  </div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
  <el-button>中文</el-button>
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
  height: 98px;
  z-index: 1000;
  background: #ffffffe6;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
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
