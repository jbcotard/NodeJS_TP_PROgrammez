
console.log('lecture fichier programmez-tp3.txt\n');
var readableStream1 = /* Stream */require('fs').createReadStream('programmez-tp3.txt');
readableStream1.on('data', (data) => {
	// data is a buffer;
	console.log('data:',data);
});

console.log('\nlecture ut8 fichier programmez-tp3.txt\n');
var readableStream2 = /* Stream */require('fs').createReadStream('programmez-tp3.txt');
readableStream2.setEncoding('utf8');
readableStream2.on('data', (data) => {
	// data is an utf8-encoded string;
	console.log('data:',data);
});


console.log('\nlecture fichier programmez-tp3.txt avec detection fin lecture\n');
var readableStream = /* Stream */require('fs').createReadStream('programmez-tp3.txt');
readableStream.on('data', (data) => {
        // data is a buffer;
        console.log('data:',data);
})
.on('end', () => {
	console.log('no more data');
});
