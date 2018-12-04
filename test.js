var io = require('onoff').Gpio;
var pio = require('pigpio').Gpio;
var input = new io(4, 'both', 'in');
console.log("Start");
input.watch((err, val) => {
    if(err) {
        console.log(`Error: ${err}`);
        return;
    }
    //console.log("Update");
//    console.log(val);
});
function waiting() {
    var i = 0;
setInterval(function() {
  process.stdout.clearLine();  // clear current text
  process.stdout.cursorTo(0);  // move cursor to beginning of line
  i = (i + 1) % 10;
  var dots = new Array(i + 1).join(".");
  process.stdout.write("Waiting" + dots);  // write text
}, 300);

console.log(require('pigpio'));
