<!--
 * @Author: 曹捷
 * @Date: 2019-08-19 19:49:53
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-03-05 20:35:08
 * @Description: 地区 多级联动
 -->
<template>
  <el-cascader
    :options="dictList"
    :placeholder="placeholder"
    :props="cityProps"
    :show-all-levels="false"
    @change="handleChange"
    clearable
    v-model="cValue"
  ></el-cascader>
</template>

<script>
import { Cascader } from 'element-ui'
import ajax from './../ajax/index.js'
// console.log('ajax', ajax)
export default {
  components: {
    ElCascader: Cascader
  },
  name: 'cascader',
  props: {
    value: {
      type: [Number, String, Array],
      default: '0'
    },
    type: {
      type: String,
      default: 'value'
    },
    placeholder: {
      type: String,
      default: '请选择'
    }
  },
  watch: {
    value(newValue) {
      if (newValue && !this.plugChange) {
        // this.initSetValue(newValue)
      }
      if (!newValue) {
        this.cValue = []
      }
      this.plugChange = false
    }
  },
  data() {
    let vm = this
    return {
      dictList: [],
      plugChange: false,
      cValue: [],
      cityProps: {
        expandTrigger: 'hover',
        value: 'id',
        label: 'name',
        lazy: true,
        async lazyLoad(node, resolve) {
          const { level } = node
          let id = level === 0 ? 0 : node.data.id
          // 规避不能正常回显的bug

          if (!vm.cValue.length && vm.value && vm.value.length) {
            await vm.initSetValue(vm.value)
          }
          ajax.methods.getCommonDictByParentId({ dictId: id }).then(res => {
            if (level === 3) {
              res.forEach(element => {
                element.leaf = true
              })
            }
            resolve(res)
          })
        }
      }
    }
  },
  methods: {
    handleChange(values) {
      this.plugChange = true
      let value
      if (this.type === 'value') {
        if (values.length > 0) {
          value = values.slice(-1)[0]
        } else {
          value = ''
        }
      } else {
        value = values
      }
      this.$emit('input', value)
      this.$emit('change', value)
    },
    initSetValue(newValue) {
      return new Promise(resolve => {
        ajax.methods.getCommonDictParents({ dictId: newValue }).then(res => {
          //   this.$set(this, 'dictList', res.list)
          this.$set(this, 'cValue', res.ids)
          resolve()
        })
      })
    }
  }
}
</script>

<style>
</style>
