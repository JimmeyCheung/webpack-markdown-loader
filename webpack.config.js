const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HelloWorldPlugin = require('./plugins/basic.js')
const FileListPlugin = require('./plugins/file-list-plugin.js')
const CleanPlugin = require('./plugins/clean-plugin.js')
const CountTimePlugin = require('./plugins/count-time.js')

const EmptyPlugin = require('empty-webpack-plugin');

module.exports = {
  resolveLoader: {
    modules: ['node_modules', 'loaders']
  },

	entry: {
		index: './src/js/index.js'
	},

	module: {
		rules: [
			{
				test: /\.md$/,
				use: [
				{
					loader: 'html-loader'
				},
				{
					loader: 'markdown-loader',
					options: {}
				}],
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/views/index.html',
      title: 'haha'
		}),
		new HelloWorldPlugin({a: 1}),
		new FileListPlugin(),
		new EmptyPlugin({exclude: 'a'}),
		new CountTimePlugin()
	]
}