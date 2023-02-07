import React from "react";
import Tracklist from "../TrackList/TrackList";
import "./Playlist.css";

class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} />
        <Tracklist
          tracks={this.props.playlistTracks}
          onRemove={this.props.removeTrack}
        />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
