var request = require('request');

var s = request('http://www.pluralsight.com/');

s.on('data', function (data) {
   console.log("------------Data Chunk Received --------------\n" + data);
});

s.on('end', function () {
   console.log("===================Data Receiving Ended=======================");
});