/**
 * @file node config
 * @author atom-yang
 */

/* eslint-env node */
// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');
const baseConfig = require('./webpack.common');
const {
  OUTPUT_PATH
} = require('./utils');

const nodeConfig = {
  mode: 'production',
  output: {
    path: OUTPUT_PATH,
    filename: 'aelf-cross-chain.cjs.js',
    library: 'AElfCrossChain',
    libraryTarget: 'commonjs2',
    libraryExport: 'default'
  },
  resolve: {
    alias: {
      scryptsy$: '../scrypt-polyfill.js',
    }
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
