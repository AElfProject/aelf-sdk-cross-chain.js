/**
 * @author huangzongzhe
 * @file crossChain.js
 * @description
 */

// module.exports = class TokenCrossChainBasic {
import {
  getChainIdsAndContractAddresses
} from './utils';

export default class TokenCrossChainBasic {
  constructor({
    AElfUtils,
    sendInstance,
    receiveInstance,
    mainChainId = 9992731, // AELF: 9992731; TELF: 4200270
    issueChainId = 9992731,
    tokenContractName = 'AElf.ContractNames.Token',
    crossChainContractName = 'AElf.ContractNames.CrossChain',
    reQueryInterval = 5000,
    queryLimit = 100
  }) {
    this.aelfInstance = {
      sendInstance,
      receiveInstance
    };
    const {
      sha256,
      chainIdConvertor
    } = AElfUtils;

    this.tokenContractName = tokenContractName;
    this.crossChainContractName = crossChainContractName;

    // this.crossQueen = {}; // TODO: 跨链发送等待队列
    this.mainChainId = typeof mainChainId === 'string'
      ? chainIdConvertor.base58ToChainId(mainChainId) : mainChainId; // ex: AELF -> 9992731
    this.issueChainId = typeof issueChainId === 'string'
      ? chainIdConvertor.base58ToChainId(issueChainId) : issueChainId;

    this.reQueryInterval = reQueryInterval;

    this.getBoundParentChainHeightAndMerklePathByHeightLimit = queryLimit;
    this.getBoundParentChainHeightAndMerklePathByHeightCount = 0;
    this.getBoundParentChainHeightAndMerklePathByHeightError = null;

    this.sha256 = sha256;
    this.chainIdConvertor = chainIdConvertor;
  }

  async init({
    wallet,
    contractAddresses = null,
    chainIds = null
  }) {
    const {
      sendInstance,
      receiveInstance
    } = this.aelfInstance;
    const {
      tokenContractName,
      crossChainContractName,
      sha256
    } = this;

    const {
      tokenContractAddressSend,
      crossChainContractAddressSend,
      tokenContractAddressReceive,
      crossChainContractAddressReceive,
      chainIdSend,
      chainIdReceive
    } = await getChainIdsAndContractAddresses({
      contractAddresses,
      chainIds,
      sendInstance,
      receiveInstance,
      wallet,
      sha256,
      tokenContractName,
      crossChainContractName
    });

    // the user response to the try catch
    const [
      tokenContractSend,
      crossChainContractSend,
      tokenContractReceive,
      crossChainContractReceive
    ] = await Promise.all([
      sendInstance.chain.contractAt(tokenContractAddressSend, wallet),
      sendInstance.chain.contractAt(crossChainContractAddressSend, wallet),
      receiveInstance.chain.contractAt(tokenContractAddressReceive, wallet),
      receiveInstance.chain.contractAt(crossChainContractAddressReceive, wallet)
    ]);

    this.aelfInstance.tokenContractSend = tokenContractSend;
    this.aelfInstance.tokenContractReceive = tokenContractReceive;
    this.aelfInstance.crossChainContractSend = crossChainContractSend;
    this.aelfInstance.crossChainContractReceive = crossChainContractReceive;
    this.chainIdSendBase58 = chainIdSend;
    this.chainIdReceiveBase58 = chainIdReceive;

    return {
      tokenContractSend,
      tokenContractReceive,
      crossChainContractSend,
      crossChainContractReceive,
      chainIdSend,
      chainIdReceive
    };
  }

  async send(contractsAndChainIds, paramsSendInput) {
    const { chainIdConvertor } = this;
    // {
    //   to: receiveAddress,
    //   symbol: tokenInfo.symbol,
    //   amount: 1,
    //   memo: 'HelloKitty cross chain transfer',
    //   // toChainId: parseInt(ChainIdB, 10),
    //   // toChainId: chainIdConvertor.base58ToChainId(ChainIdReceive),
    //   // issueChainId: chainIdConvertor.base58ToChainId(tokenInfoA.issueChainId)
    //   // issueChainId: chainIdConvertor.base58ToChainId(ChainIdSend)
    // }
    const {
      tokenContractSend,
      // chainIdSend,
      chainIdReceive
    } = contractsAndChainIds;

    const paramsSend = {
      ...paramsSendInput,
      toChainId: chainIdConvertor.base58ToChainId(chainIdReceive),
      issueChainId: this.issueChainId
    };

    console.log('chainId base58: ', paramsSend.issueChainId, paramsSend.toChainId, paramsSend);

    // if memo === '', set memo = null
    paramsSend.memo = paramsSend.memo || null;
    const crossTransferTxId = await tokenContractSend.CrossChainTransfer(paramsSend);
    console.log('crossTransferTxId: ', crossTransferTxId);
    const {
      TransactionId: transactionId
    } = crossTransferTxId;

    return {
      toChainId: paramsSend.toChainId,
      issueChainId: paramsSend.issueChainId,
      crossTransferTxId: transactionId
    };
  }

  async getCrossTransferRawTx({
    aelfInstance,
    aelfInstanceTokenContract,
    transactionId
  }) {
    const crossTransferTxInfo = await aelfInstance.chain.getTxResult(transactionId);

    const {
      Status
    } = crossTransferTxInfo;
    if (Status && Status !== 'MINED') {
      if (Status.toLowerCase() === 'pending') {
        return new Promise(resolve => {
          setTimeout(async () => {
            resolve(await this.getCrossTransferRawTx({
              aelfInstance,
              aelfInstanceTokenContract,
              transactionId
            }));
          }, this.reQueryInterval);
        });
      }
      throw Error(JSON.stringify({
        error: 1,
        message: `${transactionId} is not MINED.[${Status}]`,
        canReceive: false
      }));
    }

    console.log('getCrossTransferRawTx crossTransferTxInfo: ', crossTransferTxInfo);
    const blockInfo = await aelfInstance.chain.getBlockByHeight(crossTransferTxInfo.Transaction.RefBlockNumber, false);
    // console.log('blockInfo: ', blockInfo);
    // console.log('crossTransferTxInfo.Transaction.Params: ', crossTransferTxInfo.Transaction.Params);
    const crossTransferRawTx = aelfInstanceTokenContract.CrossChainTransfer.getSignedTx(
      JSON.parse(crossTransferTxInfo.Transaction.Params),
      {
        height: blockInfo.Header.Height,
        hash: blockInfo.BlockHash
      }
    );

    return {
      crossTransferTxInfo,
      crossTransferRawTx
    };
  }

  // TODO: 可做可不做，调用GetBoundParentChainHeightAndMerklePathByHeight前
  // 需要先判断当前侧链是否索引了 主链索引侧链跨链交易的区块
  // 不然会403，报 'Invalid transaction information'
  async getBoundParentChainHeightAndMerklePathByHeight({
    crossChainContractSend,
    crossTransferTxBlockHeight
  }) {
    if (this.getBoundParentChainHeightAndMerklePathByHeightCount
      >= this.getBoundParentChainHeightAndMerklePathByHeightLimit) {
      return Promise.reject(this.getBoundParentChainHeightAndMerklePathByHeightError);
      // return Promise.reject(new Error('getBoundParentChainHeightAndMerklePathByHeight too many times!'));
      // return Promise.reject({
      //   message: 'getBoundParentChainHeightAndMerklePathByHeight too many times!',
      //   detail: this.getBoundParentChainHeightAndMerklePathByHeightError
      // });
    }
    try {
      const {
        merklePathFromParentChain,
        // merklePathForParentChainRoot,
        boundParentChainHeight
      } = await crossChainContractSend.GetBoundParentChainHeightAndMerklePathByHeight.call({
        value: crossTransferTxBlockHeight
      });
      this.getBoundParentChainHeightAndMerklePathByHeightCount = 0;
      // console.log('merklePathFromParentChain 2333,', merklePathFromParentChain, testData, boundParentChainHeight);
      return {
        merklePathFromParentChain,
        boundParentChainHeight
      };
    } catch (e) {
      this.getBoundParentChainHeightAndMerklePathByHeightError = e;
      this.getBoundParentChainHeightAndMerklePathByHeightCount++;
      console.log('>>>>>>>>>>>>>>>> Re getBoundParentChainHeightAndMerklePathByHeight <<<<<');
      console.log(crossTransferTxBlockHeight, e);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.getBoundParentChainHeightAndMerklePathByHeight({
            crossChainContractSend,
            crossTransferTxBlockHeight
          }).then(resolve).catch(reject);
          // resolve(await this.getBoundParentChainHeightAndMerklePathByHeight({
          //   crossChainContractSend,
          //   crossTransferTxBlockHeight
          // }));
        }, this.reQueryInterval);
      });
    }
  }

  /* eslint-disable max-len */
  // merklePath demo:
  // {
  //   merklePathNodes: [
  //     {
  //       hash: {
  //         value: Buffer.from('93125e44277a02497e1a26bcda2bad188848c821ca8b12aa970a98bc00e9c3d6', 'hex').toString('base64')
  //       }
  //     },
  //     {
  //       hash: {
  //         value: Buffer.from('b93d8d3f6e3f1fc90921a0008e572d348aed13613fd8ccfa775f0189d0a18ecb', 'hex').toString('base64')
  //       },
  //       isLeftChildNode: true
  //     }
  //   ]
  // }
  /* eslint-enable max-len */
  async getMerklePath({
    sendInstance,
    crossChainContractSend,
    crossTransferTxId,
    crossTransferTxBlockHeight,
    isFromMainChain = false
  }) {
    const merklePathByTxId = await sendInstance.chain.getMerklePathByTxId(crossTransferTxId);
    const merklePath = {
      merklePathNodes: [...merklePathByTxId.MerklePathNodes]
    };

    merklePath.merklePathNodes = merklePath.merklePathNodes.map(item => ({
      hash: {
        value: Buffer.from(item.Hash, 'hex').toString('base64')
      },
      isLeftChildNode: item.IsLeftChildNode
    }));

    let boundParentChainHeight = -1;
    // [chain]side to side, side to main.
    if (!isFromMainChain) {
      // console.log('crossTransferTxBlockHeight 111: ', crossTransferTxBlockHeight);
      // If we can not GetBoundParentChainHeightAndMerklePathByHeight from the chain
      // It will throw a error.
      const {
        merklePathFromParentChain,
        boundParentChainHeight: boundParentChainHeightTemp
      } = await this.getBoundParentChainHeightAndMerklePathByHeight({
        crossChainContractSend,
        crossTransferTxBlockHeight
      });

      // console.log('merklePathFromParentChain: ', merklePath, merklePathFromParentChain);

      boundParentChainHeight = boundParentChainHeightTemp;
      merklePath.merklePathNodes = [...merklePath.merklePathNodes, ...merklePathFromParentChain.merklePathNodes];
      // console.log('boundParentChainHeight: ', boundParentChainHeightTemp, crossTransferTxBlockHeight);
    }

    return {
      boundParentChainHeight,
      merklePath
    };
  }

  async recevieInit({
    crossTransferTxId
  }) {
    const {
      chainIdConvertor
    } = this;
    const {
      sendInstance,
      tokenContractSend,
      tokenContractReceive
    } = this.aelfInstance;

    if (!tokenContractReceive || !tokenContractSend) {
      throw Error(JSON.stringify({
        error: 1,
        message: 'Please call tokenCrossChain.init to get tokenContractReceive & tokenContractSend at first.',
        canReceive: false
      }));
    }

    const {
      LastIrreversibleBlockHeight: lastIrreversibleBlockHeight
    } = await sendInstance.chain.getChainStatus();

    const {
      crossTransferTxInfo,
      crossTransferRawTx
    } = await this.getCrossTransferRawTx({
      aelfInstance: sendInstance,
      aelfInstanceTokenContract: tokenContractSend,
      transactionId: crossTransferTxId
    });

    const {
      BlockNumber: crossTransferTxBlockHeight
    } = crossTransferTxInfo;

    const chainIdSend = chainIdConvertor.base58ToChainId(this.chainIdSendBase58);
    const chainIdReceive = chainIdConvertor.base58ToChainId(this.chainIdReceiveBase58);

    const isFromMainChain = chainIdSend === this.mainChainId;
    const isToMainChain = chainIdReceive === this.mainChainId;

    return {
      lastIrreversibleBlockHeight,
      crossTransferTxInfo,
      crossTransferRawTx,
      crossTransferTxBlockHeight,
      chainIdSend,
      chainIdReceive,
      isFromMainChain,
      isToMainChain
    };
  }

  async isChainReadyToReceive({
    crossTransferTxId
  }) {
    const {
      sendInstance,
      // tokenContractReceive,
      crossChainContractSend,
      crossChainContractReceive
    } = this.aelfInstance;

    const {
      lastIrreversibleBlockHeight,
      crossTransferTxInfo,
      crossTransferRawTx,
      crossTransferTxBlockHeight,
      chainIdSend,
      isFromMainChain,
      isToMainChain
    } = await this.recevieInit({
      crossTransferTxId
    });

    // console.log('isFromMainChain isToMainChain: ', isFromMainChain, isToMainChain);
    // console.log('lastIrreversibleBlockHeight: ', lastIrreversibleBlockHeight, crossTransferTxRefBlockHeight);
    if (lastIrreversibleBlockHeight >= crossTransferTxBlockHeight) {
      if (crossTransferTxInfo.Status && crossTransferTxInfo.Status === 'MINED') {
        const {
          boundParentChainHeight,
          merklePath
        } = await this.getMerklePath({
          sendInstance,
          crossChainContractSend,
          crossTransferTxId,
          crossTransferTxBlockHeight,
          isFromMainChain
        });
        console.log('boundParentChainHeight: ', boundParentChainHeight, isFromMainChain, isToMainChain);

        let crossTransferTxParentBlockHeight = crossTransferTxBlockHeight;

        if (isFromMainChain) {
          // main chain to side chain
          let {
            value: parentChainHeight
          } = await crossChainContractReceive.GetParentChainHeight.call();
          parentChainHeight = parseInt(parentChainHeight, 10);

          // console.log('parentChainHeight: ', parentChainHeight);
          // If the crossChainContractReceive belongs to mainChain, we will get {value: '-1'};
          // If the crossChainContractReceive belongs to sideChain.
          if (parentChainHeight >= 0 && (parentChainHeight < crossTransferTxBlockHeight)) {
            throw Error(JSON.stringify({
              error: 1,
              message: `the parent chain block at height of ${crossTransferTxBlockHeight}`
                + 'is not recorded, please waiting.',
              canReceive: true
            }));
          }
        } else if (isToMainChain) {
          // side chain to main chain
          crossTransferTxParentBlockHeight = boundParentChainHeight;

          const {
            value: sideChainHeightInMainChain
          } = await crossChainContractReceive.GetSideChainHeight.call({
            value: chainIdSend
          });

          // await = receiveInstance.GetChainStatus.call();

          // let {
          //   value: sendChainParentChainHeight
          // } = await crossChainContractSend.GetParentChainHeight.call();
          // sendChainParentChainHeight = parseInt(sendChainParentChainHeight, 10);

          // console.log('??????---------', crossTransferTxParentBlockHeight, sendChainParentChainHeight);

          // if (sendChainParentChainHeight < crossTransferTxParentBlockHeight) {
          //   console.log('??????---------', crossTransferTxParentBlockHeight, sendChainParentChainHeight);
          //   // throw Error(JSON.stringify({
          //   //   error: 1,
          //   //   message: `The side chains are not ready to receive tx.
          //   //     The crossTransferTxParentBlockHeight is ${crossTransferTxParentBlockHeight}.
          //   //     The block height of parent in side chain is ${sendChainParentChainHeight}.`,
          //   //   canReceive: true
          //   // }));
          // }

          if (sideChainHeightInMainChain < crossTransferTxBlockHeight) {
            throw Error(JSON.stringify({
              error: 1,
              message: `The side chains are not ready to receive tx.
                The height of the side chain recorded in main chain is ${sideChainHeightInMainChain}.
                sideChainHeightInMainChain need >= ${crossTransferTxBlockHeight}.`,
              canReceive: true
            }));
          }
        } else {
          // side chain to side chain
          let {
            value: receiveChainParentChainHeight
          } = await crossChainContractReceive.GetParentChainHeight.call();
          receiveChainParentChainHeight = parseInt(receiveChainParentChainHeight, 10);

          // When we call this.getMerklePath
          if (boundParentChainHeight > receiveChainParentChainHeight) {
            throw Error(JSON.stringify({
              error: 1,
              message: `The side chains are not ready to receive tx.
                The boundParentChainHeight of crossChainTransfer is ${boundParentChainHeight}
                The parentChainHeight of the chain which receives the tx is ${receiveChainParentChainHeight}.`,
              canReceive: true
            }));
          }
          crossTransferTxParentBlockHeight = boundParentChainHeight;
        }

        return {
          isReady: true,
          crossTransferRawTx,
          chainIdSend,
          merklePath,
          crossTransferTxParentBlockHeight
        };
      }
      throw Error(JSON.stringify({
        error: 3,
        message: `The transaction ${crossTransferTxId} of CrossChainTransfer
          is ${crossTransferTxInfo.Status}.`,
        canReceive: true
      }));
    } else {
      throw Error(JSON.stringify({
        error: 2,
        message: `Please waiting until the lastIrreversibleBlockHeight[${lastIrreversibleBlockHeight}]
          >= 'the height[${crossTransferTxBlockHeight}] of transaction of tokenCrossChainInstance.send()'
          `,
        canReceive: true
      }));
    }
  }

  async receive({
    crossTransferTxId
  }) {
    const {
      crossTransferRawTx,
      chainIdSend,
      merklePath,
      crossTransferTxParentBlockHeight
    } = await this.isChainReadyToReceive({
      crossTransferTxId
    });
    const {
      tokenContractReceive
    } = this.aelfInstance;
    // message CrossChainReceiveTokenInput {
    //   int32 from_chain_id = 1;
    //   int64 parent_chain_height = 2;
    //   bytes transfer_transaction_bytes = 3;
    //   aelf.MerklePath merkle_path = 4; // 发起交易的块的 merkle_path + 主链的merkle_path
    // }
    // 交易确认时
    // parent_chain_height 永远是发起这笔转账交易时，主链的高度；
    // 从侧链往主链，则是主链索引侧链包含这个交易的区块的区块高度。
    // 侧链可以通过 crossChain 合约，获取发跨链交易时，主链索引的高度
    // 这个合约是系统合约: 'AElf.ContractNames.CrossChain';
    const crossReceiveTxId = await tokenContractReceive.CrossChainReceiveToken({
      fromChainId: chainIdSend, // issueChainId,
      // parentChainHeight: crossTransferTxBlockHeight, // main chain
      parentChainHeight: crossTransferTxParentBlockHeight, // main chain
      transferTransactionBytes: Buffer.from(crossTransferRawTx, 'hex'),
      merklePath
    });
    return crossReceiveTxId;
  }
}
