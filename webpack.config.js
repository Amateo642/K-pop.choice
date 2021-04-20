const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const copyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    devtool: 'inline-source-map',
    module: {
      rules: [{
         test:/\.(s*)css$/,
         use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
         ]
      }, {
         test: /\.(png|jpe?g|gif)$/i,
         type: 'asset/resource',
         generator: {
            filename: 'assets/[hash][ext]',
         }
      }
   ]
   },
   plugins: [
      new miniCss({
         filename: 'style.css',
      }),
      new copyPlugin({
         patterns: [{
            from: path.resolve(__dirname, 'public'),
            to: path.resolve(__dirname, 'dist'),
         }]
      })
   ]
};
