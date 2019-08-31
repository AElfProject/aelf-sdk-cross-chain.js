/**
 * @author huangzongzhe
 * @file utils.js
 * @description utils for crossChain
 */

// module.exports = function decodeCrossChainTxFromBase64({
export default function decodeCrossChainTxFromBase64({
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
