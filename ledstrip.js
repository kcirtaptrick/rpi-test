const gpio = require("pigpio").Gpio;
var rgb = [new gpio(13, {mode: gpio.OUTPUT}), new gpio(5, {mode: gpio.OUTPUT}), new gpio(6, {mode: gpio.OUTPUT})];
var strip = {}
console.log("start");

strip.reset = () => {
  for(let i = 0; i < 3; i++) {
    rgb[i].digitalWrite(1);
  }
}
strip.strobe = (speed) => {
  var flag = false;
  return setInterval(() => {
    for(let i in rgb) {
      rgb[i].digitalWrite(!flag);
    }
    flag = !flag;
  }, 1000 / speed);
}
/*strip.flashColors = (speed) => {
  var count = 0;
  return setInterval(() => {
    rgb[count % 3].digitalWrite(1);
    rgb[(count + 1) % 3].digitalWrite(0);
  }*/ 
strip.test = (speed) => {
  var flag = false;
  return setInterval(() => {
    for(let i in rgb) {
      rgb[i].digitalWrite(flag = !flag);
    }
  }, 1000 / speed);
}
strip.pulse = (speed) => {
  var count = 0;
  return setInterval(() => {
    for(let i in rgb) {
      rgb[i].pwmWrite(Math.abs(count % 510 - 255));
    }
    count++;
  }, 1000 / 255 / speed);
}
strip.pulseColors = (speed) => {
  var count = 0;
  return setInterval(() => {
    rgb[Math.floor((count /  510) % 3)].pwmWrite(Math.abs(count % 510 - 255))
    count++;
  }, 1000 / 255 / speed);
}
strip.slide = (speed) => {
  var count = 0;
  return setInterval(() => {
    rgb[0].pwmWrite(Math.abs((count + 85) % 510 - 255));
    rgb[1].pwmWrite(Math.abs((count + 170) % 510 - 255));
    rgb[2].pwmWrite(Math.abs(count % 510 - 255));
    count++;
  }, 1000 / 255 / speed);
}
strip.auto = (speed) => {
  var fns = Object.keys(strip)
  var count = 0;
  var interval;
  return setInterval(() => {
    count == 0 || clearInterval(interval);
    var interval = strip[fns[count]](speed);
  }, 3000 / speed);
}
    
/*setInterval(() => {
  rgb[count % 3].digitalWrite(0);
  rgb[(count + 1) % 3].digitalWrite(1);
  rgb[(count + 2) % 3].digitalWrite(1);
  count++;
}, 50);*/
strip.reset();
strip.auto(3);
