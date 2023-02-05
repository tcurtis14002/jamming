import { Searchbar } from "./Searchbar.css";
import './SearchBar.css'


export class Searchbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <button className="SearchButton">SEARCH</button>
      </div>
    );
  }
}
