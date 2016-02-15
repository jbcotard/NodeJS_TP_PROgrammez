'use strict';

var child = require('child_process');
var options = {/*env, shell, ... */};
module.exports.run = () => {
  child.exec('date', options, (error, stdout, stderr) => {
    if (error) {
      console.log(error.stack);
      console.log(' code   : ', error.code);
      console.log(' signal : ',error.signal);
    }
    console.log('Stdout :\n', stdout);
    console.log('Stderr :\n', stderr);
  }).on('error', (code) => {
    console.log('Child exit:', code);
  });
};
