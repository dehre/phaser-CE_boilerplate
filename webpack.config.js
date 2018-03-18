var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/game.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public', 'build'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      pixi: path.join(__dirname, 'node_modules/phaser-ce/build/custom/pixi.js'),
      phaser: path.join(
        __dirname,
        'node_modules/phaser-ce/build/custom/phaser-split.js'
      ),
      p2: path.join(__dirname, 'node_modules/phaser-ce/build/custom/p2.js'),
      assets: path.join(__dirname, 'assets/'),
    },
  },
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    publicPath: '/public/build/',
    host: '127.0.0.1',
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      // { test: /\.ts$/, enforce: 'pre', loader: 'tslint-loader' },
      { test: /assets(\/|\\)/, loader: 'file-loader?name=assets/[hash].[ext]' },
      { test: /pixi\.js$/, loader: 'expose-loader?PIXI' },
      { test: /phaser-split\.js$/, loader: 'expose-loader?Phaser' },
      { test: /p2\.js$/, loader: 'expose-loader?p2' },
      { test: /\.ts$/, loader: 'ts-loader', exclude: '/node_modules/' },
    ],
  },
  devtool: 'source-map',
}
