// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.25 <0.9.0;

contract escrow {

    address payable public player;
    uint prize;

    constructor(){
        prize = 5;
    }

    function getBalance () public view returns (uint) {
        return address(this).balance;
    }

    function startGame (address payable _player) external {
        player = _player;
    }

    function givePrize () external {
        player.transfer(prize);
    }

    
}