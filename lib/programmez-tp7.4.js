'use strict';
var http = require('http');
var spawn = require('child_process').spawn;

module.exports.run = () => {
  http.createServer((req,res) => {
    res.writeHead(200);
    var child = spawn('tail', ['-f', '/var/log/system.log']);
    child.stdout.pipe(res);
    res.on('end', () => child.kill() );
  }).listen(1337);
};
