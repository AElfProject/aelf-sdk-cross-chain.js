/**
 * @author hzz780
 * @file index.js
 * @description entry of crossChain
 */

// const TokenCrossChainBasic = require('./crossChain/tokenCrossChainBasic');
// const CrossChain = require('./crossChain/crossChain');
// const utils = require('./crossChain/utils');

import TokenCrossChainBasic from './crossChain/tokenCrossChainBasic';
import CrossChain from './crossChain/crossChain';
import utils from './crossChain/utils';

// module.exports = {
export default {
  TokenCrossChainBasic,
  CrossChain,
  utils
};
