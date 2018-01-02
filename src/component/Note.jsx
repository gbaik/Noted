import React, { Component } from 'react';
import EditNote from './EditNote.jsx';

class Note extends React.Component {
  constructor(props) {
    super(props)

    this.noteId = this.props.noteId;
    this.noteTitle = this.props.noteTitle;
    this.noteEntry = this.props.noteEntry;

    this.state = {
      renderNeed: false, 
      needArray: []
    };

    this.editNote = this.editNote.bind(this);
    this.cancelChange = this.cancelChange.bind(this);
  }

  cancelChange() {
    this.setState({
      renderNeed: false
    })
  }

  editNote() {
    this.setState({
      renderNeed: true,
      needArray: [<EditNote noteTitle={this.noteTitle} noteEntry={this.noteEntry} noteId={this.noteId} cancel={this.cancelChange}/>]
    })
  }


  render() {
    return(
      <div className="box">
        <div onClick={this.editNote} className="message-header $yellow">{this.noteTitle}</div>
        <div>
        {this.state.renderNeed ? this.state.needArray : null}
        </div>
      </div>
    )
  }
}
