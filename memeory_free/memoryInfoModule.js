const os = require('os');
const figlet = require('figlet');

const callbackArray = [];

const registerForAlerts = (callback) => {
    callbackArray.push(callback);
}

let intervalId;
const checkmemory = () => {
    intervalId = setInterval(() => {
        let memory = os.freemem() / 1024 / 1024
        console.log(memory);
        if (memory < 1800) {
            for (let i = 0; i < callbackArray.length; i++) {

                const message = function (text) {
                    return figlet.textSync(text, {
                        font: 'Ghost',
                        horizontalLayout: 'full',
                        verticalLayout: 'full'
                    })
                };
                let messageText = message("Memory is less than 1500MB");
                callbackArray[i](messageText);
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