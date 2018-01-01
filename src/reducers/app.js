import { APP_LOAD, USER_SELECTED } from 'constants/action-types';

const initialState = {
  loaded: false,
  users: [
    { id: '1', name: 'user1', site: 'http://...', image: 'image url' },
    { id: '2', name: 'user2', site: 'http://...', image: 'image url' },
    { id: '3', name: 'user3', site: 'http://...', image: 'image url' },
    { id: '4',  name: 'user4', site: 'http://...', image: 'image url' },
  ],
  selectedUser: null,
  userAlbums: {
    1 : [
      {id: '1', title: 'Album 1', artist: 'artist 1', image: 'album title image'},
      {id: '2', title: 'Album 2', artist: 'artist 2', image: 'album title image'},
      {id: '3', title: 'Album 3', artist: 'artist 3', image: 'album title image'},
      {id: '4', title: 'Album 4', artist: 'artist 4', image: 'album title image'},
    ],

    2 : [
      {id: '5', title: 'Album 222', artist: 'artist 1', image: 'album title image'},
      {id: '6', title: 'Album 111', artist: 'artist 2', image: 'album title image'}
    ],

    3 : [
      {id: '7', title: 'Album 5565', artist: 'artist 1', image: 'album title image'},
      {id: '8', title: 'Album 6666', artist: 'artist 2', image: 'album title image'},
      {id: '9', title: 'Album 334', artist: 'artist 3', image: 'album title image'}
    ],
  }
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case APP_LOAD:
      return { ...state, loaded: true };
    case USER_SELECTED:
      return Object.assign({}, state, {selectedUser: action.id });
    default:
      return state;
  }
}
