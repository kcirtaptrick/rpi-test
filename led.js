const io = require("onoff").Gpio;
const led = new io(21, 'out');
console.log("Start");
console.log(led);
var i = 0;
setInterval(() => {
    i = i == 0 ? 1 : 0;
    console.log(i);
    led.writeSync(i);
}, 500);

