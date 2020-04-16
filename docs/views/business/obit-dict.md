---
title: 'obitCity 字典组件'
sidebarDepth: 2
---
##  字典组件 obit-city


<font size=5>组件表现</font>

<ClientOnly>
  <obit-dict />
</ClientOnly>

<font size=5>代码实现</font>
```vue
<template>
  <div>
    <obitDict :dictCode="'activityStatus'" placeholder="请选择活动状态" v-model="svalue"></obitDict>
  </div>
</template>
<script>
export default {
  data() {
    return {
      svalue: '2'
    }
  }
}
</script>
```

## 接口说明
## getCommonDictValueList
根据code查询子字典 
```javaScript
//参考mock接口 传入参数dictId
http://rap2.taobao.org:38080/app/mock/228700/getCommonDictValue?codeField=healthType
//返回结果
{
  "code": "0000",
  "errorMsg": "",
  "data": [
    {
      "id": 393,
      "codeField": "healthType",
      "codeValue": "1",
      "valueDesc": "优秀"
    },
    {
      "id": 394,
      "codeField": "healthType",
      "codeValue": "2",
      "valueDesc": "良好"
    },
    {
      "id": 395,
      "codeField": "healthType",
      "codeValue": "3",
      "valueDesc": "差"
    }
  ]
}

```
## 参数说明

| 参数| 说明 | 类型 | 可选值 | 默认值 | 是否必填 |
| :------ | ------ | ------ | ------ | ------ | ------ |
| value | 绑定的字典值 | Number, String |- | - | - |
| dictCode | 字典code  | String |- | - | true |
| placeholder | 默认提示 | String |- | 请选择 | - |
| labelName | 返回数据展示中文 Key | String |- | valueDesc | - |
| valueName | 返回数据value Key | String |- | codeValue | - |
| disabled | 是否禁用 | Boolean |- | false | - |

<ClientOnly>
  <obit-gif/>
</ClientOnly>