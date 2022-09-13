// linter warnings (red underline) about pragma version can igonored!

// contract code will go here
pragma solidity ^0.4.17;

contract Inbox{

    string public message;

    constructor(string initialMeassage) public {
        message = initialMeassage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }

    function getMessage() public view returns (string) {
        return message;
    }
}