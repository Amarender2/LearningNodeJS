var util = require('util');

var EventEmitter = require('events').EventEmitter;

function Resource(m) {

    // var maxEvents = m;
    var self = this;

    process.nextTick(function () {
        var count = 0;
        self.emit("start");
        var t = setInterval(function () {
            self.emit("data", ++count);
            if(count == m) {
                self.emit("end", m);
                clearInterval(t);
            }
        }, 10);
    });
}

util.inherits(Resource, EventEmitter);

module.exports = Resource