var io = require('onoff').Gpio;
var input = new io(4, 'both', 'in');

input.watch((err, val) => {
    if(err) {
        console.log(`Error: ${err}`);
        return;
    }
    console.log(val);
});