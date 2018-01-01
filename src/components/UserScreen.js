import React, { Component } from 'react';
import UserRow from "./UserRow";
import {Tabs, TabList, TabPanel, Tab} from 'react-tabs';
import PostsPanel from './PostsPanel';
import AlbumPanel from './AlbumsPanel';

class UserScreen extends Component {

  render() {
    return (
      <div>
        <img src={this.props.image}/>
        <div name={this.props.name}></div>
        <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
          <TabList>
            <Tab>Posts</Tab>
            <Tab>Albums</Tab>
          </TabList>
          <TabPanel>
            <PostsPanel posts={this.props.posts}/>
          </TabPanel>
          <TabPanel>
            <AlbumPanel albums={this.props.albums}/>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default UserScreen;
