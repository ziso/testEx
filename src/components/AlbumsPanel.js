import React, { Component } from 'react';
import Album from "./Album";
import _ from "lodash";

class AlbumsPanel extends Component {

  render() {
    
    return (
      <div>
        <ul className="album-list">
          {this.props.albums.map((album) => 
            <Album data={album} albumClicked={this.props.selectAlbum} key={album.id}/>
          )}
        </ul>
        <ul className="selected-album-list">
          {this.props.selectedAlbums.map((album) => 
            <Album data={album} albumClicked={this.props.deSelectAlbum} key={album.id}/>
          )}
        </ul>
      </div>
    );
  }
}

export default AlbumsPanel;