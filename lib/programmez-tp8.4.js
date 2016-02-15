'use strict';
var http = require('http'),
    fs = require('fs');

module.exports.run = () => {
  var request = http.request({
    method:'POST',
    host: 'wassimchegham.com',
    port: 80,
    path: '/programmez.txt'
  }, (res) => {
    res.setEncoding('utf8').on('data', console.log);
  });

  request.write('PROgrammez!\n');
  request.end();
};
