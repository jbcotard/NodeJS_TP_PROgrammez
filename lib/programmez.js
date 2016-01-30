var issue = 187;

module.exports = {
	title: 'Programmez!',
	getCurrentIssue: () => issue
}

/* Ex 4 # event */
var EventEmitter = require('events');

module.exports.run = () => {
	/*
	EX 1 # buffer
	var buffer1 = new Buffer('Programmez!','utf-8');
	var buffer2 = new Buffer('UHJvZ3JhbW1leiE=', 'base64');
	var buffer3 = new Buffer(11);

	console.log(buffer1.toString('base64')); // Programmez!
	console.log(buffer2.toString('utf-8')); // UHJvZ3JhbW1leiE=
	console.log(buffer3.toString()); // ���
	*/

	/* EX 2 # buffer
	var buffer1 = new Buffer(22);
	buffer1.write('Programmez!');
	buffer1.write('Programmez!',11);
	
	console.log(buffer1.toString()); // Programmez!Programmez!
	*/

	/*  EX 3 # buffer
	var buffer1 = new Buffer(11);
	var buffer2 = new Buffer(11);
	buffer1.write('Programmez!');
	console.log(buffer1.toString()); // Programmez!

	buffer1.copy(buffer2, 3, 3);
	console.log(buffer2.toString()); // 123grammez!

	buffer2.write('PRO');
	console.log(buffer2.toString()); // PROgrammez!
	*/

	/* EX 4 # event */
	var evt = new EventEmitter();
	evt.on('pro', console.log);
	evt.on('pro',  (str) => console.log(str.toUpperCase()));
	evt.emit('pro', 'programmez!');
	//programmez!
	//PROGRAMMEZ!

};