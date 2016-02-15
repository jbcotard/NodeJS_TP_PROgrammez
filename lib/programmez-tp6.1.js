'use strict';

var fs = require('fs');
module.exports.run = () => {

  fs.open('./app.js', 'r', (err, fd) => {
    if (err) { throw err }
    var buffer = new Buffer(128), 
        offset = 0, 
        length = buffer.length, 
        position = 0;
    var handleError = (err) => fs.close(fd, () => console.error('Closing file.', err));

    fs.read(fd, buffer, offset, length, position, (err, bytes) => {
      if (err) { handleError(err); }
      console.log('just read ' + bytes + ' bytes');
      if (bytes > 0) {
        console.log(buffer.slice(0, bytes).toString());
      }
    });
  });
};
