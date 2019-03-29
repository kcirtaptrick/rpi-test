var pio = require('pigpio').Gpio;
const motor = new pio(12, {mode: pio.OUTPUT});
console.log('Start');
flag = false;
setInterval(() => {
    flag ? motor.pwmWrite(200): motor.pwmWrite(100);
    flag = !flag
}, 1000);
