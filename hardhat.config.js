require('@nomiclabs/hardhat-ethers');
require('dotenv').config(); // To load environment variables

module.exports = {
  solidity: "0.8.27", // The version of Solidity you're using
  networks: {
    arbitrum: {
      url: process.env.ARBITRUM_RPC_URL, // Add Arbitrum RPC URL here
      accounts: [process.env.PRIVATE_KEY], // Your wallet private key
    },
    hardhat: {
      chainId: 1337, // Local testing
    }
  },
  paths: {
    artifacts: './artifacts',
    sources: './contracts',
    cache: './cache',
    tests: './test'
  }
};
