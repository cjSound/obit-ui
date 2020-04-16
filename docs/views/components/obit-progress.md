---
title: 'obitProgress进度条'
sidebarDepth: 2
---
## obit-progress进度条

<ClientOnly>
  <obit-progress />
</ClientOnly>


<font size=5>代码实现</font>
```Vue
<!--
 * @Author: 曹捷
 * @Date: 2020-03-11 10:25:24
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-04-16 16:28:35
 * @Description: 渐变百分比进度条
 -->
<template>
  <div class="module-info full scrollBar">
    <div :key="index" class="info-item" v-for="(item,index) in dataList">
      <span class="title">{{item.name}}</span>
      <obit-progress :format="formatProgress(item)" :percentage="item.percentage" :stroke-width="18" class="module-progress"></obit-progress>
    </div>
  </div>
</template>

<script>
import obitProgress from './../../../src/obit-progress/obit-progress'

export default {
  components: { obitProgress },
  data() {
    return {
      dataList: [
        {
          name: '服务手册',
          value: 888,
          trend: 0,
          percentage: 20
        },
        {
          name: '新闻资讯',
          value: 22888,
          trend: 1,
          percentage: 80
        },
        {
          name: '问卷调查',
          value: 15888,
          trend: 0,
          percentage: 60
        },
        {
          name: '生命体征',
          value: 22888,
          trend: 1,
          percentage: 80
        },
        {
          name: '活动影像',
          value: 18888,
          trend: 1,
          percentage: 70
        },
        {
          name: '网络课堂',
          value: 21888,
          trend: 1,
          percentage: 90
        },
        {
          name: '军休文化',
          value: 25388,
          trend: 1,
          percentage: 100
        }
      ]
    }
  },
  methods: {
    formatProgress(item) {
      return `<span class="progress-text">${item.value} <span>${
        item.trend === 1 ? '↑' : '↓'
      }</span></span>`
    }
  }
}
</script>

<style lang="scss">
.module-info {
  overflow: auto;
  .info-item {
    display: flex;
    height: 14%;
    align-items: center;
    .module-progress {
      flex: 1;
    }
  }
  .el-progress-bar {
    margin-right: 0px;
    padding-right: 0;
    width: 83%;
  }
  .el-progress-bar__inner {
    background-image: linear-gradient(160deg, #ffeb5c 10%, #fc4e1d 90%);
  }
  .progress-text {
    position: relative;
    span {
      position: absolute;
      right: -8px;
      top: -1px;
    }
  }

  .el-progress__text {
    color: #fc4e1d;
    font-size: 16px !important;
  }
  .title {
    color: #fc4e1d;
    padding: 0 10px;
  }
  .el-progress-bar__outer {
    background-color: transparent;
  }
}
</style>
```


##  参数说明

| 参数| 说明 | 类型 | 可选值 | 默认值 | 是否必填 |
| :------ | ------ | ------ | ------ | ------ | ------ |
| type | 进度条类型 | String |'line'线形 'circle'圆形 'dashboard 半圆形 | - | - |
| percentage | 进度占比 最高100  | Number |- | 0 | true |
| status | 是否在进度条后面展示状态图标 对应三个 | String |'success', 'exception', 'warning' | - | - |
| strokeWidth | 进度条高度亦或者宽度  | Number |- | 6 | - |
| textInside | 文字是否展示在进度条之内  | Boolean |- | false | - |
| width | 宽度  | Number |- | 126 | - |
| showText | 是否展示文字  | Boolean |- | true | - |
| color | 状态显示颜色 | String, Array, Function |- | - | - |
| format | 状态条文字 自定义| Function, String |- | - | - |

<ClientOnly>
  <obit-gif/>
</ClientOnly>
