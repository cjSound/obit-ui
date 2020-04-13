/*
 * @Author: 曹捷
 * @Date: 2020-04-13 19:00:36
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-04-13 21:12:54
 * @Description: file content
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 初始化 vuex
    state: {
      pageNum:10,
      plugNum:1,
      left:10,
      childenname:'',
      name:'',
      widths:'',
      expanded:'',
      init:true,
      closed:'',
      pageChange:{
        index:0,
        keys:[]
      },
      childrenNum:''

    },
    mutations: {
      setPageNum:function(state,info){
        state.pageNum=info;
      },
      setPlugNum:function(state){
        state.plugNum++;
      },
      setLeft:function(state,info){
        state.left=info;
      },
      setName:function(state,info){
        state.name=info;
      },
      setChildenname:function(state,info){
        state.childenname=info;
      },
      setWidths:function(state,info){
        state.widths=info;
      },
      setExpanded:function(state,info){
        state.expanded=info;
      },
      setPageChange:function(state,info){
        state.pageChange.index++;
        state.pageChange.keys=info;
      },
      setClosed:function(state,info){
        state.closed=info;
      },
      setChildrenNum:function(state,info){
        state.childrenNum=info;
      },
    },
    actions: {
  
    },
    getters: {
        plugNum:state=>state.plugNum,
        pageNum: state=>state.pageNum,
        left: state=>state.left,
        widths: state=>state.widths,
        childenname: state=>state.childenname,
        name: state=>state.name,
        expanded:state=>state.expanded,
        pageChange:state=>state.pageChange,
        closed:state=>state.closed,
        childrenNum:state=>state.childrenNum
        
        
    }
})

export default store