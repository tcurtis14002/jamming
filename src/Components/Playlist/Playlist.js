import React from "react";
import Tracklist from "../TrackList/TrackList";
import "./Playlist.css";

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input
          defaultValue={"New Playlist"}
          onChange={this.handleNameChange}
        />
        <Tracklist
          tracks={this.props.playlistTracks}
          onRemove={this.props.removeTrack}
          isRemoval={true}
        />
        <button className="Playlist-save" onClick={this.props.onSave}>
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}

export default Playlist;
