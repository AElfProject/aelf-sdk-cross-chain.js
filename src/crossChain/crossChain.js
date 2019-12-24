/**
 * @author hzz780
 * @file crossChain.js
 * @description
 */

// const TokenCrossChainBasic = require('./tokenCrossChainBasic');
import TokenCrossChainBasic from './tokenCrossChainBasic';

// module.exports = class CrossChain {
export default class CrossChain {
  constructor({
    AElfUtils,
    sendInstance,
    receiveInstance,
    mainChainId = '',
    issueChainId = '',
    wallet,
    reQueryInterval = 5000,
    queryLimit
  }) {
    this.sendInstance = sendInstance;
    this.receiveInstance = receiveInstance;
    this.mainChainId = mainChainId;
    this.issueChainId = issueChainId;
    this.wallet = wallet;
    this.reQueryInterval = reQueryInterval;
    this.queryLimit = queryLimit;
    this.AElfUtils = AElfUtils;
  }

  async init(initOptions) {
    this.tokenCrossChainInstance = new TokenCrossChainBasic({
      AElfUtils: this.AElfUtils,
      sendInstance: this.sendInstance,
      receiveInstance: this.receiveInstance,
      mainChainId: this.mainChainId,
      issueChainId: this.issueChainId,
      queryLimit: this.queryLimit,
    });

    const {
      contractAddresses,
      chainIds
    } = initOptions;

    this.contractsAndChainIds = await this.tokenCrossChainInstance.init({
      wallet: this.wallet,
      contractAddresses,
      chainIds
    });
  }

  async send({
    to,
    symbol,
    amount,
    memo
  }) {
    const {
      contractsAndChainIds,
      tokenCrossChainInstance
    } = this;
    // console.log('contractsAndChainIds:', contractsAndChainIds.chainIdSend);

    // const params = {
    //   to: receiveAddress,
    //   symbol: 'ELF',
    //   amount: 1,
    //   memo: 'HelloKitty cross chain transfer'
    //   // toChainId: chainIdConvertor.base58ToChainId(ChainIdReceive),
    //   // issueChainId: chainIdConvertor.base58ToChainId(ChainIdSend)
    // };
    const params = {
      to,
      symbol,
      amount,
      memo
    };

    const sendInfo = await tokenCrossChainInstance.send(contractsAndChainIds, params);
    return sendInfo;
  }

  async isChainReadyToReceive({
    crossTransferTxId
  }) {
    const {
      tokenCrossChainInstance
    } = this;

    return tokenCrossChainInstance.isChainReadyToReceive({
      crossTransferTxId
    }).then(() => true).catch(() => false);
  }

  async receive({
    crossTransferTxId,
  }) {
    const {
      tokenCrossChainInstance
    } = this;

    try {
      const receiveInfo = await tokenCrossChainInstance.receive({
        crossTransferTxId
      });
      return receiveInfo;
    } catch (error) {
      if (error.message) {
        let message = '';
        try {
          message = JSON.parse(error.message);
        } catch (e) {
          message = error.message;
        }
        // const message = JSON.parse(error.message);
        if (message.canReceive) {
          console.log('receiveInfo error canReceive: ', error);
          return new Promise(resolve => {
            console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
            console.log('after 3s, receiving the token & info again');
            setTimeout(async () => resolve(await this.receive({
              crossTransferTxId
            })), this.reQueryInterval);
          });
        }
      }
      console.log('receiveInfo error: ', error);
      return {
        error: 1,
        message: error
      };
    }
  }
}
