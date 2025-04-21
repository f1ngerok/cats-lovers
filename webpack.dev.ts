import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { type Configuration, ProgressPlugin } from 'webpack';
import { merge } from 'webpack-merge';

import commonConfig from './webpack.common';

const devConfig: Configuration & DevServerConfiguration = {
  devtool: 'eval-cheap-module-source-map',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    hot: true,
    port: process.env.APP_PORT || 3000,
    open: false,
    historyApiFallback: true,
    compress: false,
  },
  optimization: {
    minimize: false,
  },
  plugins: [new ProgressPlugin()],
};

export default merge(commonConfig, devConfig);
