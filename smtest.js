console.log("Start");
var sm = require("./stepper-wiringpi.js");
var motor = sm.setup(200, 6, 13, 19, 26);
motor.forward();
