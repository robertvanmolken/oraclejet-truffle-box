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

    function testGiveRightToVote() public {
        bytes32 target = stringToBytes32("0x57a04c6609935d4944c6f8e2553aa3f09161c232");
        ballot.giveRightToVote(address(target));
    }

    function testVote() public {
        ballot.vote(1);
    }

    function stringToBytes32(string memory source) public pure returns (bytes32 result) {
        assembly {
            result := mload(add(source, 32))
        }
    }
}