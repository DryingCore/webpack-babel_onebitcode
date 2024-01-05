const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
	mode: "production",
	entry: {
		script: "./src/index.js",
		style: "./src/style.css",
	},
	output: {
		filename: "[name].bundle.js", // Nome do arquivo de saída
		path: path.resolve(__dirname, "dist"), // Diretório de saída corrigido
	},
	module: {
		rules: [
			{
				test: /\.js$/, // Aplica o loader apenas a arquivos .js
				exclude: /node_modules/, // Ignora a pasta node_modules
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/, // Aplica o loader aos arquivos .css
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].bundle.css",
		}),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
		}),
	],
};
