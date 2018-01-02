import Note from './note.jsx';

var NoteList = ({notes}) => (
  <div>
    {notes.map((note) => 
      <Note className="box" noteTitle={note.Title} noteEntry={note.Entry} noteId={note._id}/>
    )}
  </div>
)