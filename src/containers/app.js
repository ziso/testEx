import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/app';
import './styles.scss';
import UsersList from '../components/UsersList';
import UserScreen from '../components/UserScreen';
import { bindActionCreators } from 'redux'
import 'react-tabs/style/react-tabs.css';
import Immutable from 'immutable';

export class AppContainer extends Component {
  componentDidMount() {
    this.props.actions.loadApp();
  }

  render() {
    let activeView;

    const UsersListView = <UsersList users={this.props.users}
                            selectUser={this.props.actions.selectUser}
                          />;
    
    const UserScreenView = <UserScreen selectedUser={this.props.selectedUser}
      albums={this.props.selectedUserAlbums}
      selectAlbum={this.props.actions.addAlbumToSelectedList}
      deSelectAlbum={this.props.actions.removeAlbumFromSelectedList}
      selectedAlbums={this.props.selectedAlbums}/>;


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
          <button onClick={() => {this.props.actions.selectUser("")}}>Home</button>
        </div>
        {activeView}
      </div>
    );
  }
}

function mapStateToProperties(state) {
  let selectedUserId = state.app.get('selectedUser');
  let selectedUserAlbums = Immutable.fromJS([]);
  if(selectedUserId){
    selectedUserAlbums = state.app.getIn(['userAlbums', selectedUserId]);
  }
  

  return {
    loaded: state.app.get('loaded'),
    users: state.app.get('users').toJS(),
    selectedUser: selectedUserId,
    selectedUserAlbums: selectedUserAlbums.toJS(),
    selectedAlbums: selectedUserAlbums.filter((album) => {return album.get('selected')}).toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(Object.assign({}, actions), dispatch)
  }
}

export default connect(mapStateToProperties, mapDispatchToProps)(AppContainer);
