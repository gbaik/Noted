const express = require('express')
const app = express()

app.use(express.static('./'))

app.get('/', function (request, response) {
  response.redirect('/client/index.html');
})

app.post('/add/newNotes', function (request, response) {
  var body = '';
  request.on('data', function(chunk) {
    body += chunk;
  }).on('end', function() {
    response.writeHead(201, 'content-type : application/json');
    body = JSON.parse(body);
    console.log(body);
    response.end();
  }).on('error', function() {
    response.statusCode = 404;
    response.end();
  });
})

app.listen(3000, function () {
  console.log('Server running on port 3000!')
})