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

var handleResults = function (err, results, time) {
    if(err) {
        console.log("Error Occurred : " + err.message)
    } else {
        console.log("Results: " + results + " in  " + time + " msec")
    }
}

for(var i=0;i <10;i++) {
    console.log("Calling even doubler for i : " + i);
    evenDoubler(i, handleResults);
}

console.log("----------------------")