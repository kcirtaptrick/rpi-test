const pio = require('pigpio').Gpio;
const motor = new pio(2, {mode: pio.OUTPUT});
function servo(motor, time = 1000, min = 1000, max = 2000) {
    let pulseWidth = 1000;
    let increment = 100;
    setInterval(() => {
        motor.servoWrite(pulseWidth);
        pulseWidth = pulseWidth == min ? max : min;
    }, time);
}
function servoPWM(motor, pw) {
    motor.servoWrite(pw);
}
console.log('Start');
servo(motor, 500);
