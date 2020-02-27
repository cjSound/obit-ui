/*
 * @Author: 曹捷
 * @Date: 2020-02-26 14:03:03
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-02-27 15:42:53
 * @Description: file content
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}