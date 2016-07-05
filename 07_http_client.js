var http = require('http');
var url = process.argv[2];

http.get(url, function (response) {
  response.setEncoding('utf8');
  response.on('data', console.log);
  response.on('error', console.error);
}).on('error', console.error);

// function showHTML(response){
//   response.setEncoding('utf8');
//   response.on("data", function(data){
//   console.log(data);});
//   response.on("error", function(error){
//   console.log(error);});
// }
//
// http.get(url, showHTML);

// http.get(url, function(response) {
//   result.setEncoding('utf8');
//   result.on('error', function(err) {
//     console.log(err);
//   });
//   result.on('data', function(info) {
//     console.log(info);
//   });
// });
