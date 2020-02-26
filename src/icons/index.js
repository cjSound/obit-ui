/*
 * @Author: 曹捷
 * @Date: 2020-02-26 14:10:59
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-02-27 01:47:32
 * @Description: file content
 */
// import Vue from 'vue'
// import svgIcon from './../SvgIcon' // svg component

// // register globally
// Vue.component('svg-icon', svgIcon)

// const requireAll = requireContext => {
//     var keys = requireContext.keys()
//     keys.map(requireContext)
// }
const req = require.context('./svg', false, /\.svg$/)
const test = req('./404.svg')
import './svg/nodata.svg'
console.log('TCL: test', test, req.keys())
// requireAll(req)