var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/notes');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongodb connected');
});

var NotesSchema = mongoose.Schema({
  Tags: String,
  Title: String,
  Entry: String
});

var Notes = mongoose.model('Notes', NotesSchema);

module.exports = Notes;


