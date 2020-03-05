<!--
 * @Author: 曹捷
 * @Date: 2020-03-05 19:57:48
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-03-05 20:19:28
 * @Description: file content
 -->
<template>
  <div class="obit-nodata">
    <svg-icon class-name="iconClass" class="iconDetail" icon-class="nodata" />
    <br />
    <span>{{ desText }}</span>
  </div>
</template>

<script>
import { SvgIcon } from './../index.js'
console.log('SvgIcon', SvgIcon)
export default {
  name: 'index',
  components: { SvgIcon },
  props: {
    desText: {
      type: String,
      default: '暂无数据'
    }
  },
  created() {
    if (this.desText === '') {
      //  $t 暂无数据
      this.desText = '暂无数据'
    }
  }
}
</script>

<style lang="scss" scoped>
#app .obit-nodata {
  text-align: center;
  color: #999 !important;
  font-size: 14px;
  .iconDetail {
    fill: #999 !important;
    font-size: 80px !important;
  }
  .iconClass {
    width: 120px !important;
    height: 120px !important;
  }
}
.pop-up .mask .obit-nodata {
  text-align: center;
  color: #999 !important;
  font-size: 14px;
  .iconDetail {
    fill: #999 !important;
    font-size: 80px !important;
  }
  .iconClass {
    width: 80px !important;
    height: 80px !important;
  }
}
</style>
