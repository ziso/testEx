import React, { Component } from 'react';
import UserRow from "./UserRow";

class UsersList extends Component {

  render() {
    return (
      <ul className='list'>
                {this.props.users.map((user) =>
                    <UserRow
                        id={user.id}
                        key={user.id}
                        name={user.name}
                        image={user.image}
                        site={user.site}
                        onNameClicked={this.props.selectUser}
                    />
                )}
            </ul>
    );
  }
}

export default UsersList;
