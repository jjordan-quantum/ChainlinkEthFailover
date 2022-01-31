const Web3 = require('web3');
(async () => {
    const web3 = new Web3('ws://localhost:4000/');
    web3.eth.subscribe('newBlockHeaders')
        .on("connected", function(subscriptionId) {
            console.log("Subscribed to new block headers with subscription ID: " + subscriptionId);
        })
        .on("data", function(block) {
            const blockNumber = parseInt(block.number);
            console.log("Received new block header with height: " + blockNumber);
        })
        .on("error", function(error) {
            console.log("newBlockHeader subscription encountered an error:");
            console.log(error);
        });
})()
    .catch((err) => {
       console.log(err);
       process.exit(1);
    });