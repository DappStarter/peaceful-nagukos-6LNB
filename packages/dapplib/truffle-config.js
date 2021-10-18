require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remember slow guess prize swift tragic'; 
let testAccounts = [
"0x37e409d73d36485500a2b2f29b00262e8d03dc44086c358baec340bc26a8de70",
"0x87505777b32428d858af7635a5d58a47706704e8145c52bc6765b2370ec3f57e",
"0x511067d1b62da059f02594bb063cddd53335a8df32c0d5469f656847c17067fb",
"0x886b6e2c2f1297edc60c071d7688dd0a8585b37ccae22a0649ad3b011ddbe6c6",
"0xb6b6d68d58ada7d31de935e215388dcb666a9d574b6e92894db275fceaa518d9",
"0x9e0aa21a2b05ea9859914436647cc0e0a0f119a8d7a324cc31c64092aebfac37",
"0x39b6ee9d36555bcf099c1a333ffcd91e3ef59a956d8c8ba4a3525bc8f234900c",
"0x1593b56bac6b10fa5490e656cf66677d64deb2aeaa8d86f4287c522bce8d346f",
"0xb50b8a04f829b7cfc9784c0dc3ad71e12c8d247826081c263d2d50ce88cd6994",
"0x6cf7cc2e5661d4a33ad4d6ed2fc468c200ef8b33ab995148c2996703ba1349f8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

