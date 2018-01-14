var Resource = require('./resource');

var r = new Resource(5);

r.on('start', function () {
    console.log("I've started");
});

r.on('data', function (d) {
    console.log("I've received data " + d);
});

r.on('end', function (t) {
    console.log("Ended with " + t + " data events..");
});