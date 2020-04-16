---
title: 'obitOrg 组织机构'
sidebarDepth: 2
---
##  组织机构 obit-org
<ClientOnly>
  <obit-org />
</ClientOnly>

##  示例代码

集成了obit-cascader，在obit-cascader的基础上面加上了组织接口和Value监听
```Vue
<template>
    <div>
        <obit-org disabled v-model="orgId"></obit-org>
        <obit-org  v-model="orgId"></obit-org>
    </div>
  
</template>

<script>
import obitOrg from './../../../src/obit-org/obit-org'

export default {
    components:{obitOrg},
    data(){
        return{
            orgId:'85'
        }
    }
}
</script>

```

## 接口说明

## getAllOrgTree
获取组织机构，多级树状展示
```javaScript
//参考mock接口 
http://rap2.taobao.org:38080/app/mock/228700/getAllOrgTree
//返回结果
{
  "code": "0000",
  "errorMsg": "",
  "data": [
    {
      "organizationId": 1,
      "organizationCode": "DT",
      "organizationName": "大托",
      "shortName": "大托",
      "parentId": 0,
      "orgType": null,
      "orgLevel": 1,
      "isRoot": 0,
      "orgDesc": null,
      "provinceCode": "430000",
      "provinceName": "湖南省",
      "cityCode": "430100",
      "cityName": "长沙市",
      "districtCode": "430111",
      "districtName": "雨花区",
      "areaCode": "430111009",
      "areaName": "黎托街道",
      "address": null,
      "concatName": null,
      "phone": null,
      "createTime": null,
      "createBy": null,
      "modifyTime": "2020-03-05 11:58:32",
      "modifyBy": 1,
      "value": "1",
      "label": "大托",
      "open": true,
      "children": null
    },
    {
      "organizationId": 2,
      "organizationCode": null,
      "organizationName": "信息部",
      "shortName": null,
      "parentId": 0,
      "orgType": null,
      "orgLevel": 1,
      "isRoot": null,
      "orgDesc": null,
      "provinceCode": null,
      "provinceName": null,
      "cityCode": null,
      "cityName": null,
      "districtCode": null,
      "districtName": null,
      "areaCode": "",
      "areaName": null,
      "address": null,
      "concatName": null,
      "phone": null,
      "createTime": "2020-04-16 14:44:19",
      "createBy": 221,
      "modifyTime": null,
      "modifyBy": null,
      "value": "79",
      "label": "信息部",
      "open": true,
      "children": [
        {
          "organizationId": 85,
          "organizationCode": null,
          "organizationName": "信息小组",
          "shortName": null,
          "parentId": 79,
          "orgType": null,
          "orgLevel": 2,
          "isRoot": null,
          "orgDesc": null,
          "provinceCode": null,
          "provinceName": null,
          "cityCode": null,
          "cityName": null,
          "districtCode": null,
          "districtName": null,
          "areaCode": "",
          "areaName": null,
          "address": null,
          "concatName": null,
          "phone": null,
          "createTime": "2020-04-16 15:59:23",
          "createBy": 221,
          "modifyTime": null,
          "modifyBy": null,
          "value": "85",
          "label": "信息小组",
          "open": true,
          "children": null
        },
        {
          "organizationId": 86,
          "organizationCode": null,
          "organizationName": "信息小组2",
          "shortName": null,
          "parentId": 79,
          "orgType": null,
          "orgLevel": 2,
          "isRoot": null,
          "orgDesc": null,
          "provinceCode": null,
          "provinceName": null,
          "cityCode": null,
          "cityName": null,
          "districtCode": null,
          "districtName": null,
          "areaCode": "",
          "areaName": null,
          "address": null,
          "concatName": null,
          "phone": null,
          "createTime": "2020-04-16 15:59:34",
          "createBy": 221,
          "modifyTime": null,
          "modifyBy": null,
          "value": "86",
          "label": "信息小组2",
          "open": true,
          "children": null
        }
      ]
    }
  ]
}

```



## 参数说明

| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| value | 绑定的机构id，选择的一级机构id| String，Number |- | - |
| disabled | 设置是否可以选择 | Boolean |- | false |

<ClientOnly>
  <obit-gif/>
</ClientOnly>