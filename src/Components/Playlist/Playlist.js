import "./Playlist.css";

export class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} />
        <Tracklist />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}
