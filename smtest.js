console.log("Start");
var sm = require("stepper-wiringpi");
var motor = sm.setup(200, 5, 6, 13, 19);
motor.step(400);