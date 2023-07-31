
#  Token Bridging

This project contains a Solidity smart contract for Mandala NFTs (Non-Fungible Tokens) that allows seamless bridging between the Ethereum Goerli network and the Polygon Mumbai network.
## Description

The Space smart contract comes with the following features:

    Batch Minting of NFTs: Easily mint multiple NFTs in a single transaction using the mint function.

    Ownership Control: The contract inherits from the OpenZeppelin Ownable contract, ensuring that only the contract owner can mint new NFTs.
## Getting Started

#### Prerequisites
- Node.js and npm on your local machine.
- Create a .env file and set the PRIVATE_KEY and other necessary environment variables.

#### Deployment

To deploy the contract, use the following script:

    npx hardhat run scripts/deploy.js --network goerli

#### Minting NFTs

Mint your own NFTs using the deployed contract with the following script:

    npx hardhat run scripts/mint.js --network goerli

#### Deposit NFTs to FxChain

Effortlessly transfer ERC721A tokens to the FxChain network with the following script:

    npx hardhat run scripts/approveDeposit.js --network goerli 

#### Check Balance on Polygon network

With the new contract address you can check your balance using the following script: 

    npx hardhat run scripts/getBalance.js --network mumbai 
## Authors
[@AyushiRai](https://github.com/st-bfly)

