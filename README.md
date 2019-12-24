# aelf-sdk-cross-chain.js

## Introduction

A JS sdk aims to provide cross chain tool.

Please pay attention that some function of `aelf-sdk.js` is the input params of the `aelf-sdk-cross-chain.js`.

If we want use `aelf-sdk-cross-chain.js`, we need import/require `aelf-sdk.js` at first.

## Installation

### Script

```html
<!-- minified version with UMD module -->
<script src="https://unpkg.com/aelf-sdk-cross-chain@lastest/dist/aelf-cross-chain.umd.js"></script>
```

### Npm

```bash
npm install aelf-sdk-cross-chain
```

### Yarn

```bash
yarn add aelf-sdk-cross-chain
```

## Library files

In our dist directory, we support different packages for different platforms, such as Node and Browser.

packages | usage
---|---
dist/aelf-cross-chain.umd.js | built for browser & node, add some node modules by webpack

You can choose any packages based on what you need, for examples:

if you are new to FrontEnd, you can use `window.AElfCrossChain` by add a script tag in your html files.

```html
<!-- minified version with UMD module -->
<script src="https://unpkg.com/aelf-sdk-cross-chain@lastest/dist/aelf-cross-chain.umd.js"></script>
<script>
  // window.AElfCrossChain
</script>
```

if you want to use a bundle system such as webpack or rollup, and build your applications for Node.js and Browsers, just import the specified version of package files.

### For browser usage and use UMD

Webpack:

```js
module.exports = {
  // ...
  resolve: {
    alias: {
      'aelf-sdk-cross-chain': 'aelf-sdk-cross-chain/dist/aelf-cross-chain.umd.js'
    }
  }
}
```

Rollup:

```js
const alias = require('rollup-plugin-alias');

rollup({
  // ...
  plugins: [
    alias({
      'aelf-sdk-cross-chain': require.resolve('aelf-sdk-cross-chain/dist/aelf-cross-chain.umd.js')
    })
  ]
})
```

### For Node.js usage and use commonjs module system

Webpack:

```js
module.exports = {
  // ...
  resolve: {
    alias: {
      'aelf-sdk-cross-chain': 'aelf-sdk-cross-chain/dist/aelf-cross-chain.umd.js'
    }
  }
}
```

Rollup:

```js
const alias = require('rollup-plugin-alias');

rollup({
  // ...
  plugins: [
    alias({
      'aelf-sdk-cross-chain': require.resolve('aelf-sdk-cross-chain/dist/aelf-cross-chain.umd.js')
    })
  ]
})
```

## Basic Demo

```javascript
/**
 * @author huangzonghze
 * @description cross chain demo
 */

/* eslint-env node */
const AElf = require('aelf-sdk');
const Wallet = AElf.wallet;

const {
  CrossChain
} = require('aelf-sdk-cross-chain');

// address: 2hxkDg6Pd2d4yU1A16PTZVMMrEDYEPR8oQojMDwWdax5LsBaxX
const defaultPrivateKey = 'bdb3b39ef4cd18c2697a920eb6d9e8c3cf1a930570beb37d04fb52400092c42b';
const receiveAddress = '2hxkDg6Pd2d4yU1A16PTZVMMrEDYEPR8oQojMDwWdax5LsBaxX';
const wallet = Wallet.getWalletByPrivateKey(defaultPrivateKey);

const sendInstance = new AElf(new AElf.providers.HttpProvider('http://127.0.0.1:8000')); // a chain
const receiveInstance = new AElf(new AElf.providers.HttpProvider('http://127.0.0.1:8001')); // another chain

async function init() {
  const crossChainInstance = new CrossChain({
    AElfUtils: AElf.utils,
    sendInstance,
    receiveInstance,
    wallet,
  });
  await crossChainInstance.init();
  // Can accelerate the process. About 5s.
  // await crossChainInstance.init({
  //   contractAddresses: {
  //     tokenContractAddressSend: '25CecrU94dmMdbhC3LWMKxtoaL4Wv8PChGvVJM6PxkHAyvXEhB',
  //     crossChainContractAddressSend: 'R8nWLhsyLsY9Di4ULKQ41ddV8j1HbLikT3RjbLBDPGxnJFCv3',
  //     tokenContractAddressReceive: 'NCsfF8mqPNwaPxps9zvZcYb9RJmMbuD47vu2UY1LypCPZ7DP7',
  //     crossChainContractAddressReceive: '28PhWPnGzuZ8fxGLfJjJFYZ8eGbANWSasAdH9sFsnhZ8ZC7x9G'
  //   },
  //   chainIds: {
  //     chainIdSend: 'AELF',
  //     chainIdReceive: 'tDVV'
  //   }
  // });

  const {
    crossTransferTxId
  } = await crossChainInstance.send({
    to: receiveAddress,
    symbol: 'ELF',
    amount: 1,
    memo: 'Hello World'
  });

  const receiveInfo = await crossChainInstance.receive({
    // crossTransferTxId: 'cad78d4697f23ec34d03956ab17c0c8443d97277f7590d2b178d714d4a9682d3'
    crossTransferTxId
  });

  return receiveInfo;
}

init().then(result => {
  console.log('init result: ', result);
}).catch(error => {
  console.log('init error: ', error);
});

```

## Use tokenCrossChainBasic

`crossChain` of `aelf-sdk-cross-chain` is a wrap of `tokenCrossChainBasic`.

`tokenCrossChainBasic` only provide basic methods `init`, `send` and `recevie`.

It means we need write our own logic to ensure whether the chains are ready to recevie the cross chain transaction.

`crossChain` provide a simple logic to solve this situation.

```javascript
// Demo
const tokenCrossChainInstance = new TokenCrossChainBasic({
  AElfUtils: AElf.Utils,
  sendInstance: sendInstance,
  receiveInstance: receiveInstance
});
const contractsAndChainIds = await tokenCrossChainInstance.init({
  wallet: wallet
});

const params = {
  to: receiveAddress,
  symbol: 'ELF',
  amount: 1,
  memo: 'Hello World'
};
const sendInfo = await tokenCrossChainInstance.send(contractsAndChainIds, params);

const receiveInfo = await tokenCrossChainInstance.receive({
  crossTransferTxId // sendInfo.crossTransferTxId
});

```

And you can get more information from the source code.
