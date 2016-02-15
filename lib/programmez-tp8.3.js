'use strict';
var http = require('http'),
    fs = require('fs');

module.exports.run = () => {
  http.get({
    host: 'wassimchegham.com',
    port: 80,
    path: '/programmez.txt'
  }, (res) => {
    res.pipe(fs.createWriteStream('./programmez-tp8.3.txt'));
  }).end();
};
