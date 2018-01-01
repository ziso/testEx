import React, { Component } from 'react';

class Album extends Component {

  render() {
    let style = {
            
    };

    if(this.props.data.selected){
        style.backgroundColor = 'grey';
    }
    return (   
      <div onClick={()=>{this.props.albumClicked(this.props.data.id)}} className="album" style={style}>
          <img src={this.props.data.image}/>
          <div>{this.props.data.title}</div>
          <div>{this.props.data.artist}</div>
      </div>
    );
  }
}

export default Album;