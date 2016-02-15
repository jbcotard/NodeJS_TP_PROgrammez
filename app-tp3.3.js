

console.log('\nlecture fichier programmez-tp3.txt avec detection fin lecture\n');
var readableStream = /* Stream */require('fs').createReadStream('programmez-tp3.txt');
readableStream.on('data', (data) => {
        // data is a buffer;
        console.log('data:',data);
})
.on('end', () => {
	console.log('no more data');
});
