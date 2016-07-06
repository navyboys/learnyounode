var http = require('http');
var url = require('url');
var port = Number(process.argv[2]);

var server = http.createServer(function (req, res) {
  if (req.method != 'GET') {
    return res.end('Not a GET request.\n');
  }

  var urlInfo = url.parse(req.url, true);
  var date = new Date(urlInfo.query.iso);
  var result = {};

  if (urlInfo.pathname === "/api/parsetime") {
    result = formatTime(date);
  } else if (urlInfo.pathname === "/api/unixtime") {
    result = fomatUnix(date);
  }

  if (result) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port);

function processRequest(urlPath, date) {
  return result;
}

function formatTime(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}

function fomatUnix(date) {
  return {
    unixtime: date.getTime()
  };
}
