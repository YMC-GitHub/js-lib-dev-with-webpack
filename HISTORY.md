# 如何构建 ?

### 类库规范

此处使用umd规范，使类库能够以浏览器,nodejs下运行，使其可以运行在amd，cmd和umd规范的类库环境中。[config](./build/webpack.config.js#L52-#L53)

在umd规范时，需要设置导出的变量名。 [config](.build//webpack.config.js#L52-#L52)

`设置配置`

01.脚本入口文件 [config](./build/webpack.config.js#L48)

02.研发时脚本输出文件 [config](./build/webpack.config.js#L49-#L54)

03.生产时脚本输出文件  [config](./build/webpack.config.js#L49-#L54)


`安装依赖`
```sh
npm install --save-dev webpack@3.5.5
```

`创建命令`

研发时命令`npm run dev` [config](./package.json#L16-#L16)

生产时命令`npm run build` [config](./package.json#L18-#L18)


`使用命令`
```sh
#develop
npm run dev
#output the production code
npm run build
```

### 语法转换

使用babel对js文件中的es6+写法转换为es5，此处babel以webpack的插件方式使用。

`安装依赖`
```sh
#6.X
npm install --save-dev babel-core@6.26.0 babel-preset-env@1.6.0

npm install --save-dev babel-loader@7.1.3
```

`设置配置`

01.以webpack的插件方式使用babel [config](.build//webpack.config.js#L58-#L60)

02.告诉babel使用env预设

```json
//.babelrc
{
  "presets": [
    ["env", {
      //...
      //...
    }]
  ],
}
```


### 接口转换

通过babel的transform-runtime插件，根据要兼容的环境（浏览器等）对js文件进行接口转换处理。此处不用babel-profill插件。


`安装依赖`
```sh
#6.X
npm install --save-dev babel-plugin-transform-runtime@6.23.0
```

`设置配置`

01.告诉babel使用transform-runtime插件

```json
//.babelrc
{
  "plugins": [
    ["transform-runtime", {
      //...
      //...
    }]
  ],
}
```


### 指定环境

> 指定接口转换要兼容的浏览器等环境

此处通过在babel的配置文件中通过设置env预设的targets字段，指定想要兼容的浏览器环境。下一版本将改为写在browserlistrc配置文件中。


`设置配置`

01.设置babel的env预设的浏览器环境选项

```json
//.babelrc
{
  "presets": [
    ["env", {
      //...
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
      //...
    }]
  ],
}
```


### 避重转换

对js文件使用babel进行编译。此项目已经在webpack中使用babel-loader对js文件进行加载并用babel进行处理。

`设置配置`

```json
//.babelrc
{
  "presets": [
    ["env", {
      //...
      "modules": false,
      //...
    }]
  ],
}
```
> 避免webpack转了，babel又转。在此设置modules的值为false


### 打包忽略(外部扩展)

如果某些包在production时已经通过其他方式或途径引入，则构建输出时忽略掉这些包，避免重复引入。比如lodash包，jquery包等。此处对lodash包进行处理。

01.从输出的 bundle 中排除依赖loash [config](.build//webpack.config.js#L8-#L16)。

### 环境变量

在webpack编译的过程中，如果没有用到环境变量，可以不设置。

01.设置环境变量NODE_ENV [config](./build/webpack.config.js#L21-#L25)。


### 文件清单

在只有一个入口和一个出口时，是很清除的，可以不用生成文件清单。

```sh
#安装依赖
npm install cwebpack-manifest-plugin@2.0.3 -save-dev
```

`设置配置`

01.添加文件清单映射插件及其配置 [config](./build/webpack.config.js#L29-#L31)。


### 清理目录

如果没有用到文件指纹，构建目录内的文件每次生成都是相同的名字，可以不用清理。

```sh
#安装依赖
npm install clean-webpack-plugin@0.1.19 -save-dev
```

`设置配置`

01.添加清除资源文件插件及其配置 [config](./build/webpack.config.js#L34-#L34)。



### 代码压缩

production时压缩脚本文件。

`安装依赖`
```sh
#可装可不装，因为webpack的压缩依赖类库默认使用的就是

```

`设置配置`

01.添加js压缩插件及其配置 [config](./build/webpack.config.js#L39-#L42)。

### 指定路径

01.设置通过require('xx')引入的文件 [config](./package.json#L5-#L5)

02.设置通过require('xx')或import引入的文件(允许 JavaScript 生态系统升级使用 ES2015 模块，而不会破坏向后兼容性) [config](./package.json#L6-#L6)

>main 是package.json 标准，而module 是一个提案，此提案允许 JavaScript 生态系统升级使用 ES2015 模块，而不会破坏向后兼容性。