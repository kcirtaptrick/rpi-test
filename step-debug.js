const io = require("onoff").Gpio; var out = {
    pins: [6, 13, 19, 26]
}
for (let i in out.pins) {
    out[i + ''] = new io(out.pins[i], "out");
}
console.log(out);
var step = 0
out[step % 4 + ''].writeSync(1);
out[(step + 1) % 4 + ''].writeSync(0); 
console.log(out[step % 4 + ''].readSync() + " " + out[(step + 1) % 4 + ''].readSync()) 
out[1].writeSync(0); 
console.log(out[1].readSync()); 
//test(); 
var test = {
    io: new io(21, 'out')
}
for (let i = 0; i < 11; i++) {
    test['io'].writeSync(i % 2);
    console.log(test['io'].readSync());
}
function test() {
    var step = 0;
    console.log('');
    setInterval(() => {
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        var pinVals = [];
        for (let i = 0; i < 4; i++) {
            pinVals.push(out[i + ''].readSync());
        }
        out[step % 4 + ''].writeSync(1);
        out[(step + 1) % 4 + ''].writeSync(0);
        console.log(out[(step + 1) % 4 + ''].readSync());
        process.stdout.write(`Step: ${step}, pins: ${pinVals}`);
        step++;
    }, 1)
}
