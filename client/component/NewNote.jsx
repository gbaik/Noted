class NewNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'test',
      note: 'test'
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleSavingNotes = this.handleSavingNotes.bind(this);
  }

  handleSavingNotes() {
    console.log('title:',this.state.title);
    console.log('note:',this.state.note);
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