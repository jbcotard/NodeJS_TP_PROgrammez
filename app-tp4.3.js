ProgrammezServer( (request, response) => {
  var rs = require('fs').createReadStream('programmez-tp4.3.txt');
  rs.on('data', (data) => {
    if(!response.write(data)){
      rs.pause();
    }
  }).on('end', () => response.end() );

  response.on('drain', () => resume() );

});
