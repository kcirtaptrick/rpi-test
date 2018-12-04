var io = require('onoff').Gpio;
var pio = require('pigpio').Gpio;
var input = new io(4, 'both', 'in');
const motor = new pio(10, { mode: pio.OUTPUT });


console.log("Start");
input.watch((err, val) => {
    if (err) {
        console.log(`Error: ${err}`);
        return;
    }
    // console.log("Update");
    // console.log(val);
});

console.log(require('pigpio'));

waiting();
servo(motor)
function servo(motor, pos, speed) {
    let pulseWidth = 1000;
    let increment = 100;

    setInterval(() => {
        motor.servoWrite(pulseWidth);

        pulseWidth += increment;
        if (pulseWidth >= 2000) {
            increment = -100;
        }
        else if (pulseWidth <= 1000) {
            increment = 100;
        }
    }, 1000);
}

function waiting(num = 3, speed = 300) {
    var i = 0;
    setInterval(function() {
        process.stdout.clearLine(); // clear current text
        process.stdout.cursorTo(0); // move cursor to beginning of line
        i = (i + 1) % num;
        var dots = new Array(i + 1).join(".");
        process.stdout.write("Waiting" + dots); // write text
    }, speed);
}
