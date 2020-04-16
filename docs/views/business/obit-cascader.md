---
title: 'obitCascader 下拉联动'
sidebarDepth: 2
---
##  多级下拉组件 obitCascader
<ClientOnly>
  <obit-cascader />
</ClientOnly>

##  示例代码
```Vue
<!--
 * @Author: 曹捷
 * @Date: 2020-04-16 15:05:48
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-04-16 16:26:32
 * @Description: 下拉联动组件
 -->
<template>
  <obit-cascader
    :disabled="disabled"
    :options="orgList"
    :props="{ expandTrigger: 'hover' }"
    :show-all-levels="false"
    v-if="orgList.length>0"
    v-model="orgId"
  ></obit-cascader>
</template>

<script>
import obitCascader from './../../../src/obit-cascader/obit-cascader'
export default {
  components: { obitCascader },
  data() {
    return {
      orgId: '85',
      orgList: [
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
        ]
        }
    ]
    }
  },
}
</script>

<style>
</style>

```



## 参数说明

| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| value | 绑定的机构id，选择的一级机构id| String，Number |- | - |
| disabled | 设置是否可以选择 | Boolean |- | false |
| options | 数据tree | Array |- | [] |
| children | 子集字段名 | String |- | children |
| valueName | value 值字段名 | String |- | value |
| label | 展示字段名 | String |- | label |
| parentId | 上级id 字段名 | String |- | parentId |

<ClientOnly>
  <obit-gif/>
</ClientOnly>