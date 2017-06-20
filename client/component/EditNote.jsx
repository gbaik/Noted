class EditNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entry: ''
    };

    this.noteId = this.props.noteId;
    this.noteTitle = this.props.noteTitle;
    this.noteEntry = this.props.noteEntry;
    this.cancel = this.props.cancel;

    this.handleSavingNotes = this.handleSavingNotes.bind(this);
    this.handleEntryChange = this.handleEntryChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      entry: this.noteEntry
    })
  }


  handleSavingNotes() {
    var data = {
      entry : this.state.entry,
      id: this.noteId
    }

    $.ajax({
      url: '/add/editedNotes',
      method: 'POST',
      data: data,
      success: function() {
        console.log('POST request success!');
        location.reload();
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
      <div className="column">
          <textarea className="Large textarea" onChange={this.handleEntryChange} value={this.state.entry}></textarea>
          <button className="button is-outline is-small"onClick={this.handleSavingNotes}>Save</button>
          <button className="button is-outline is-small"onClick={() => this.cancel()}>Cancel</button>
      </div>
    );
  }
}
