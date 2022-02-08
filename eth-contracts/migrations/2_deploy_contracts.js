// migrating the appropriate contracts
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
var Verifier = artifacts.require("./Verifier.sol");

module.exports = function(deployer) {
  deployer.deploy(Verifier).then( () => {
    return deployer.deploy(SolnSquareVerifier, Verifier.address);
  });
};

