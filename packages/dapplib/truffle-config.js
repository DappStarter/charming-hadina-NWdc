require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remember around good enter obscure gift'; 
let testAccounts = [
"0x7dc570ef7c22b5ef088ca21f5a01f9f3174e8c71858a00e58244b1f11c560c52",
"0xf1cd7d098e744129b2f712e1c46b877fff6e211eddfdaad81bbb4874403bc23f",
"0x7422333ccd9b2ae9b37af197d9a1e6f8dce37e6fbb467677cd796e4cdc4f12ee",
"0x57798ea20bb61cfd1ec69896ded06ce07556d8cb81af71078235b3483cd8316f",
"0x9c5c5ad12e72608b1663b8abd36356ef1756d5dae8f2219d83e608991d6a2cf7",
"0x5713a781fb0a7c614cd10573a65cc6294cc39b029f67e523d8f2dbf2a78f0325",
"0xb707f1f9b344eae79b10b68d409cb8427b2f1960625158b8cfe1e6414e342d40",
"0x3375ab35b0d19843003f62083642c62288a76bbb2fbc87a13a6e1d9ccdf43bce",
"0x2dce2674c0bc1bc87bc9214047b01d4d76c5e60ccf8a59430f762a560136eb0c",
"0x3f6bf8878e9d30fe6826bc549a4e3795e72f8c4a6dac052828b623bffcb9c529"
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

