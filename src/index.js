/**
 * @author hzz780
 * @file index.js
 * @description entry of crossChain
 */

const tokenCrossChainBasic = require('./crossChain/tokenCrossChainBasic');
const crossChain = require('./crossChain/crossChain');
const utils = require('./crossChain/utils');

module.exports = {
  tokenCrossChainBasic,
  crossChain,
  utils
};
