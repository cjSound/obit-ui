<!--
 * @Author: 曹捷
 * @Date: 2020-03-05 11:51:02
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-03-06 14:19:38
 * @Description: file content
 -->
<template>
  <div>
    <obit-card>
      <obitCity placeholder="请选择地址" type="list"></obitCity>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
      </template>
    </obit-card>
  </div>
</template>

<script>
import obitCity from './../../../src/obit-city'

export default {
  components: {
    obitCity
  },
  data() {
    return {
      code1: `
      <obitCity placeholder="请选择地址" type="list"></obitCity>`
        .replace(/^\s*/gm, '')
        .trim()
    }
  }
}
</script>

<style>
</style>