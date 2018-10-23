var Ballot = artifacts.require("./Ballot.sol");
var ProposalNames = ["Oracle Open World", "Oracle Code One", "Code Experience"]

module.exports = function(deployer) {
  deployer.deploy(Ballot, ProposalNames);
};
