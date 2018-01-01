import React, { Component } from 'react';

class UsersList extends Component {

  render() {
    var handleLinkClick = () => {
        this.props.onSiteClicked();
    };

    var handleNameClick = () => {
        this.props.onNameClicked(this.props.id);
    };
    return (
      <div className="user-row">
          <img src={this.props.image}/>
          <div className="user-name" onClick={handleNameClick}>{this.props.name}</div>
          <a className="user-site"href="" onClick={handleLinkClick}>{this.props.site}</a>
      </div>
    );
  }
}

export default UsersList;
