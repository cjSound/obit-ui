/*
 * @Author: 曹捷
 * @Date: 2020-02-26 11:45:28
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-03-06 17:23:37
 * @Description: file content
 */
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '../../' + dir)
}
module.exports = {
  base: '/obit-ui/',
  title: 'Onebit',
  description: '易比特前端组件库',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ],
  themeConfig: {
    logo: '/favicon.ico',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Github',
        link: 'https://github.com/cjSound/obit-ui/'
      },
    ],
    sidebar: [{
        title: '开发指南',
        collapsable: false,
        children: [
          'views/guide/install.md',
          'views/guide/get-started.md'
        ]
      },
      {
        title: '基础',
        collapsable: false,
        children: [
          'views/base/ajax.md',
          'views/base/icon.md'

        ]
      },
      {
        title: '样式组件',
        collapsable: false,
        children: [
          'views/components/content-form.md',
          'views/components/nodata.md',
          'views/components/title-wrap.md',
        ]
      },
      {
        title: '业务组件',
        collapsable: false,
        children: [
          'views/business/obit-city.md',
          'views/business/obit-dict.md',
        ]
      }
    ]
  },
  scss: { //配置 scss 根目录
    includePaths: [path.join(__dirname, '../../style')]
  },
  chainWebpack: (config, isServer) => {
    // config 是 ChainableConfig 的一个实例
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
  }
}