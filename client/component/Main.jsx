class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    }

    this.searchNotes = this.searchNotes.bind(this);
  }

  componentDidMount() {
    this.getAllNotes((notes) => {
      this.setState({
        notes: notes
      })
    });
  }

  getAllNotes(callback) {
    $.ajax({
      url: '/client/allNotes',
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
  }

  newNote() {
    location.assign('/client/new_note.html');
  }

  searchNotes(event, allNotes) {
    allNotes.forEach((items) => {
        var obj = Object.values(Object.values(items));
        obj.forEach((item) => {
          if (typeof item === 'string') {
            console.log(item.indexOf(event));
          }
        }) 
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.newNote}>New Note</button>
        <input placeholder="Search" onChange={(event) => this.searchNotes(event.target.value, this.state.notes)}></input>
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}
