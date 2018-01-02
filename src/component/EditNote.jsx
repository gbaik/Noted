import React, { Component } from 'react';

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
    this.handleDeleteNotes = this.handleDeleteNotes.bind(this);
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

  handleDeleteNotes() {
    var data = {
      entry : this.state.entry,
      id: this.noteId
    }

    $.ajax({
      url: '/remove/oneNote',
      method: 'POST',
      data: data,
      success: function() {
        console.log('GET request success!');
        location.reload();
      },
      error: function() {
        console.log('GET request failure, new entry didn\'t delete');
      }
    });
  }

  render() {
    return (
      <div className="column">
          <textarea className="Large textarea" onChange={this.handleEntryChange} value={this.state.entry}></textarea>
          <button className="button is-outline is-small"onClick={this.handleSavingNotes}>Save</button>
          <button className="button is-outline is-small"onClick={() => this.cancel()}>Cancel</button>
          <button className="button is-outline is-small"onClick={this.handleDeleteNotes}>Delete</button>
      </div>
    );
  }
}
