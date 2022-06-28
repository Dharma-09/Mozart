require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'YOUR_ALCHEMY_API',
      accounts: ['f04ac45a9d447a11e60480b3bf5c44724c912528e8aebca06fe7d90c3b896f7b'],
    },
  },
};
