---
title: '图标库'
sidebarDepth: 2
---
## svg-icon

<ClientOnly>
  <icon />
</ClientOnly>

<font size=5>代码实现</font>
```vue
<template>
  <div>
    <svg-icon icon-class="zip" />
  </div>
</template>

<script>
import svgIcon from './../../../src/SvgIcon/svg-icon'
export default {
  components: {
    svgIcon
  }
}
</script>

<style>
</style>
```
## 参数说明

| 参数| 说明 | 类型 | 可选值 | 默认值 | 是否必填 |
| :------ | ------ | ------ | ------ | ------ | ------ |
| icon-class | 参考如上，全在上面 |  String |- | - | true |

<ClientOnly>
  <obit-gif/>
</ClientOnly>