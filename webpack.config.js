let path = require('path')
let webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'number-word.js',
    library: 'numberWord', // 指定类库名,主要用于直接引用的方式(比如script)
    libraryExport: "default", // 对外暴露default属性，就可以直接调用default里的属性
    globalObject: 'this', // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
    libraryTarget: 'umd' // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用
  },
  mode: "production", // 告诉webpack使用production模式的内置优化,
  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: /(node_modules|bower_components)/,
      loader: "babel-loader",
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({ // ProvidePlugin 可以将模块作为一个变量，被webpack在其他每个模块中引用。只有你需要使用此变量的时候，这个模块才会被 require 进来。
      _: ['lodash']
    })
  ],
  externals: { // 从输出的bundle中排除依赖
    lodash: { // 可以在各模块系统(Commonjs/Commonjs2/AMD)中通过'lodash'访问，但在全局变量形式下用'_'访问
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_' // 指向全局变量
    }
  }
}