const io = require("onoff").Gpio;
var out = {
    pins: [6, 13, 19, 26],
    '0': new io(2, 'out'),
    //'1': new io(13, 'out'),
    //'2': new io(19, 'out'),
    //'3': new io(26, 'out')
}
//for(let i in out.pins) {
//    out[i + ''] = new io(out.pins[i], "out");
//}
//console.log(out);
var step = 0
//        out[step % 4 + ''].writeSync(1);
//        out[(step + 1) % 4 + ''].writeSync(0);
//console.log(out[step % 4 + ''].readSync() + " " + out[(step + 1) % 4 + ''].readSync())
//out[1].writeSync(0);
//console.log(out[1].readSync());
//test();
var test = {
    '0': new io(6, 'out'),
    '1': new io(13, 'out')
}
for(let i = 0; i < 11; i++) {
    test['0'].writeSync(i%2);
    test['1'].writeSync((i+1)%2);
    //test['2'].writeSync(i%2);
    //test['3'].writeSync((i+1)%2);
    console.log(test['0'].readSync() + " " + test['1'].readSync()/* + " " + test['2'].readSync() + " " + test['3'].readSync()*/);
}
function test() {
    var step = 0;
    console.log('');
    setInterval(() => {
	process.stdout.clearLine();
        process.stdout.cursorTo(0);
    	var pinVals = [];
	for(let i = 0; i < 4; i++) {
	    pinVals.push(out[i+''].readSync());
	}
        out[step % 4 + ''].writeSync(1);
        out[(step + 1) % 4 + ''].writeSync(0);
	console.log(out[(step+1)%4 + ''].readSync());
    	process.stdout.write(`Step: ${step}, pins: ${pinVals}`);
    	step++;
    }, 1)
}
