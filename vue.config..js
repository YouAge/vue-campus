/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '.', dir)
}
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:6452',
        changeOrigin: true
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    }
  },
  chainWebpack: config => {
    // 配置全局的less 变量使用、
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach((type) =>
      addStyleResource(config.module.rule('less').oneOf(type))
    )
    // 移除prefetch插件，避免加载多余的资源
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    config.resolve.alias.set('@', resolve('src'))
  }
}

// 配置全局的less的变量使用， 先安装 npm install style-resources-loader -D
function addStyleResource (rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/style/**.less')]
    })
}
