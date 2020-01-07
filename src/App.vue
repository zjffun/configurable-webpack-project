<template>
  <div id="app">
    <h1><i class="cwp-logo"></i> {{title}}</h1>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  computed: {
    title() {
      return CWP_CONFIG.title;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.cwp-logo{
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    height: 30px;
    
    background: url(./assets/icons/logo.png) center/cover;
}
</style>
