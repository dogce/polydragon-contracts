import "@nomiclabs/hardhat-web3";
import "@nomiclabs/hardhat-ethers";
import { HardhatUserConfig } from "hardhat/config";
import * as dotenv from 'dotenv';
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.7.4",

  networks: {
    mainnet: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      loggingEnabled: true
    },
    testnet: {
      url: process.env.TEST_RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
};

export default config;
