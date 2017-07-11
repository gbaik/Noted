const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/notes`);

const db = mongoose.connection;

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


