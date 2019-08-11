### 基于webpack开发脚本类库

### 类库规范

此处使用umd规范，使类库能够以浏览器,nodejs下运行，使其可以运行在amd，cmd和umd规范的类库环境中。此处以`./src/index.js`文件作为入口，production时以`./dist/ymcCaptchaCode.umd.min.js`作为出口，development时以`./dist/ymcCaptchaCode.umd.js`作为出口
```sh
::<<eof
//安装类库
npm install --save-dev webpack@3.5.5
//添加配置
var production = process.env.NODE_ENV === 'production';
var path = require('path');

module.exports = [{
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: production ? 'ymcCaptchaCode.umd.min.js' : 'ymcCaptchaCode.umd.js',
        library: 'ymcCaptchaCode',
        libraryTarget: 'umd'
    }
}];

//书写命令
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack"
  },
eof
```
> 此处使用umd规范


### 语法转换
使用babel对js文件中的es6+写法转换为es5，此处babel以webpack的插件方式使用。
```sh
::<<eof
//安装类库
npm install --save-dev babel-loader@7.1.3 babel-core@6.26.0 babel-preset-env@1.6.0
//添加配置
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader'
      }
    }
  ]
}
//or using .babelrc
{
  "presets": ["env"]
}
eof
```
> es6+ 转 es5


### 接口转换
通过babel的transform-runtime插件，根据要兼容的环境（浏览器等）对js文件进行接口转换处理。此处不用babel-profill插件。
```sh
::<<eof

//安装类库
npm install --save-dev babel-plugin-transform-runtime@6.23.0

//添加配置
//.babelrc
{
  "plugins": [
    ["transform-runtime"]
  ]
}
eof
```
> es6+ 转es5


### 指定环境

> 指定接口转换要兼容的浏览器等环境

此处通过在babel的配置文件中通过设置env预设的targets字段，指定想要兼容的浏览器环境。下一版本将改为写在browserlistrc配置文件中。
```sh
::<<eof
//.babelrc
{
  "presets": [
    ["env", {
      "targets": {
        "browsers": "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }]
  ],
  "plugins": [
    ["transform-runtime"]
  ]
}
eof
```


### 避重转换
对js文件使用babel进行编译。此项目已经在webpack中使用babel-loader对js文件进行加载并用babel进行处理。
```sh
::<<eof
//添加配置
//.babelrc
{
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }]
  ],
}
eof
```
> 避免webpack转了，babel又转。在此设置modules的值为false


### 打包忽略(外部扩展)
如果某些包在production时已经通过其他方式或途径引入，则构建输出时忽略掉这些包，避免重复引入。比如lodash包，jquery包等。此处对lodash包进行处理。
```sh
::<<eof
var externals = [];
externals.push({
    "lodash": {
        commonjs: "lodash",
        commonjs2: "lodash",
        amd: "lodash",
        root: "_"
    }
});
module.exports = [{
    externals: externals,
}];
eof
```
> 从输出的 bundle 中排除依赖loash,jquery。

### 环境变量
在编译的过程中，如果没有用到环境变量，可以不设置。
```sh
::<<eof
 var plugins = [];
plugins.push(
    //环境变量
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }
    }));
eof
```


### 文件清单
在只有一个入口和一个出口时，是很清除的，可以不用生成文件清单。
```sh
::<<eof
#安装依赖
npm install cwebpack-manifest-plugin@2.0.3 -save-dev

#添加配置
var ManifestPlugin = require('webpack-manifest-plugin');
plugins.push(
    new ManifestPlugin({
        name: 'manifest',
        filename: 'manifest.json'
    }));
eof
```


### 清理目录
因为没有用到文件指纹，所以构建目录内的文件每次生成都是相同的名字，可以不用清理。
```sh
::<<eof
#安装依赖
npm install clean-webpack-plugin@0.1.19 -save-dev

#添加配置
var CleanWebpackPlugin = require('clean-webpack-plugin');
plugins.push(new CleanWebpackPlugin('dist'));
eof
```

### 代码压缩

production时压缩脚本文件。
```sh
::<<eof
plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compress: production //minimize
    }));
eof
```


### 指定路径
```sh
::<<eof
// package.json
{
  "main": "dist/ymcCaptchaCode.umd.min.js",
  "module": "src/index.js",
}
eof
```
>main 是package.json 标准，而module 是一个提案，此提案允许 JavaScript 生态系统升级使用 ES2015 模块，而不会破坏向后兼容性。