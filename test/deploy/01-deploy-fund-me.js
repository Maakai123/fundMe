//import
//main function
//calling of main function


//you can use the below
//module.exports = async (hre) => {
    //const {getNamedAccounts, deployments } = hre
//}
//since hre={getNamedAccounts, deployments }
//we can say

//Import your networkConfig in helper-hardhat
const { networkConfig } = require("../helper-hardhat-config")
//you can also say const helperConfig =require(("../helper-hardhat-config")
//const networkConfig = helperConfig = helperConfig.networkConfig
//Lets define the network.config.chainId
const { network } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")
//the above will call const chainId


module.exports = async ({ getNamedAccounts, deployments }) =>{
    // we are going to use this deployment object to get two functions { deploy, log } =deployments
    //getNamedAccounts() a way to get name accounts, instead of adding many accounts to our account section
    //and get confuse, we just add a section that we can use to add all the accounts array[] in our Hardhat.config
    //check namedAcc for more, deployer is the default
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    
    //lets equate ethUsdPriceFeedAddress to networkConfig,the ChainId and priceFeed
    
    //const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"] 
   //no matter the network we will get the PricefEED.
   //How do we deploy a network locally that has no priceFeed?
   //check Note..(Mock contract)
     let ethUsdPriceFeedAddress 

      if (developmentChains.includes(network.name)) {

          const ethUsdAggregator = await deployments.get("MocksV3Aggregator")
          ethUsdPriceFeedAddress =  ethUsdAggregator.address


      } else {
         ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
           
          

      }
    //FunMe contract..

    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [ethUsdPriceFeedAddress], // put price feed address
        log: true,
        waitConfirmations: network.config.blockConfirmations||1,

    })
    log("....................")
    

     
}

module.exports.tags = ["all","fundme"]

