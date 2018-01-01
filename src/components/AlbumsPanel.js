import React, { Component } from 'react';
import Album from "./Album";

class AlbumsPanel extends Component {

  render() {
    return (
      <ul className="album-list">
          {this.props.albums.map((album) => 
            <Album id={album.id}
            title={album.title}
            artist={album.artist}
            image={album.image}
            />
          )}
      </ul>
    );
  }
}

export default AlbumsPanel;