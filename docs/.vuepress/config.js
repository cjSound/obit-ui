/*
 * @Author: 曹捷
 * @Date: 2020-02-26 11:45:28
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-02-26 16:53:15
 * @Description: file content
 */
const path = require('path')
module.exports = {
  base: '/obit-ui/',
  title: 'Obit UI',
  description: '易比特前端组件库',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ],
  themeConfig: {
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Github',
        link: 'https://github.com/Firenzia/sakura-ui/'
      },
    ],
    sidebar: [{
        title: '开发指南',
        collapsable: true,
        children: [
          'views/guide/install.md',
          'views/guide/get-started.md'
        ]
      },
      {
        title: '组件',
        collapsable: true,
        children: []
      },
    ]
  },
  scss: { //配置 scss 根目录
    includePaths: [path.join(__dirname, '../../style')]
  }
}