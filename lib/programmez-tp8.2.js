'use strict';
var http = require('http');

module.exports.run = () => {
  http.get({
    host: 'wassimchegham.com',
    port: 80,
    path: '/programmez.txt'
  }, (res) => {
    res.setEncoding('utf8');
    res.on('data', console.log);
  });
};
