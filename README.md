> ### Attention!
> This repository is outdated and does not produce BIP39-compliant mnemonic phrases. Please use https://github.com/nimiq/core-js/blob/master/src/main/generic/utils/mnemonic/MnemonicUtils.js instead.

# Mnemonic Phrase

Create mnemonic phrases from HEX strings and vice-versa.

Used in the [Nimiq blockchain](https://nimiq.com) to create mnemonic phrases from private keys.

## Usage
In HTML as a standard script tag:
```HTML
<script type="text/javascript" src="mnemonic-phrase.es5.min.js"></script>
```
If using JS imports:
```javascript
import MnemonicPhrase from '/path/to/mnemonic-phrase.min.js';
```

```javascript
// The input HEX string must be 16-32 bytes long.
var key = 'a18532abfb31ba4e26d64a3ac3430969639aeb5f84b1c4124da0f3e323cdaced';

var mnemonic = MnemonicPhrase.keyToMnemonic(key);
// Result: 'pave civil priority wait brick check opera sing depart borrow seat spot defy interest lawn normal series mystery habit treat cram traffic recipe risk'

var key = MnemonicPhrase.mnemonicToKey(mnemonic);
// Result: 'a18532abfb31ba4e26d64a3ac3430969639aeb5f84b1c4124da0f3e323cdaced'
```

## Based on
* [BIP-0039 wordlists](https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md)
* [JavaScript implementation of Bitcoin BIP39](https://github.com/bitcoinjs/bip39)
* [CRC8JS](https://github.com/mode80/crc8js)
