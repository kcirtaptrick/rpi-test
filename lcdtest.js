const Lcd = require('lcd');
const os = require('os');
const ifaces = os.networkInterfaces();
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
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
var setCursor = (col, row) => {
  myLcd.setCursor(col, row);
  cPos = [col, row];
  console.log(`setCursor(${col}, ${row}): ${cPos}`);
};
var print = (str, callback = false) => {
  if (str == undefined) return;
  if (callback) {
    myLcd.print(str, callback);
  } else {
    myLcd.print(str);
  }
  cPos[0] += str.length;
  console.log(cPos);
};
var lcdDelete = (num = 1) => {
  for(let i = 0; i < num; i++) {
    setCursor(cPos[0] - 1, cPos[1]);
    print(" ", () => {
      setCursor(cPos[0] -1, cPos[1]);
    });
  }

};
myLcd.cursor();
myLcd.on('ready', function() {
  var lastData = "";
  //setCursor(0,1);
  print("IP:" + ifaces.wlan0[0].address);
  /*process.openStdin().addListener("data", function(d) {
    d = d.toString().trim();
    setCursor(0, 0);
    print(lastData);
    setCursor(0, 1);
    print(d);
    lastData = d;
  });*/
  setCursor(0, 0);
  process.stdin.on('keypress', (str, key) => {
    console.log("You pressed: " + key.name);
    if (key.ctrl && key.name === 'c') {
      process.exit();
    } else if (key.name == "backspace") {
      lcdDelete();
    } else if (key.name == "left") {
      setCursor(cPos[0] - 1, cPos[1]);
    } else if (key.name == "right") {
      setCursor(cPos[0] + 1, cPos[1]);
    } else {
      print(str);
    }
  });
});
// clear display on exit
process.on('SIGINT', function() {
  myLcd.clear();
  myLcd.close();
  process.exit();
});
