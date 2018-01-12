var request = require('request');

request('http://pluralsight.com/', function (err, response, body) {
    if(!err && response.statusCode == 200) {
        console.log(body);
    }
})