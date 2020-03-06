<!--
 * @Author: 曹捷
 * @Date: 2019-08-06 22:59:38
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-03-06 17:24:37
 * @Description: file content
 -->
<template>
  <ul class="icon-list">
    <li :key="index" v-for="(item,index) in iconList">
      <svg-icon :icon-class="item.name" class="obit-link" />
      <br />
      <span>{{item.plug}}</span>
    </li>
  </ul>
</template>

<script>
import svgIcon from './../../../src/SvgIcon/svg-icon'
export default {
  components: { svgIcon },
  data() {
    return {
      iconList: []
    }
  },
  methods: {},
  mounted() {
    const req = require.context('./../../../src/icons/svg', false, /\.svg$/)
    this.iconList = req.keys().map(res => {
      let name = res.replace('./', '').replace('.svg', '')
      return { name: name, plug: `<svg-icon icon-class="${name}" />` }
    })
  }
}
</script>

<style lang="scss" scoped>
.icon-list {
  overflow: hidden;
  list-style: none;
  padding: 0 !important;
  margin: 0;
  border-radius: 4px;
  li {
    float: left;
    width: 16.66%;
    height: 120px;
    color: #666;
    padding-top: 30px;
    font-size: 13px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
    text-align: center;
    .svg-icon {
      font-size: 34px;
    }
    span {
      display: inline-block;
      height: 1em;
      padding-top: 20px;
    }
  }
  li:hover {
    color: #5cb6ff;
  }
}
</style>
 