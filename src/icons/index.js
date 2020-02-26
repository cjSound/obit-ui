/*
 * @Author: 曹捷
 * @Date: 2020-02-26 14:10:59
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-02-26 15:21:26
 * @Description: file content
 */
// import Vue from 'vue'
// import svgIcon from './../SvgIcon' // svg component

// // register globally
// Vue.component('svg-icon', svgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)