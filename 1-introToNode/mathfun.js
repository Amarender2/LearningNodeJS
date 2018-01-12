var maxTime=1000;

var evenDoubler = function (t, callback) {
    var waitTime = Math.floor(Math.random()*maxTime+1);
    if(t%2) {
        setTimeout(function () {
            callback(new Error("Odd Input"));
        }, waitTime);
    } else {
        setTimeout(function () {
            callback(null, t *2, waitTime)
        }, waitTime);
    }
};

module.exports.evenDoubler = evenDoubler;

module.exports.foo = "bar";