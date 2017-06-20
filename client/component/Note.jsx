var Note = ({noteTitle, noteEntry}) => {
  var editNote = (title, entry) => {
    findNote(title, entry, (note) => {
      console.log(note);
    });
  };

  var findNote = (title, entry, callback) => {
    console.log(title, entry);
    $.ajax({
      url: '/client/editNote',
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {
        console.log('GET request success');
        callback(data);
      },
      error: function() {
        console.log('GET request failure');
      }
    })
  };

  return(
    <div>
      <button onClick={() => editNote(noteTitle, noteEntry)}>{noteTitle}</button>
      {noteEntry}
    </div>
  )
}

/*
  Notes must have title in the url link
  Acess the notes and edit them
*/