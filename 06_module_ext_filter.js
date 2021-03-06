var path = require('path');
var fs = require('fs');

module.exports = function(dir, ext, callback){
  fs.readdir(dir, function(err, list){
    if (err) {
      return callback(err);
    }

    list = list.filter(function(file){
      return path.extname(file) === '.' + ext;
    });

    callback(null, list);
  });
};
