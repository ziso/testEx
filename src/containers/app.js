import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/app';
import './styles.scss';
import UsersList from '../components/UsersList';
import UserScreen from '../components/UserScreen';
import { bindActionCreators } from 'redux'
import 'react-tabs/style/react-tabs.css';

export class AppContainer extends Component {
  componentDidMount() {
    this.props.actions.loadApp();
  }

  render() {
    let activeView;

    const UsersListView = <UsersList users={this.props.users}
                            selectUser={this.props.actions.selectUser}
                          />;
    
    const UserScreenView = <UserScreen selectedUser={this.props.selectedUser} albums={this.props.albums[this.props.selectedUser]} selectAlbum={this.props.actions.addAlbumToSelectedList}/>;


    if (!this.props.loaded) {
      return null;
    }

    if(this.props.selectedUser){
      activeView = UserScreenView;
    } else {
      activeView = UsersListView;
    }

    return (
      <div>
        <div className="header">
          <button onClick={() => {this.props.actions.selectUser("")}}>Back to Users</button>
        </div>
        {activeView}
      </div>
    );
  }
}

function mapStateToProperties(state) {
  return {
    loaded: state.app.get('loaded'),
    users: state.app.get('users').toJS(),
    selectedUser: state.app.get('selectedUser'),
    albums: state.app.get('userAlbums').toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(Object.assign({}, actions), dispatch)
  }
}

export default connect(mapStateToProperties, mapDispatchToProps)(AppContainer);
