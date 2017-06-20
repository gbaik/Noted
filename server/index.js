const db = require('./database/connection');
const bodyParser = require('body-parser')
const express = require('express');
const app = express();

app.use(express.static('./'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', function (request, response) {
  response.redirect('/client/index.html');
});

app.post('/add/newNotes', function (request, response) {
  // var body = '';
  // request.on('data', function(chunk) {
  //   body += chunk;
  // }).on('end', function() {
  //   response.writeHead(201, 'content-type : application/json');
  //   body = JSON.parse(body);
  //   console.log(body.title);
  //   // db.query('INSERT INTO notes (title, entry) VALUES (?, ?)', {body.title, body.entry} ,function (error, results) {
  //   //   if (error) throw error;
  //   //   console.log('From database:', results);
  //   // });
  //   response.end();
  // }).on('error', function() {
  //   response.statusCode = 404;
  //   response.end();
  // });
  console.log(request.body);
});

app.listen(3000, function () {
  console.log('Server running on port 3000!')
});