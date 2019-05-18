var j5 = require("johnny-five");
var j5io = require("raspi-io").RaspiIO;
var j5board = new j5.Board({
  repl: false,
  io: new j5io()
});
j5board.on('ready', () => {
  console.log('Board has been initialized');
  
});
