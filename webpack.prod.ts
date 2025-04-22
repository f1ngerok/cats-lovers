import CopyPlugin from 'copy-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import { type Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import commonConfig from './webpack.common';

const prodConfig: Configuration = {
  mode: 'production',
  devtool: 'source-map',
  target: 'browserslist',
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'public', 'favicon'), to: 'favicon' },
        {
          from: path.resolve(__dirname, 'public', 'site.webmanifest'),
          to: 'site.webmanifest',
        },
      ],
    }),
  ],
};

export default merge(commonConfig, prodConfig);
