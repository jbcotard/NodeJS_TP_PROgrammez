'use strict';

var fs = require('fs');
module.exports.run = () => {

  fs.open('./access.log', 'a', (err, fd) => {
    if (err) { throw err }
    var buffer = new Buffer('Programmez!'), 
        bufferPosition = 0,
        length = buffer.length, 
        position = null;

    fs.write(fd, buffer, bufferPosition, length, position, (err, bytes) => {
      if (err) { fs.close(fd, () => console.error('Closing file.', err)) }
      fs.close(fd, () => console.log('I wrote ' + bytes + ' bytes'));
    });
  });
};
