module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // @babel/preset-env 就是利用你指定的任何目标环境,然后检查它们对应的插件,并传给 Babel 进行转译
    // [
    //   '@babel/preset-env',
    //   {
    //     modules: false,
    //   },
    // ],
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'es',
        style: true, // 官网只写css
      },
    ],
  ],
  env: {
    // dynamic-import -node解决Vue热加载编译速度慢问题
    development: {
      plugins: ['dynamic-import-node'],
    },
  },
}
