var os = require('os');

var toMb = function (f) {
    return (Math.round((f/1024/1024) * 100) / 100);
}

console.log(os.hostname());
console.log(os.loadavg()[2]);
console.log(toMb(os.freemem()) + " of " + toMb(os.totalmem()) + " Mb free");