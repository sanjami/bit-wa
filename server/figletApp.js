
const figlet = require ('figlet');

const printText = function(text){
    return figlet.textSync(text, {
    font: 'Ghost',
    horizontalLayout: 'full',
    verticalLayout: 'full'
})};

module.exports = {
    printText
}