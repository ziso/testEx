import React, { Component } from 'react';

class Album extends Component {

  render() {
    return (
      <div onClick={()=>{this.props.selectAlbum(this.props.id)}} className="album">
          <img src={this.props.image}/>
          <div>{this.props.title}</div>
          <div>{this.props.artist}</div>
      </div>
    );
  }
}

export default Album;