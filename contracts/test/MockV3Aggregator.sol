// // SPDX-License-Identifier: MIT


//we will define our own fake PriceFeed

pragma solidity ^0.7.0;
//import chainlink contract to test locally

import "@chainlink/contracts/src/v0.7/tests/MockV3Aggregator.sol";

//nOte go to hardhat.config and add 0.7.0 version of solidity, so  we can compile different versions of solidity
//module.exports ={
   // compilers :[{version:"0.8.8"},{version:"0.7.0"}],
//}

