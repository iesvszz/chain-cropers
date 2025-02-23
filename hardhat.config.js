require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url:"https://eth-sepolia.g.alchemy.com/v2/wxnCylDBDcRMByJ14m6iDKIK3_R0_i6w" , // Your Alchemy or Infura URL
      accounts: ["857c463ed44bacf897ddb72fe476c3b0102ea61f4d05b6e8888ececec45bbd23" ], // Your MetaMask Private Key
    },
  },
};
