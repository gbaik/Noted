class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    this.getAllNotes((data) => {
      this.setState({
        notes: data
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

  render() {
    return (
      <div>
        <button onClick={this.newNote}>New Note</button>
        <input placeholder="Search"></input>
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}
