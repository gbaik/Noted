const Notes = require('./schema');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static('./'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', function (request, response) {
  response.redirect('/client/index.html');
});

app.get('/client/allNotes', function (request, response) {
  response.writeHead(200, {'content-type' : 'application/json'});
  Notes.find({}, function (err, results) {
    if (err) return handleError(err);
    response.end(JSON.stringify(results));
  });
});

app.post('/add/newNotes', function (request, response) {
  Notes.create({Title: request.body.title, Entry: request.body.entry}, function (err) {
    if (err) return handleError(err);
    console.log('success');
  })

  response.end();
});

app.post('/add/editedNotes', function (request, response) {
  console.log(request.body.id);
  Notes.findOneAndUpdate({ _id: request.body.id }, {$set: {Entry: request.body.entry}}, function (err) {
    if (err) return handleError(err);
    console.log('success');
  })

  response.end();
});

app.listen(3000, function () {
  console.log('Server running on port 3000!')
});
