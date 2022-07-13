const networkConfig = {
    //4= rinkeby chainId
    4: {
        name: "rinkeby",
        ethUsdPriceFeed:"0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
        //with this we can keep track of different priceFeeds across different networks
        
    },
137 : {

    //lets add PolyGon network
    //chainId of polygon =137
      name: "polygon",
      ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
},

}
 // lets define our development chains

 const  developmentChains = ["hardhat", "localhost"] //here we are using names not chainId
 //export developmentChain, add it module.export
const DECIMALS = 8
const INITIAL_ANSWER = 200000000000 //2000*10**8
//EXPORT BOTH DECIMALS AND INITIAL AN BELOW
//we need to export the networkConfig to our script/deployfundme for it to run
module.exports = {
     networkConfig,
     developmentChains,  //import ==> deploy-mocks with require
     DECIMALS,
     INITIAL_ANSWER,  // IMPORT==> deploy-mocks

}