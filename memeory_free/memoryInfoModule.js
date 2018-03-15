const os = require('os');

const callbackArray = [];

const registerForAlerts = (callback) => {
    callbackArray.push(callback);
}

let intervalId;
const checkmemory = () => {
    intervalId = setInterval(() => {
        let memory = os.freemem() / 1024 / 1024
        console.log(memory);
        if (memory < 1600) {
            for (let i = 0; i < callbackArray.length; i++) {
                callbackArray[i]("Memory is less than 1500MB");
            }
        }
    }, 1000)
}

const start = () => {
    checkmemory();
}

const stop = () => {
    clearInterval(intervalId);
}

module.exports.registerForAlerts = registerForAlerts;
module.exports.start = start;
module.exports.stop = stop;