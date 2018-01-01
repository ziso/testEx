import React, { Component } from 'react';
import styles from '../containers/app.css';

class UsersList extends Component {

  render() {
    var handleLinkClick = () => {
        this.props.onSiteClicked();
    };

    var handleNameClick = () => {
        this.props.onNameClicked(this.props.id);
    };
    return (
      <div className="user-image">
          <img src={this.props.image}/>
          <div onClick={handleNameClick}>{this.props.name}</div>
          <a href="" onClick={handleLinkClick}>{this.props.site}</a>
      </div>
    );
  }
}

export default UsersList;
