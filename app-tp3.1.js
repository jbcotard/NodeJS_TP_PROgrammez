
console.log('lecture fichier programmez-tp3.txt\n');
var readableStream1 = /* Stream */require('fs').createReadStream('programmez-tp3.txt');
readableStream1.on('data', (data) => {
	// data is a buffer;
	console.log('data:',data);
});

