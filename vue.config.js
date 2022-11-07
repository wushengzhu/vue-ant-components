const path = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}


module.exports = {
  // lintOnSave: false,
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码，需要安装@vue/cli-plugin-eslint
  lintOnSave: process.env.NODE_ENV === "development",
  devServer: {
    proxy: {
      // [process.env.VUE_APP_BASE_API]:
      "/api": {
        target: "http://127.0.0.1:2022",
        // 开启websocket服务，默认true
        ws: true,
        changeOrigin: true,
        // 用于修改路径配置,把api路径名去掉
        // pathRewrite: { '^/api': '' }
      },
    },
  },
  configureWebpack: {
    plugins: [
      // webpack分析器插件
      new BundleAnalyzerPlugin({
        analyzerMode: "disabled",
        analyzerHost: "127.0.0.1",
        analyzerPort: 8888,
        // 在static模式下生成的报告文件
        // reportFilename: 'report.html',
        // 浏览器默认打开报告
        openAnalyzer: true,
        // 在budle输出目录中生成
        // generateStatsFile: true,
        statsFilename: "stats.json",
        logLevel: "info",
      }),
    ],
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
      alias: {
        "@": resolve('src'),
      },
    },
    module: {
      rules: [],
    },
  },
  pluginOptions: {
    // 安装style-resources-loader和vue-cli-plugin-style-resources-loader
    // 避免在每个样式文件中手动的@import导入
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        // path.resolve(__dirname, 'src/styles/variables.scss'),
        resolve('src/styles/mixins.less'),
        resolve('src/styles/common.less'),
      ],
    },
  },
  css: {
    loaderOptions: {
      less: {
        // 自定义主题样式
        // modifyVars: {
        //   'primary-color': '#41B883',
        //   'link-color': '#41B883',
        //   'border-radius-base': '2px'
        // }
        // 解决ant-vue引入不被允许的内嵌js问题
        javascriptEnabled: true,
      },
    },
  },
};
