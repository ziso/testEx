import React, { Component } from 'react';

class Album extends Component {

  render() {
    let classNames = "album";
    if(this.props.data.selected && this.props.markSelected){
        classNames += ' selected';
    }
    return (   
      <div onClick={()=>{this.props.albumClicked(this.props.data.id)}} className={classNames}>
          <img src={this.props.data.image}/>
          <div className="details-containers">
            <div>{this.props.data.title}</div>
            <div>{this.props.data.artist}</div>
          </div>

          
      </div>
    );
  }
}

export default Album;