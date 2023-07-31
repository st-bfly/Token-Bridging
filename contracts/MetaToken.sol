// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "erc721a/contracts/ERC721A.sol";

contract nft is ERC721A , Ownable {

    string public url="https://gateway.pinata.cloud/ipfs/QmbCLQpaxorTgrGZp97qfm6n4GqheBL4sT6BTq9NxobymV";
    string public prompt="a mandala art piece having gradient color theme";
    uint256 private id = 1; 

    constructor() ERC721A("MANDALA", "MND") {}

    function mint(address to) public onlyOwner {
        uint256 tokenId = id;
        id++;
        _mint(to, tokenId);
    }

    function promptDescription() external view returns (string memory) {
        return prompt;
    }

}