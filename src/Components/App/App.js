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
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);

    this.setState({ playlistTracks: tracks });
  }

  updatePlaylistName(newName) {
    this.setState({
      playlistName: newName,
    });
  }

  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map((track) => track.uri);
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistTracks={this.state.playlistTracks}
              playlistName={this.state.playlistName}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
