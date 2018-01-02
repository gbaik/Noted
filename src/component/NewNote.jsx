import React, { Component } from 'react';

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
        <div className="column">
          <h1 className="title">New Notes</h1>
        </div>
        <div className="column">
          <button className="button is-outline is-small" onClick={this.handleSavingNotes}>Save</button>
          <button className="button is-outline is-small" onClick={this.cancelNewNote}>Cancel</button>
        </div>
        <div className="column">
            <input className="input is-small" onChange={this.handleTitleChange} placeholder="Title"></input>
        </div>
        <div className="column">
          <textarea className="Large textarea" onChange={this.handleEntryChange} placeholder="Write your notes here!"></textarea>
        </div>
      </div>
    );
  }
}