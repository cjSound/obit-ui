<!--
 * @Author: 曹捷
 * @Date: 2020-03-10 09:57:54
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-03-10 10:18:09
 * @Description: 文件上传预览
 -->
<template>
  <div class="upload">
    <obitUpload :action="action" :multiple="false" :params="uploadParams" :size="5" :success="success" accept="jpg, png, jpeg">
      <img :src="formData.imageUrl" class="avatar" height="200" v-if="formData.imageUrl" width="300" />
      <i class="el-icon-plus avatar-uploader-icon" v-else></i>
    </obitUpload>
  </div>
</template>

<script>
import obitUpload from './../../../src/obit-upload/obit-upload'

export default {
  components: {
    obitUpload
  },
  data() {
    return {
      formData: {
        imageUrl: ''
      },
      uploadParams: {
        uploadType: 3
      },
      action: 'http://rap2.taobao.org:38080/app/mock/228700/upload'
    }
  },
  methods: {
    success(res) {
      this.formData.imageUrl = res.sourceUrl
    }
  }
}
</script>

<style>
</style>