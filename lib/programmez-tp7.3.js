'use strict';
var http = require('http');

module.exports.run = () => {
  http.createServer((req,res) => {
    res.writeHead(200, {
      'X-Content': 'Programmez!',
      'Content-Type': 'plain/text'
    });
    res.write(new Buffer('Hello '));
    res.write('Programmez');
    res.end('!');
  }).listen(1337);
};
