---
title: 'ajax通讯'
sidebarDepth: 2
---
## 引入ajax
<font size=5>index.js</font>

<font size=3>methods为ajax初始化之后，会注入我们业务api，挂在在methods属性上</font>


<font size=5>第一步引入ajax</font>

```javaScript
import {ajax} from 'obit-ui'
import admin from './api/admin'
//初始化 传入api调用
//ajax是一个实例对象 实例属性主要为api，methods
//
ajax.init({
    ...admin(ajax.api)//将api传入调用
})
export default ajax.methods

```

## api调用后台接口
<font size=5>admin.js</font>

```javaScript
let URL = process.env.VUE_APP_BASE_URL
export default function (api) {
    return {
        getAdmin(data) {
            return api.post(`${URL}user/login`, data)
        },
        getCommonTest(data) {
            return api.get(`${URL}manage/menu/getList`, data)
        },
        // 获取后台流数据下载  支持自命名
        downloadAddFileTemple(data, config = {}) {
            return api.download(`${URL}manage/templateFile/downloadTemplate`, data, config)
        }
    }
}
```

## api方法

```javaScript
    let URL = process.env.VUE_APP_BASE_URL
    //post调用 返回的对象经过了验证返回码 直接拿到具体数据
    api.post(`${URL}user/login`, data) 
    //get调用 返回的对象经过了验证返回码 直接拿到具体数据
    api.get(`${URL}user/test`, data)

    //tablePost post调用，用于分页查询，返回对象没有验证返回码
    api.tablePost(`${URL}user/test`, data)

    //post 文件上传 
    //argus url, data = {}
    api.upload(`${URL}user/test`, data)
    
    //文件下载
    //download(url, data = {}, config = {}) 
    //mimeType.mimeType(Blob type) config.fileName (下载的文件名，默认本身文件名)
    api.download(`${URL}user/test`, data)

```

<ClientOnly>
  <obit-gif/>
</ClientOnly>