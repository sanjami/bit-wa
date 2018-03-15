const memoryInfoModule = require ('./memoryInfoModule.js');

memoryInfoModule.start();

memoryInfoModule.registerForAlerts((message) => {
    console.log(message);
}) 

memoryInfoModule.registerForAlerts((message) => {
    console.log("Memory is not enough");
})

setTimeout(() => {
    memoryInfoModule.stop()}, 10000);

