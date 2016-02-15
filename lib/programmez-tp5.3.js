'use strict';

var child = require('child_process');
var options = {/*env, shell, ... */};
module.exports.run = () => {
  var command = child.spawn('node', ['lib/child.js']);
  command.stdin.write('Programmez!');
  command.stdout.on('data', (output) => console.log('Child replies: ', output.toString()));
  command.stderr.on('data', (error) => console.log('Stderr: ', error.toString()));
  command.on('exit', (code) => console.log('Child exited with code:', code));
  setTimeout(() => command.kill('SIGKILL'), 1000);
};
