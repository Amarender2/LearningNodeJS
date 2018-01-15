var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if(req.url == '/file.txt') {
        fs.createReadStream(__dirname + '/file.txt').pipe(res);
    } else {
        res.end("Hello World");
    }
});

server.listen(process.env.PORT || '8080', process.env.IP || 'localhost');

console.log('Server Running !!!')