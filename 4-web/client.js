var http = require('http');

var options = {
    host: 'www.google.com',
    port: 80,
    path: '/',
    method: 'GET'
};

console.log('Starting request here');

// 'http://www.google.com'
var req = http.request(options, function (response) {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});

req.end();

http.get(options, function (response) {
    console.log("------------------------------------------------------------------------------");
    console.log(response.statusCode);
    response.pipe(process.stdout);
});