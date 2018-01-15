var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');

var handler = function (req, res) {
  fs.readFile(__dirname + '/index.html', function (err, data) {
     if(err) {
         res.writeHead(500);
         return res.end('Error loading index.html');
     } else {
         res.writeHead(200);
         res.end(data);
     }
  });
};

var app = http.createServer(handler);
var io = socketio.listen(app);

// For cloud 9 , not required for webstorm
// io.configure(function () {
//    io.set('transports', ['xhr-polling']);
// });

io.sockets.on('connection', function (socket) {
   setInterval(function () {
       var timeStamp = Date.now();
       console.log('Emitted : ' + timeStamp);
       socket.emit('timer', timeStamp)
   }, 2000);
   socket.on('submit', function (data) {
      console.log('Data Submitted : ' + data);
   });
});

app.listen(process.env.PORT || '8080' , process.env.IP || 'localhost');
console.log('Server Running !!!');