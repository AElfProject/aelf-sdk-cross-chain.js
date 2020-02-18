/**
 * @file node config
 * @author hzz780
 */

/* eslint-env node */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.common');
const {
  OUTPUT_PATH
} = require('./utils');

const  nodeConfig = {
  mode: 'production',
  output: {
    path: OUTPUT_PATH,
    filename: 'aelf-cross-chain.cjs.js',
    library: 'AElfCrossChain',
    libraryTarget: 'commonjs2',
    libraryExport: 'default'
  },
  target: 'node',
  optimization: {
    removeEmptyChunks: true,
    occurrenceOrder: true,
    sideEffects: true,
    minimize: false
  }
};

module.exports = merge(baseConfig, nodeConfig);
