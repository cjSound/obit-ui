(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{347:function(e,n,l){"use strict";l(4),l(328),l(351),l(329);var t=l(352),a=l.n(t),i=l(337),o={components:{ElCascader:a.a},props:{value:{type:[String,Number],default:""},disabled:{type:Boolean,default:!1},options:{type:Array,default:[]},children:{type:String,default:"children"},valueName:{type:String,default:"value"},label:{type:String,default:"label"},parentId:{type:String,default:"parentId"}},watch:{value:function(e,n){!n&&e&&this.getParentIdList(e)},options:function(){this.initCasList()}},data:function(){return{cascValue:[],casList:[]}},mounted:function(){this.initCasList(),this.$set(this,"cascValue",this.getParentIdList(this.value))},methods:{cascChange:function(e){var n=e.slice(-1)[0];this.$emit("input",n)},initCasList:function(){var e=this,n=i.util.util.cloneObj(this.options),l=[].concat(n),t=this.children;!function e(n){n.forEach((function(n){n[t]&&n[t].length>0&&(l=l.concat(n[t]),e(n[t]))}))}(n),l.forEach((function(n){n[e.children]=[]})),this.casList=l},getParentIdList:function(e){var n=["".concat(e)],l=this;return function e(t){for(var a=0;a<l.casList.length;a++){var i=l.casList[a];i[l.valueName]==t&&(n.unshift("".concat(i[l.parentId])),e(i[l.parentId]))}}(e),"0"===n[0]&&n.shift(),n}}},r=l(1),c=Object(r.a)(o,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("el-cascader",{attrs:{disabled:e.disabled,options:e.options,props:{expandTrigger:"hover",checkStrictly:!0},"show-all-levels":!1},on:{change:e.cascChange},model:{value:e.cascValue,callback:function(n){e.cascValue=n},expression:"cascValue"}})}),[],!1,null,null,null);n.a=c.exports},558:function(e,n,l){"use strict";l.r(n);var t={components:{obitCascader:l(347).a},data:function(){return{orgId:"85",orgList:[{organizationId:1,organizationCode:"DT",organizationName:"大托",shortName:"大托",parentId:0,orgType:null,orgLevel:1,isRoot:0,orgDesc:null,provinceCode:"430000",provinceName:"湖南省",cityCode:"430100",cityName:"长沙市",districtCode:"430111",districtName:"雨花区",areaCode:"430111009",areaName:"黎托街道",address:null,concatName:null,phone:null,createTime:null,createBy:null,modifyTime:"2020-03-05 11:58:32",modifyBy:1,value:"1",label:"大托",open:!0,children:null},{organizationId:2,organizationCode:null,organizationName:"信息部",shortName:null,parentId:0,orgType:null,orgLevel:1,isRoot:null,orgDesc:null,provinceCode:null,provinceName:null,cityCode:null,cityName:null,districtCode:null,districtName:null,areaCode:"",areaName:null,address:null,concatName:null,phone:null,createTime:"2020-04-16 14:44:19",createBy:221,modifyTime:null,modifyBy:null,value:"79",label:"信息部",open:!0,children:[{organizationId:85,organizationCode:null,organizationName:"信息小组",shortName:null,parentId:79,orgType:null,orgLevel:2,isRoot:null,orgDesc:null,provinceCode:null,provinceName:null,cityCode:null,cityName:null,districtCode:null,districtName:null,areaCode:"",areaName:null,address:null,concatName:null,phone:null,createTime:"2020-04-16 15:59:23",createBy:221,modifyTime:null,modifyBy:null,value:"85",label:"信息小组",open:!0,children:null}]}]}}},a=l(1),i=Object(a.a)(t,(function(){var e=this,n=e.$createElement,l=e._self._c||n;return e.orgList.length>0?l("obit-cascader",{attrs:{disabled:e.disabled,options:e.orgList,props:{expandTrigger:"hover"},"show-all-levels":!1},model:{value:e.orgId,callback:function(n){e.orgId=n},expression:"orgId"}}):e._e()}),[],!1,null,null,null);n.default=i.exports}}]);