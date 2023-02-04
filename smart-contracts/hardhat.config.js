require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hyperspace",
  networks: {
  
    hyperspace: {
      chainId: 3141,
      url: "https://filecoin-hyperspace.chainstacklabs.com/rpc/v1",
      accounts: [process.env.PRIVATE_KEY],
  }
  },
  solidity: {
    compilers: [{
      version: "0.8.7",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }]
  }
};
