import type { Configuration } from 'webpack';

import Dotenv from 'dotenv-webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const config: Configuration = {
  mode: 'development',
  context: __dirname,
  entry: path.resolve(__dirname, 'src', 'main.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/',
    clean: false,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: '/node_modules/',
        loader: 'ts-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        exclude: '/node_modules/',
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Cats Lovers',
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@tests': path.resolve(__dirname, 'tests'),
    },
  },
  watchOptions: {
    ignored: /node_modules/,
  },
};

export default config;
