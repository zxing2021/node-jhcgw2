let path = require("path");
let Clean = require("clean-webpack-plugin").CleanWebpackPlugin;
let Html = require('html-webpack-plugin');
let {VueLoaderPlugin} = require('vue-loader');
let css = {
	loader: "css-loader",
	options: {
		importLoaders: 1,
		esModule: false
	}
}
let postcss = {
	loader: "postcss-loader",
	options: {
		postcssOptions: {
			plugins: ["postcss-preset-env"]
		}
	}
}
let babel = {
	loader: "babel-loader",
	options: {
		presets: [["@babel/preset-env", {
			useBuiltIns: 'usage',
			corejs: 3
		}]]
	}
}
let file = {
	type: "asset",
	generator: {
		filename: "file/[name][hash:6].[ext]"
	}, parser: {
		dataUrlCondition: {
			maxSize: 24 * 1024,
		}
	}
}
module.exports = {
	mode: "production",
	entry: "./src/index.js",
	output: {
		filename: "dist.js",
		path: path.resolve(__dirname, "dist")
	}, module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', css, postcss]
			}, {
				test: /\.less$/,
				use: ['style-loader', css, postcss, 'less-loader']
			}, {
				test: /\.(png|ttf|woff|woff2|svg|eot)$/,
				...file
			}, {
				test: /\.js$/,
				exclude: /node_modules/,
				use: [babel]
			}, {
				test: /\.vue$/,
				use: ['vue-loader']
			}
		]
	}, plugins: [
		new Clean(),
		new Html({
			template: "./public/index.html"
		}), new VueLoaderPlugin()
	],
	target: "web",
	devServer: {
		hot: true
	},
	performance: {
		hints: false,
	}
}
