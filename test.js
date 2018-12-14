var io = require('onoff').Gpio;
var pio = require('pigpio').Gpio;


console.log("Start");
// waiting();


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

function testGPIO(min = 2, max = 26 /*, options = {}*/ ) {
    var out = {
        pins: []
    }
    for (let i = 0, pin = min; pin <= max; pin++) {
        out.pins.push({
            number: pin,
            pin: new io(pin, 'out'),
            test: []
        });
        out.pins[i].pin.writeSync(1);
        out.pins[i].test.push({ write: 1, read: out.pins[i].pin.readSync() });
        out.pins[i].pin.writeSync(0);
        out.pins[i].test.push({ write: 0, read: out.pins[i].pin.readSync() });
        i++;
    }
    // for(let pin of out.pins) {
    //     console.log(`pin: ${pin.number}, read: ${pin.pin.readSync()}`);
    // }
    return out;
}

function printObj(obj) {
    console.log(JSON.stringify(obj, null, 4))
}
console.log(printObj(testGPIO().pins.map((x) => {
            return {
                pin: x.number,
                test: x.test
            }
        })));
