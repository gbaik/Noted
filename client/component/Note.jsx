class Note extends React.Component {
  constructor(props) {
    super(props)

    this.noteId = this.props.noteId;
    this.noteTitle = this.props.noteTitle;
    this.noteEntry = this.props.noteEntry;

    this.state = {
      renderNeed: false, 
      needArray: [<div></div>]
    };

    this.editNote = this.editNote.bind(this);
  }

  editNote() {

    this.setState({
      renderNeed: true,
      needArray: [<EditNote noteTitle={this.noteTitle} noteEntry={this.noteEntry} noteId={this.noteId}/>]
    })
  };

  // findNote(callback) {
  //   var url = noteTitle + '/' + noteId;

  //   $.ajax({
  //     url: '/client/editNote',
  //     type: 'GET',
  //     contentType: 'application/json',
  //     success: function(data) {
  //       console.log('GET request success');
  //       location.assign('./edit_note.html/');
  //     },
  //     error: function() {
  //       console.log('GET request failure');
  //     }
  //   })
  // };

  render() {
    return(
      <div>
        <button onClick={this.editNote}>{this.noteTitle}</button>
        {this.noteEntry}
        <div>
        {this.state.renderNeed ? this.state.needArray : null}
        </div>
      </div>
    )
  }
}
