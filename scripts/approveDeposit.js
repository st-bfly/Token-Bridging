// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/nft.json");

const tokenAddress = "0xbdCDE78E38ed441e2784d4A86e35Ff6A1C99b964"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const fxERC20RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0xFD17C5E70c10fb38Ed580d37B487EDDFcdCA2B72"; // place your public address for your wallet here

async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC20RootAddress);
    // const tokenIds = [10, 11, 12, 13, 14];

    const approveTx = await tokenContract.approve(fxERC20RootAddress, 5);
    await approveTx.wait();

    console.log('Approval confirmed');
    
    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, 5, "0x6556");
    await depositTx.wait(); 

    console.log("Tokens deposited");
  
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
