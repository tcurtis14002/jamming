import React from 'react';
import 


export class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList />
      </div>
    );
  }
}