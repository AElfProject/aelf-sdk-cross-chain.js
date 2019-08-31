/**
 * @file webpack bundle analyze 分析包大小
 * @author yangmutong
 */

/* eslint-env node */
const {
  BundleAnalyzerPlugin
// eslint-disable-next-line import/no-extraneous-dependencies
} = require('webpack-bundle-analyzer');
const {
  UnusedFilesWebpackPlugin
// eslint-disable-next-line import/no-extraneous-dependencies
} = require('unused-files-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');
const nodeConfig = require('./webpack.node');
const browserConfig = require('./webpack.browser').default;

const unusedAnalyzeConfig = {
  patterns: ['src/**/*.*'],
  globOptions: {
    ignore: [
      '**/*.md',
      'node_modules/**/*'
    ]
  }
};

module.exports = merge(process.env.RUNTIME_ENV === 'node' ? nodeConfig : browserConfig, {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      generateStatsFile: true
    }),
    new UnusedFilesWebpackPlugin(unusedAnalyzeConfig)
  ]
});
