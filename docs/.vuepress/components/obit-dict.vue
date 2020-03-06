<!--
 * @Author: 曹捷
 * @Date: 2020-03-05 11:51:02
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-03-06 16:30:46
 * @Description: file content
 -->
<template>
  <div>
    <obitDict :dictCode="'activityStatus'" placeholder="请选择活动状态" v-model="svalue"></obitDict>
  </div>
</template>

<script>
import obitDict from './../../../src/obit-dict/obit-dict'

export default {
  components: {
    obitDict
  },
  data() {
    return {
      svalue: '2'
    }
  }
}
</script>

<style>
</style>