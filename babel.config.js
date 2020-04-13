/*
 * @Author: your name
 * @Date: 2020-02-26 11:45:28
 * @LastEditTime: 2020-04-13 22:53:02
 * @LastEditors: 曹捷
 * @Description: In User Settings Edit
 * @FilePath: \testd:\gitHub\sakura-ui\babel.config.js
 */
module.exports = {
  presets: [
    // '@vue/cli-plugin-babel/preset'
    '@vue/app'
  ],
  plugins: [
    [
        "component",
        {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
        }
    ]
]
}
