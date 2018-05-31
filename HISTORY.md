### 基于webpack开发脚本类库

### 类库规范
```
//安装类库
npm install --save-dev webpack@3.5.5
//添加配置
var path = require('path');
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'ymcLib-ImageWater.js',
		library: 'ymcImageWater',
		libraryTarget: 'umd'
	}
};
```

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
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }
  ]
}
//or using .babelrc
{
  "presets": ["env"]
}

```

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

### 指定环境

> 指定接口转换的环境

```
{
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["last 2 versions", "safari >= 7"],
        "node": "current"
      }
    }]
  ]
}
```
### 避重转换
```
//添加配置
{
  "presets": [{"modules": false}]
}
```

### 特定环境
```
{
  "env": {
    //产品
    "production": {
      "plugins": ["transform-react-constant-elements"]
    }
    //开发
    
    //测试
  }
}
```



### 打包忽略

### 割裂支持

### 重置this

### 指定路径
```
// package.json
{
    "main": "dist/ymcLib-ImageWater.js",
}
```

### 环境变量

### 代码压缩
