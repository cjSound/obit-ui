<!--
 * @Author: 曹捷
 * @Date: 2020-02-26 21:52:04
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-02-26 23:58:17
 * @Description: file content
 -->
<template>
  <div>
    <h3>基础用法</h3>
    <obit-card>
      <nodata></nodata>

      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
      </template>
    </obit-card>
  </div>
</template>

<script>
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)
import nodata from './../../../src/nodata/nodata'
export default {
  components: {
    nodata
  },
  data() {
    return {
      code1: `
      <content-form :fromtitle="{title1:'活动详情'}" :needPadding="false" class="m-t-10">无内边距</content-form>
      <content-form :fromtitle="{title1:'活动详情2',title2:'详情介绍'}" class="m-t-10">活动2有内边距</content-form>`
        .replace(/^\s*/gm, '')
        .trim()
    }
  }
}
</script>

<style>
</style>