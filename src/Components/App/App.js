import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <Searchbar />
        <div className="App-playlist">
          <Searchresults />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
