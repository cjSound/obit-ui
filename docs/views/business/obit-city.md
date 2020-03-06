---
title: '省市区多级联动'
sidebarDepth: 2
---
##  省市区多级联动 obit-city
<ClientOnly>
  <obit-city />
</ClientOnly>

## 接口说明

## getCommonDictByParentId
逐级获取省市区地区信息 ，根据父id获取下级信息 ，初始化id 为0
```javaScript
//参考mock接口 传入参数dictId
http://rap2.taobao.org:38080/app/mock/228700/getDictByPid?dictId=0
//返回结果
{
  "code": "0000",
  "errorMsg": "",
  "data": [
    {
      "id": "110000",
      "parentId": 0,
      "name": "北京市",
      "shortName": "北京市",
      "longitude": 116.405,
      "latitude": 39.905,
      "level": 1,
      "sort": 1,
      "status": 1
    },
    {
      "id": "120000",
      "parentId": 0,
      "name": "天津市",
      "shortName": "天津",
      "longitude": 117.405,
      "latitude": 40.905,
      "level": 1,
      "sort": 2,
      "status": 1
    },
    {
      "id": "130000",
      "parentId": 0,
      "name": "河北省",
      "shortName": "河北",
      "longitude": 118.405,
      "latitude": 41.905,
      "level": 1,
      "sort": 3,
      "status": 1
    },
    {
      "id": "140000",
      "parentId": 0,
      "name": "山西省",
      "shortName": "山西",
      "longitude": 119.405,
      "latitude": 42.905,
      "level": 1,
      "sort": 4,
      "status": 1
    }
  ]
}

```


##  getCommonDictParents

地区数据回显 ，绑定初始数据v-model 传入最下级具体的id
```javaScript
//参考mock接口 传入参数dictId
//http://rap2.taobao.org:38080/app/mock/228700/getDictParentListById?dictId=430111009
//返回结果
{
    "code":"0000",
    "errorMsg":"",
    "data":{
        "ids":[
            "430000",
            "430100",
            "430111",
            "430111009"
        ],
        "list":[
            {
                "id":"110000",
                "parentId":0,
                "name":"北京市",
                "shortName":"北京市",
                "longitude":116.405,
                "latitude":39.905,
                "level":1,
                "sort":1,
                "status":1,
                "children":null
            }
        ]
    }
}

```
## 参数说明

| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| ids | 返回当前地区所对应的所有上级id集合，从省 市 区 级别依次下推 | Array |- | - |
| list | 暂时无用 | Array |- | - |
<ClientOnly>
  <obit-gif/>
</ClientOnly>