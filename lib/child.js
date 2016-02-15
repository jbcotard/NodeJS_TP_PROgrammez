'use strict';

process.stdin.resume();
process.stdin.on('data', (data) => {
  console.log('Getting data from parent process: ', data.toString());
});
