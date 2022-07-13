// in our Mocks we will run our own fake priceFeed




const { network } = require("hardhat") 
const { developmentChains, 
     DECIMALS,
     INITIAL_ANSWER,
} = require("../../helper-hardhat-config")

//the above is coming from deploy-fund-me, so we can
//call chainId
//we will grab module.exports from deploy-fund-me
module.exports = async ({ getNamedAccounts, deployments }) =>{

    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
   // use if you are using chain..
//we now have a contract we can use to deploy fake priceFeed to the blocKcHAIN
//We dont want to deploy this mock contract to a testNet or network that has PriceFeed
//which chains are my development chains? check helper-hardhat-config.js
//we can use if (chainId=="31337")
//we can say developmentChains.includes(chainId)
  //if (developmentChains.includes(network.name)){
    if (chainId == 31337) {
    log("Local network detected! Deploying mocks...")
         await deploy("MockV3Aggregator",{

        contract: "MockV3Aggregator",
        from: deployer,
        log: true,
        args: [DECIMALS, INITIAL_ANSWER],    //this is constructor Arguments which is _decimals and _initialAnswer
                  //decimal function in the deployed contract,initial answer what is the pricefeed starting at
         //Lets add our arg to helper-hardhat.js

    })

      log("Mocks deployed")
      log(".......................")
    
  }
}

// lets deploy mocks alone
module.exports.tags = ["all", "mocks"]

