var NoteList = ({notes}) => (
  <div>
    {notes.map((note) => 
      <Note noteTitle={note.Title} noteEntry={note.Entry} noteId={note._id}/>
    )}
  </div>
)