/**
 * @file browser config
 * @author atom-yang,hzz780
 */

/* eslint-env node */
// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');
const baseConfig = require('./webpack.common');
const {
  OUTPUT_PATH
} = require('./utils');

const umdConfig = {
  mode: 'production',
  // mode: 'none',
  output: {
    path: OUTPUT_PATH,
    filename: 'aelf-cross-chain.umd.js',
    library: 'AElfCrossChain',
    libraryTarget: 'umd',
    globalObject: 'this',
    libraryExport: 'default',
    umdNamedDefine: true
  },
  optimization: {
    removeEmptyChunks: true,
    occurrenceOrder: true,
    sideEffects: true,
    minimize: true
  }
};


module.exports = merge(baseConfig, umdConfig);
