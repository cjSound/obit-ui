/*
 * @Author: 曹捷
 * @Date: 2019-08-01 14:25:13
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-02-27 15:36:38
 * @Description: file content
 */
import api from './api'
let URL = process.env.VUE_APP_BASE_URL
export default {
    // 根据code查询子字典
    getCommonDictValueList(data) {
        return api.get(`${URL}manage/codeValue/findByCodeFiled`, data)
    },
    getCommonTest(data) {
        console.log('TCL: getCommonTest -> 原始版本', data)
        return api.get(`${URL}manage/codeValue/findByCodeFiled`, data)
    }
}