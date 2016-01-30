
var http = require('http');
var jshint = require('jshint');
var programmez = require('./lib/programmez');

console.log(programmez.title);
console.log(programmez.getCurrentIssue());

programmez.run();
