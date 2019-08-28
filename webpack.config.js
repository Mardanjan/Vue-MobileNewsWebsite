
// webpack 命令后执行以下几步
// 1 首先它发现我们并没有给它指定入口和出口 
// 2 它就去配置文件里webpack.config.js 
// 3 找到之后从里面拿到配置对象中指定的入口和出口 然后执行大包的功能

//  webpack-dev-server 工具实现自动打包   npm install -g webpack-dev-server
// node nodemon
const path = require('path');

//启用热更新的第二部
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {

    mode: "production", // "production" | "development" | "none"
    mode: "production", // enable many optimizations for production builds
    mode: "development", // enabled useful tools for development
    mode: "none", // no defaults
   
  //配置入口和出口
  entry:path.join(__dirname, './src/main.js'),  // 入口，表示要使用webpack打包那个文件  
  output:{ //输出文件相关配置
      path : path.join(__dirname , './dist'),
      filename : 'bundle.js' 
  },
  devServer:{  //配置dev-server的第二种方式，比较麻烦
  //  open:true, //打开浏览器
    port : 80, //端口
   // contentBase : '', // 托管的根目录
    hot: true,  //热更新第一步
},
    //两个作用1·自动在内存中生成页面   2·自动把打包好的bundle追加到页面中去
    plugins:[ //配置插件的结点    
        new webpack.HotModuleReplacementPlugin() , //new 一个热更新的模块对象， 启用热更新的第三部
        new htmlWebpackPlugin({ //创建一个在内存中生成html的插件
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html', //指定生成页面的名称               
        }),
        new VueLoaderPlugin()
    ],
  module:{  //这个节点用来配置所有的第三方模块加载器
    rules:[
        {test:/\.css$/ , use :['style-loader' , 'css-loader']} ,//配置处理。css文件的第三方loader模块
      
        {test:/\.(jpg|png|gif|bmp|jpeg)$/ , use :'url-loader'} ,//配置处理。.jpg jf png  处理图片路径的
        {test:/\.(ttf|eot|svg|woff|woff2)$/ , use :'url-loader'} ,//配置处理。.处理字体文件
        { test: /\.vue$/, use: 'vue-loader' },
        { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 配置 Babel 来转换高级的ES语法
      
        ]
    },
}