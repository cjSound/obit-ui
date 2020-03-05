<!--
 * @Author: 曹捷
 * @Date: 2020-02-26 14:03:03
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-03-05 15:51:59
 * @Description: file content
 -->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <obitCity></obitCity>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { SvgIcon, ajax, obitCity } from './index.js'
console.log('TCL: ajax', ajax)
console.log('TCL: SvgIcon', SvgIcon)
export default {
  name: 'App',
  components: {
    HelloWorld,
    obitCity
  },
  created() {
    ajax.init({
      appInit() {
        console.log('TCL: appInit -> appInit')
      },
      getCommonTest() {
        console.log('TCL: getCommonTest -> getCommonTest')
      }
    })
    console.log(ajax)
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
