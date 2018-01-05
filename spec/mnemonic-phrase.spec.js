var MnemonicPhrase = require('../mnemonic-phrase.min.js');

describe('MnemonicPhrase', function() {
    it('can create a mnemonic phrase from a 32-byte HEX string', function() {
        var key = 'a18532abfb31ba4e26d64a3ac3430969639aeb5f84b1c4124da0f3e323cdaced';

        expect(MnemonicPhrase.keyToMnemonic(key)).toBe('pave civil priority wait brick check opera sing depart borrow seat spot defy interest lawn normal series mystery habit treat cram traffic recipe risk');
    });
});
