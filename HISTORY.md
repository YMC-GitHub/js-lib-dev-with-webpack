### 基于webpack开发脚本类库

### 类库规范(模块输出)
```
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

```
> 此处使用umd规范


### 语法转换
```
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

```
> es6+ 转 es5


### 接口转换
```
//安装类库
npm install --save-dev babel-plugin-transform-runtime@6.23.0

//添加配置
//.babelrc
{
  "plugins": [
    ["transform-runtime"]
  ]
}
```
> es6+ 转es5


### 指定环境

> 指定接口转换要兼容的浏览器等环境

```
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
```


### 避重转换
```
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
```
> 避免webpack转了，babel又转。


### 打包忽略(外部扩展)
如果某些包在运行时已经通过其他方式或途径引入，则构建输出时忽略掉这些包，避免重复引入。此处如lodash，jquery。
```
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
```
> 从输出的 bundle 中排除依赖loash,jquery。

### 环境变量
```
 var plugins = [];
plugins.push(
    //环境变量
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }
    }));
```


### 文件清单
```
安装依赖
npm install cwebpack-manifest-plugin@2.0.3 -save-dev

添加配置
var ManifestPlugin = require('webpack-manifest-plugin');
plugins.push(
    new ManifestPlugin({
        name: 'manifest',
        filename: 'manifest.json'
    }));
    
```


### 清理目录
```
安装依赖
npm install clean-webpack-plugin@0.1.19 -save-dev

添加配置
var CleanWebpackPlugin = require('clean-webpack-plugin');
plugins.push(new CleanWebpackPlugin('dist'));
```

### 代码压缩
```
plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compress: production //minimize
    }));

```


### 指定路径
```
// package.json
{
  "main": "dist/ymcCaptchaCode.umd.min.js",
  "module": "src/index.js",
}
```
>main 是package.json 标准，而module 是一个提案，此提案允许 JavaScript 生态系统升级使用 ES2015 模块，而不会破坏向后兼容性。