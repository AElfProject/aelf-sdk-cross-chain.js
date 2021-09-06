const Wallet = AElf.wallet;
const { CrossChain } = window.AElfCrossChain;

// const defaultAddress = '2ZhPU54rgdwJJ7qTzhth2hR1PP7Ne3WeHk6mgKhECYWgi3Tfqk';
const defaultPrivateKey =
  "4e83df2aa7c8552a75961f9ab9f2f06e01e0dca0203e383da5468bbbe2915c97";

const wallet = Wallet.getWalletByPrivateKey(defaultPrivateKey);

const receiveAddress = wallet.address;

// instance
const instance = {
  AELF: new AElf(new AElf.providers.HttpProvider("http://192.168.67.47:8000")),
  tDVV: new AElf(new AElf.providers.HttpProvider("http://192.168.67.31:8000")),
  tDVX: new AElf(new AElf.providers.HttpProvider("http://192.168.67.204:8000")),
};

// token contract address
const tokenContractAddress = {
  AELF: "JRmBduh4nXWi1aXgdUsj5gJrzeZb2LxmrAbf7W99faZSvoAaE",
  tDVV: "7RzVGiuVWkvL4VfVHdZfQF2Tri3sgLe9U991bohHFfSRZXuGX",
  tDVX: "uCJAgvALzW3cLbvNfnZ6sAxT4duUW2641TcNeDTMoTLSU4ytL",
};

// cross chain contract address
const crossChainContractAddress = {
  AELF: "2SQ9LeGZYSWmfJcYuQkDQxgd3HzwjamAaaL4Tge2eFSXw2cseq",
  tDVV: "2snHc8AMh9QMbCAa7XXmdZZVM5EBZUUPDdLjemwUJkBnL6k8z9",
  tDVX: "22V1A4FTFiDkEZCvaUb4MnLzQZN9C6D1HcFcSEuZ7UNuvXLWot",
};
function onSetTimeout(call) {
  setTimeout(call, 3000);
}

async function MainToSide_tDVX() {
  const crossChainInstance = new CrossChain({
    AElfUtils: AElf.utils,
    sendInstance: instance.AELF,
    receiveInstance: instance.tDVX,
    wallet,
    mainChainId: 9992731,
    issueChainId: 9992731,
  });

  await crossChainInstance.init({
    contractAddresses: {
      tokenContractAddressSend: tokenContractAddress.AELF,
      crossChainContractAddressSend: crossChainContractAddress.AELF,
      tokenContractAddressReceive: tokenContractAddress.tDVX,
      crossChainContractAddressReceive: crossChainContractAddress.tDVX,
    },
    chainIds: {
      chainIdSend: "AELF",
      chainIdReceive: "tDVX",
    },
  });
  async function GetBalance() {
    const tDVXTokenContract = await instance.AELF.chain.contractAt(
      tokenContractAddress.AELF,
      wallet
    );
    const sendBalance = await tDVXTokenContract.GetBalance.call({
      symbol: "ELF",
      owner: wallet.address,
    });
    console.log(sendBalance, "=====send-balance");
    const mainTokenContract = await instance.tDVX.chain.contractAt(
      tokenContractAddress.tDVX,
      wallet
    );
    const receiveBalance = await mainTokenContract.GetBalance.call({
      symbol: "ELF",
      owner: receiveAddress,
    });
    console.log(receiveBalance, "======receive-balance");
  }

  async function send() {
    await GetBalance();
    const { crossTransferTxId } = await crossChainInstance.send({
      to: receiveAddress,
      symbol: "ELF",
      amount: 1,
      memo: "Hello World",
    });
    console.log(crossTransferTxId, "======crossTransferTxId");
    return crossTransferTxId;
  }
  async function receive(crossTransferTxId) {
    const result = await crossChainInstance.isChainReadyToReceive({
      crossTransferTxId,
    });
    console.log(result, "=======result");
    if (result?.error) {
      throw Error(
        JSON.stringify({
          error: 1,
          message: JSON.parse(result.message.message).message,
          canReceive: true,
        })
      );
    }
    const receiveInfo = await crossChainInstance.receive({
      crossTransferTxId,
    });
    console.log(receiveInfo, "====receiveInfo");
    setTimeout(async () => {
      try {
        const result = await instance.tDVX.chain.getTxResult(
          receiveInfo.TransactionId
        );
        console.log(result, "=====resultdsadsadsa");
      } catch (error) {
        console.log(error, "=====error");
      }
      await GetBalance();
    }, 2000);
  }
  const crossTransferTxId = await send();
  async function getReceiveResult() {
    try {
      await receive(crossTransferTxId);
    } catch (error) {
      onSetTimeout(getReceiveResult);
      console.log(JSON.parse(error.message), "======receive");
    }
  }
  onSetTimeout(getReceiveResult);
}

async function SideToSide() {
  const crossChainInstance = new CrossChain({
    AElfUtils: AElf.utils,
    sendInstance: instance.tDVV,
    receiveInstance: instance.tDVX,
    wallet,
    mainChainId: 9992731,
    issueChainId: 9992731,
  });
  async function initCrossChainInstance() {
    await crossChainInstance.init({
      contractAddresses: {
        tokenContractAddressSend: tokenContractAddress.tDVV,
        crossChainContractAddressSend: crossChainContractAddress.tDVV,
        tokenContractAddressReceive: tokenContractAddress.tDVX,
        crossChainContractAddressReceive: crossChainContractAddress.tDVX,
      },
      chainIds: {
        chainIdSend: "tDVV",
        chainIdReceive: "tDVX",
      },
    });
  }
  async function GetBalance() {
    const sendTokenContract = await instance.tDVV.chain.contractAt(
      tokenContractAddress.tDVV,
      wallet
    );
    const sendBalance = await sendTokenContract.GetBalance.call({
      symbol: "ELF",
      owner: wallet.address,
    });
    console.log(sendBalance, "======send-balance");
    const receiveTokenContract = await instance.tDVX.chain.contractAt(
      tokenContractAddress.tDVX,
      wallet
    );
    const receiveBalance = await receiveTokenContract.GetBalance.call({
      symbol: "ELF",
      owner: receiveAddress,
    });
    console.log(receiveBalance, "======receive-balance");
  }

  async function receive(crossTransferTxId) {
    const result = await crossChainInstance.isChainReadyToReceive({
      crossTransferTxId,
    });

    if (result?.error) {
      throw Error(
        JSON.stringify({
          error: 1,
          message: JSON.parse(result.message.message).message,
        })
      );
    }
    const receiveInfo = await crossChainInstance.receive({
      crossTransferTxId,
    });
    console.log(receiveInfo, "====receiveInfo");
    setTimeout(async () => {
      try {
        const result = await instance.tDVX.chain.getTxResult(
          receiveInfo.TransactionId
        );
        console.log(result, "=====resultdsadsadsa");
      } catch (error) {
        console.log(error, "=====error");
      }
      await GetBalance();
    }, 2000);
  }

  async function send() {
    await GetBalance();
    const { crossTransferTxId } = await crossChainInstance.send({
      to: receiveAddress,
      symbol: "ELF",
      amount: 1,
      memo: "Hello World",
    });
    console.log(crossTransferTxId, "======crossTransferTxId");
    return crossTransferTxId;
  }

  await initCrossChainInstance();
  const crossTransferTxId = await send();
  async function getReceiveResult() {
    try {
      await receive(crossTransferTxId);
    } catch (error) {
      onSetTimeout(getReceiveResult);
      console.log(JSON.parse(error.message), "======receive");
    }
  }
  onSetTimeout(getReceiveResult);
}

async function Side_tDVXToMain() {
  const crossChainInstance = new CrossChain({
    AElfUtils: AElf.utils,
    sendInstance: instance.tDVX,
    receiveInstance: instance.AELF,
    wallet,
    mainChainId: 9992731,
    issueChainId: 1997464,
  });

  await crossChainInstance.init({
    contractAddresses: {
      tokenContractAddressSend: tokenContractAddress.tDVX,
      crossChainContractAddressSend: crossChainContractAddress.tDVX,
      tokenContractAddressReceive: tokenContractAddress.AELF,
      crossChainContractAddressReceive: crossChainContractAddress.AELF,
    },
    chainIds: {
      chainIdSend: "tDVX",
      chainIdReceive: "AELF",
    },
  });
  async function GetBalance() {
    const tDVXTokenContract = await instance.tDVX.chain.contractAt(
      tokenContractAddress.tDVX,
      wallet
    );
    const STBBalance = await tDVXTokenContract.GetBalance.call({
      symbol: "STB",
      owner: wallet.address,
    });
    console.log(STBBalance, "=====tDVX-balance");
    const mainTokenContract = await instance.AELF.chain.contractAt(
      tokenContractAddress.AELF,
      wallet
    );
    const receiveBalance = await mainTokenContract.GetBalance.call({
      symbol: "STB",
      owner: receiveAddress,
    });
    console.log(receiveBalance, "======receiveBalance");
  }

  async function send() {
    const { crossTransferTxId } = await crossChainInstance.send({
      to: receiveAddress,
      symbol: "STB",
      amount: 1,
      memo: "Hello World",
    });
    console.log(crossTransferTxId, "======crossTransferTxId");
    return crossTransferTxId;
  }
  async function receive(crossTransferTxId) {
    const result = await crossChainInstance.isChainReadyToReceive({
      crossTransferTxId,
    });
    console.log(result, "=======result");
    if (result?.error) {
      throw Error(
        JSON.stringify({
          error: 1,
          message: JSON.parse(result.message.message).message,
          canReceive: true,
        })
      );
    }
    const receiveInfo = await crossChainInstance.receive({
      crossTransferTxId,
    });
    console.log(receiveInfo, "====receiveInfo");
    setTimeout(async () => {
      try {
        const result = await instance.AELF.chain.getTxResult(
          receiveInfo.TransactionId
        );
        console.log(result, "=====resultdsadsadsa");
      } catch (error) {
        console.log(error, "=====error");
      }
      await GetBalance();
    }, 2000);
  }
  const crossTransferTxId = await send();
  async function getReceiveResult() {
    try {
      await receive(crossTransferTxId);
    } catch (error) {
      onSetTimeout(getReceiveResult);
      console.log(JSON.parse(error.message), "======receive");
    }
  }
  onSetTimeout(getReceiveResult);
}
async function Side_tDVVToMain() {
  const crossChainInstance = new CrossChain({
    AElfUtils: AElf.utils,
    sendInstance: instance.tDVV,
    receiveInstance: instance.AELF,
    wallet,
    mainChainId: 9992731,
    issueChainId: 9992731,
  });

  await crossChainInstance.init({
    contractAddresses: {
      tokenContractAddressSend: tokenContractAddress.tDVV,
      crossChainContractAddressSend: crossChainContractAddress.tDVV,
      tokenContractAddressReceive: tokenContractAddress.AELF,
      crossChainContractAddressReceive: crossChainContractAddress.AELF,
    },
    chainIds: {
      chainIdSend: "tDVV",
      chainIdReceive: "AELF",
    },
  });
  async function GetBalance() {
    const tDVXTokenContract = await instance.tDVV.chain.contractAt(
      tokenContractAddress.tDVV,
      wallet
    );
    const sendBalance = await tDVXTokenContract.GetBalance.call({
      symbol: "ELF",
      owner: wallet.address,
    });
    console.log(sendBalance, "=====send-balance");
    const mainTokenContract = await instance.AELF.chain.contractAt(
      tokenContractAddress.AELF,
      wallet
    );
    const receiveBalance = await mainTokenContract.GetBalance.call({
      symbol: "ELF",
      owner: receiveAddress,
    });
    console.log(receiveBalance, "======receive-balance");
  }

  async function send() {
    await GetBalance();
    const { crossTransferTxId } = await crossChainInstance.send({
      to: receiveAddress,
      symbol: "ELF",
      amount: 100000000,
      memo: "Hello World",
    });
    console.log(crossTransferTxId, "======crossTransferTxId");
    return crossTransferTxId;
  }
  async function receive(crossTransferTxId) {
    const result = await crossChainInstance.isChainReadyToReceive({
      crossTransferTxId,
    });
    console.log(result, "=======result");
    if (result?.error) {
      throw Error(
        JSON.stringify({
          error: 1,
          message: JSON.parse(result.message.message).message,
          canReceive: true,
        })
      );
    }
    const receiveInfo = await crossChainInstance.receive({
      crossTransferTxId,
    });
    console.log(receiveInfo, "====receiveInfo");
    setTimeout(async () => {
      try {
        const result = await instance.AELF.chain.getTxResult(
          receiveInfo.TransactionId
        );
        console.log(result, "=====resultdsadsadsa");
      } catch (error) {
        console.log(error, "=====error");
      }
      await GetBalance();
    }, 2000);
  }
  const crossTransferTxId = await send();
  async function getReceiveResult() {
    try {
      await receive(crossTransferTxId);
    } catch (error) {
      onSetTimeout(getReceiveResult);
      console.log(JSON.parse(error.message), "======receive");
    }
  }
  onSetTimeout(getReceiveResult);
}
// MainToSide_tDVX();
// Side_tDVXToMain();
// Side_tDVVToMain();
// SideToSide();
