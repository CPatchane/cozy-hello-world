'use strict'

const path = require('path')
const webpack = require('webpack')

const {production} = require('./webpack.vars')

module.exports = {
  resolve: {
    modules: ['node_modules', 'src', 'mobile/src']
  },
  entry: [path.resolve(__dirname, '../mobile/src/main')],
  output: {
    path: path.resolve(__dirname, '../mobile/www')
  },
  plugins: [
    new webpack.DefinePlugin({
      __ALLOW_HTTP__: !production,
      __TARGET__: JSON.stringify('mobile')
    }),
    new webpack.ProvidePlugin({
      'cozy.client': 'cozy-client-js/dist/cozy-client.js',
      'cozy.bar': 'cozy-bar/dist/cozy-bar.mobile.js'
    })
  ]
}
