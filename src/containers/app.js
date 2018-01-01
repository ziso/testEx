import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/app';
import styles from './app.css';
import UsersList from '../components/UsersList';
import UserScreen from '../components/UserScreen';
import { bindActionCreators } from 'redux'

export class AppContainer extends Component {
  componentDidMount() {
    this.props.actions.loadApp();
  }

  render() {
    if (!this.props.loaded) {
      return null;
    }

    if(this.props.selectedUser){
      return (
        <UserScreen/>
      );
    }
    else {
      return (
        <UsersList users={this.props.users}
        selectUser={this.props.actions.selectUser}
        />
      );
    }
  }
}

function mapStateToProperties(state) {
  return {
    loaded: state.app.loaded,
    users: state.app.users,
    selectedUser: state.app.selectedUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(Object.assign({}, actions), dispatch)
  }
}

export default connect(mapStateToProperties, mapDispatchToProps)(AppContainer);
