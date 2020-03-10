<!--
 * @Author: 曹捷
 * @Date: 2019-08-21 15:16:37
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-03-10 10:14:09
 * @Description: file content
 -->
<template>
  <el-upload
    :accept="accept"
    :action="action"
    :auto-upload="autoUpload"
    :before-upload="beforeUpload"
    :drag="drag"
    :http-request="customUpload"
    :limit="limit"
    :multiple="multiple"
    :on-change="onChange"
    :on-exceed="onExceed"
    :on-success="success"
    :show-file-list="false"
    class="avatar-uploader"
    ref="upload"
  >
    <slot></slot>
  </el-upload>
</template>

<script>
import { Upload, Loading } from 'element-ui'
import ajax from './../ajax/index.js'

export default {
  components: {
    ElUpload: Upload
  },
  props: {
    //   是否允许拖拽上传
    drag: {
      type: Boolean,
      default: false
    },
    // 上传文件地址 必填
    action: {
      type: String,
      required: true
    },
    // 上传的文件类型限制 比如  jpg,png
    accept: {
      type: String
    },
    // 成功回调
    success: {
      type: Function
    },
    // 是否允许多文件上传
    multiple: {
      type: Boolean,
      default: true
    },
    size: {
      type: Number,
      default: 10
    },
    limit: {
      type: Number,
      default: 10
    },
    // 自定义参数
    params: {
      type: Object
    },
    autoUpload: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      uploadNum: 0,
      uploadSuccessNum: 0,
      loading: ''
    }
  },
  methods: {
    submit() {
      this.$refs.upload.submit()
    },
    onExceed() {
      console.log(arguments)
      this.$message.error(`上传数量一次不能超过${this.limit}个`)
    },
    beforeUpload(file) {
      var fileType = file.name
        .substring(file.name.lastIndexOf('.') + 1)
        .toLowerCase()
      if (this.size) {
        if (file.size / 1024 / 1024 > this.size) {
          this.$message.error(`上传的文件大小不能超过${this.size}M`)
          return false
        }
      }
      if (this.accept) {
        if (this.accept.indexOf(fileType) === -1) {
          this.$message.error(`上传类型只支持${this.accept}的类型`)
          return false
        }
      }
      return true
    },
    customUpload(fileobj) {
      let param = new FormData()
      param.append('file', fileobj.file)
      //上传压缩裁剪
      let defult = Object.assign({ uploadType: 2 }, this.params)
      for (var i in defult) {
        param.append(i, defult[i])
      }
      this.uploadNum++
      this.loading = Loading.service({
        lock: true,
        text: '文件上传中，请稍后',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      ajax.api
        .upload(this.action, param)
        .then(res => {
          this.endLoading()
          this.success && this.success(res)
        })
        .catch(() => {
          this.endLoading()
        })
    },
    endLoading() {
      this.uploadSuccessNum++
      if (this.uploadNum === this.uploadSuccessNum) {
        this.$refs.upload.clearFiles()
        this.loading.close()
      }
    },
    onChange(fileobj) {
      if (!this.autoUpload) {
        console.log('TCL: onChange -> fileobj', fileobj)
      }
    }
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 300px;
  height: 200px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 300px;
  height: 200px;
  display: block;
}
</style>