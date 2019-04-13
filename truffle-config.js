module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      gas: 6000000,
      gasPrice: 5 * 10 ** 9,
      network_id: '*',
    }
  },
  compilers: {
    solc: {
      version: '0.5.0',
      evmVersion: 'byzantium'
    }
  }
}
