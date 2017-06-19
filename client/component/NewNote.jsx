class NewNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      note: ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleSavingNotes = this.handleSavingNotes.bind(this);
  }

  handleSavingNotes(callback) {
    var data = {
      title : this.state.title,
      note : this.state.note
    }

    $.ajax({
      url: '/add/newNotes',
      method: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function() {
        console.log('POST request success!');
      },
      error: function() {
        console.log('POST request failure, new note didn\'t save');
      }
    });
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleNoteChange(event) {
    this.setState({
      note: event.target.value
    });
  }


  render() {
    return (
      <div>
        <h1>New Notes</h1>
        <button onClick={this.handleSavingNotes}>Save</button>
        <div>
          <h3>Title</h3>
          <input onChange={this.handleTitleChange}></input>
        </div>
        <div>
          <h3>Notes</h3>
          <textarea onChange={this.handleNoteChange} className="note"></textarea>
        </div>
      </div>
    );
  }
}