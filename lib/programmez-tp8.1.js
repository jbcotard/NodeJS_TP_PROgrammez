'use strict';
var http = require('http');

module.exports.run = () => {
  http.get({
    host: 'wassimchegham.com',
    port: 80,
    path: '/programmez.txt'
  }, (res) => {
    console.log('Got response', res.statusCode);
  });
};
