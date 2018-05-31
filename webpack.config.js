var path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'ymcLib-ImageWater.js',
		library: 'ymcImageWater',
		libraryTarget: 'umd'
	},
	externals: [],
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: 'babel-loader'
		}]
	}
};