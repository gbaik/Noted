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
