module.exports = {
  //基本路径
  publicPath: "./",
  //outputDir: "dist", 构建时输出目录 默认dist
  //放置静态资源目录
  assetsDir: "static",
  //indexPath: "index.html", html输出路径 默认 index.html

  // 为路径设置别名,方便快速引用
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },

  // devServer: {
  //   port: 8012,
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:8443",
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/api": ""
  //       }
  //     }
  //   }
  // }
};
