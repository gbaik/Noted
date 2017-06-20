class NewNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      entry: ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleEntryChange = this.handleEntryChange.bind(this);
    this.handleSavingNotes = this.handleSavingNotes.bind(this);
  }

  handleSavingNotes() {
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