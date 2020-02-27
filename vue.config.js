/*
 * @Author: 曹捷
 * @Date: 2019-08-01 14:24:32
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-02-27 15:02:18
 * @Description: file content
 */
const path = require('path')


function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 静态资源目录 (js, css, img, fonts)
  assetsDir: 'assets',
  // 是否开启eslint保存检测，有效值：ture | false | 'error'
  chainWebpack(config) {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  css: {
    loaderOptions: {
      sass: { //webpack 配置 scss 根目录
        includePaths: [resolve('style')]
      }
    }
  }
  // , transpileDependencies: [
  //   'vue-quill-editor',
  //   'vuex'
  // ]

}