'use strict';
var http = require('http');

module.exports.run = () => {
  http.createServer((req,res) => {
    res.writeHead(200);
    res.end(JSON.stringify(req.headers));
  }).listen(1337);
};
