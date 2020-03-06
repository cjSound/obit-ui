<!--
 * @Author: 曹捷
 * @Date: 2020-02-26 16:19:49
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-03-06 16:53:50
 * @Description: file content
 -->
<template>
  <div class="card">
    <div class="card-content">
      <slot></slot>
      <div>
        <div class="card-code" v-if="codeVisible">
          <slot name="code"></slot>
        </div>
      </div>
    </div>
    <div @click="toggle" class="card-operation" v-if="showCode">{{msg}}</div>
  </div>
</template>
<script>
export default {
  props: {
    showCode: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      codeVisible: true,
      msg: '展开代码'
    }
  },
  methods: {
    toggle() {
      this.codeVisible = !this.codeVisible
      this.msg = this.codeVisible ? '收起代码' : '展开代码'
    }
  },
  mounted() {
    this.msg = this.codeVisible ? '收起代码' : '展开代码'
  }
}
</script>
<style lang="scss" scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 3px 0 #ccc;
  .card-content {
    padding: 14px;
    border-bottom: 1px solid #ccc;
  }
  .card-operation {
    height: 40px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }
}
</style>

