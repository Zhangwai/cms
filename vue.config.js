// const path = require('path')

module.exports = {
  // 1.配置方式一：CLI提供的属性
  outputDir: './build',
  //这个必须，引入静态资源需要从根路径引入，否则会找不到静态资源
  publicPath: process.env.VUE_PUBLIC_PATH,
  // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: './',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: 'index.html',
  // 默认在生成的静态资源文件名中包含hash以控制缓存
  filenameHashing: true,
  // 解决跨域问题：在webpack设置devServer => proxy
  devServer: {
    proxy: {
      '^/api': {
        // 映射
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    },
    // history模式下的url会请求到服务器端，但是服务器端并没有这一个资源文件，就会返回404，所以需要配置这一项
    historyApiFallback: {
      index: '/index.html' //与output的publicPath
    }
  },
  // 2.配置方式二：和webpack配置合并
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }

  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },

  // 3.配置方式三：
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // }
}
