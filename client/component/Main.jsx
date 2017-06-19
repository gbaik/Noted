class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  newNote() {
    location.assign('/client/new_note.html');
  }

  render() {
    return (
      <div>
        <div>
          <input placeholder="Search"></input>
          <button onClick={this.newNote}>New Note</button>
        </div>
        <div>
        </div>
      </div>
    );
  }
}