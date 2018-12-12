const io = require("onoff").Gpio;
var out = [6, 13, 19, 26];
for(let i in out) {
    out[i] = new io(out[i], "out");
}
console.log(out);
function test() {
    var step = 0;
    setInterval(() => {
    	var pinVals = [];
        out[step % 4].writeSync(1);
        out[(step + 1) % 4].writeSync(0);
    	console.log(`Step: ${step}, pins: ${out.map(x => x.readSync())}`);
    	step++;
    }, 20)
}
test();
