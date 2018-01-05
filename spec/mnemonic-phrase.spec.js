var MnemonicPhrase = require('../mnemonic-phrase.min.js');

var vectors = [
    /* 16 */ { key: [ 104, 142, 17, 70, 140, 183, 251, 150, 83, 141, 245, 127, 181, 228, 86, 205 ],
               hex: '688e11468cb7fb96538df57fb5e456cd',
               mnemonic: 'hammer identify faculty bonus leisure sleep evolve salt leisure quality between option' },
    /* 20 */ { key: [ 247, 34, 33, 91, 36, 86, 30, 10, 34, 121, 46, 151, 62, 43, 229, 69, 157, 47, 145, 225 ],
               hex: 'f722215b24561e0a22792e973e2be5459d2f91e1',
               mnemonic: 'warm baby fine emerge giggle agree measure chair now vanish welcome menu spray similar lumber' },
    /* 24 */ { key: [ 161, 10, 14, 35, 220, 165, 52, 255, 54, 91, 98, 29, 14, 117, 220, 160, 45, 219, 85, 110, 194, 251, 92, 228 ],
               hex: 'a10a0e23dca534ff365b621d0e75dca02ddb556ec2fb5ce4',
               mnemonic: 'patient expire material rich fashion legend sunny hobby brown inhale jaguar doctor tank primary roast garage friend celery' },
    /* 28 */ { key: [ 40, 222, 71, 149, 226, 232, 97, 51, 82, 254, 105, 160, 108, 229, 165, 5, 250, 29, 229, 117, 218, 62, 116, 43, 144, 90, 17, 82 ],
               hex: '28de4795e2e8613352fe69a06ce5a505fa1de575da3e742b905a1152',
               mnemonic: 'churn vendor tornado shift maid often episode snake parrot grunt harsh armor peace verify student elephant injury frame bird cargo canyon' },
    /* 32 */ { key: [ 169, 203, 76, 129, 160, 230, 129, 141, 117, 240, 195, 239, 197, 18, 196, 30, 26, 52, 253, 1, 21, 81, 249, 22, 234, 115, 246, 14, 62, 197, 228, 223 ],
               hex: 'a9cb4c81a0e6818d75f0c3efc512c41e1a34fd011551f916ea73f60e3ec5e4df',
               mnemonic: 'prefer foil call dove gym shop style blur used chuckle rain destroy person leader affair pretty weekend resemble ostrich ugly token glass nature visa' }
];

describe('MnemonicPhrase', function() {
    it('generates a mnemonic from arrays', function() {
        vectors.forEach(vector => {
            expect(MnemonicPhrase.keyToMnemonic(vector.key)).toBe(vector.mnemonic);
        });
    });

    it('generates a mnemonic from HEX strings', function() {
        vectors.forEach(vector => {
            expect(MnemonicPhrase.keyToMnemonic(vector.hex)).toBe(vector.mnemonic);
        });
    });

    it('generates a mnemonic from ArrayBuffers', function() {
        vectors.forEach(vector => {
            vector.buffer = Uint8Array.from(vector.key).buffer;
            expect(MnemonicPhrase.keyToMnemonic(vector.buffer)).toBe(vector.mnemonic);
        });
    });

    it('recreates the correct key from mnemonics', function() {
        vectors.forEach(vector => {
            expect(MnemonicPhrase.mnemonicToKey(vector.mnemonic)).toBe(vector.hex);
        });
    });
});
