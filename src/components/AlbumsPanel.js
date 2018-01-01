import React, { Component } from 'react';
import Album from "./Album";

class AlbumsPanel extends Component {

  render() {
    return (
      <ul className="album-list">
          {this.props.albums.map((album) => 
            <Album data={album} selectAlbum={this.props.selectAlbum} key={album.id}/>
          )}
      </ul>
    );
  }
}

export default AlbumsPanel;