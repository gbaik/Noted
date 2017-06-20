class EditNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entry: ''
    };

    this.noteId = this.props.noteId;
    this.noteTitle = this.props.noteTitle;
    this.noteEntry = this.props.noteEntry;

    this.handleSavingNotes = this.handleSavingNotes.bind(this);
    this.handleEntryChange = this.handleEntryChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      entry: this.noteEntry
    })
  }


  handleSavingNotes() {
  //TODO: Update notes at the title and id given 
    var data = {
      entry : this.state.entry
    }

    $.ajax({
      url: '/add/newNotes',
      method: 'POST',
      data: data,
      success: function() {
        console.log('POST request success!');
      },
      error: function() {
        console.log('POST request failure, new entry didn\'t save');
      }
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
        <h1>{this.noteTitle}</h1>
        <button onClick={this.handleSavingNotes}>Save</button>
        <div>
          <h3>Notes</h3>
          <textarea onChange={this.handleEntryChange} className="entry" value={this.state.entry}></textarea>
        </div>
      </div>
    );
  }
}
//Todo: Only show one edit area at a time