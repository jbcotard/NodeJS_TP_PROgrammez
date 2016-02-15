var writableStream = /* Stream */require('fs').createWriteStream('programmez-tp4.txt');
writableStream.write('Programmez!');
writableStream.write('UHJvZ3JhbW1leiE=','base64');
writableStream.write(new Buffer('Programmez!'));
