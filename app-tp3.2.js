

console.log('\nlecture ut8 fichier programmez-tp3.txt\n');
var readableStream2 = /* Stream */require('fs').createReadStream('programmez-tp3.txt');
readableStream2.setEncoding('utf8');
readableStream2.on('data', (data) => {
	// data is an utf8-encoded string;
	console.log('data:',data);
});


