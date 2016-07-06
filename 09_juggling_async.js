var http = require('http');
var bl = require('bl');
var urls = process.argv.slice(2);
var results = [];

for (var i = 0; i < urls.length; i++) {
  httpGet(urls[i]);
}

function httpGet(url) {
  http.get(url, function(response) {
    response.pipe(bl(function (err, data) {
      if (err) return console.error(err);
      results[url] = data.toString();
      if (Object.keys(results).length === urls.length) {
        printResults();
      }
    }));
  });
}

function printResults() {
  urls.forEach(function(url) {
    console.log(results[url]);
  });
}
