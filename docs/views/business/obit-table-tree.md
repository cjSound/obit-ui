---
title: '表格树'
sidebarDepth: 2
---
##  表格树 obit-table-tree
<ClientOnly>
  <obit-table-tree />
</ClientOnly>

## 代码示例

可以异步加载数据，适用于大数据场景，支持数十万级别数据加载
```javaScript
<template>
  <div class="hello">
    <h1 @click="test">{{ msg }}</h1>
    <table-tree
      :childrenNum="'childrenNum'"
      :closed="'closed'"
      :data-list="bigdata"
      :expanded="'isExpanded'"
      :left="10"
      :name="'displayName'"
      :page="pageNum"
      @pagechange="pageChange"
      class="table"
      title="值"
      v-if="bigdata.length>0"
    >
      <div slot="类型" slot-scope="{item}">{{item.displayType}}</div>
      <div slot="值" slot-scope="{item}">{{item.value}}</div>
      <div slot="操作" slot-scope="{item,keys,closed}">
        <span @click="test(item,keys,closed)">新增</span>
        <span @click="test1(item,keys,closed)">删除</span>
      </div>
    </table-tree>
  </div>
</template>

<script>
import { data, data2, data3 } from './../../../src/obit-table-tree/data.js'
import tableTree from './../../../src/obit-table-tree/table-tree'
import { util } from 'common-util-js'

export default {
  name: 'HelloWorld',
  components: { tableTree },
  props: {
    msg: String
  },
  data() {
    return {
      // dataList: data,
      bigdata: data,
      pageNum: 10,
      widths: [40, 20, 20, 20],
      saveList: ''
    }
  },
  methods: {
    pageChange(info) {
      console.log('分页改变了', info)
      var key = info.keys.join('-')

      var list = this.saveList[key].slice(
        (info.pageIndex - 1) * this.pageNum,
        info.pageIndex * this.pageNum
      )
      var item = this.getinfo(info.keys, this.bigdata)
      console.log(this.saveList, key, item, list)
      this.$set(item, 'children', list)
    },
    transData(a, idStr, pidStr, chindrenStr) {
      var r = [],
        hash = {},
        id = idStr,
        pid = pidStr,
        children = chindrenStr,
        i = 0,
        j = 0,
        len = a == undefined ? 0 : a.length
      for (; i < len; i++) {
        a[i].children = []
        hash[a[i][id]] = a[i]
      }
      for (; j < len; j++) {
        var aVal = a[j],
          hashVP = hash[aVal[pid]]
        if (hashVP && aVal) {
          !hashVP[children] && (hashVP[children] = [])
          hashVP[children].push(aVal)
        } else {
          r.push(aVal)
        }
      }
      return r
    },
    test(item, keys, closed) {
      // this.$set(this.bigdata[0].children[0].children[4].children[0],'childrenNum',50);
      // this.$set(this.dataList[0].children[0].children[0].children[0],'children',data2);
      // var item =this.dataList[0].children[0].children[1];
      // this.$set(this.dataList[0].children[0].children[1].children[0].children[0],'children',[data3]);
      console.log(222, item, keys, closed)
      // closed.closed =true;
      // this.$set(item,'children',item.children.concat(data2))
      // this.$set(this.dataList[0].children[0].children[1],'displayType','fadfs')
      // this.$set(this.dataList[0].children[0].children[1],'children',[])
      // console.log(this.dataList)
    },
    test1(item, keys, closed) {
      closed.closed = false
	},
	// 针对大数据的场景，当子类集合数据量过于庞大，一次只展示分页的数据，其余数据只保存，在分页时再切割异步获取展示
	// 数据量不大没必要额外处理数据
    keyset(arr, keys, values) {
	
      for (var i in values) {
        if (values[i].children != null && values[i].children.length > 0) {
          if (values[i].children.length > this.pageNum) {
            var num = 0,
              nowList = values[i].children
            arr.push({ key: keys.concat(i), value: values[i].children })
            values[i].children = nowList.slice(0, this.pageNum)
            this.keyset(arr, keys.concat(i), nowList)
          } else {
            var k = keys.concat(i)
            this.keyset(arr, k, values[i].children)
          }
        }
      }
    },
    getinfo(key, item) {
      var keys = [].concat(key)
      var index = keys.splice(0, 1)[0]
      index = index > this.pageNum ? index % this.pageNum : index
      if (keys.length > 0) {
        return this.getinfo(keys, item[index].children)
      } else {
        return item[index]
      }
    }
  },
  mounted() {
    var arr = []
    this.keyset(arr, [], this.bigdata)

    var map = {}
    for (var i = 0; i < arr.length; i++) {
      map[arr[i].key.join('-')] = arr[i].value
    }
    this.saveList = map
    console.log(this.saveList, this.bigdata)
  }
}
</script>

<style >
h3 {
  margin: 40px 0 0;
}
.table {
  width: 888px;
  margin: 0 auto;
}
</style>

```

## 参数说明

| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| childrenNum | 数据量大分页的时候，需要展示下级数据的total 的key| String |- | childrenNum |
| childenname | 数据量大分页的时候，需要展示下级数据的total 的key| String |- | children |
| closed | slot接收字段名 | String |- | closed |
| data-list | 具体数据 | Array |- | - |
| widths | 表格每一列宽度 （百分比） | Array |- | - |
| expanded |  设置树节点展开还是关闭对应的key ，对应key应该为boolean值| String |- | - |
| left | 表格每一级左边间距 | Number |- | 5 |
| name | 首行展示字段key | String |- | name |
| page | 页码，分页参数 | Number |- | 10 |
| title | table 首行展示字段名称 | String |- | - |

## 事件

| 事件| 说明 |  可选值 | 默认值 |
| :------ | ------ | ------ | ------ |
| pagechange | 分页改变|- | - |

## 数据参考 
```javaScript
export const data = [{
    "childrenNum": 1,
    "displayName": "函数",
    "displayType": "function",
    "id": "1",
    "isExpanded": true,
    "pid": "",
    children: [{
        "childrenNum": 2,
        "displayName": "参数值",
        "displayType": "",
        "id": "1.0",
        "isExpanded": true,
        "pid": "1",
        children: [{
            "childrenNum": 5,
            "displayName": "a1",
            "displayType": "struct A ",
            "id": "1.0.0",
            "isExpanded": false,
            "pid": "1.0",
            children: [{
                "childrenNum": 0,
                "displayName": "A_a",
                "displayType": "int ",
                "id": "1.0.0.0",
                "isExpanded": false,
                "pid": "1.0.0",
            }, {
                "childrenNum": 0,
                "displayName": "A_b",
                "displayType": "int ",
                "id": "1.0.0.1",
                "isExpanded": false,
                "pid": "1.0.0",
            }, {
                "childrenNum": 1,
                "displayName": "B_ptr",
                "displayType": "struct B *",
                "id": "1.0.0.2",
                "isExpanded": false,
                "pid": "1.0.0",
                children: [{
                    "childrenNum": 1,
                    "displayName": "B_ptr[0]",
                    "displayType": "struct B ",
                    "id": "1.0.0.2.0",
                    "isExpanded": false,
                    "pid": "1.0.0.2",
                    children: [{
                        "childrenNum": 22,
                        "displayName": "abc",
                        "displayType": "enum geo ",
                        "id": "1.0.0.2.0.0",
                        "isExpanded": false,
                        "pid": "1.0.0.2.0",
                        children: [{
                            "childrenNum": 0,
                            "displayName": "U_read",
                            "displayType": "int ",
                            "id": "1.0.0.2.0.0.0",
                            "isExpanded": false,
                            "pid": "1.0.0.2.0.0",
                        }, {
                            "childrenNum": 0,
                            "displayName": "U_write",
                            "displayType": "int ",
                            "id": "1.0.0.2.0.0.1",
                            "isExpanded": false,
                            "pid": "1.0.0.2.0.0",
                        }, {
                            "childrenNum": 0,
                            "displayName": "U_verify",
                            "displayType": "int ",
                            "id": "1.0.0.2.0.0.2",
                            "isExpanded": false,
                            "pid": "1.0.0.2.0.0",
                            children: []
                        }, {
                            "childrenNum": 0,
                            "displayName": "U_read",
                            "displayType": "int ",
                            "id": "1.0.0.2.0.0.0",
                            "isExpanded": false,
                            "pid": "1.0.0.2.0.0",
                        }, {
                            "childrenNum": 0,
                            "displayName": "U_write",
                            "displayType": "int ",
                            "id": "1.0.0.2.0.0.1",
                            "isExpanded": false,
                            "pid": "1.0.0.2.0.0",
                        }, {
                            "childrenNum": 0,
                            "displayName": "U_verify",
                            "displayType": "int ",
                            "id": "1.0.0.2.0.0.2",
                            "isExpanded": false,
                            "pid": "1.0.0.2.0.0",
                        }, {
                            "childrenNum": 0,
                            "displayName": "U_read",
                            "displayType": "int ",
                            "id": "1.0.0.2.0.0.0",
                            "isExpanded": false,
                            "pid": "1.0.0.2.0.0",
                        }, {
                            "childrenNum": 0,
                            "displayName": "U_write",
                            "displayType": "int ",
                            "id": "1.0.0.2.0.0.1",
                            "isExpanded": false,
                            "pid": "1.0.0.2.0.0",
                        }, {
                            "childrenNum": 0,
                            "displayName": "U_verify",
                            "displayType": "int ",
                            "id": "1.0.0.2.0.0.2",
                            "isExpanded": false,
                            "pid": "1.0.0.2.0.0",
                        }, {
                            "childrenNum": 0,
                            "displayName": "U_rea22d",
                            "displayType": "int ",
                            "id": "1.0.0.2.0.0.0",
                            "isExpanded": false,
                            "pid": "1.0.0.2.0.0",
                        }, {
                            "childrenNum": 0,
                            "displayName": "U_write",
                            "displayType": "int ",
                            "id": "1.0.0.2.0.0.1",
                            "isExpanded": false,
                            "pid": "1.0.0.2.0.0",
                        }, {
                            "childrenNum": 0,
                            "displayName": "U_verify",
                            "displayType": "int ",
                            "id": "1.0.0.2.0.0.2",
                            "isExpanded": false,
                            "pid": "1.0.0.2.0.0",
                        }, {
                            "childrenNum": 0,
                            "displayName": "U_read1",
                            "displayType": "int ",
                            "id": "1.0.0.2.0.0.0",
                            "isExpanded": false,
                            "pid": "1.0.0.2.0.0",
                        }, {
                            "childrenNum": 0,
                            "displayName": "U_write",
                            "displayType": "int ",
                            "id": "1.0.0.2.0.0.1",
                            "isExpanded": false,
                            "pid": "1.0.0.2.0.0",
                        }, {
                            "childrenNum": 0,
                            "displayName": "U_verify",
                            "displayType": "int ",
                            "id": "1.0.0.2.0.0.2",
                            "isExpanded": false,
                            "pid": "1.0.0.2.0.0",
                        }, {
                            "childrenNum": 0,
                            "displayName": "U_read",
                            "displayType": "int ",
                            "id": "1.0.0.2.0.0.0",
                            "isExpanded": false,
                            "pid": "1.0.0.2.0.0",
                        }, {
                            "childrenNum": 0,
                            "displayName": "U_write",
                            "displayType": "int ",
                            "id": "1.0.0.2.0.0.1",
                            "isExpanded": false,
                            "pid": "1.0.0.2.0.0",
                        }, {
                            "childrenNum": 0,
                            "displayName": "U_verify",
                            "displayType": "int ",
                            "id": "1.0.0.2.0.0.2",
                            "isExpanded": false,
                            "pid": "1.0.0.2.0.0",
                        }, {
                            "childrenNum": 0,
                            "displayName": "U_read",
                            "displayType": "int ",
                            "id": "1.0.0.2.0.0.0",
                            "isExpanded": false,
                            "pid": "1.0.0.2.0.0",
                        }, {
                            "childrenNum": 0,
                            "displayName": "U_write",
                            "displayType": "int ",
                            "id": "1.0.0.2.0.0.1",
                            "isExpanded": false,
                            "pid": "1.0.0.2.0.0",
                        }, {
                            "childrenNum": 0,
                            "displayName": "U_verify",
                            "displayType": "int ",
                            "id": "1.0.0.2.0.0.2",
                            "isExpanded": false,
                            "pid": "1.0.0.2.0.0",
                        }, ]
                    }, ]
                }, ]
            }, {
                "childrenNum": 2,
                "displayName": "弄啥",
                "displayType": "<anonymous struct> ",
                "id": "1.0.0.3",
                "isExpanded": false,
                "pid": "1.0.0",
                children: [{
                    "childrenNum": 0,
                    "displayName": "c",
                    "displayType": "int ",
                    "id": "1.0.0.3.0",
                    "isExpanded": false,
                    "pid": "1.0.0.3",
                }, {
                    "childrenNum": 0,
                    "displayName": "d",
                    "displayType": "int ",
                    "id": "1.0.0.3.1",
                    "isExpanded": false,
                    "pid": "1.0.0.3",
                }, ]
            }, {
                "childrenNum": 2,
                "displayName": "M",
                "displayType": "<anonymous union> ",
                "id": "1.0.0.4",
                "isExpanded": false,
                "pid": "1.0.0",
                children: [{
                    "childrenNum": 0,
                    "displayName": "M_a",
                    "displayType": "int ",
                    "id": "1.0.0.4.0",
                    "isExpanded": false,
                    "pid": "1.0.0.4",
                }, {
                    "childrenNum": 0,
                    "displayName": "M_b",
                    "displayType": "int ",
                    "id": "1.0.0.4.1",
                    "isExpanded": false,
                    "pid": "1.0.0.4",
                }, ]
            }, ]
        }, {
            "childrenNum": 1,
            "displayName": "b1",
            "displayType": "struct B *",
            "id": "1.0.1",
            "isExpanded": false,
            "pid": "1.0",
            children: [{
                "childrenNum": 1,
                "displayName": "b1[0]",
                "displayType": "struct B ",
                "id": "1.0.1.0",
                "isExpanded": false,
                "pid": "1.0.1",
                children: [{
                    "childrenNum": 3,
                    "displayName": "abc",
                    "displayType": "enum geo ",
                    "id": "1.0.1.0.0",
                    "isExpanded": false,
                    "pid": "1.0.1.0",
                    children: [{
                        "childrenNum": 0,
                        "displayName": "U_read",
                        "displayType": "int ",
                        "id": "1.0.1.0.0.0",
                        "isExpanded": false,
                        "pid": "1.0.1.0.0",
                    }, {
                        "childrenNum": 0,
                        "displayName": "U_write",
                        "displayType": "int ",
                        "id": "1.0.1.0.0.1",
                        "isExpanded": false,
                        "pid": "1.0.1.0.0",
                    }, ]
                }, ]
            }, ]
        }, {
            "childrenNum": 0,
            "displayName": "c1",
            "displayType": "int ",
            "id": "1.0.1.0.0.0",
            "isExpanded": false,
            "pid": "1.0.1.0.0",
        }, ]
    }]
}, ]
export const data2 = [{
    "childrenNum": 0,
    "displayName": "U_write1",
    "displayType": "int ",
    "id": "1.0.0.2.0.0.1",
    "isExpanded": false,
    "pid": "1.0.0.2.0.0",
}, {
    "childrenNum": 0,
    "displayName": "U_verify2",
    "displayType": "int ",
    "id": "1.0.0.2.0.0.2",
    "isExpanded": false,
    "pid": "1.0.0.2.0.0",
}, {
    "childrenNum": 0,
    "displayName": "U_read3",
    "displayType": "int ",
    "id": "1.0.0.2.0.0.0",
    "isExpanded": false,
    "pid": "1.0.0.2.0.0",
}, ]
export const data3 = {
    "childrenNum": 0,
    "displayName": "U_read",
    "displayType": "int ",
    "id": "1.0.1.0.0.0",
    "isExpanded": false,
    "pid": "1.0.1.0.0",
}
```
<ClientOnly>
  <obit-gif/>
</ClientOnly>