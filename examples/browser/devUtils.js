// function devUtilsWarp() {
const Wallet = AElf.wallet;
const sha256 = AElf.utils.sha256;
const chainIdConvertor = AElf.utils.chainIdConvertor;

const crossChainContractName = 'AElf.ContractNames.CrossChain';

// address: 2hxkDg6Pd2d4yU1A16PTZVMMrEDYEPR8oQojMDwWdax5LsBaxX
const defaultPrivateKey = 'bdb3b39ef4cd18c2697a920eb6d9e8c3cf1a930570beb37d04fb52400092c42b';
// address: 2SHdLCrMggDf6bmQFrgrynf85BRe2ifQy81qMsU1DmbWJF7F13
const receiveAddress = '2hxkDg6Pd2d4yU1A16PTZVMMrEDYEPR8oQojMDwWdax5LsBaxX';
// const receiveAddress = '2SHdLCrMggDf6bmQFrgrynf85BRe2ifQy81qMsU1DmbWJF7F13';
// const receivePrivateKey = '1bf2d0eb2f8d98dba8d622839f18f2c9a0d68e618c4cd3cae69f73816b9aae1a';

// const walletCreatedByMethod = Wallet.createNewWallet();
const wallet = Wallet.getWalletByPrivateKey(defaultPrivateKey);
// const sendInstance = new AElf(new AElf.providers.HttpProvider('http://13.231.179.27:8000'));
// const receiveInstance = new AElf(new AElf.providers.HttpProvider('http://52.68.97.242:8000'));

const receiveInstance = new AElf(new AElf.providers.HttpProvider('http://13.231.179.27:8000'));
const sendInstance = new AElf(new AElf.providers.HttpProvider('http://52.68.97.242:8000'));


// async function init() {
const {
  GenesisContractAddress: genesisContractAddressSend,
  ChainId: chainIdSend
} = sendInstance.chain.getChainStatus({sync: true});

const {
  GenesisContractAddress: genesisContractAddressReceive,
  ChainId: chainIdReceive
} = receiveInstance.chain.getChainStatus({
  sync: true
});

console.log('chainIdSend: ', chainIdSend);

const genesisContractInstanceReceive = receiveInstance.chain.contractAt(genesisContractAddressReceive, wallet, {
  sync: true
});
/* eslint-disable max-len */
const crossChainContracAddressReceive = genesisContractInstanceReceive.GetContractAddressByName.call(sha256(crossChainContractName), {
  sync: true
});
/* eslint-enable max-len */

// console.log('token: ', tokenContractAddressSend, tokenContractAddressReceive);
// console.log('----------------------------');
// console.log('crossChain: ', crossChainContracAddressSend, crossChainContracAddressReceive);
// console.log('----------------------------');

const crossChainContracReceive = receiveInstance.chain.contractAt(crossChainContracAddressReceive, wallet, {
  sync: true
});
// const height = await crossChainContracSend.GetSideChainHeight.call(2112);
const height = crossChainContracReceive.GetSideChainHeight.call({
  value: chainIdConvertor.base58ToChainId(chainIdSend)
}, {
  sync: true
});
console.log('height: ', height);
// }
//   init();
// }
   // "transform-remove-console"
// devUtilsWarp();