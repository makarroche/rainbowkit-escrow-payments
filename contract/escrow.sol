// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.25 <0.9.0;

contract escrow {

    address payable public player;
    address public game;
    uint prize;

    constructor(){
        prize = 5;
        game = msg.sender;
    }

    //Check balance of contract
    function getBalance () public view returns (uint) {
        return address(this).balance;
    }

    function startGame (address payable _player) external {
        player = _player;
    }

    //Escrow Child can only call this function
    function givePrize () external {
        require(game == msg.sender, "Only the game can give the price");
        player.transfer(prize);
    }

}