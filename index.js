import elliptic from 'elliptic';
const { ec: EC } = elliptic;
import js_sha3 from 'js-sha3';
const { keccak256 } = js_sha3;

function signMessage(privateKey, message) {
  const ec = new EC('secp256k1');

  const key = ec.keyFromPrivate(privateKey);

  const signature = key.sign(message);

  return `${signature.r.toString('hex')}${signature.s.toString('hex')}`;
}

function main() {
  const privateKey = "0101010101010101010101010101010101010101010101010101010101010101";
  const message = "0202020202020202020202020202020202020202020202020202020202020202";
  const result = signMessage(privateKey, message);

  // Prints
  // 97ef30233ead25d10f7bb2bf9eaf571a16f2deb33a75f20819284f0cb8ff3cc1b78f35fa6bfe663eec4b23887990ffe7b845c00888a9380667b3e3a2b1891ae1
  console.log(result);
}

main();
