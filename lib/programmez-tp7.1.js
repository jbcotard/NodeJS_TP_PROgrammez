'use strict';
var http = require('http');

module.exports.run = () => {
  http.createServer((req,res) => {
    res.writeHead(200);
    res.write('Hello Programmez !');
    res.end(req.url);
  }).listen(1337);
};
