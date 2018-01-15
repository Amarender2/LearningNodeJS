// Visit socket.io webpage

//Socket.io Exchange Example

// Server

var io = require('socket.io').listen(80);

io.sockets.on('connection',function () {
   socket.emit('news', '{hello:world}');
   socket.on('other event', function (data) {
      console.log(data);
   });
});

// Browser

//<script src="/socket.io/socket.io.js"></script>
//<script>
var socket = io.connect('http://localhost');
socket.on('news', function (data) {
   console.log(data);
   socket.emit('other event', {my: 'data'});
});
//</script>