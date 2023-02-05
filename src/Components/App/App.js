import React from "react";
import "./App.css";
import Searchbar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

class App extends React.Component {
  constructor(props) {
    this.state = {
      searchResults: [
        { name: "name" },
        { artist: "artist" },
        { album: "album" },
        { id: "id" },
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
          <Searchbar />
          <div className="App-playlist">
            <Searchresults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
