const Lcd = require('lcd');
const os = require('os');
const ifaces = os.networkInterfaces();
/*
  Example of using a 16x2 HD44780-based LCD with the Raspberry Pi B+ or A+.
*/

var cPos = [0, 0];
console.log('Start');
// configure a new 16x2 LCD display
var myLcd = new Lcd({
  rs: 20,
  e: 21,
  data: [5, 6, 13, 19],
  cols: 16,
  rows: 2
});
myLcd.on('ready', function() {
  myLcd.clear();
  myLcd.print("IP:" + ifaces.wlan0[0].address);
});
// clear display on exit
process.on('SIGINT', function() {
  myLcd.clear();
  myLcd.close();
  process.exit();
});
