pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Ballot.sol";

contract TestBallot {

    bytes32[] proposals;
    Ballot ballot;
    
    function testCreationOfBallot() public {
        proposals.push("Oracle Open World");
        proposals.push("Oracle Code One");
        proposals.push("Code Experience");

        ballot = new Ballot(proposals);

        bytes32[] memory props = ballot.getProposals();

        Assert.equal(props.length, 3, "There should be 3 proposals");
    }
}