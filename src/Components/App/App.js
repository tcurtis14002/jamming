import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "name1",
          artist: "artist1",
          album: "album1",
          id: "id1",
        },
        {
          name: "name2",
          artist: "artist",
          album: "album2",
          id: "id2",
        },
        {
          name: "name3",
          artist: "artist3",
          album: "album3",
          id: "id3",
        },
      ],
      playlistName: "My Playlist Name",
      playlistTracks: [
        {
          name: "name1_playlist",
          artist: "artist1_playlist",
          album: "album1_playlist",
          id: "id1_playlist",
        },
        {
          name: "name2_playlist",
          artist: "artist2_playlist",
          album: "album2_playlist",
          id: "id2_playlist",
        },
        {
          name: "name3_playlist",
          artist: "artist3_playlist",
          album: "album3_playlist",
          id: "id3_playlist",
        },
      ],
    };

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    if (
      this.state.playlistTracks.find(
        (savedTrack) => savedTrack.id === track.id
      )
    ) {
      return;
    }
  }

  removeTrack(track) {
    this.setState;
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistTracks={this.state.playlistTracks}
              playlistName={this.state.playlistName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
