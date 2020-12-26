/**
 * @author huangzongzhe
 * @file utils.js
 * @description utils for crossChain
 */

// module.exports = function decodeCrossChainTxFromBase64({
export function decodeCrossChainTxFromBase64({
  AElfPbUtils,
  txBase64,
  tokenContract
}) {
  const decodeTx = AElfPbUtils.Transaction.decode(Buffer.from(txBase64, 'base64'));
  const result = AElfPbUtils.Transaction.toObject(decodeTx, {
    enums: String, // enums as string names
    longs: String, // longs as strings (requires long.js)
    bytes: String, // bytes as base64 encoded strings
    defaults: true, // includes default values
    arrays: true, // populates empty arrays (repeated fields) even if defaults=false
    objects: true, // populates empty objects (map fields) even if defaults=false
    oneofs: true // includes virtual oneof fields set to the present field's name
  });

  result.from = AElfPbUtils.getRepForAddress(result.from);
  result.to = AElfPbUtils.getRepForAddress(result.to);
  // The tokenContract of the chain which calls the crossTransfer is the best.
  result.params = tokenContract.CrossChainTransfer.unpackPackedInput(
    Buffer.from(result.params, 'base64').toString('hex')
  );
  return result;
}

// Demo
// decodeCrossChainTxFromBase64({
//   txBase64: `CiIKIOC0Ddw1INC1NjvZd1AU135Lj+gylG0OOCVzHYkSe4E6EiIKIHeO
// MAahLMYJ14utgl9rwY/x41Tsf9qqAt5xwJg6u/cFGKOzfSIEL0SKSCoSQ3Jvc3NDaGFpblRyYW5zZmVyMlYKIgog
// 4LQN3DUg0LU2O9l3UBTXfkuP6DKUbQ44JXMdiRJ7gToSA0VMRhgCIh9IZWxsb0tpdHR5IGNyb3NzIGNoYWluIHRy
// YW5zZmVyKIL0pwEwm/ThBILxBEHcVPiIdDsRTrASLMNdS1VChGKVw1hVfchCpcynCNaA+U3nvo5AW84Lia+HQHUA
// J2RtmaULu8ySzVkDMiIbv69UAA==`, tokenContract});

export async function getChainIdsAndContractAddresses(options) {
  const {
    contractAddresses,
    chainIds,
    sendInstance,
    receiveInstance,
    wallet,
    sha256,
    tokenContractName,
    crossChainContractName
  } = options;
  if (contractAddresses && chainIds) {
    const {
      tokenContractAddressSend,
      crossChainContractAddressSend,
      tokenContractAddressReceive,
      crossChainContractAddressReceive
    } = contractAddresses;
    const {
      chainIdSend,
      chainIdReceive
    } = chainIds;
    const output = {
      tokenContractAddressSend,
      crossChainContractAddressSend,
      tokenContractAddressReceive,
      crossChainContractAddressReceive,
      chainIdSend,
      chainIdReceive
    };
    let returnOutput = true;
    Object.keys(output).forEach(key => {
      if (!output[key]) {
        returnOutput = false;
      }
    });
    if (returnOutput) {
      return output;
    }
  }

  const {
    GenesisContractAddress: genesisContractAddressSend,
    ChainId: chainIdSend
  } = await sendInstance.chain.getChainStatus();
  const {
    GenesisContractAddress: genesisContractAddressReceive,
    ChainId: chainIdReceive
  } = await receiveInstance.chain.getChainStatus();

  // console.log('chainId raw: ', chainIdSend, chainIdReceive);
  // console.log('----------------------------');

  const genesisContractInstanceSend = await sendInstance.chain.contractAt(genesisContractAddressSend, wallet);
  /* eslint-disable max-len */
  const genesisContractInstanceReceive = await receiveInstance.chain.contractAt(genesisContractAddressReceive, wallet);
  const tokenContractAddressSend = await genesisContractInstanceSend.GetContractAddressByName.call(sha256(tokenContractName));
  const crossChainContractAddressSend = await genesisContractInstanceSend.GetContractAddressByName.call(sha256(crossChainContractName));
  const tokenContractAddressReceive = await genesisContractInstanceReceive.GetContractAddressByName.call(sha256(tokenContractName));
  const crossChainContractAddressReceive = await genesisContractInstanceReceive.GetContractAddressByName.call(sha256(crossChainContractName));
  // }
  return {
    tokenContractAddressSend,
    crossChainContractAddressSend,
    tokenContractAddressReceive,
    crossChainContractAddressReceive,
    chainIdSend,
    chainIdReceive
  };
}

export function chainIdToNumber(chainId, chainIdConvertor) {
  return typeof chainId === 'string'
    ? chainIdConvertor.base58ToChainId(chainId) : chainId;
}

export function getCrossTransferType(chainIdSend, chainIdReceive, mainChainId) {
  if (chainIdSend === mainChainId) {
    return 'isFromMainChain';
  }
  if (chainIdReceive === mainChainId) {
    return 'isToMainChain';
  }
  return 'isSideToSide';
}
