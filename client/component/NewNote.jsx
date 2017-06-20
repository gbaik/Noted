class NewNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      entry: ''
    };

    this.handleSavingNotes = this.handleSavingNotes.bind(this);
    this.cancelNewNote = this.cancelNewNote.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleEntryChange = this.handleEntryChange.bind(this);
  }

  handleSavingNotes() {
    if (this.state.title.length === 0){
      alert('Please enter a title');
    } else {
      var data = {
        title : this.state.title,
        entry : this.state.entry
      }

      $.ajax({
        url: '/add/newNotes',
        method: 'POST',
        data: data,
        success: function() {
          console.log('POST request success!');
          location.assign('/client/index.html');
        },
        error: function() {
          console.log('POST request failure, new entry didn\'t save');
        }
      });
    }
  }

  cancelNewNote() {
    location.assign('/client/index.html');
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleEntryChange(event) {
    this.setState({
      entry: event.target.value
    });
  }


  render() {
    return (
      <div>
        <h1>New Notes</h1>
        <button onClick={this.handleSavingNotes}>Save</button>
        <button onClick={this.cancelNewNote}>Cancel</button>
        <div>
          <h3>Title</h3>
          <input onChange={this.handleTitleChange}></input>
        </div>
        <div>
          <h3>Notes</h3>
          <textarea onChange={this.handleEntryChange} className="entry"></textarea>
        </div>
      </div>
    );
  }
}