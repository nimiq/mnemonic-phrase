# MnemonicPhrase

Create mnemonic phrases from 32-byte HEX strings and vice-versa.

Used in the [Nimiq blockchain](https://nimiq.com) to create mnemonic phrases from private keys.

## Usage
```HTML
<script type="text/javascript" src="MnemonicPhrase.js"></script>
```

```javascript
var key = 'a18532abfb31ba4e26d64a3ac3430969639aeb5f84b1c4124da0f3e323cdaced';
var mnemonic = MnemonicPhrase.keyToMnemonic(key);
// Result: 'pave civil priority wait brick check opera sing depart borrow seat spot defy interest lawn normal series mystery habit treat cram traffic recipe risk'

var key = MnemonicPhrase.mnemonicToKey(mnemonic);
// Result: 'a18532abfb31ba4e26d64a3ac3430969639aeb5f84b1c4124da0f3e323cdaced'
```

Based on in inspired by:
* [BIP-0039 wordlists](https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md)
* [JavaScript implementation of Bitcoin BIP39](https://github.com/bitcoinjs/bip39)
* [hex-to-array-buffer](https://github.com/LinusU/hex-to-array-buffer)
* [array-buffer-to-hex](https://github.com/LinusU/array-buffer-to-hex)
* [CRC8JS](https://github.com/mode80/crc8js)
