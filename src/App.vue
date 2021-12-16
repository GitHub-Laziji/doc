

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
  <div class="bk">
    <div></div>
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
  background-image: url(./assets/bk.jpg);
  background-size:140%;
  background-position:center;
  background-repeat:no-repeat;
  width: 100%;
  height: 700px;
  position: relative;
}
.bk div{
  position:absolute;
  left: 0;
  bottom:0;
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
