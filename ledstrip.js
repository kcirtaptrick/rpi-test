const gpio = require("pigpio").Gpio;
var rgb = [new gpio(13, {mode: gpio.OUTPUT}), new gpio(5, {mode: gpio.OUTPUT}), new gpio(6, {mode: gpio.OUTPUT})];
count = 0;

function reset() {
  for(let i = 0; i < 3; i++) {
    rgb[i].digitalWrite(1);
  }
}
/*setInterval(() => {
  rgb[count % 3].digitalWrite(0);
  rgb[(count + 1) % 3].digitalWrite(1);
  rgb[(count + 2) % 3].digitalWrite(1);
  count++;
}, 50);*/
reset();
setInterval(() => {
  rgb[0].pwmWrite(Math.abs((count + 85) % 510 - 255));
  rgb[1].pwmWrite(Math.abs((count + 170) % 510 - 255));
  rgb[2].pwmWrite(Math.abs(count % 510 - 255));
  count++;
}, 3);
