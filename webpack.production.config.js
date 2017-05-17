var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var pkg = require('./package.json') 
module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/index.jsx'),
    // 将第三方依赖单独打包。即将 node_modules 文件夹中的代码打包为 vendor.js 将我们自己写的业务代码打包为 app.js。
    // 这样有助于缓存，因为在项目维护过程中，第三方依赖不经常变化，而业务代码会经常变化。
    
    // 还可以这样写 vender:  Obejct.keys(pkg.dependencies)
    vendor: [
      'react', 
      'react-dom', 
      'react-redux', 
      'react-router', 
      'redux', 
      'es6-promise', 
      'whatwg-fetch', 
      'immutable'
    ]
  },
  output: {
    path: __dirname + "/build",
    filename: "[name].[chunkhash:8].js",
    publicPath: '/'
  },

  resolve:{
      extensions:['', '.js','.jsx']
  },

  module: {
    loaders: [
        { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' },
        { test: /\.less$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style', 'css!postcss!less') },
        { test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style', 'css!postcss') },
        { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000&name=img/[name].[chunkhash:8].[ext]' },
        { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000&name=fonts/[name].[chunkhash:8].[ext]'}
    ]
  },
  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    // webpack 内置的 banner-plugin 在生成的文件中的头部都会生成版权信息
    new webpack.BannerPlugin("Copyright by yan358941877@github.com."),

    // html 模板插件
    new HtmlWebpackPlugin({
        template: __dirname + '/app/index.tmpl.html'
    }),

    // 定义为生产环境
    // 在业务代码中会根据全局变量 NODE_ENV来判断是开发环境还是生产环境
    // 如果是开发环境，则会输出一些额外的信息，例如提示错误
    // 如果是生成环境(发布上线)，则不会输出这些额外的信息
    // 全局变量的值是webpack在执行的时候(nodejs环境下)从nodejs的process.env.NODE_ENV中取出来的
    // process.env.NODE_ENV的值是在执行 npm run build和npm run start的时候指定的
    // 执行npm run build会将process.env.NODE_ENV的值设置为'production'
    // 执行npm run start会将process.env.NODE_ENV的值设置为'dev'
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),

    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurenceOrderPlugin(),
    
    // 代码压缩
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          //supresses warnings, usually from module minification
          warnings: false
        }
    }),
    
    // 分离CSS和JS文件
    new ExtractTextPlugin('[name].[chunkhash:8].css'), 
    
    // 提供公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].[chunkhash:8].js'
    }),

    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    })
  ]
}