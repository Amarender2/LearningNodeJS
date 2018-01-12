var mathFun = require('./mathfun')

var handleResults = function (err, results, time) {
    if(err) {
        console.log("Error Occurred : " + err.message)
    } else {
        console.log("Results: " + results + " in  " + time + " msec")
    }
}

for(var i=0;i <10;i++) {
    console.log("Calling even doubler for i : " + i);
    mathFun.evenDoubler(i, handleResults);
}

console.log(mathFun.foo)