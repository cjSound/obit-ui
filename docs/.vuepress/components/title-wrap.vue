<!--
 * @Author: 曹捷
 * @Date: 2020-03-06 16:44:45
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-03-06 17:06:02
 * @Description: 标题或者详情标题标签
 -->
<template>
  <div>
    <obit-card :showCode="false">
      <title-wrap :detailInfor="detailInfor" isDetailPage title="xxx个人信息"></title-wrap>

      <title-wrap title="活动管理">
        <svg-icon class="obit-link" icon-class="back" style="font-size:28px " />
      </title-wrap>
    </obit-card>
  </div>
</template>

<script>
import titleWrap from './../../../src/title-wrap/title-wrap'
import svgIcon from './../../../src/SvgIcon/svg-icon'
export default {
  components: {
    titleWrap,
    svgIcon
  },
  data() {
    return {
      detailInfor: {
        stadus: '开启',
        desc1: '创建人：张三',
        desc2: '创建时间：2022-10-09'
      }
    }
  }
}
</script>

<style>
</style>