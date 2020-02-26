<!--
 * @Author: 曹捷
 * @Date: 2020-02-26 14:03:03
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-02-26 15:53:20
 * @Description: file content
 -->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <svg-icon icon-class="location" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { SvgIcon } from './index.js'
console.log('TCL: SvgIcon', SvgIcon)
export default {
  name: 'App',
  components: {
    HelloWorld,
    SvgIcon
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
