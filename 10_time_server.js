var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {
  var date = new Date();
  socket.end(formatDate(date) + '\n');
});

server.listen(Number(process.argv[2]));

function formatDate(date) {
  return strftime('%F %H:%M', date);
}
