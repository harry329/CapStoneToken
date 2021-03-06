pragma solidity ^0.8.0;

import "./ERC721Mintable.sol";

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class

contract SolnSquareVerifier is ERC721MetadataImplementation {

    Verifier private verifier;
    constructor(address verifierAddress) public {
        verifier = Verifier(verifierAddress);
    }

// TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 tokenId;
        address solutionAddress;
    }

    mapping(bytes32 => bool) exitingSolutions;

// TODO define a mapping to store unique solutions submitted
    mapping(address => Solution) solutions;


// TODO Create an event to emit when a solution is added
    event SolutionAdded(address solutionAddress, uint tokenId);


// TODO Create a function to add the solutions to the array and emit the event

    function addSolution(address _address, uint _tokenId) internal {
        solutions[_address] = Solution({
        solutionAddress : _address,
        tokenId : _tokenId
        });
        emit SolutionAdded(_address, _tokenId);
    }

// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly
    function mintToken(address to, uint256 tokenId, uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input) public returns (bool){
        require(verifier.verifyTx(a, b, c, input), "Solutions is not verified");
        bytes32 hash = keccak256(abi.encodePacked(a, b, c, input));
        require(!exitingSolutions[hash], "solution already exist");
        addSolution(to, tokenId);
        return super.mint(to, tokenId);
    }

}

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
contract Verifier {
    function verifyTx(uint[2] memory, uint[2][2] memory, uint[2] memory, uint[2] memory) public returns (bool){}
}
























