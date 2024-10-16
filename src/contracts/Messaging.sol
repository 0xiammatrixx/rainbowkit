// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Messaging {
    struct Message {
        address sender;
        address recipient;
        string encryptedMessage;
        uint timestamp;
    }

    struct User {
        uint reputation;
        uint tier;  // 1: Trusted, 2: Verified, etc.
    }

    mapping(address => Message[]) public messages;
    mapping(address => User) public users;

    event MessageSent(address indexed sender, address indexed recipient, uint timestamp, string encryptedMessage);
    event ReputationUpdated(address indexed user, uint newReputation);

    function sendMessage(address recipient, string memory encryptedMessage) public {
        messages[recipient].push(Message({
            sender: msg.sender,
            recipient: recipient,
            encryptedMessage: encryptedMessage,
            timestamp: block.timestamp
        }));

        emit MessageSent(msg.sender, recipient, block.timestamp, encryptedMessage);
    }

    function getMessages(address user) public view returns (Message[] memory) {
        return messages[user];
    }

    function updateReputation(address user, uint newReputation) public {
        users[user].reputation = newReputation;

        if (newReputation > 100) {
            users[user].tier = 2;  // Verified
        } else {
            users[user].tier = 1;  // Trusted
        }

        emit ReputationUpdated(user, newReputation);
    }

    function getUserTier(address user) public view returns (uint) {
        return users[user].tier;
    }
}
