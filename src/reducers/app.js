import { APP_LOAD, USER_SELECTED, MARK_ALBUM_AS_SELECTED } from 'constants/action-types';

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
      {id: '1', title: 'Album 1', artist: 'artist 1', image: 'album title image', selected: false},
      {id: '2', title: 'Album 2', artist: 'artist 2', image: 'album title image', selected: true},
      {id: '3', title: 'Album 3', artist: 'artist 3', image: 'album title image', selected: false},
      {id: '4', title: 'Album 4', artist: 'artist 4', image: 'album title image', selected: false}
    ],

    2 : [
      {id: '1', title: 'Album 1', artist: 'artist 1', image: 'album title image', selected: false},
      {id: '2', title: 'Album 2', artist: 'artist 2', image: 'album title image', selected: true},
      {id: '3', title: 'Album 3', artist: 'artist 3', image: 'album title image', selected: false},
      {id: '4', title: 'Album 4', artist: 'artist 4', image: 'album title image', selected: false}
    ]
  }
};

export default function app(state = initialState, action) {
  let clonedState = Object.assign({}, state);
  switch (action.type) {
    case APP_LOAD:
      return { ...state, loaded: true };
    case USER_SELECTED:
      return Object.assign({}, state, {selectedUser: action.id });
    case MARK_ALBUM_AS_SELECTED:
      let theAlbum = clonedState.userAlbums[action.userId].find((album)=>{return album.id === action.albumId});
      theAlbum.selected = true;
      return Object.assign({}, clonedState);
    default:
      return state;
  }
}
