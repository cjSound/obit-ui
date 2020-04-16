---
title: 'obitUpload 文件上传'
sidebarDepth: 2
---
##  文件上传 obit-upload
<ClientOnly>
  <obit-upload />
</ClientOnly>


<font size=5>代码实现</font>
```Vue
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

```

##  参数说明

| 参数| 说明 | 类型 | 可选值 | 默认值 | 是否必填 |
| :------ | ------ | ------ | ------ | ------ | ------ |
| drag | 是否允许拖拽上传 | Boolean |- | false | - |
| action | 上传文件地址 必填  | String |- | - | true |
| accept | 上传的文件类型限制 比如  jpg,png | String |- | - | - |
| success | 成功回调  | Function |- | - | - |
| multiple | 是否允许多文件上传  | Boolean |- | true | - |
| size | 是否允许多文件上传  | Boolean |- | true | - |
| multiple | 单个文件大小最大限制（M）  | Number |- | 10 | - |
| limit | 允许同时最多上传文件数量  | Number |- | 10 | - |
| params | 自定义参数 具体如下  | Object |- | - | - |
| autoUpload | 是否选择完文件自动上传 具体操作如下  | Boolean |- | true | - |

##  params
自定义参数
```vue
<script>
    //最终参数会在默认参数{ uploadType: 2 }，继承自定义参数params
    Object.assign({ uploadType: 2 }, this.params)
</script>

```

##  autoUpload
手动触发上传
```vue
<template>
    <obitUpload
      :autoUpload="false"
      :params="uploadParams"
      :size="1"
      :success="success"
      accept="jpg, png, jpeg"
      action="fileserve/file/uploadFile"
      ref="upload"
    >
      <el-button size="small" type="primary">主动触发</el-button>
    </obitUpload>
</template>
<script>
export default {
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
    //通过其他的事件触发上传
    submitUpload() {
      this.$refs.upload.submit()
    }
  }
}
</script>


```
<ClientOnly>
  <obit-gif/>
</ClientOnly>
