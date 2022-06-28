require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/-iQW3NB5pfRNFsNsoo1Teg05Cv_2WYgz',
      accounts: ['f04ac45a9d447a11e60480b3bf5c44724c912528e8aebca06fe7d90c3b896f7b'],
    },
  },
};