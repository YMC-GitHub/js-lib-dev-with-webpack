var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

var production = process.env.NODE_ENV === 'production';


var externals = [];
externals.push({
    "lodash": {
        commonjs: "lodash",
        commonjs2: "lodash",
        amd: "lodash",
        root: "_"
    }
});

var plugins = [];
plugins.push(
    //环境变量
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }
    }),
    //模块标识
    production ? new webpack.HashedModuleIdsPlugin() : new webpack.NamedModulesPlugin(),
    //文件清单
    new ManifestPlugin({
        name: 'manifest',
        filename: 'manifest.json'
    }),
    //清理目录
    new CleanWebpackPlugin('dist'),
    //脚本压缩
    new webpack.optimize.UglifyJsPlugin({
        compress: production //minimize
    }));


module.exports = [{
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: production ? 'ymcCaptchaCode.umd.min.js' : 'ymcCaptchaCode.umd.js',
        library: 'ymcCaptchaCode',
        libraryTarget: 'umd'
    },
    externals: externals,
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    },
    plugins: plugins
}];