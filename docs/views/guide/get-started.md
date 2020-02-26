---
title: '快速上手'
---
# 快速上手

```vue
<template>
  <div id="app">
    <svg-icon icon-class="location" />
  </div>
</template>

<script>
import { SvgIcon } from 'obit-ui'
import 'obit-ui/dist/obit.css'


export default {
  name: 'app',
  components: {
    SvgIcon
  }
}
</script>

```
<ClientOnly>
  <obit-gif/>
</ClientOnly>