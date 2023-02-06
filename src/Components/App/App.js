import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

const playlistName = "My Playlist";
const playlistTracks = [
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
];

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
    };
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
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
